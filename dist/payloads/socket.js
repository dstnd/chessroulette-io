"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io = require("io-ts");
var records_1 = require("../records");
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
    }),
});
exports.joinRoomSuccessPayload = io.type({
    kind: io.literal('joinRoomSuccess'),
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