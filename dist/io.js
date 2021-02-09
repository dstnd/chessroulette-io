"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = exports.isIODeserializationError = exports.toResult = void 0;
var Either_1 = require("fp-ts/lib/Either");
var ts_results_1 = require("ts-results");
// import { GenericHttpRequestPayload, GenericHttpRequestPayloadIOType, GenericHttpResponsePayload, GenericHttpResponsePayloadIOType } from './payloads';
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
// export const deserializeHttpPayload = <
//   TCodec extends GenericHttpResponsePayloadIOType,
//   TRecord extends ioTs.TypeOf<TCodec>
// >(codec: TCodec, serialized: TRecord) => {
//   deserialize(codec, serialized);
// }
exports.io = {
    serialize: serialize,
    deserialize: deserialize,
    toResult: exports.toResult,
    isIODeserializationError: exports.isIODeserializationError,
};
//# sourceMappingURL=io.js.map