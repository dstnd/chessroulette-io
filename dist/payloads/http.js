"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io = require("io-ts");
exports.publicRoomsResponsePayload = io.array(io.type({
    id: io.string,
    name: io.string,
    peersCount: io.number,
}));
// These are done over socket now b/c I need an alive socket connection
//  in order to save them
// TODO: modify this to new design
// export const joinRoomRequestPayload = io.type({
//   roomId: io.string,
// });
// export type JoinRoomRequestPayloadRecord = io.TypeOf<
//   typeof joinRoomRequestPayload
// >;
// export const joinRoomResponsePayload = io.type({
//   me: peerRecord,
//   peersCount: io.number,
//   peers: io.record(io.string, io.string),
//   roomName: io.string,
// });
// export type JoinRoomResponsePayloadRecord = io.TypeOf<
//   typeof joinRoomResponsePayload
// >;
// export const HttpPayloads = {}
//# sourceMappingURL=http.js.map