"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.challengeAcceptedPayload = exports.acceptChallengeRequest = exports.removeChallengeRequest = exports.createPrivateChallengeRequest = exports.createPublicChallengeRequest = exports.createChallengeResponse = exports.createChallengeRequest = void 0;
var io = require("io-ts");
var roomRecord_1 = require("../records/roomRecord");
var challengeRecord_1 = require("../records/challengeRecord");
// HTTP
exports.createChallengeRequest = io.intersection([
    challengeRecord_1.baseChallengeRecord,
    io.type({
        userId: io.string,
    }),
]);
exports.createChallengeResponse = challengeRecord_1.challengeRecord;
exports.createPublicChallengeRequest = io.intersection([
    exports.createChallengeRequest,
    io.type({
        type: io.literal('public'),
    }),
]);
exports.createPrivateChallengeRequest = io.intersection([
    exports.createChallengeRequest,
    io.type({
        type: io.literal('private'),
    }),
]);
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