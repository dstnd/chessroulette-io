"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io = require("io-ts");
var records_1 = require("../records");
exports.pingPayload = io.type({
    kind: io.literal('ping'),
    content: io.string,
});
exports.myStatsPayload = io.type({
    kind: io.literal('myStats'),
    content: records_1.peerRecord,
});
exports.roomStatsPayload = io.type({
    kind: io.literal('roomStats'),
    content: records_1.roomStatsRecord,
});
exports.connectionOpenedPayload = io.type({
    kind: io.literal('connectionOpened'),
    content: io.type({
        me: records_1.peerRecord,
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
        room: records_1.roomStatsRecord,
        me: records_1.peerRecord,
    }),
});
exports.joinRoomFailurePayload = io.type({
    kind: io.literal('joinRoomFailure'),
    content: io.keyof({
        WrongCode: null,
        InexistentRoom: null,
        InexistentPeer: null,
    }),
});
exports.whoAmIRequestPayload = io.type({
    kind: io.literal('whoami'),
    content: io.unknown,
});
// export const leaveRoomRequestPayload = io.type({
//   kind: io.literal('leaveRoomRequest'),
//   content: io.type({
//     room: roomStatsRecord,
//     me: peerRecord,
//   }),
// });
// export type JoinRoomSuccessPayload = io.TypeOf<typeof joinRoomSuccessPayload>;
exports.socketPayload = io.union([
    exports.pingPayload,
    // Business Logic
    exports.connectionOpenedPayload,
    exports.myStatsPayload,
    exports.roomStatsPayload,
    exports.peerJoinedRoomPayload,
    exports.joinRoomRequestPayload,
    exports.joinRoomSuccessPayload,
    exports.joinRoomFailurePayload,
    exports.whoAmIRequestPayload,
]);
//# sourceMappingURL=socket.js.map