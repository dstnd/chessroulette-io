"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.externalUserRecord = exports.facebookUserRecord = void 0;
var io = require("io-ts");
var lichessRecords_1 = require("./lichessRecords");
exports.facebookUserRecord = io.type({
    id: io.string,
    email: io.string,
    firstName: io.union([io.string, io.undefined]),
    lastName: io.union([io.string, io.undefined]),
    name: io.union([io.string, io.undefined]),
});
exports.externalUserRecord = io.union([
    lichessRecords_1.lichessUserRecord,
    exports.facebookUserRecord,
]);
//# sourceMappingURL=externalVendorsRecords.js.map