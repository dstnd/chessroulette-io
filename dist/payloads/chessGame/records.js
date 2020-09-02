"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chessGameState = exports.chessGameStateFinished = exports.chessGameStateStarted = exports.chessGameStateNeverStarted = exports.chessGameStatePending = exports.chessGameStateWaitingForOpponent = exports.chessGameTimeLimit = exports.chessGameStatePgn = exports.chessGameStateFen = exports.chessGameColor = exports.chessColorBlack = exports.chessColorWhite = exports.chessPlayers = exports.chessPlayer = exports.chessPlayerBlack = exports.chessPlayerWhite = void 0;
var io = require("io-ts");
// import { isoDateTimeFromISOString } from 'src/lib/date';
var io_ts_isodatetime_1 = require("io-ts-isodatetime");
exports.chessPlayerWhite = io.type({
    color: io.literal('white'),
    id: io.string,
    name: io.string,
});
exports.chessPlayerBlack = io.type({
    color: io.literal('black'),
    id: io.string,
    name: io.string,
});
exports.chessPlayer = io.union([exports.chessPlayerBlack, exports.chessPlayerWhite]);
exports.chessPlayers = io.type({
    white: exports.chessPlayerWhite,
    black: exports.chessPlayerBlack,
});
exports.chessColorWhite = io.literal('white');
exports.chessColorBlack = io.literal('black');
exports.chessGameColor = io.union([exports.chessColorWhite, exports.chessColorBlack]);
exports.chessGameStateFen = io.string;
exports.chessGameStatePgn = io.string;
// export const chessGameStateStarted = io.type({});
exports.chessGameTimeLimit = io.keyof({
    bullet: null,
    untimed: null,
    blitz: null,
    rapid: null,
});
exports.chessGameStateWaitingForOpponent = io.type({
    state: io.literal('waitingForOpponent'),
    timeLimit: exports.chessGameTimeLimit,
    players: io.undefined,
    timeLeft: io.type({
        white: io.number,
        black: io.number,
    }),
    pgn: io.undefined,
    winner: io.undefined,
    lastMoveBy: io.undefined,
    lastMoveAt: io.undefined,
    /* @deprecated */
    lastMoved: io.undefined,
});
exports.chessGameStatePending = io.type({
    state: io.literal('pending'),
    timeLimit: exports.chessGameTimeLimit,
    players: io.type({
        white: exports.chessPlayerWhite,
        black: exports.chessPlayerBlack,
    }),
    timeLeft: io.type({
        white: io.number,
        black: io.number,
    }),
    pgn: io.undefined,
    winner: io.undefined,
    lastMoveBy: io.undefined,
    lastMoveAt: io.undefined,
    /* @deprecated */
    lastMoved: io.undefined,
});
exports.chessGameStateNeverStarted = io.type({
    state: io.literal('neverStarted'),
    timeLimit: exports.chessGameTimeLimit,
    players: io.type({
        white: exports.chessPlayerWhite,
        black: exports.chessPlayerBlack,
    }),
    timeLeft: io.type({
        white: io.number,
        black: io.number,
    }),
    pgn: io.undefined,
    winner: io.undefined,
    lastMoveBy: io.undefined,
    lastMoveAt: io.undefined,
    /* @deprecated */
    lastMoved: io.undefined,
});
// TODO: Remove the union once it works
exports.chessGameStateStarted = io.type({
    timeLimit: exports.chessGameTimeLimit,
    state: io.literal('started'),
    players: io.type({
        white: exports.chessPlayerWhite,
        black: exports.chessPlayerBlack,
    }),
    timeLeft: io.type({
        white: io.number,
        black: io.number,
    }),
    pgn: exports.chessGameStatePgn,
    winner: io.undefined,
    lastMoveBy: io.keyof(exports.chessPlayers.props),
    lastMoveAt: io_ts_isodatetime_1.isoDateTimeFromIsoString,
    /* @deprecated */
    lastMoved: io.keyof(exports.chessPlayers.props),
});
exports.chessGameStateFinished = io.type({
    state: io.literal('finished'),
    timeLimit: exports.chessGameTimeLimit,
    players: io.type({
        white: exports.chessPlayerWhite,
        black: exports.chessPlayerBlack,
    }),
    timeLeft: io.type({
        white: io.number,
        black: io.number,
    }),
    pgn: exports.chessGameStatePgn,
    winner: io.union([exports.chessGameColor, io.literal('1/2')]),
    lastMoveBy: io.keyof(exports.chessPlayers.props),
    lastMoveAt: io_ts_isodatetime_1.isoDateTimeFromIsoString,
    /* @deprecated */
    lastMoved: io.keyof(exports.chessPlayers.props),
});
exports.chessGameState = io.union([
    exports.chessGameStateWaitingForOpponent,
    exports.chessGameStatePending,
    exports.chessGameStateStarted,
    exports.chessGameStateFinished,
    exports.chessGameStateNeverStarted,
]);
//# sourceMappingURL=records.js.map