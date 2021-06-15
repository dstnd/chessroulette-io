"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chessGamePrefferedColorOptionList = exports.chessGameTimeLimitMsMap = void 0;
var util_1 = require("../util");
exports.chessGameTimeLimitMsMap = {
    // bullet: minutes(1),
    // blitz: minutes(5),
    // rapid: minutes(15),
    // rapid30: minutes(30),
    // rapid10: minutes(10),
    // untimed: -1,
    bullet30: util_1.seconds(30),
    bullet1: util_1.minutes(1),
    blitz2: util_1.minutes(2),
    blitz3: util_1.minutes(3),
    blitz5: util_1.minutes(5),
    rapid10: util_1.minutes(10),
    rapid15: util_1.minutes(15),
    rapid20: util_1.minutes(20),
    rapid30: util_1.minutes(30),
    rapid45: util_1.minutes(45),
    rapid60: util_1.minutes(60),
    untimed: -1,
};
exports.chessGamePrefferedColorOptionList = [
    'black',
    'white',
    'random',
];
//# sourceMappingURL=game.js.map