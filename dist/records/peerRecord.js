"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.peerRecord = void 0;
var io = require("io-ts");
var userRecord_1 = require("./userRecord");
exports.peerRecord = io.type({
    id: io.string,
    user: userRecord_1.userRecord,
});
//# sourceMappingURL=peerRecord.js.map