import * as io from 'io-ts';
export declare const badRequestError: io.TypeC<{
    type: io.LiteralC<"BadRequestError">;
    content: io.UndefinedC;
}>;
export declare type BadRequestErrorCodec = typeof badRequestError;
export declare type BadRequestError = io.TypeOf<BadRequestErrorCodec>;
export declare const badResponseError: io.TypeC<{
    type: io.LiteralC<"BadResponseError">;
    content: io.UndefinedC;
}>;
export declare type BadResponseErrorCodec = typeof badResponseError;
export declare type BadResponseError = io.TypeOf<BadResponseErrorCodec>;
export declare const serverError: io.TypeC<{
    type: io.LiteralC<"ServerError">;
    content: io.UnionC<[io.StringC, io.UndefinedC]>;
}>;
export declare type ServerErrorCodec = typeof serverError;
export declare type ServerError = io.TypeOf<ServerErrorCodec>;
export declare const badEncodingError: io.TypeC<{
    type: io.LiteralC<"BadEncodingError">;
    content: io.UndefinedC;
}>;
export declare type BadEncodingErrorCodec = typeof badEncodingError;
export declare type BadEncodingError = io.TypeOf<BadEncodingErrorCodec>;
export declare const networkError: io.TypeC<{
    type: io.LiteralC<"NetworkError">;
    content: io.UndefinedC;
}>;
export declare type NetworlErrorCodec = typeof networkError;
export declare type NetworkError = io.TypeOf<NetworlErrorCodec>;
export declare const badErrorEncodingError: io.TypeC<{
    type: io.LiteralC<"BadErrorEncodingError">;
    content: io.UndefinedC;
}>;
export declare type BadErrorEncodingErrorCodec = typeof badErrorEncodingError;
export declare type BadErrorEncodingError = io.TypeOf<BadErrorEncodingErrorCodec>;
export declare const resourceFailureHandledError: io.TypeC<{
    type: io.LiteralC<"ResourceFailureHandled">;
    content: io.UndefinedC;
}>;
export declare type ResourceFailureHandledErrorCodec = typeof resourceFailureHandledError;
export declare type ResourceFailureHandledError = io.TypeOf<ResourceFailureHandledErrorCodec>;
export declare const commonResponseErrors: io.UnionC<[io.TypeC<{
    type: io.LiteralC<"BadRequestError">;
    content: io.UndefinedC;
}>, io.TypeC<{
    type: io.LiteralC<"BadEncodingError">;
    content: io.UndefinedC;
}>, io.TypeC<{
    type: io.LiteralC<"BadResponseError">;
    content: io.UndefinedC;
}>, io.TypeC<{
    type: io.LiteralC<"NetworkError">;
    content: io.UndefinedC;
}>, io.TypeC<{
    type: io.LiteralC<"BadErrorEncodingError">;
    content: io.UndefinedC;
}>, io.TypeC<{
    type: io.LiteralC<"ServerError">;
    content: io.UnionC<[io.StringC, io.UndefinedC]>;
}>]>;
export declare type CommonResponseErrors = io.TypeOf<typeof commonResponseErrors>;
