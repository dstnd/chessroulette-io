"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.peerJoinedRoomPayload = exports.joinRoomFailurePayload = exports.joinRoomSuccessPayload = exports.joinRoomRequestPayload = exports.roomStatsPayload = void 0;
var io = require("io-ts");
var roomStatsRecord_1 = require("../records/roomStatsRecord");
var peerRecord_1 = require("../records/peerRecord");
exports.roomStatsPayload = io.type({
    kind: io.literal('roomStats'),
    content: roomStatsRecord_1.roomStatsRecord,
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
        room: roomStatsRecord_1.roomStatsRecord,
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