"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomChessColor = exports.shuffle = exports.otherChessColor = void 0;
function otherChessColor(c) {
    return c === 'white' ? 'black' : 'white';
}
exports.otherChessColor = otherChessColor;
/**
 * https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 *
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    var _a;
    // eslint-disable-next-line no-plusplus
    for (var i = a.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        // eslint-disable-next-line no-param-reassign
        _a = [a[j], a[i]], a[i] = _a[0], a[j] = _a[1];
    }
    return a;
}
exports.shuffle = shuffle;
exports.getRandomChessColor = function () { return shuffle(['white', 'black'])[0]; };
//# sourceMappingURL=util.js.map