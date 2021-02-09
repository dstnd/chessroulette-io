import * as io from 'io-ts';
import { AsyncResultWrapper } from '../AsyncResult/AsyncBox';
declare type BaseRequestPayloadCodec = io.Mixed;
declare type BaseResponseOkPayloadCodec = io.Mixed;
export declare type SingleBaseResponseErrPayloadCodec = io.TypeC<{
    type: any;
    content: any;
}>;
export declare type BaseResponseErrPayloadCodec = SingleBaseResponseErrPayloadCodec | io.UnionC<[
    SingleBaseResponseErrPayloadCodec,
    SingleBaseResponseErrPayloadCodec,
    ...Array<SingleBaseResponseErrPayloadCodec>
]>;
declare const responseAsOkResult: <TDataCodec extends io.Mixed>(data: TDataCodec) => io.TypeC<{
    ok: io.LiteralC<true>;
    data: TDataCodec;
}>;
declare type ResponseAsOkResultCodec = ReturnType<typeof responseAsOkResult>;
declare type ResponseAsOkResult = io.TypeOf<ResponseAsOkResultCodec>;
declare const badRequestError: io.TypeC<{
    type: io.LiteralC<"BadRequest">;
    content: io.StringC;
}>;
declare type BadRequestErrorCodec = typeof badRequestError;
declare const commonErrorsPayload: io.UnionC<[io.TypeC<{
    type: io.LiteralC<"BadRequest">;
    content: io.StringC;
}>, io.TypeC<{
    type: io.LiteralC<"BadEncoding">;
    content: io.NumberC;
}>, io.TypeC<{
    type: io.LiteralC<"BadResponse">;
    content: io.StringC;
}>, io.TypeC<{
    type: io.LiteralC<"NetworkError">;
    content: io.UndefinedC;
}>, io.TypeC<{
    type: io.LiteralC<"BadErrorEncoding">;
    content: io.TypeC<{
        reason: io.StringC;
    }>;
}>, io.TypeC<{
    type: io.LiteralC<"ServerError">;
    content: io.UnknownC;
}>]>;
declare type CommonResponseErrorPayload = io.TypeOf<typeof commonErrorsPayload>;
declare const responseAsErrResult: <TErrCodec extends io.Mixed>(error: TErrCodec) => io.TypeC<{
    ok: io.LiteralC<false>;
    error: TErrCodec;
}>;
declare type ResponseAsErrResultCodec = ReturnType<typeof responseAsErrResult>;
declare type ResponseAsErrResult = io.TypeOf<ResponseAsErrResultCodec>;
export declare class Resource<RequestPayloadCodec extends BaseRequestPayloadCodec, ResponseOkPayloadCodec extends BaseResponseOkPayloadCodec, ResponseErrPayloadCodec extends BaseResponseErrPayloadCodec = BadRequestErrorCodec, RequestPayload = io.TypeOf<RequestPayloadCodec>, ResponseOkPayload = io.TypeOf<ResponseOkPayloadCodec>, ResponseErrPayload = io.TypeOf<ResponseErrPayloadCodec>> {
    requestPayloadCodec: RequestPayloadCodec;
    responseOkPayloadCodec: ResponseOkPayloadCodec;
    responseErrPayloadCodec: ResponseErrPayloadCodec;
    constructor(requestPayloadCodec: RequestPayloadCodec, responseOkPayloadCodec: ResponseOkPayloadCodec, responseErrPayloadCodec?: ResponseErrPayloadCodec);
    request(requestPayload: RequestPayload, senderFn: (requestPayload: RequestPayload) => Promise<{
        data: unknown;
    }>): AsyncResultWrapper<ResponseOkPayload, {
        type: "BadRequest";
        content: string;
    } | {
        type: "BadResponse";
        content: string;
    } | {
        type: "ServerError";
        content: unknown;
    } | {
        type: "BadEncoding";
        content: number;
    } | {
        type: "NetworkError";
        content: undefined;
    } | {
        type: "BadErrorEncoding";
        content: {
            reason: string;
        };
    } | ResponseErrPayload>;
    parseRequest(data: unknown): AsyncResultWrapper<RequestPayload, {
        type: "BadEncoding";
        content: number;
    }>;
    respond(data: ResponseOkPayload, senderFn: (responseResult: ResponseAsOkResult) => void): void;
    fail(error: ResponseErrPayload | CommonResponseErrorPayload, senderFn: (errPayload: ResponseAsErrResult) => void): void;
}
export declare type ResourceTypeOfRequestPayload<R extends Resource<any, any, any>> = io.TypeOf<R['requestPayloadCodec']>;
export declare type ResourceTypeOfOkResponsePayload<R extends Resource<any, any, any>> = io.TypeOf<R['responseOkPayloadCodec']>;
export declare type ResourceTypeOfErrResponsePayload<R extends Resource<any, any, any>> = io.TypeOf<R['responseErrPayloadCodec']>;
export {};
