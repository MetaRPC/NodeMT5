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
}
/** The name the fleet audit used for `MrpcError`. */
export declare const MT5Error: typeof MrpcError;
export type MT5Error = MrpcError;
/** Thrown when a method is called before `connect()` has succeeded. */
export declare class NotConnectedError extends MrpcError {
    constructor();
}
