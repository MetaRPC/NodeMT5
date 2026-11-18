"use strict";
// errors.ts — the error types every layer throws.
//
// A failed MetaRPC call surfaces as an `MrpcError`: either the reply carried an `error` message
// (built with `MrpcError.fromReply`), or the gRPC call itself failed. The MQL and trade codes of an
// error reply are exposed as `mqlCode` / `mqlDescription` / `tradeCode` / `tradeDescription`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotConnectedError = exports.MT5Error = exports.MrpcError = void 0;
/**
 * An error the MRPC API answered with (the reply's `error`), or a failed call. `error` is the reply's
 * error message object (absent for a transport failure).
 */
class MrpcError extends Error {
    code;
    error;
    mqlCode;
    mqlDescription;
    tradeCode;
    tradeDescription;
    constructor(message, code = '', error) {
        super(code ? `${code}: ${message}` : message);
        this.code = code;
        this.error = error;
        this.name = 'MrpcError';
        const str = (getter) => (error && typeof error[getter] === 'function') ? String(error[getter]() ?? '') : '';
        this.mqlCode = str('getMqlErrorCode');
        this.mqlDescription = str('getMqlErrorDescription');
        this.tradeCode = str('getMqlErrorTradeCode');
        this.tradeDescription = str('getMqlErrorTradeDescription');
    }
    /** Builds the error of an error reply (the reply's `error` message). */
    static fromReply(error) {
        const message = error.getErrorMessage?.() ||
            error.getMqlErrorDescription?.() ||
            error.getMqlErrorTradeDescription?.() ||
            'request failed';
        return new MrpcError(message, error.getErrorCode?.() || '', error);
    }
    /** INVALID_LOGIN / wrong-password errors must never be retried (brokers lock accounts). */
    get isInvalidLogin() {
        const s = `${this.code} ${this.message}`.toUpperCase();
        return s.includes('INVALID_LOGIN') || s.includes('WRONG_PASSWORD') || s.includes('INVALID_ACCOUNT');
    }
}
exports.MrpcError = MrpcError;
/** The name the fleet audit used for `MrpcError`. */
exports.MT5Error = MrpcError;
/** Thrown when a method is called before `connect()` has succeeded. */
class NotConnectedError extends MrpcError {
    constructor() {
        super('not connected — call connect() first', 'NOT_CONNECTED');
        this.name = 'NotConnectedError';
    }
}
exports.NotConnectedError = NotConnectedError;
