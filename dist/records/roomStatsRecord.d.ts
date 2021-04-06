import * as io from 'io-ts';
export declare const roomStatsRecord: io.IntersectionC<[io.IntersectionC<[io.TypeC<{
    id: io.StringC;
    name: io.StringC;
    createdAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
    createdBy: io.StringC;
    slug: io.StringC;
    peers: io.RecordC<io.StringC, io.IntersectionC<[io.TypeC<{
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
            externalAccounts: io.UnionC<[io.UndefinedC, io.TypeC<{
                facebook: io.UnionC<[io.UndefinedC, io.TypeC<{
                    userId: io.UnionC<[io.UndefinedC, io.StringC]>;
                }>]>;
                lichess: io.UnionC<[io.UndefinedC, io.TypeC<{
                    userId: io.UnionC<[io.UndefinedC, io.StringC]>;
                }>]>;
            }>]>;
            username: io.StringC;
            country: io.UnionC<[io.TypeC<{
                name: io.StringC;
                languages: io.ArrayC<io.StringC>;
                flagEmoji: io.StringC;
                flagEmojiU: io.StringC;
                phone: io.StringC;
                currency: io.StringC;
            }>, io.UndefinedC]>;
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
    }>]>]>>;
    activity: io.UnionC<[io.TypeC<{
        type: io.LiteralC<"none">;
    }>, io.IntersectionC<[io.TypeC<{
        type: io.LiteralC<"play">;
        gameId: io.StringC;
    }>, io.PartialC<{
        offer: io.UnionC<[io.TypeC<{
            type: io.LiteralC<"draw">;
            content: io.TypeC<{
                by: io.UnionC<[io.KeyofC<{
                    white: null;
                }>, io.KeyofC<{
                    black: null;
                }>]>;
            }>;
        }>, io.TypeC<{
            type: io.LiteralC<"rematch">;
            content: io.TypeC<{
                by: io.UnionC<[io.KeyofC<{
                    white: null;
                }>, io.KeyofC<{
                    black: null;
                }>]>;
            }>;
        }>]>;
    }>]>]>;
    chatHistory: io.TypeC<{
        id: io.StringC;
        messages: io.ArrayC<io.TypeC<{
            content: io.StringC;
            fromUserId: io.StringC;
            sentAt: io.Type<import("io-ts-isodatetime/dist/lib/ISODateTime").ISODateTimeBrand, string, unknown>;
        }>>;
        usersInfo: io.RecordC<io.StringC, io.TypeC<{
            id: io.StringC;
            firstName: io.StringC;
            lastName: io.StringC;
            avatarId: io.StringC;
            name: io.StringC;
        }>>;
    }>;
}>, io.UnionC<[io.TypeC<{
    type: io.LiteralC<"public">;
    code: io.NullC;
}>, io.TypeC<{
    type: io.LiteralC<"private">;
    code: io.StringC;
}>]>]>, io.TypeC<{
    peersCount: io.NumberC;
}>]>;
export declare type RoomStatsRecord = io.TypeOf<typeof roomStatsRecord>;
