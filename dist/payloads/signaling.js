"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signalingPayload = exports.webrtcRefusalPayload = exports.webrtcNegotationPayload = exports.webrtcInvitationPayload = void 0;
var io = require("io-ts");
exports.webrtcInvitationPayload = io.type({
    kind: io.literal('webrtcInvitation'),
    content: io.type({
        peerId: io.string,
    }),
});
exports.webrtcNegotationPayload = io.type({
    kind: io.literal('webrtcNegotiation'),
    content: io.type({
        peerId: io.string,
        // This is unknown b/c the RTC Client will be the sole responsible for
        //  what goes in and out of here therefore there's no need for a codec.
        forward: io.unknown,
    }),
});
// This will only be called if the peer_invitation was refused,
//  in order to do any cleanup.
// Otherwise a local connection will be established at the mooment
//  of sending the invitation (to save some trafic).
exports.webrtcRefusalPayload = io.type({
    kind: io.literal('webrtcRefusal'),
    content: io.type({
        peerId: io.string,
        reason: io.union([io.string, io.null]),
    }),
});
exports.signalingPayload = io.union([
    exports.webrtcInvitationPayload,
    exports.webrtcNegotationPayload,
    exports.webrtcRefusalPayload,
]);
//# sourceMappingURL=signaling.js.map