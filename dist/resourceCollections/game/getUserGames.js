"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserGames = void 0;
var io = require("io-ts");
var NumberFromString_1 = require("io-ts-types/lib/NumberFromString");
var resource_1 = require("../../sdk/resource");
var gameRecord_1 = require("../../records/gameRecord");
var GetUserGames;
(function (GetUserGames) {
    var request = io.type({
        userId: io.string,
        pageSize: NumberFromString_1.NumberFromString,
        currentIndex: NumberFromString_1.NumberFromString,
    });
    var response = resource_1.withPaginatorResponse(io.union([gameRecord_1.gameRecordStopped, gameRecord_1.gameRecordFinished]));
    GetUserGames.resource = new resource_1.Resource(request, response);
})(GetUserGames = exports.GetUserGames || (exports.GetUserGames = {}));
//# sourceMappingURL=getUserGames.js.map