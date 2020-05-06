import * as io from 'io-ts';
export declare const webrtcInvitationPayload: io.TypeC<{
    kind: io.LiteralC<"webrtcInvitation">;
    content: io.TypeC<{
        peerId: io.StringC;
    }>;
}>;
export declare type WebrtcInvitationPayload = io.TypeOf<typeof webrtcInvitationPayload>;
export declare const webrtcNegotationPayload: io.TypeC<{
    kind: io.LiteralC<"webrtcNegotiation">;
    content: io.TypeC<{
        peerId: io.StringC;
        forward: io.UnknownC;
    }>;
}>;
export declare type WebrtcNegotationPayload = io.TypeOf<typeof webrtcNegotationPayload>;
export declare const webrtcRefusalPayload: io.TypeC<{
    kind: io.LiteralC<"webrtcRefusal">;
    content: io.TypeC<{
        peerId: io.StringC;
        reason: io.UnionC<[io.StringC, io.NullC]>;
    }>;
}>;
export declare type WebrtcRefusalPayload = io.TypeOf<typeof webrtcRefusalPayload>;
export declare const signalingPayload: io.UnionC<[io.TypeC<{
    kind: io.LiteralC<"webrtcInvitation">;
    content: io.TypeC<{
        peerId: io.StringC;
    }>;
}>, io.TypeC<{
    kind: io.LiteralC<"webrtcNegotiation">;
    content: io.TypeC<{
        peerId: io.StringC;
        forward: io.UnknownC;
    }>;
}>, io.TypeC<{
    kind: io.LiteralC<"webrtcRefusal">;
    content: io.TypeC<{
        peerId: io.StringC;
        reason: io.UnionC<[io.StringC, io.NullC]>;
    }>;
}>]>;
export declare type SignalingPayload = io.TypeOf<typeof signalingPayload>;
