"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io = require("io-ts");
var records_1 = require("../records");
exports.publicRoomsResponsePayload = io.array(io.type({
    id: io.string,
    name: io.string,
    peersCount: io.number,
}));
exports.createRoomRequest = io.type({
    nickname: io.union([io.string, io.undefined]),
    peerId: io.string,
    type: records_1.roomType,
});
exports.createRoomResponse = io.union([
    io.type({
        id: io.string,
        type: io.literal('private'),
        code: io.string,
    }),
    io.type({
        id: io.string,
        type: io.literal('public'),
    }),
]);
// export const joinRoomRequest = io.type({
//   id: io.string,
//   peerId: io.string,
//   code: io.union([io.string, io.undefined]),
// });
// export type JoinRoomRequest = io.TypeOf<typeof joinRoomRequest>;
// export type JoinPublicRoomRequest = io.TypeOf<typeof joinRoomRequest> & { code: string };
// export type JoinPrivateRoomRequest = io.TypeOf<typeof joinRoomRequest> & { code: undefined };
//# sourceMappingURL=http.js.map