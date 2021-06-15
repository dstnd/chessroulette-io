"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyTwitchUserResponsePayload = exports.verifyTwitchUserRequestPayload = void 0;
var io = require("io-ts");
var twitchRecords_1 = require("../../records/twitchRecords");
exports.verifyTwitchUserRequestPayload = io.type({
    token: io.string,
});
exports.verifyTwitchUserResponsePayload = io.type({
    user: twitchRecords_1.twitchUserRecord,
});
//# sourceMappingURL=twitch.js.map