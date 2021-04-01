"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectExternalAccount = void 0;
var io = require("io-ts");
var resource_1 = require("../../sdk/resource");
var payloads_1 = require("../../payloads");
var userRecord_1 = require("../../records/userRecord");
var ConnectExternalAccount;
(function (ConnectExternalAccount) {
    ConnectExternalAccount.request = io.type({
        vendor: payloads_1.externalVendor,
        accessToken: io.string,
    });
    ConnectExternalAccount.response = userRecord_1.registeredUserRecord;
    ConnectExternalAccount.resource = new resource_1.Resource(ConnectExternalAccount.request, ConnectExternalAccount.response);
})(ConnectExternalAccount = exports.ConnectExternalAccount || (exports.ConnectExternalAccount = {}));
//# sourceMappingURL=connectExternalAccount.js.map