"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io = require("io-ts");
var records_1 = require("../records");
exports.createUserRequestPayload = io.type({
    name: io.string,
});
exports.createUserResponsePayload = records_1.userRecord;
//# sourceMappingURL=user.js.map