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
        // TODO: io.unknown maybe?!
        /// If I decide to not nest the serialization but instead leave it as unknwon
        //  and when needed it decode it
        forward: io.unknown,
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
exports.signalingPayload = io.union([
    exports.webrtcInvitationPayload,
    exports.webrtcNegotationPayload,
    exports.webrtcRefusalPayload,
]);
// TODO Move to another file
// export const connectionOpenedPayload = io.type({
//   msg_type: io.literal('connection_opened'),
//   content: io.type({
//     my_address: io.string,
//   }),
// });
// export const roomRecord = io.type({
//   id: io.string,
//   peers: io.record(io.string, io.unknown),
// });
// // export const peerNetworkRefreshPayloadContent = io.type({
// //   me: io.string,
// //   count: io.number,
// //   peers: io.record(io.string, io.string),
// //   all_rooms: io.record(io.string, io.null),
// //   joined_room: io.union([roomRecord, io.null]),
// // });
// // export const peerNetworkRefreshPayload = io.type({
// //   msg_type: io.literal('peer_network_refresh'),
// //   content: peerNetworkRefreshPayloadContent,
// // });
// export const roomStatsUpdatePayload = io.type({
//   msg_type: io.literal('room_stats_update'),
//   content: roomRecord,
// });
// // export const joinRoomPayload = io.type({
// //   msg_type: io.literal('join_room'),
// //   content: io.type({
// //     room_id: io.string,
// //   }),
// // });
// // export const peerJoinedRoomPayload = io.type({
// //   msg_type: io.literal('peer_joined_room'),
// //   content: io.type({
// //     room_id: io.string,
// //     peer_id: io.string,
// //   }),
// // });
// // export const nonSignalingMessagePayload = io.union([
// //   connectionOpenedPayload,
// //   peerNetworkRefreshPayload,
// //   roomStatsUpdatePayload,
// //   peerJoinedRoomPayload,
// //   joinRoomPayload,
// // ]);
// export type PeerNetworkRefreshPayload = io.TypeOf<
//   typeof peerNetworkRefreshPayload
// >;
// export type RoomRecord = io.TypeOf<typeof roomRecord>;
// export type RoomStatsUpdatePayload = io.TypeOf<typeof roomStatsUpdatePayload>;
// export type JoinRoomPayload = io.TypeOf<typeof joinRoomPayload>;
// export type PeerJoinedRoomPayload = io.TypeOf<typeof peerJoinedRoomPayload>;
// export type NonSignalingMessagePayload = io.TypeOf<
//   typeof nonSignalingMessagePayload
// >;
// export const socketMessagePayload = io.union([
//   signalingMessagePayload,
//   nonSignalingMessagePayload,
// ]);
// export type SocketMessagePayload = io.TypeOf<typeof socketMessagePayload>;
//# sourceMappingURL=signaling.js.map