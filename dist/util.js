"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.milliseconds = exports.second = exports.seconds = exports.minutes = exports.hours = void 0;
exports.hours = function (int) { return int * exports.minutes(60); };
exports.minutes = function (int) { return int * exports.seconds(60); };
exports.seconds = function (int) { return int * exports.second(); };
exports.second = function () { return 1000; };
exports.milliseconds = function (int) { return int; };
//# sourceMappingURL=util.js.map