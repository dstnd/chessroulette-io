"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomType = exports.roomStatsRecord = exports.peerRecord = exports.userInfoRecord = void 0;
var io = require("io-ts");
exports.userInfoRecord = io.type({
    id: io.string,
    name: io.string,
    avatarId: io.string,
});
exports.peerRecord = io.type({
    id: io.string,
    user: exports.userInfoRecord,
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
// export const userRecord = peerRecord;
// export type UserRecord = io.TypeOf<typeof userRecord>;
//# sourceMappingURL=index.js.map