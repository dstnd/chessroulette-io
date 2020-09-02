import * as io from 'io-ts';
export declare const peerRecord: io.TypeC<{
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
export declare type PeerRecord = io.TypeOf<typeof peerRecord>;
