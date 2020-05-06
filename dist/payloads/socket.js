"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io = require("io-ts");
var records_1 = require("../records");
exports.myStatsPayload = io.type({
    msg_type: io.literal('my_stats'),
    content: records_1.peerRecord,
});
exports.roomStatsPayload = io.type({
    msg_type: io.literal('room_stats'),
    content: records_1.roomStatsRecord,
});
exports.connectionOpenedPayload = io.type({
    msg_type: io.literal('connection_opened'),
    content: io.type({
        me: records_1.peerRecord,
    }),
});
// @deprecat in favor of roomStatsPaylaod
// export const peerNetworkRefreshPayloadContent = io.type({
//   me: io.string,
//   count: io.number,
//   peers: io.record(io.string, io.string),
//   all_rooms: io.record(io.string, io.null),
//   joined_room: io.union([roomRecord, io.null]),
// });
// TODO: Not sure this is still needed
// TODO: @deprecate in favor of roomStatsPayload
exports.peerJoinedRoomPayload = io.type({
    msg_type: io.literal('peer_joined_room'),
    content: io.type({
        room_id: io.string,
        peer_id: io.string,
    }),
});
// This is different b/c the client is like a client request
//  while the others are server responses. 
//  Not sure I need to make a distinction between them (yet).
exports.joinRoomRequestPayload = io.type({
    msg_type: io.literal('join_room_request'),
    content: io.type({
        room_id: io.string,
    }),
});
exports.joinRoomSuccessPayload = io.type({
    msg_type: io.literal('join_room_success'),
    content: io.type({
        room: records_1.roomStatsRecord,
        me: records_1.peerRecord,
    }),
});
exports.socketPayload = io.union([
    exports.connectionOpenedPayload,
    exports.myStatsPayload,
    exports.roomStatsPayload,
    exports.peerJoinedRoomPayload,
    exports.joinRoomRequestPayload,
    exports.joinRoomSuccessPayload,
]);
//# sourceMappingURL=socket.js.map