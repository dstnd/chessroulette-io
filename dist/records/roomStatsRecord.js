"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomStatsRecord = void 0;
var io = require("io-ts");
var roomRecord_1 = require("./roomRecord");
exports.roomStatsRecord = io.intersection([
    roomRecord_1.roomRecord,
    io.type({
        peersCount: io.number,
    }),
]);
//# sourceMappingURL=roomStatsRecord.js.map