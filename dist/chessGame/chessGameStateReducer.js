"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.actions = exports.prepareGameAction = void 0;
var util_1 = require("./util");
var sdk_1 = require("./sdk");
var io_ts_isodatetime_1 = require("io-ts-isodatetime");
var game_1 = require("../metadata/game");
exports.prepareGameAction = function (_a) {
    var players = _a.players, timeLimit = _a.timeLimit, _b = _a.preferredColor, preferredColor = _b === void 0 ? 'random' : _b, _c = _a.pgn, pgn = _c === void 0 ? '' : _c;
    var firstPlayerColor = preferredColor === 'random' ? util_1.getRandomChessColor() : preferredColor;
    var pendingGameState = {
        state: 'pending',
        timeLimit: timeLimit,
        players: [
            {
                color: firstPlayerColor,
                user: players[0],
            },
            {
                color: util_1.otherChessColor(firstPlayerColor),
                user: players[1],
            },
        ],
        timeLeft: {
            white: game_1.chessGameTimeLimitMsMap[timeLimit],
            black: game_1.chessGameTimeLimitMsMap[timeLimit],
        },
        pgn: undefined,
        winner: undefined,
        lastMoveAt: undefined,
        lastMoveBy: undefined,
    };
    if (pgn) {
        // If there is a pgn given on prepare, then simulate a move action!
        return moveAction(pendingGameState, { pgn: pgn, movedAt: io_ts_isodatetime_1.toISODateTime(new Date()) });
    }
    return pendingGameState;
};
var moveAction = function (prev, next) {
    var _a;
    // Default it to black so when the game just starts
    //  it sets the 1st move to white
    var _b = prev.lastMoveBy, prevLastMoveBy = _b === void 0 ? 'black' : _b;
    var instance = sdk_1.getNewChessGame();
    var pgn = ('pgn' in next ? next.pgn : prev.pgn) || '';
    // Load the nnxt or prev pgn
    instance.load_pgn(pgn);
    // If there is a move make it
    if ('move' in next) {
        instance.move(next.move);
    }
    var nextPgn = instance.pgn();
    // Don't do anything if the PGN's are the same
    // Multiple Requests shouldn't change the output
    if (prev.pgn === nextPgn) {
        return prev;
    }
    var movedAt = new Date(next.movedAt);
    var moveElapsedMs = (prev.lastMoveAt !== undefined)
        ? movedAt.getTime() - new Date(prev.lastMoveAt).getTime()
        : 0; // Zero if first move
    // If it's white's turn that means black moved last!
    var currentLastMovedBy = instance.turn() === 'w' ? 'black' : 'white';
    if (instance.game_over()) {
        return __assign(__assign({}, prev), { state: 'finished', winner: instance.in_draw() ? '1/2' : currentLastMovedBy, pgn: instance.pgn(), lastMoveAt: next.movedAt, lastMoveBy: currentLastMovedBy });
    }
    var timeLeft = prev.timeLeft[currentLastMovedBy] - moveElapsedMs;
    if (prev.timeLimit !== 'untimed' && prev.state === 'started' && timeLeft < 0) {
        return __assign(__assign({}, prev), { state: 'finished', winner: prevLastMoveBy });
    }
    return __assign(__assign({}, prev), { state: 'started', pgn: instance.pgn(), lastMoveAt: next.movedAt, lastMoveBy: currentLastMovedBy, timeLeft: __assign(__assign({}, prev.timeLeft), (_a = {}, _a[currentLastMovedBy] = timeLeft, _a)), winner: undefined });
};
var statusCheck = function (prev, at) {
    var _a;
    if (prev.state === 'started') {
        var turn = util_1.otherChessColor(prev.lastMoveBy);
        var delta = at.getTime() - (new Date(prev.lastMoveAt).getTime() + prev.timeLeft[turn]);
        if (delta > 0) {
            return __assign(__assign({}, prev), { state: 'finished', winner: prev.lastMoveBy, timeLeft: __assign(__assign({}, prev.timeLeft), (_a = {}, _a[turn] = 0, _a)) });
        }
        return prev;
    }
    return prev;
};
// @deprecated
var timerFinishedAction = function (prev) {
    return __assign(__assign({}, prev), { state: 'finished', winner: util_1.otherChessColor(prev.lastMoveBy) });
};
var abortAction = function (prev) {
    return __assign(__assign({}, prev), { state: 'neverStarted' });
};
var resignAction = function (prev, resigningColor) {
    return __assign(__assign({}, prev), { state: 'stopped', winner: util_1.otherChessColor(resigningColor) });
};
var drawAction = function (prev) {
    return __assign(__assign({}, prev), { state: 'stopped', winner: '1/2' });
};
exports.actions = {
    prepareGame: exports.prepareGameAction,
    // joinGame: joinGameAction,
    move: moveAction,
    resign: resignAction,
    draw: drawAction,
    abort: abortAction,
    statusCheck: statusCheck,
    // @deprecate in favor of statusCheck
    timerFinished: timerFinishedAction,
};
//# sourceMappingURL=chessGameStateReducer.js.map