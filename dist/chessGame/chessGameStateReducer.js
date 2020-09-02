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
var timeLimitMsMap = {
    bullet: util_1.minutes(1),
    blitz: util_1.minutes(5),
    rapid: util_1.minutes(15),
    untimed: -1,
};
var getRandomChessColor = function () { return util_1.shuffle(['white', 'black'])[0]; };
var getPlayerSideColor = function (homeColor, players) {
    if (homeColor === 'random') {
        var _a = util_1.shuffle([players.home, players.away]), white = _a[0], black = _a[1];
        return { white: white, black: black };
    }
    if (homeColor === 'black') {
        return {
            white: players.away,
            black: players.home,
        };
    }
    return {
        white: players.home,
        black: players.away,
    };
};
exports.prepareGameAction = function (_a) {
    var playersBySide = _a.playersBySide, _b = _a.timeLimit, timeLimit = _b === void 0 ? 'rapid' : _b, _c = _a.homeColor, homeColor = _c === void 0 ? 'random' : _c, _d = _a.pgn, pgn = _d === void 0 ? '' : _d;
    var realHomeColor = homeColor === 'random'
        ? getRandomChessColor()
        : homeColor;
    if (!('away' in playersBySide)) {
        var playerByColor = realHomeColor === 'white' ?
            {
                white: __assign(__assign({}, playersBySide.home), { color: 'white' }),
                black: undefined,
            } : {
            black: __assign(__assign({}, playersBySide.home), { color: 'black' }),
            white: undefined,
        };
        var waitingForOpponentGameState = {
            state: 'waitingForOpponent',
            timeLimit: timeLimit,
            players: playerByColor,
            playersBySide: {
                home: __assign(__assign({}, playersBySide.home), { color: realHomeColor }),
                away: undefined,
            },
            homeColor: realHomeColor,
            timeLeft: undefined,
            lastMoveAt: undefined,
            lastMoveBy: undefined,
            lastMoved: undefined,
            pgn: undefined,
            winner: undefined,
        };
        return waitingForOpponentGameState;
    }
    var playersByColor = getPlayerSideColor(realHomeColor, playersBySide);
    var pendingGameState = {
        state: 'pending',
        timeLimit: timeLimit,
        players: {
            white: __assign({ color: 'white' }, playersByColor.white),
            black: __assign({ color: 'black' }, playersByColor.black),
        },
        playersBySide: {
            home: __assign(__assign({}, playersBySide.home), { color: realHomeColor }),
            away: __assign(__assign({}, playersBySide.away), { color: util_1.otherChessColor(realHomeColor) })
        },
        homeColor: realHomeColor,
        timeLeft: {
            white: timeLimitMsMap[timeLimit],
            black: timeLimitMsMap[timeLimit],
        },
        pgn: undefined,
        winner: undefined,
        lastMoveAt: undefined,
        lastMoveBy: undefined,
        lastMoved: undefined,
    };
    if (pgn) {
        // If there is a pgn given on prepare, then simulate a move action!
        return moveAction(pendingGameState, { pgn: pgn });
    }
    return pendingGameState;
};
var moveAction = function (prev, next) {
    var _a;
    // Default it to black so when the game just starts
    //  it sets the 1st move to white
    var _b = prev.lastMoved, prevLastMoved = _b === void 0 ? 'black' : _b;
    var currentLastMovedBy = util_1.otherChessColor(prevLastMoved);
    var instance = sdk_1.getNewChessGame();
    instance.load_pgn(next.pgn);
    // const prevLastMove = prev.lastMoveAt && new Date() || now;
    var now = new Date();
    var moveElapsedMs = prev.lastMoveAt !== undefined
        ? now.getTime() - new Date(prev.lastMoveAt).getTime()
        : 0; // Zero if first move;
    if (instance.game_over()) {
        return __assign(__assign({}, prev), { state: 'finished', winner: instance.in_draw() ? '1/2' : currentLastMovedBy, pgn: next.pgn, lastMoveAt: io_ts_isodatetime_1.toISODateTime(now), lastMoveBy: currentLastMovedBy, lastMoved: currentLastMovedBy });
    }
    var timeLeft = prev.timeLeft[currentLastMovedBy] - moveElapsedMs;
    return __assign(__assign({}, prev), { state: 'started', pgn: next.pgn, lastMoveAt: io_ts_isodatetime_1.toISODateTime(now), lastMoveBy: currentLastMovedBy, lastMoved: currentLastMovedBy, timeLeft: __assign(__assign({}, prev.timeLeft), (_a = {}, _a[currentLastMovedBy] = timeLeft, _a)), winner: undefined });
};
var timerFinishedAction = function (prev, 
// @deprecated
next) {
    if (prev.state === 'pending') {
        return __assign(__assign({}, prev), { state: 'neverStarted' });
    }
    return __assign(__assign({}, prev), { state: 'finished', winner: util_1.otherChessColor(prev.lastMoveBy) });
};
exports.actions = {
    prepareGame: exports.prepareGameAction,
    move: moveAction,
    timerFinished: timerFinishedAction,
};
//# sourceMappingURL=chessGameStateReducer.js.map