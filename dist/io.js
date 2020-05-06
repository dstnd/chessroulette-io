"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Either_1 = require("fp-ts/lib/Either");
var ts_results_1 = require("./ts-results");
var deserialize = function (codec, serialized) {
    // try {
    //   let payload;
    //   if (typeof serialized === 'string') {
    //     payload = JSON.parse(serialized);;
    //   } else {`
    //     // Add other types if needed
    //     payload = serialized;
    //   }
    var decoded = codec.decode(serialized);
    if (Either_1.isLeft(decoded)) {
        return new ts_results_1.Err({
            type: 'BadEncoding',
            reasons: decoded.left,
        });
    }
    return new ts_results_1.Ok(decoded.right);
    // } catch (e) {
    //   return new Err('BadSerialized')
    // }
};
var serialize = function (_, // used only to map the record type to it for now
record) { return record; };
exports.io = {
    serialize: serialize,
    deserialize: deserialize
};
//# sourceMappingURL=io.js.map