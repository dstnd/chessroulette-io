import * as io from 'io-ts';
export declare const userInfoRecord: io.TypeC<{
    id: io.StringC;
    name: io.StringC;
    avatarId: io.StringC;
}>;
export declare type UserInfoRecord = io.TypeOf<typeof userInfoRecord>;
export declare const peerRecord: io.TypeC<{
    id: io.StringC;
    user: io.TypeC<{
        id: io.StringC;
        name: io.StringC;
        avatarId: io.StringC;
    }>;
}>;
export declare type PeerRecord = io.TypeOf<typeof peerRecord>;
export declare const roomStatsRecord: io.IntersectionC<[io.TypeC<{
    id: io.StringC;
    name: io.StringC;
    peersCount: io.NumberC;
    peers: io.RecordC<io.StringC, io.TypeC<{
        id: io.StringC;
        user: io.TypeC<{
            id: io.StringC;
            name: io.StringC;
            avatarId: io.StringC;
        }>;
    }>>;
}>, io.UnionC<[io.TypeC<{
    type: io.LiteralC<"public">;
}>, io.TypeC<{
    type: io.LiteralC<"private">;
    code: io.StringC;
}>]>]>;
export declare type RoomStatsRecord = io.TypeOf<typeof roomStatsRecord>;
export declare const roomType: io.KeyofC<{
    public: null;
    private: null;
}>;
export declare type RoomType = io.TypeOf<typeof roomType>;
