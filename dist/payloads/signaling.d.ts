import * as io from 'io-ts';
export declare const webrtcInvitationPayload: io.TypeC<{
    msg_type: io.LiteralC<"webrtc_invitation">;
    content: io.TypeC<{
        peer_id: io.StringC;
    }>;
}>;
export declare type WebrtcInvitationPayload = io.TypeOf<typeof webrtcInvitationPayload>;
export declare const webrtcNegotationPayload: io.TypeC<{
    msg_type: io.LiteralC<"webrtc_negotiation">;
    content: io.TypeC<{
        peer_id: io.StringC;
        forward: io.UnknownC;
    }>;
}>;
export declare type WebrtcNegotationPayload = io.TypeOf<typeof webrtcNegotationPayload>;
export declare const webrtcRefusalPayload: io.TypeC<{
    msg_type: io.LiteralC<"webrtc_refusal">;
    content: io.TypeC<{
        peer_id: io.StringC;
        reason: io.UnionC<[io.StringC, io.NullC]>;
    }>;
}>;
export declare type WebrtcRefusalPayload = io.TypeOf<typeof webrtcRefusalPayload>;
export declare const signalingPayload: io.UnionC<[io.TypeC<{
    msg_type: io.LiteralC<"webrtc_invitation">;
    content: io.TypeC<{
        peer_id: io.StringC;
    }>;
}>, io.TypeC<{
    msg_type: io.LiteralC<"webrtc_negotiation">;
    content: io.TypeC<{
        peer_id: io.StringC;
        forward: io.UnknownC;
    }>;
}>, io.TypeC<{
    msg_type: io.LiteralC<"webrtc_refusal">;
    content: io.TypeC<{
        peer_id: io.StringC;
        reason: io.UnionC<[io.StringC, io.NullC]>;
    }>;
}>]>;
export declare type SignalingPayload = io.TypeOf<typeof signalingPayload>;
