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
//# sourceMappingURL=http.js.map