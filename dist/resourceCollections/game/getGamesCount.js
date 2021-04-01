"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetGamesCount = void 0;
var io = require("io-ts");
var resource_1 = require("../../sdk/resource");
var GetGamesCount;
(function (GetGamesCount) {
    var request = io.type({
        userId: io.string,
    });
    var okResponse = io.number;
    GetGamesCount.resource = new resource_1.Resource(request, okResponse);
})(GetGamesCount = exports.GetGamesCount || (exports.GetGamesCount = {}));
//# sourceMappingURL=getGamesCount.js.map