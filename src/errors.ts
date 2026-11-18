// errors.ts — the error types every layer throws.
//
// A failed MetaRPC call surfaces as an `MrpcError`: either the reply carried an `error` message
// (built with `MrpcError.fromReply`), or the gRPC call itself failed. The MQL and trade codes of an
// error reply are exposed as `mqlCode` / `mqlDescription` / `tradeCode` / `tradeDescription`.

import * as grpc from '@grpc/grpc-js';

const TRADE_OUTCOME_UNKNOWN = 'TRADE_OUTCOME_UNKNOWN';
const IN_BAND_TIMEOUT_CODES = ['MRPC_TIMEOUT', 'TERMINAL_API_TIMEOUT', 'COMMAND_TIMEOUT_EXCEEDED', 'TERMINAL_API_CALL_TIMEOUT'];
/** True when the text names an API-key refusal (API_KEY_INVALID / API_KEY_REQUIRED). */
export const isApiKeyText = (s: string): boolean => /API_KEY_(INVALID|REQUIRED)/i.test(s);

/**
 * An error the MRPC API answered with (the reply's `error`), or a failed call. `error` is the reply's
 * error message object (absent for a transport failure).
 */
export class MrpcError extends Error {
  readonly mqlCode: string;
  readonly mqlDescription: string;
  readonly tradeCode: string;
  readonly tradeDescription: string;

  constructor(message: string, public readonly code: string = '', public readonly error?: any) {
    super(code ? `${code}: ${message}` : message);
    this.name = 'MrpcError';
    const str = (getter: string) =>
      (error && typeof error[getter] === 'function') ? String(error[getter]() ?? '') : '';
    this.mqlCode = str('getMqlErrorCode');
    this.mqlDescription = str('getMqlErrorDescription');
    this.tradeCode = str('getMqlErrorTradeCode');
    this.tradeDescription = str('getMqlErrorTradeDescription');
  }

  /** Builds the error of an error reply (the reply's `error` message). */
  static fromReply(error: any): MrpcError {
    const message =
      error.getErrorMessage?.() ||
      error.getMqlErrorDescription?.() ||
      error.getMqlErrorTradeDescription?.() ||
      'request failed';
    return new MrpcError(message, error.getErrorCode?.() || '', error);
  }

  /** INVALID_LOGIN / wrong-password errors must never be retried (brokers lock accounts). */
  get isInvalidLogin(): boolean {
    const s = `${this.code} ${this.message}`.toUpperCase();
    return s.includes('INVALID_LOGIN') || s.includes('WRONG_PASSWORD') || s.includes('INVALID_ACCOUNT');
  }

  /** The API key was refused (API_KEY_INVALID / API_KEY_REQUIRED): retrying or reconnecting does not help. */
  get isApiKeyError(): boolean {
    return isApiKeyText(`${this.code} ${this.message}`);
  }

  /** The trade call this error came from (`OrderSend`, `OrderModify`, `OrderClose`); unset for other calls. */
  operation?: string;

  /**
   * The outcome of the trade call is unknown: it timed out on the gateway or in the terminal (MRPC_TIMEOUT,
   * TERMINAL_API_TIMEOUT, …) or the trade server answered 10012 TIMEOUT / 10028 LOCKED / 10031 CONNECTION. The
   * trade may or may not have been executed — check open positions/orders before sending it again.
   */
  get isTradeOutcomeUnknown(): boolean {
    if (this.code === TRADE_OUTCOME_UNKNOWN) return true;
    if (!this.operation) return false;
    if (IN_BAND_TIMEOUT_CODES.includes(this.code)) return true;
    const type = Number(this.error?.getType?.() ?? 0);
    if (type === 3 || type === 4) return true; // ErrorType MRPC_TIMEOUT / TERMINAL_API_TIMEOUT
    const trade = Number(this.error?.getMqlErrorTradeIntCode?.() || this.tradeCode || 0);
    return trade === 10012 || trade === 10028 || trade === 10031;
  }
}

/** The name the fleet audit used for `MrpcError`. */
export const MT5Error = MrpcError;
export type MT5Error = MrpcError;

/**
 * A trade call (`orderSend`, `orderModify`, `orderClose`) failed at the transport level — gRPC UNAVAILABLE,
 * DEADLINE_EXCEEDED, UNKNOWN or INTERNAL — after the request may already have reached the terminal: the trade may or
 * may not have executed. The SDK never re-sends a trade; check open positions/orders (and history) before retrying.
 * It keeps the gRPC error's shape: `code` is still the gRPC status number (also `grpcCode`), `details`/`metadata`
 * are the original ones and `cause` is the original error, so `err.code === grpc.status.UNAVAILABLE` keeps working.
 */
export class TradeOutcomeUnknownError extends Error {
  /** The error code of this condition, the same in every MetaRPC SDK. */
  static readonly CODE = TRADE_OUTCOME_UNKNOWN;
  readonly errorCode: string = TRADE_OUTCOME_UNKNOWN;
  readonly isTradeOutcomeUnknown: boolean = true;
  readonly code: number;
  readonly grpcCode: number;
  readonly details: string;
  readonly metadata: any;
  readonly operation: string;

  constructor(operation: string, transportError: any) {
    const grpcCode = Number(transportError?.code);
    super(`${TRADE_OUTCOME_UNKNOWN}: ${operation} failed with gRPC ${grpc.status[grpcCode] ?? grpcCode} after the request may have reached the terminal; ` +
      'the trade may or may not have been executed. It was NOT re-sent automatically: check open positions/orders before retrying. ' +
      `(${transportError?.details ?? transportError?.message ?? ''})`, { cause: transportError });
    this.name = 'TradeOutcomeUnknownError';
    this.code = grpcCode;
    this.grpcCode = grpcCode;
    this.details = transportError?.details ?? '';
    this.metadata = transportError?.metadata;
    this.operation = operation;
  }

  /** True for the gRPC status codes after which a trade's outcome is unknown. */
  static isUnknownOutcome(code: number): boolean {
    return code === grpc.status.UNAVAILABLE || code === grpc.status.DEADLINE_EXCEEDED
      || code === grpc.status.UNKNOWN || code === grpc.status.INTERNAL;
  }
}

/** Thrown when a method is called before `connect()` has succeeded. */
export class NotConnectedError extends MrpcError {
  constructor() {
    super('not connected — call connect() first', 'NOT_CONNECTED');
    this.name = 'NotConnectedError';
  }
}
