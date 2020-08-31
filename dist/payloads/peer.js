"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerPeerResponsePayload = exports.registerPeerRequestPayload = void 0;
var io = require("io-ts");
var records_1 = require("../records");
// import { userRecord } from '../records';
exports.registerPeerRequestPayload = io.type({
    userInfo: records_1.userInfoRecord,
});
exports.registerPeerResponsePayload = records_1.peerRecord;
//# sourceMappingURL=peer.js.map