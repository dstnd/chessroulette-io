import * as io from 'io-ts';
import { HttpInputValidationError, HttpInputValidationErrorCodec } from './form';
export declare const httpGenericError: () => io.TypeC<{
    type: io.LiteralC<"HttpGenericError">;
    message: io.UnionC<[io.StringC, io.UndefinedC]>;
}>;
export declare type HttpGenericErrorCodec = ReturnType<typeof httpGenericError>;
export declare type HttpGenericError = io.TypeOf<HttpGenericErrorCodec>;
export declare const httpCustomError: <T extends io.Mixed>(content: T) => io.TypeC<{
    type: io.LiteralC<"HttpCustomError">;
    content: T;
}>;
export declare type HttpCustomErrorCodec = ReturnType<typeof httpCustomError>;
export declare type HttpCustomError = io.TypeOf<HttpCustomErrorCodec>;
export declare const httpCustomTypeErrorFromProps: <T extends io.Props>(content: T) => io.TypeC<{
    type: io.LiteralC<"HttpCustomError">;
    content: io.TypeC<T>;
}>;
export declare type HttpErrorCodec = HttpGenericErrorCodec | HttpCustomErrorCodec | HttpInputValidationErrorCodec;
export declare type HttpError = HttpGenericError | HttpCustomError | HttpInputValidationError;
