"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = exports.toOkHttpResponsePayloadWithData = exports.toGenericHttpErrorResponsePayload = exports.isIODeserializationError = exports.toResult = void 0;
var Either_1 = require("fp-ts/lib/Either");
var ts_results_1 = require("ts-results");
var deserialize = function (codec, serialized) {
    var decoded = codec.decode(serialized);
    if (Either_1.isLeft(decoded)) {
        return new ts_results_1.Err({
            type: 'BadEncoding',
            reasons: decoded.left,
        });
    }
    return new ts_results_1.Ok(decoded.right);
};
var serialize = function (_, // used only to map the record type to it for now
record) { return record; };
exports.toResult = function (either) {
    if (Either_1.isLeft(either)) {
        return new ts_results_1.Err(either.left);
    }
    return new ts_results_1.Ok(either.right);
};
exports.isIODeserializationError = function (e) {
    return e && typeof e === 'object' && ('type' in e && typeof e === 'string' && e.type === 'BadEncoding');
};
// export const deserializeHttpResponsePayload = <
//   TCodec extends AnyHttpResponsePayloadCodec,
//   TRecord extends ioTs.TypeOf<TCodec>,
// >(codec: TCodec, serialized: string): Result<TRecord, {
//   type: string,
//   reasons: any,
// }> => {
//   const decoded = codec.decode(serialized) as Left<ioTs.Errors> | Right<TRecord>;
//   if (isLeft(decoded)) {
//     return new Err({
//       type: 'BadEncoding',
//       reasons: decoded.left,
//     });
//   }
//   if (decoded.right.ok === false) {
//     return new Err({
//       type: 'HttpErrorResponse',
//       reasons: ['asd'],
//     });
//     // decoded.right
//     // return new Err(decoded.right);
//   }
//   return new Ok(decoded.right);
// }
// const r = deserializeHttpResponsePayload(verifyEmailResponsePayload, 'asda').map((s) => {
//   if (!s.ok) {
//     s.error.type === 'HttpGenericError'
//   }
// })
// if (r.ok) {
//   r.val.
// }
// deserialize(verifyEmailResponsePayload, 'asd').map((s) => {
//   if (s.ok) {
//     s.data.works
//   }
// })
// type OnlyHttpPayload = <
//   K extends keyof typeof PayloadCodecs,
//   TCodec extends typeof PayloadCodecs[K],
// >
// const toHttpRequestPayload = <
//   // P extends GenericHttpRequestPayload
//   // TCodec extends AnyHttpRequestPayloadCodec,
//   K extends keyof typeof PayloadCodecs,
//   TCodec extends typeof PayloadCodecs[K],
//   TRecord extends ioTs.TypeOf<TCodec>,
// >(_: TCodec, data: TRecord['data']) => {
//   return {
//     protocol: 'http',
//     data,
//   } as TRecord;
// }
// const x = toHttpRequestPayload(userCheckInternalAccountRequestPayload, { asd: 'asd'});
exports.toGenericHttpErrorResponsePayload = function (message) { return ({
    protocol: 'http',
    ok: false,
    error: {
        type: 'HttpGenericError',
        message: message,
    },
}); };
exports.toOkHttpResponsePayloadWithData = function (data) { return ({
    protocol: 'http',
    ok: true,
    data: data,
}); };
exports.io = {
    serialize: serialize,
    deserialize: deserialize,
    toResult: exports.toResult,
    isIODeserializationError: exports.isIODeserializationError,
    toGenericHttpErrorResponsePayload: exports.toGenericHttpErrorResponsePayload,
    toOkHttpResponsePayloadWithData: exports.toOkHttpResponsePayloadWithData,
};
//# sourceMappingURL=io.js.map