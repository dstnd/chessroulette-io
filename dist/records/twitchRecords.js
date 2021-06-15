"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twitchUserRecord = void 0;
var io = require("io-ts");
exports.twitchUserRecord = io.type({
    id: io.string,
    email: io.string,
    firstName: io.union([io.string, io.undefined]),
    lastName: io.union([io.string, io.undefined]),
    name: io.union([io.string, io.undefined]),
});
//# sourceMappingURL=twitchRecords.js.map