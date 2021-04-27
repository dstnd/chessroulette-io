"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lichessUserRecord = exports.lichessRatingRecord = void 0;
var io = require("io-ts");
exports.lichessRatingRecord = io.type({
    games: io.number,
    rating: io.number,
});
exports.lichessUserRecord = io.type({
    // createdAt: isoDateFromUnixTime,
    email: io.string,
    id: io.string,
    username: io.string,
    perfs: io.partial({
        blitz: exports.lichessRatingRecord,
        bullet: exports.lichessRatingRecord,
        classical: exports.lichessRatingRecord,
        correspondence: exports.lichessRatingRecord,
        puzzle: exports.lichessRatingRecord,
        rapid: exports.lichessRatingRecord,
    }),
});
//# sourceMappingURL=lichessRecords.js.map