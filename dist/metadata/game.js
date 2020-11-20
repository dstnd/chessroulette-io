"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chessGamePrefferedColorOptionList = exports.chessGameTimeLimitMsMap = void 0;
var util_1 = require("../util");
exports.chessGameTimeLimitMsMap = {
    bullet: util_1.minutes(1),
    blitz: util_1.minutes(5),
    rapid: util_1.minutes(15),
    untimed: -1,
};
exports.chessGamePrefferedColorOptionList = [
    'black',
    'white',
    'random',
];
//# sourceMappingURL=game.js.map