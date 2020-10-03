"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.socketPayload = exports.genericFailureResponsePayload = exports.whoAmIRequestPayload = exports.connectionOpenedPayload = exports.pingPayload = exports.statsReaderIdentificationPayload = exports.userIdentificationPayload = void 0;
var io = require("io-ts");
var peerRecord_1 = require("../records/peerRecord");
var challenge_1 = require("./challenge");
var game_1 = require("./game");
var peer_1 = require("./peer");
var room_1 = require("./room");
var stats_1 = require("./stats");
exports.userIdentificationPayload = io.type({
    kind: io.literal('userIdentification'),
    content: io.type({
        userId: io.string,
    }),
});
exports.statsReaderIdentificationPayload = io.type({
    kind: io.literal('statsReaderIdentificationPayload'),
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
exports.socketPayload = io.union([
    exports.userIdentificationPayload,
    exports.statsReaderIdentificationPayload,
    exports.pingPayload,
    exports.genericFailureResponsePayload,
    // Business Logic
    exports.connectionOpenedPayload,
    exports.whoAmIRequestPayload,
    // Challenges
    challenge_1.challengeAcceptedPayload,
    // Room
    room_1.peerJoinedRoomPayload,
    room_1.joinRoomRequestPayload,
    room_1.joinRoomSuccessPayload,
    room_1.joinRoomFailurePayload,
    // Game Actions
    game_1.gameJoinRequestPayload,
    game_1.gameMoveRequestPayload,
    game_1.gameDrawOfferingRequestPayload,
    game_1.gameDrawAcceptRequestPayload,
    game_1.gameDrawDenyRequestPayload,
    game_1.gameResignationRequestPayload,
    game_1.gameAbortionRequestPayload,
    game_1.gameRematchOfferingRequestPayload,
    game_1.gameRematchAcceptRequestPayload,
    game_1.gameRematchDenyRequestPayload,
    // Stats
    stats_1.statsSocketPayload,
    peer_1.myStatsPayload,
    room_1.joinedRoomUpdatedPayload,
]);
//# sourceMappingURL=socket.js.map