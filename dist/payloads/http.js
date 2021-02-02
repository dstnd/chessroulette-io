"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iceServersResponse = exports.iceServerRecord = void 0;
var io = require("io-ts");
exports.iceServerRecord = io.type({
    url: io.string,
    urls: io.string,
    credential: io.union([io.string, io.undefined]),
    username: io.union([io.string, io.undefined]),
});
exports.iceServersResponse = io.array(exports.iceServerRecord);
// Utils
// export const httpFailedResponsePayload = <ReasonCodec extends io.Mixed>(p: {
//   reason: ReasonCodec,
// }) => io.type({
//   fail: io.literal(true),
//   reason: p.reason,
// });
//# sourceMappingURL=http.js.map