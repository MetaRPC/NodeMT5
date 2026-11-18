/** True when the text names an API-key refusal (API_KEY_INVALID / API_KEY_REQUIRED). */
export declare const isApiKeyText: (s: string) => boolean;
/**
 * An error the MRPC API answered with (the reply's `error`), or a failed call. `error` is the reply's
 * error message object (absent for a transport failure).
 */
export declare class MrpcError extends Error {
    readonly code: string;
    readonly error?: any;
    readonly mqlCode: string;
    readonly mqlDescription: string;
    readonly tradeCode: string;
    readonly tradeDescription: string;
    constructor(message: string, code?: string, error?: any);
    /** Builds the error of an error reply (the reply's `error` message). */
    static fromReply(error: any): MrpcError;
    /** INVALID_LOGIN / wrong-password errors must never be retried (brokers lock accounts). */
    get isInvalidLogin(): boolean;
    /** The API key was refused (API_KEY_INVALID / API_KEY_REQUIRED): retrying or reconnecting does not help. */
    get isApiKeyError(): boolean;
    /** The trade call this error came from (`OrderSend`, `OrderModify`, `OrderClose`); unset for other calls. */
    operation?: string;
    /**
     * The outcome of the trade call is unknown: it timed out on the gateway or in the terminal (MRPC_TIMEOUT,
     * TERMINAL_API_TIMEOUT, …) or the trade server answered 10012 TIMEOUT / 10028 LOCKED / 10031 CONNECTION. The
     * trade may or may not have been executed — check open positions/orders before sending it again.
     */
    get isTradeOutcomeUnknown(): boolean;
}
/** The name the fleet audit used for `MrpcError`. */
export declare const MT5Error: typeof MrpcError;
export type MT5Error = MrpcError;
/**
 * A trade call (`orderSend`, `orderModify`, `orderClose`) failed at the transport level — gRPC UNAVAILABLE,
 * DEADLINE_EXCEEDED, UNKNOWN or INTERNAL — after the request may already have reached the terminal: the trade may or
 * may not have executed. The SDK never re-sends a trade; check open positions/orders (and history) before retrying.
 * It keeps the gRPC error's shape: `code` is still the gRPC status number (also `grpcCode`), `details`/`metadata`
 * are the original ones and `cause` is the original error, so `err.code === grpc.status.UNAVAILABLE` keeps working.
 */
export declare class TradeOutcomeUnknownError extends Error {
    /** The error code of this condition, the same in every MetaRPC SDK. */
    static readonly CODE = "TRADE_OUTCOME_UNKNOWN";
    readonly errorCode: string;
    readonly isTradeOutcomeUnknown: boolean;
    readonly code: number;
    readonly grpcCode: number;
    readonly details: string;
    readonly metadata: any;
    readonly operation: string;
    constructor(operation: string, transportError: any);
    /** True for the gRPC status codes after which a trade's outcome is unknown. */
    static isUnknownOutcome(code: number): boolean;
}
/** Thrown when a method is called before `connect()` has succeeded. */
export declare class NotConnectedError extends MrpcError {
    constructor();
}
