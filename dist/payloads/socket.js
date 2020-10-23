"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.socketPayload = exports.genericFailureResponsePayload = exports.iamResponsePayload = exports.whoamiRequestPayload = exports.connectionOpenedPayload = exports.pingPayload = exports.statsReaderIdentificationPayload = exports.userIdentificationPayload = void 0;
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
exports.whoamiRequestPayload = io.type({
    kind: io.literal('whoami'),
    content: io.unknown,
});
exports.iamResponsePayload = io.type({
    kind: io.literal('iam'),
    content: peerRecord_1.peerRecord,
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
    exports.whoamiRequestPayload,
    exports.iamResponsePayload,
    // Challenges
    challenge_1.challengeAcceptedPayload,
    // Room
    room_1.peerJoinedRoomPayload,
    room_1.joinRoomRequestPayload,
    room_1.joinRoomSuccessPayload,
    room_1.joinRoomFailurePayload,
    room_1.leaveRoomRequestPayload,
    // Game Actions
    game_1.gameActionRequestPayload,
    // Stats
    stats_1.statsSocketPayload,
    peer_1.myStatsPayload,
    room_1.joinedRoomUpdatedPayload,
]);
//# sourceMappingURL=socket.js.map