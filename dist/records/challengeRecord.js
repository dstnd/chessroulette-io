"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.privateChallengeRecord = exports.publicChallengeRecord = exports.challengeRecord = exports.baseChallengeRecord = exports.gameSpecsRecord = void 0;
var io = require("io-ts");
var io_ts_isodatetime_1 = require("io-ts-isodatetime");
var ChessGame = require("../chessGame");
exports.gameSpecsRecord = io.type({
    timeLimit: ChessGame.chessGameTimeLimit,
    preferredColor: ChessGame.chessPreferredColorOption,
});
exports.baseChallengeRecord = io.type({
    type: io.keyof({
        public: null,
        private: null,
    }),
    gameSpecs: exports.gameSpecsRecord,
});
exports.challengeRecord = io.intersection([
    exports.baseChallengeRecord,
    io.type({
        id: io.string,
        createdBy: io.string,
        createdAt: io_ts_isodatetime_1.isoDateTimeFromIsoString,
        slug: io.string,
    }),
]);
exports.publicChallengeRecord = io.intersection([
    exports.challengeRecord,
    io.type({
        type: io.literal('public'),
    }),
]);
exports.privateChallengeRecord = io.intersection([
    exports.challengeRecord,
    io.type({
        type: io.literal('private'),
    }),
]);
//# sourceMappingURL=challengeRecord.js.map