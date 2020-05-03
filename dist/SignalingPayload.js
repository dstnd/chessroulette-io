"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io = require("io-ts");
exports.webrtcInvitationPayload = io.type({
    msg_type: io.literal('webrtc_invitation'),
    content: io.type({
        peer_id: io.string,
    }),
});
exports.webrtcNegotationPayload = io.type({
    msg_type: io.literal('webrtc_negotiation'),
    content: io.type({
        peer_id: io.string,
        forward: io.string,
    }),
});
// This will only be called if the peer_invitation was refused.
//  in order to do any cleanup.
// Otherwise a local connection will be established at the mooment
//  of sending the invitation (to save some trafic).
exports.webrtcRefusalPayload = io.type({
    msg_type: io.literal('webrtc_refusal'),
    content: io.type({
        peer_id: io.string,
        reason: io.union([io.string, io.null]),
    }),
});
exports.signalingMessagePayload = io.union([
    exports.webrtcInvitationPayload,
    exports.webrtcNegotationPayload,
    exports.webrtcRefusalPayload,
]);
// TODO Move to another file
exports.connectionOpenedPayload = io.type({
    msg_type: io.literal('connection_opened'),
    content: io.type({
        my_address: io.string,
    }),
});
exports.roomRecord = io.type({
    id: io.string,
    peers: io.record(io.string, io.null),
});
exports.peerNetworkRefreshPayloadContent = io.type({
    me: io.string,
    count: io.number,
    peers: io.record(io.string, io.string),
    all_rooms: io.record(io.string, io.null),
    joined_room: io.union([exports.roomRecord, io.null]),
});
exports.peerNetworkRefreshPayload = io.type({
    msg_type: io.literal('peer_network_refresh'),
    content: exports.peerNetworkRefreshPayloadContent,
});
exports.roomStatsUpdatePayload = io.type({
    msg_type: io.literal('room_stats_update'),
    content: exports.roomRecord,
});
exports.joinRoomPayload = io.type({
    msg_type: io.literal('join_room'),
    content: io.type({
        room_id: io.string,
    }),
});
exports.peerJoinedRoomPayload = io.type({
    msg_type: io.literal('peer_joined_room'),
    content: io.type({
        room_id: io.string,
        peer_id: io.string,
    }),
});
exports.nonSignalingMessagePayload = io.union([
    exports.connectionOpenedPayload,
    exports.peerNetworkRefreshPayload,
    exports.roomStatsUpdatePayload,
    exports.peerJoinedRoomPayload,
    exports.joinRoomPayload,
]);
exports.socketMessagePayload = io.union([
    exports.signalingMessagePayload,
    exports.nonSignalingMessagePayload,
]);
//# sourceMappingURL=SignalingPayload.js.map