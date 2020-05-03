"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io = require("io-ts");
var SignalingPayload_1 = require("./SignalingPayload");
// @Deprecate this most likely
exports.joinRoomRequestPayload = io.type({
    room_id: io.string,
    peer_id: io.string,
});
exports.joinRoomResponsePayload = SignalingPayload_1.peerNetworkRefreshPayloadContent;
//# sourceMappingURL=HttpPayload.js.map