import * as io from 'io-ts';
export declare const registerPeerRequestPayload: io.TypeC<{
    userId: io.StringC;
}>;
export declare type RegisterPeerRequestPayload = io.TypeOf<typeof registerPeerRequestPayload>;
export declare const registerPeerResponsePayload: io.IntersectionC<[io.TypeC<{
    id: io.StringC;
    user: io.UnionC<[io.IntersectionC<[io.TypeC<{
        id: io.StringC;
        firstName: io.StringC;
        lastName: io.StringC;
        avatarId: io.StringC;
        name: io.StringC;
    }>, io.TypeC<{
        isGuest: io.LiteralC<false>;
        email: io.StringC;
        profilePicUrl: io.UnionC<[io.StringC, io.UndefinedC]>;
    }>]>, io.IntersectionC<[io.TypeC<{
        id: io.StringC;
        firstName: io.StringC;
        lastName: io.StringC;
        avatarId: io.StringC;
        name: io.StringC;
    }>, io.TypeC<{
        isGuest: io.LiteralC<true>;
        sid: io.StringC;
    }>]>]>;
}>, io.UnionC<[io.TypeC<{
    hasJoinedRoom: io.LiteralC<false>;
    joinedRoomId: io.NullC;
    joinedRoomAt: io.NullC;
}>, io.TypeC<{
    hasJoinedRoom: io.LiteralC<true>;
    joinedRoomId: io.StringC;
    joinedRoomAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
}>]>]>;
export declare type RegisterPeerResponsePayload = io.TypeOf<typeof registerPeerResponsePayload>;
export declare const myStatsPayload: io.TypeC<{
    kind: io.LiteralC<"myStats">;
    content: io.IntersectionC<[io.TypeC<{
        id: io.StringC;
        user: io.UnionC<[io.IntersectionC<[io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>, io.TypeC<{
            isGuest: io.LiteralC<false>;
            email: io.StringC;
            profilePicUrl: io.UnionC<[io.StringC, io.UndefinedC]>;
        }>]>, io.IntersectionC<[io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>, io.TypeC<{
            isGuest: io.LiteralC<true>;
            sid: io.StringC;
        }>]>]>;
    }>, io.UnionC<[io.TypeC<{
        hasJoinedRoom: io.LiteralC<false>;
        joinedRoomId: io.NullC;
        joinedRoomAt: io.NullC;
    }>, io.TypeC<{
        hasJoinedRoom: io.LiteralC<true>;
        joinedRoomId: io.StringC;
        joinedRoomAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    }>]>]>;
}>;
export declare type MyStatsPayload = io.TypeOf<typeof myStatsPayload>;
