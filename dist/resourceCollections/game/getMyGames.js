"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMyGames = void 0;
var io = require("io-ts");
var resource_1 = require("../../sdk/resource");
var gameRecord_1 = require("../../records/gameRecord");
var GetMyGames;
(function (GetMyGames) {
    var okResponse = io.array(gameRecord_1.gameRecord);
    GetMyGames.resource = new resource_1.Resource(resource_1.emptyRequest, okResponse);
})(GetMyGames = exports.GetMyGames || (exports.GetMyGames = {}));
//# sourceMappingURL=getMyGames.js.map