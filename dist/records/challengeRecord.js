"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quickPairingRecord = exports.challengeRecord = exports.privateChallengeRecord = exports.publicChallengeRecord = exports.baseChallengeRecord = void 0;
var io = require("io-ts");
var io_ts_isodatetime_1 = require("io-ts-isodatetime");
var ChessGame = require("../chessGame");
var chessGame_1 = require("../chessGame");
exports.baseChallengeRecord = io.type({
    gameSpecs: ChessGame.gameSpecsRecord,
    id: io.string,
    createdBy: io.string,
    createdAt: io_ts_isodatetime_1.isoDateTimeFromIsoString,
    slug: io.string,
});
exports.publicChallengeRecord = io.intersection([
    exports.baseChallengeRecord,
    io.type({
        type: io.literal('public'),
    }),
]);
exports.privateChallengeRecord = io.intersection([
    exports.baseChallengeRecord,
    io.type({
        type: io.literal('private'),
    }),
]);
exports.challengeRecord = io.union([
    exports.publicChallengeRecord,
    exports.privateChallengeRecord,
]);
exports.quickPairingRecord = io.type({
    gameSpecs: chessGame_1.gameSpecsRecord,
    createdBy: io.string,
    createdAt: io_ts_isodatetime_1.isoDateTimeFromIsoString,
    slug: io.string,
});
//# sourceMappingURL=challengeRecord.js.map