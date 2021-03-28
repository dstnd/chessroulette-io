"use strict";
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
                color: 'white',
                clock: exports.minutes(1),
            },
            {
                from: 'e7',
                to: 'e5',
                color: 'black',
                clock: exports.seconds(58),
            },
            {
                from: 'd2',
                to: 'd4',
                color: 'white',
                clock: exports.seconds(57),
            },
            {
                from: 'd7',
                to: 'd6',
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
                color: 'white',
                clock: exports.minutes(1),
            },
            {
                from: 'f7',
                to: 'f6',
                color: 'black',
                clock: exports.seconds(58),
            },
            {
                from: 'd2',
                to: 'd4',
                color: 'white',
                clock: exports.seconds(57),
            },
            {
                from: 'g7',
                to: 'g5',
                color: 'black',
                clock: exports.seconds(55),
            },
            {
                from: 'd1',
                to: 'h5',
                color: 'white',
                clock: exports.seconds(50),
            },
        ]);
        var expected = '1. e4 f6 2. d4 g5 3. Qh5#';
        expect(actual).toBe(expected);
    });
});
//# sourceMappingURL=util.test.js.map