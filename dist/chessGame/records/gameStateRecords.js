"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chessGameState = exports.chessGameStateStopped = exports.chessGameStateFinished = exports.chessGameStateStarted = exports.chessGameStateNeverStarted = exports.chessGameStatePending = void 0;
var io = require("io-ts");
var io_ts_isodatetime_1 = require("io-ts-isodatetime");
var utilRecords_1 = require("./utilRecords");
exports.chessGameStatePending = io.type({
    state: io.literal('pending'),
    timeLimit: utilRecords_1.chessGameTimeLimit,
    players: io.tuple([utilRecords_1.chessPlayer, utilRecords_1.chessPlayer]),
    // TODO: Rename this to clock(s)
    timeLeft: io.type({
        white: io.number,
        black: io.number,
    }),
    // @deprecate in favor of history
    pgn: io.undefined,
    history: io.undefined,
    winner: io.undefined,
    lastMoveBy: io.undefined,
    lastMoveAt: io.undefined,
    // Game Started At
    startedAt: io.undefined,
    // Last Activity could be: 'move' | 'status udpate' | 'timer finished' | etc.
    lastActivityAt: io.undefined,
});
exports.chessGameStateNeverStarted = io.type({
    state: io.literal('neverStarted'),
    timeLimit: utilRecords_1.chessGameTimeLimit,
    players: io.tuple([utilRecords_1.chessPlayer, utilRecords_1.chessPlayer]),
    timeLeft: io.type({
        white: io.number,
        black: io.number,
    }),
    // @deprecate in favor of history
    pgn: io.undefined,
    history: io.undefined,
    winner: io.undefined,
    lastMoveBy: io.undefined,
    lastMoveAt: io.undefined,
    // Game Started At
    startedAt: io.undefined,
    // Last Activity could be: 'move' | 'status udpate' | 'timer finished' | etc.
    lastActivityAt: io_ts_isodatetime_1.isoDateTimeFromIsoString,
});
// TODO: Remove the union once it works
exports.chessGameStateStarted = io.type({
    timeLimit: utilRecords_1.chessGameTimeLimit,
    state: io.literal('started'),
    players: io.tuple([utilRecords_1.chessPlayer, utilRecords_1.chessPlayer]),
    timeLeft: io.type({
        white: io.number,
        black: io.number,
    }),
    // @deprecate in favor of history
    pgn: utilRecords_1.chessGameStatePgn,
    history: utilRecords_1.chessHistory,
    winner: io.undefined,
    lastMoveBy: io.keyof(utilRecords_1.chessPlayers.props),
    lastMoveAt: io_ts_isodatetime_1.isoDateTimeFromIsoString,
    // Game Started At
    startedAt: io_ts_isodatetime_1.isoDateTimeFromIsoString,
    // Last Activity could be: 'move' | 'status udpate' | 'timer finished' | etc.
    lastActivityAt: io_ts_isodatetime_1.isoDateTimeFromIsoString,
});
exports.chessGameStateFinished = io.type({
    state: io.literal('finished'),
    timeLimit: utilRecords_1.chessGameTimeLimit,
    players: io.tuple([utilRecords_1.chessPlayer, utilRecords_1.chessPlayer]),
    timeLeft: io.type({
        white: io.number,
        black: io.number,
    }),
    // @deprecate in favor of history
    pgn: utilRecords_1.chessGameStatePgn,
    history: utilRecords_1.chessHistory,
    winner: io.union([utilRecords_1.chessGameColor, io.literal('1/2')]),
    lastMoveBy: io.keyof(utilRecords_1.chessPlayers.props),
    lastMoveAt: io_ts_isodatetime_1.isoDateTimeFromIsoString,
    // Game Started At
    startedAt: io_ts_isodatetime_1.isoDateTimeFromIsoString,
    // Last Activity could be: 'move' | 'status udpate' | 'timer finished' | etc.
    lastActivityAt: io_ts_isodatetime_1.isoDateTimeFromIsoString,
});
exports.chessGameStateStopped = io.type({
    state: io.literal('stopped'),
    timeLimit: utilRecords_1.chessGameTimeLimit,
    players: io.tuple([utilRecords_1.chessPlayer, utilRecords_1.chessPlayer]),
    timeLeft: io.type({
        white: io.number,
        black: io.number,
    }),
    // @deprecate in favor of history
    pgn: utilRecords_1.chessGameStatePgn,
    history: utilRecords_1.chessHistory,
    winner: io.union([utilRecords_1.chessGameColor, io.literal('1/2')]),
    lastMoveBy: io.keyof(utilRecords_1.chessPlayers.props),
    lastMoveAt: io_ts_isodatetime_1.isoDateTimeFromIsoString,
    // Game Started At
    startedAt: io_ts_isodatetime_1.isoDateTimeFromIsoString,
    // Last Activity could be: 'move' | 'status udpate' | 'timer finished' | etc.
    lastActivityAt: io_ts_isodatetime_1.isoDateTimeFromIsoString,
});
exports.chessGameState = io.union([
    exports.chessGameStatePending,
    exports.chessGameStateStarted,
    exports.chessGameStateFinished,
    exports.chessGameStateNeverStarted,
    exports.chessGameStateStopped,
]);
//# sourceMappingURL=gameStateRecords.js.map