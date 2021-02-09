import * as io from 'io-ts';
export declare const httpGenericError: () => io.TypeC<{
    type: io.LiteralC<"HttpGenericError">;
    message: io.StringC;
}>;
declare type HttpGenericErrorType = ReturnType<typeof httpGenericError>;
export declare type HttpGenericError = io.TypeOf<HttpGenericErrorType>;
export {};
