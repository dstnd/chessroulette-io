"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myStatsPayload = exports.registerPeerResponsePayload = exports.registerPeerRequestPayload = void 0;
var io = require("io-ts");
var peerRecord_1 = require("../records/peerRecord");
// import { userRecord } from '../records';
exports.registerPeerRequestPayload = io.type({
    userId: io.string,
});
exports.registerPeerResponsePayload = peerRecord_1.peerRecord;
exports.myStatsPayload = io.type({
    kind: io.literal('myStats'),
    content: peerRecord_1.peerRecord,
});
//# sourceMappingURL=peer.js.map