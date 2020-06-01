"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io = require("io-ts");
exports.peerRecord = io.type({
    id: io.string,
    name: io.string,
});
exports.roomStatsRecord = io.intersection([
    io.type({
        id: io.string,
        name: io.string,
        peersCount: io.number,
        peers: io.record(io.string, exports.peerRecord),
    }),
    io.union([
        io.type({ type: io.literal('public') }),
        io.type({
            type: io.literal('private'),
            code: io.string,
        })
    ])
]);
exports.roomType = io.keyof({
    public: null,
    private: null,
});
exports.userRecord = exports.peerRecord;
//# sourceMappingURL=index.js.map