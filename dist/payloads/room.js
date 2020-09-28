"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.peerJoinedRoomPayload = exports.joinRoomFailurePayload = exports.joinRoomSuccessPayload = exports.joinRoomRequestPayload = exports.roomStatsPayload = exports.publicRoomsResponsePayload = exports.privateRoomResponsePayload = exports.publicRoomResponsePayload = exports.createRoomResponse = exports.createRoomRequest = void 0;
var io = require("io-ts");
var peerRecord_1 = require("../records/peerRecord");
var roomRecord_1 = require("../records/roomRecord");
// TODO: Not sure how to split the HTTP/Socket payloads while still keeping them 
//  grouped by feature/module
// HTTP
exports.createRoomRequest = io.type({
    name: io.union([io.string, io.undefined]),
    userId: io.string,
    type: roomRecord_1.roomType,
    activity: roomRecord_1.roomActivityOption,
});
exports.createRoomResponse = roomRecord_1.roomRecord;
exports.publicRoomResponsePayload = roomRecord_1.publicRoomRecord;
exports.privateRoomResponsePayload = roomRecord_1.privateRoomRecord;
exports.publicRoomsResponsePayload = io.array(roomRecord_1.publicRoomRecord);
// SOCKET
exports.roomStatsPayload = io.type({
    kind: io.literal('roomStats'),
    content: roomRecord_1.roomRecord,
});
// This is different b/c the client is like a client request
//  while the others are server responses. 
//  Not sure I need to make a distinction between them (yet).
exports.joinRoomRequestPayload = io.type({
    kind: io.literal('joinRoomRequest'),
    content: io.type({
        roomId: io.string,
        code: io.union([io.string, io.undefined]),
    }),
});
exports.joinRoomSuccessPayload = io.type({
    kind: io.literal('joinRoomSuccess'),
    content: io.type({
        room: roomRecord_1.roomRecord,
        me: peerRecord_1.peerRecord,
    }),
});
exports.joinRoomFailurePayload = io.type({
    kind: io.literal('joinRoomFailure'),
    content: io.keyof({
        WrongCode: null,
        InexistentRoom: null,
        InexistentPeer: null,
        OtherRoomAlreadyJoined: null,
    }),
});
// TODO: Not sure this is still needed
// TODO: @deprecate in favor of roomStatsPayload?
exports.peerJoinedRoomPayload = io.type({
    kind: io.literal('peerJoinedRoom'),
    content: io.type({
        roomId: io.string,
        peerId: io.string,
    }),
});
//# sourceMappingURL=room.js.map