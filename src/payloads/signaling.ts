import * as io from 'io-ts';

export const webrtcInvitationPayload = io.type({
  kind: io.literal('webrtcInvitation'),
  content: io.type({
    peerId: io.string,
  }),
});
export type WebrtcInvitationPayload = io.TypeOf<typeof webrtcInvitationPayload>;

export const webrtcNegotationPayload = io.type({
  kind: io.literal('webrtcNegotiation'),
  content: io.type({
    peerId: io.string,
    // This is unknown b/c the RTC Client will be the sole responsible for
    //  what goes in and out of here therefore there's no need for a codec.
    forward: io.unknown,
  }),
});
export type WebrtcNegotationPayload = io.TypeOf<typeof webrtcNegotationPayload>;

// This will only be called if the peer_invitation was refused,
//  in order to do any cleanup.
// Otherwise a local connection will be established at the mooment
//  of sending the invitation (to save some trafic).
export const webrtcRefusalPayload = io.type({
  kind: io.literal('webrtcRefusal'),
  content: io.type({
    peerId: io.string,
    reason: io.union([io.string, io.null]),
  }),
});
export type WebrtcRefusalPayload = io.TypeOf<typeof webrtcRefusalPayload>;

export const signalingPayload = io.union([
  webrtcInvitationPayload,
  webrtcNegotationPayload,
  webrtcRefusalPayload,
]);
export type SignalingPayload = io.TypeOf<typeof signalingPayload>;
