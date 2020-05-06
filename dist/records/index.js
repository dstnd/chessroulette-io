"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io = require("io-ts");
exports.peerRecord = io.type({
    id: io.string,
    name: io.string,
});
exports.roomStatsRecord = io.type({
    id: io.string,
    name: io.string,
    peersCount: io.number,
    peers: io.record(io.string, exports.peerRecord),
});
//# sourceMappingURL=index.js.map