"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twitchUserRecord = void 0;
var io = require("io-ts");
exports.twitchUserRecord = io.type({
    id: io.string,
    email: io.string,
    display_name: io.string,
    profile_image_url: io.string,
});
//# sourceMappingURL=twitchRecords.js.map