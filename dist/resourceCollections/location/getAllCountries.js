"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllCountries = void 0;
var io = require("io-ts");
var locationRecords_1 = require("src/records/locationRecords");
var resource_1 = require("../../sdk/resource");
var GetAllCountries;
(function (GetAllCountries) {
    GetAllCountries.response = io.record(io.string, locationRecords_1.country);
    GetAllCountries.resource = new resource_1.Resource(resource_1.emptyRequest, GetAllCountries.response);
})(GetAllCountries = exports.GetAllCountries || (exports.GetAllCountries = {}));
//# sourceMappingURL=getAllCountries.js.map