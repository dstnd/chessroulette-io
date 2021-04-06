"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.country = void 0;
var io = require("io-ts");
exports.country = io.type({
    name: io.string,
    languages: io.array(io.string),
    flagEmoji: io.string,
    flagEmojiU: io.string,
    phone: io.string,
    currency: io.string,
});
//# sourceMappingURL=locationRecords.js.map