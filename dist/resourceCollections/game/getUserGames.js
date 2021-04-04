"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserGames = void 0;
var io = require("io-ts");
var IntFromString_1 = require("io-ts-types/lib/IntFromString");
var resource_1 = require("../../sdk/resource");
var gameRecord_1 = require("../../records/gameRecord");
var GetUserGames;
(function (GetUserGames) {
    var request = io.type({
        userId: io.string,
        pageSize: IntFromString_1.IntFromString,
        currentIndex: IntFromString_1.IntFromString,
    });
    var okResponse = resource_1.withPaginatorResponse(gameRecord_1.gameRecord);
    GetUserGames.resource = new resource_1.Resource(request, okResponse);
})(GetUserGames = exports.GetUserGames || (exports.GetUserGames = {}));
//# sourceMappingURL=getUserGames.js.map