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
exports.milliseconds = exports.second = exports.seconds = exports.minutes = exports.hours = void 0;
var util_1 = require("./util");
exports.hours = function (int) { return int * exports.minutes(60); };
exports.minutes = function (int) { return int * exports.seconds(60); };
exports.seconds = function (int) { return int * exports.second(); };
exports.second = function () { return 1000; };
exports.milliseconds = function (int) { return int; };
describe('chessHistoryToSimplePgn', function () {
    test('First Move', function () {
        var actual = util_1.chessHistoryToSimplePgn([
            {
                from: 'e2',
                to: 'e4',
                san: 'e4',
                color: 'white',
                clock: exports.minutes(1),
            },
        ]);
        var expected = '1. e4';
        expect(actual).toBe(expected);
    });
    test('Multiple Moves', function () {
        var actual = util_1.chessHistoryToSimplePgn([
            {
                from: 'e2',
                to: 'e4',
                san: 'e4',
                color: 'white',
                clock: exports.minutes(1),
            },
            {
                from: 'e7',
                to: 'e5',
                san: 'e5',
                color: 'black',
                clock: exports.seconds(58),
            },
            {
                from: 'd2',
                to: 'd4',
                san: 'd4',
                color: 'white',
                clock: exports.seconds(57),
            },
            {
                from: 'd7',
                to: 'd6',
                san: 'd6',
                color: 'black',
                clock: exports.seconds(55),
            }
        ]);
        var expected = '1. e4 e5 2. d4 d6';
        expect(actual).toBe(expected);
    });
    test('Finished Game', function () {
        var actual = util_1.chessHistoryToSimplePgn([
            {
                from: 'e2',
                to: 'e4',
                san: 'e4',
                color: 'white',
                clock: exports.minutes(1),
            },
            {
                from: 'f7',
                to: 'f6',
                san: 'f6',
                color: 'black',
                clock: exports.seconds(58),
            },
            {
                from: 'd2',
                to: 'd4',
                san: 'd4',
                color: 'white',
                clock: exports.seconds(57),
            },
            {
                from: 'g7',
                to: 'g5',
                san: 'g5',
                color: 'black',
                clock: exports.seconds(55),
            },
            {
                from: 'd1',
                to: 'h5',
                san: 'h5',
                color: 'white',
                clock: exports.seconds(50),
            },
        ]);
        var expected = '1. e4 f6 2. d4 g5 3. Qh5#';
        expect(actual).toBe(expected);
    });
});
describe.only('getCapturedPiecesFromPgn', function () {
    var initialActivePieces = {
        white: { p: 8, n: 2, b: 2, r: 2, q: 1 },
        black: { p: 8, n: 2, b: 2, r: 2, q: 1 },
    };
    test('No captures/No Promotions', function () {
        var actual = util_1.getActivePieces([]);
        var expected = initialActivePieces;
        expect(actual).toEqual(expected);
    });
    test('One Captured Pawn', function () {
        var actual = util_1.getActivePieces(util_1.simplePGNtoMoves('1. e4 d5 2. exd5'));
        var expected = __assign(__assign({}, initialActivePieces), { black: __assign(__assign({}, initialActivePieces.black), { p: initialActivePieces.white.p - 1 }) });
        expect(actual).toEqual(expected);
    });
    test('Captures and Promotions', function () {
        var actual = util_1.getActivePieces(util_1.simplePGNtoMoves('1. e4 d5 2. exd5 Nf6 3. d6 e5 4. d7+ Ke7 5. dxc8=Q'));
        var expected = {
            white: __assign(__assign({}, initialActivePieces.white), { q: initialActivePieces.white.q + 1 }),
            black: __assign(__assign({}, initialActivePieces.black), { p: initialActivePieces.white.p - 1, b: initialActivePieces.white.b - 1 })
        };
        expect(actual).toEqual(expected);
    });
});
//# sourceMappingURL=util.test.js.map