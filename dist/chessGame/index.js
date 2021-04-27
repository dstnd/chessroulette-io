"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chessGameUtils = exports.chessGameActions = void 0;
__exportStar(require("./records"), exports);
__exportStar(require("./records/utilRecords"), exports);
var gameActions_1 = require("./gameActions");
Object.defineProperty(exports, "chessGameActions", { enumerable: true, get: function () { return gameActions_1.actions; } });
exports.chessGameUtils = require("./util/util");
__exportStar(require("./pgnUtil"), exports);
//# sourceMappingURL=index.js.map