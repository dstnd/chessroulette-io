import * as io from 'io-ts';

export const webrtcInvitationPayload = io.type({
  msg_type: io.literal('webrtc_invitation'),
  content: io.type({
    peer_id: io.string,
  }),
});
export type WebrtcInvitationPayload = io.TypeOf<typeof webrtcInvitationPayload>;

export const webrtcNegotationPayload = io.type({
  msg_type: io.literal('webrtc_negotiation'),
  content: io.type({
    peer_id: io.string,
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
  msg_type: io.literal('webrtc_refusal'),
  content: io.type({
    peer_id: io.string,
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
