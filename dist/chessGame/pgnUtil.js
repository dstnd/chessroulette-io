"use strict";
// This idea is 100% borrowed from this article:
//  https://spin.atomicobject.com/2017/06/19/strongly-typed-date-string-typescript/
// It works pretty nice o be able to take a string and brand with a nominal type!
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEnhancedPGN = exports.isSimplePGN = void 0;
var sdk_1 = require("./sdk");
// Also see https://basarat.gitbooks.io/typescript/docs/tips/nominalTyping.html
var SimplePGNBrand;
(function (SimplePGNBrand) {
    SimplePGNBrand["_"] = "";
})(SimplePGNBrand || (SimplePGNBrand = {}));
var EnhancedPGNBrand;
(function (EnhancedPGNBrand) {
    EnhancedPGNBrand["_"] = "";
})(EnhancedPGNBrand || (EnhancedPGNBrand = {}));
var getHistoryFromPgnAsString = function (pgn) {
    var instance = sdk_1.getNewChessGame(pgn);
    return instance.history();
};
/**
 * This function checks if the given string is of the SimplePGN format
 *
 * @param s
 */
exports.isSimplePGN = function (s) { return getHistoryFromPgnAsString(s).length > 0; };
/**
 * This function checks if the given string is of the SimplePGN format
 *
 * @param s
 */
exports.isEnhancedPGN = function (s) {
    var _a;
    return (exports.isSimplePGN(s)
        // Verifies that the amount of moves is equal to the amount of clcok commands
        // TODO: This could be further improved, either by adding more commands to the parser
        //  as well by verifying that the format is actually correct
        && ((_a = String(s).match(/\[%clk \d+\:\d+\:\d+\]/gm)) === null || _a === void 0 ? void 0 : _a.length) === getHistoryFromPgnAsString(s).length);
};
//# sourceMappingURL=pgnUtil.js.map