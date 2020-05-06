"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io = require("io-ts");
exports.publicRoomsResponsePayload = io.array(io.type({
    id: io.string,
    name: io.string,
    peersCount: io.number,
}));
//# sourceMappingURL=http.js.map