import * as io from 'io-ts';
export declare const registerPeerRequestPayload: io.TypeC<{
    userId: io.StringC;
}>;
export declare type RegisterPeerRequestPayload = io.TypeOf<typeof registerPeerRequestPayload>;
export declare const registerPeerResponsePayload: io.TypeC<{
    id: io.StringC;
    user: io.UnionC<[io.IntersectionC<[io.TypeC<{
        id: io.StringC;
        name: io.StringC;
        avatarId: io.StringC;
    }>, io.TypeC<{
        isGuest: io.LiteralC<false>;
    }>]>, io.IntersectionC<[io.TypeC<{
        id: io.StringC;
        name: io.StringC;
        avatarId: io.StringC;
    }>, io.TypeC<{
        isGuest: io.LiteralC<true>;
    }>]>]>;
}>;
export declare type RegisterPeerResponsePayload = io.TypeOf<typeof registerPeerResponsePayload>;
