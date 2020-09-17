"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = exports.toResult = void 0;
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
exports.io = {
    serialize: serialize,
    deserialize: deserialize,
    toResult: exports.toResult,
};
//# sourceMappingURL=io.js.map