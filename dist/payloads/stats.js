"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statsSocketPayload = exports.peersStatsPayload = exports.roomsStatsPayload = void 0;
var io = require("io-ts");
var peerRecord_1 = require("../records/peerRecord");
var roomStatsRecord_1 = require("../records/roomStatsRecord");
exports.roomsStatsPayload = io.type({
    kind: io.literal('roomsStats'),
    content: io.array(roomStatsRecord_1.roomStatsRecord),
});
exports.peersStatsPayload = io.type({
    kind: io.literal('peersStats'),
    content: io.array(peerRecord_1.peerRecord),
});
exports.statsSocketPayload = io.union([
    exports.peersStatsPayload,
    exports.roomsStatsPayload,
]);
//# sourceMappingURL=stats.js.map