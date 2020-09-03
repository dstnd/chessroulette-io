"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.socketPayload = exports.genericFailureResponsePayload = exports.whoAmIRequestPayload = exports.connectionOpenedPayload = exports.pingPayload = exports.userIdentificationPayload = void 0;
var io = require("io-ts");
var peerRecord_1 = require("../records/peerRecord");
var game_1 = require("./game");
var peer_1 = require("./peer");
var room_1 = require("./room");
exports.userIdentificationPayload = io.type({
    kind: io.literal('userIdentification'),
    content: io.type({
        userId: io.string,
    }),
});
exports.pingPayload = io.type({
    kind: io.literal('ping'),
    content: io.string,
});
exports.connectionOpenedPayload = io.type({
    kind: io.literal('connectionOpened'),
    content: io.type({
        me: peerRecord_1.peerRecord,
    }),
});
exports.whoAmIRequestPayload = io.type({
    kind: io.literal('whoami'),
    content: io.unknown,
});
exports.genericFailureResponsePayload = io.type({
    kind: io.literal('genericRequestFailure'),
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
    exports.userIdentificationPayload,
    exports.pingPayload,
    exports.genericFailureResponsePayload,
    // Business Logic
    exports.connectionOpenedPayload,
    peer_1.myStatsPayload,
    room_1.roomStatsPayload,
    room_1.peerJoinedRoomPayload,
    room_1.joinRoomRequestPayload,
    room_1.joinRoomSuccessPayload,
    room_1.joinRoomFailurePayload,
    exports.whoAmIRequestPayload,
    game_1.gameJoinRequestPayload,
    game_1.gameMoveRequestPayload,
    game_1.gameDrawOfferingRequestPayload,
    game_1.gameResignationRequestPayload,
    game_1.gameAbortionRequestPayload,
]);
//# sourceMappingURL=socket.js.map