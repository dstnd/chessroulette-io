"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.challengeAcceptedPayload = exports.quickPairingResponse = exports.quickPairingPendingResponse = exports.quickPairingMatchedResponse = exports.quickPairingRequest = exports.acceptChallengeRequest = exports.removeChallengeRequest = exports.createChallengeResponse = exports.createChallengeRequest = exports.createPrivateChallengeRequest = exports.createPublicChallengeRequest = exports.baseCreateChallengeRequest = void 0;
var io = require("io-ts");
var roomRecord_1 = require("../records/roomRecord");
var challengeRecord_1 = require("../records/challengeRecord");
var chessGame_1 = require("../chessGame");
// HTTP
exports.baseCreateChallengeRequest = io.type({
    gameSpecs: chessGame_1.gameSpecsRecord,
    userId: io.string,
});
exports.createPublicChallengeRequest = io.intersection([
    exports.baseCreateChallengeRequest,
    io.type({
        type: io.keyof({ public: null }),
    }),
]);
exports.createPrivateChallengeRequest = io.intersection([
    exports.baseCreateChallengeRequest,
    io.type({
        type: io.keyof({ private: null }),
    }),
]);
exports.createChallengeRequest = io.union([
    exports.createPrivateChallengeRequest,
    exports.createPublicChallengeRequest,
]);
exports.createChallengeResponse = challengeRecord_1.challengeRecord;
exports.removeChallengeRequest = io.type({
    id: io.string,
    // This has to be the same user that created it. 
    // TODO: In the future this could be taken from the auth
    userId: io.string,
});
exports.acceptChallengeRequest = io.type({
    id: io.string,
    userId: io.string,
});
exports.quickPairingRequest = io.type({
    userId: io.string,
    gameSpecs: chessGame_1.gameSpecsRecord,
});
exports.quickPairingMatchedResponse = io.type({
    matched: io.literal(true),
    room: roomRecord_1.roomRecord,
});
exports.quickPairingPendingResponse = io.type({
    matched: io.literal(false),
    challenge: challengeRecord_1.challengeRecord,
});
exports.quickPairingResponse = io.union([
    exports.quickPairingMatchedResponse,
    exports.quickPairingPendingResponse,
]);
// SOCKET
exports.challengeAcceptedPayload = io.type({
    kind: io.literal('challengeAccepted'),
    content: io.type({
        id: io.string,
        userId: io.string,
        room: roomRecord_1.roomRecord,
    }),
});
//# sourceMappingURL=challenge.js.map