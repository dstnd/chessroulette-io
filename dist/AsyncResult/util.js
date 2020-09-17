"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delay = exports.isExactType = void 0;
function isExactType(x) { }
exports.isExactType = isExactType;
exports.delay = function (ms) {
    if (ms === void 0) { ms = 10; }
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);
    });
};
//# sourceMappingURL=util.js.map