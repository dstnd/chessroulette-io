"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io = require("io-ts");
exports.peerMessage = io.type({
    fromPeerId: io.string,
    toPeerId: io.string,
    content: io.string,
    // TODO: make UTCDatetime
    timestamp: io.string,
});
//# sourceMappingURL=PeerMessagingPayload.js.map