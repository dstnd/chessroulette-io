"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lichessUserResponsePayload = void 0;
var io = require("io-ts");
var lichessRecords_1 = require("../records/lichessRecords");
exports.lichessUserResponsePayload = io.type({
    user: lichessRecords_1.lichessUserRecord,
});
//# sourceMappingURL=lichess.js.map