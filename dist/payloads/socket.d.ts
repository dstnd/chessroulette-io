import * as io from 'io-ts';
export declare const userIdentificationPayload: io.TypeC<{
    kind: io.LiteralC<"userIdentification">;
    content: io.TypeC<{
        userId: io.StringC;
    }>;
}>;
export declare type UserIdentificationPayload = io.TypeOf<typeof userIdentificationPayload>;
export declare const pingPayload: io.TypeC<{
    kind: io.LiteralC<"ping">;
    content: io.StringC;
}>;
export declare type PingPayload = io.TypeOf<typeof pingPayload>;
export declare const myStatsPayload: io.TypeC<{
    kind: io.LiteralC<"myStats">;
    content: io.TypeC<{
        id: io.StringC;
        name: io.StringC;
    }>;
}>;
export declare type MyStatsPayload = io.TypeOf<typeof myStatsPayload>;
export declare const roomStatsPayload: io.TypeC<{
    kind: io.LiteralC<"roomStats">;
    content: io.IntersectionC<[io.TypeC<{
        id: io.StringC;
        name: io.StringC;
        peersCount: io.NumberC;
        peers: io.RecordC<io.StringC, io.TypeC<{
            id: io.StringC;
            name: io.StringC;
        }>>;
    }>, io.UnionC<[io.TypeC<{
        type: io.LiteralC<"public">;
    }>, io.TypeC<{
        type: io.LiteralC<"private">;
        code: io.StringC;
    }>]>]>;
}>;
export declare type RoomStatsPayload = io.TypeOf<typeof roomStatsPayload>;
export declare const connectionOpenedPayload: io.TypeC<{
    kind: io.LiteralC<"connectionOpened">;
    content: io.TypeC<{
        me: io.TypeC<{
            id: io.StringC;
            name: io.StringC;
        }>;
    }>;
}>;
export declare type ConnectionOpenedPayload = io.TypeOf<typeof connectionOpenedPayload>;
export declare const peerJoinedRoomPayload: io.TypeC<{
    kind: io.LiteralC<"peerJoinedRoom">;
    content: io.TypeC<{
        roomId: io.StringC;
        peerId: io.StringC;
    }>;
}>;
export declare type PeerJoinedRoomPayload = io.TypeOf<typeof peerJoinedRoomPayload>;
export declare const joinRoomRequestPayload: io.TypeC<{
    kind: io.LiteralC<"joinRoomRequest">;
    content: io.TypeC<{
        roomId: io.StringC;
        code: io.UnionC<[io.StringC, io.UndefinedC]>;
    }>;
}>;
export declare type JoinRoomRequestPayload = io.TypeOf<typeof joinRoomRequestPayload>;
export declare const joinRoomSuccessPayload: io.TypeC<{
    kind: io.LiteralC<"joinRoomSuccess">;
    content: io.TypeC<{
        room: io.IntersectionC<[io.TypeC<{
            id: io.StringC;
            name: io.StringC;
            peersCount: io.NumberC;
            peers: io.RecordC<io.StringC, io.TypeC<{
                id: io.StringC;
                name: io.StringC;
            }>>;
        }>, io.UnionC<[io.TypeC<{
            type: io.LiteralC<"public">;
        }>, io.TypeC<{
            type: io.LiteralC<"private">;
            code: io.StringC;
        }>]>]>;
        me: io.TypeC<{
            id: io.StringC;
            name: io.StringC;
        }>;
    }>;
}>;
export declare type JoinRoomSuccessPayload = io.TypeOf<typeof joinRoomSuccessPayload>;
export declare const joinRoomFailurePayload: io.TypeC<{
    kind: io.LiteralC<"joinRoomFailure">;
    content: io.KeyofC<{
        WrongCode: null;
        InexistentRoom: null;
        InexistentPeer: null;
    }>;
}>;
export declare type JoinRoomFailurePayload = io.TypeOf<typeof joinRoomFailurePayload>;
export declare const whoAmIRequestPayload: io.TypeC<{
    kind: io.LiteralC<"whoami">;
    content: io.UnknownC;
}>;
export declare type WhoAmIRequestPayload = io.TypeOf<typeof whoAmIRequestPayload>;
export declare const socketPayload: io.UnionC<[io.TypeC<{
    kind: io.LiteralC<"userIdentification">;
    content: io.TypeC<{
        userId: io.StringC;
    }>;
}>, io.TypeC<{
    kind: io.LiteralC<"ping">;
    content: io.StringC;
}>, io.TypeC<{
    kind: io.LiteralC<"connectionOpened">;
    content: io.TypeC<{
        me: io.TypeC<{
            id: io.StringC;
            name: io.StringC;
        }>;
    }>;
}>, io.TypeC<{
    kind: io.LiteralC<"myStats">;
    content: io.TypeC<{
        id: io.StringC;
        name: io.StringC;
    }>;
}>, io.TypeC<{
    kind: io.LiteralC<"roomStats">;
    content: io.IntersectionC<[io.TypeC<{
        id: io.StringC;
        name: io.StringC;
        peersCount: io.NumberC;
        peers: io.RecordC<io.StringC, io.TypeC<{
            id: io.StringC;
            name: io.StringC;
        }>>;
    }>, io.UnionC<[io.TypeC<{
        type: io.LiteralC<"public">;
    }>, io.TypeC<{
        type: io.LiteralC<"private">;
        code: io.StringC;
    }>]>]>;
}>, io.TypeC<{
    kind: io.LiteralC<"peerJoinedRoom">;
    content: io.TypeC<{
        roomId: io.StringC;
        peerId: io.StringC;
    }>;
}>, io.TypeC<{
    kind: io.LiteralC<"joinRoomRequest">;
    content: io.TypeC<{
        roomId: io.StringC;
        code: io.UnionC<[io.StringC, io.UndefinedC]>;
    }>;
}>, io.TypeC<{
    kind: io.LiteralC<"joinRoomSuccess">;
    content: io.TypeC<{
        room: io.IntersectionC<[io.TypeC<{
            id: io.StringC;
            name: io.StringC;
            peersCount: io.NumberC;
            peers: io.RecordC<io.StringC, io.TypeC<{
                id: io.StringC;
                name: io.StringC;
            }>>;
        }>, io.UnionC<[io.TypeC<{
            type: io.LiteralC<"public">;
        }>, io.TypeC<{
            type: io.LiteralC<"private">;
            code: io.StringC;
        }>]>]>;
        me: io.TypeC<{
            id: io.StringC;
            name: io.StringC;
        }>;
    }>;
}>, io.TypeC<{
    kind: io.LiteralC<"joinRoomFailure">;
    content: io.KeyofC<{
        WrongCode: null;
        InexistentRoom: null;
        InexistentPeer: null;
    }>;
}>, io.TypeC<{
    kind: io.LiteralC<"whoami">;
    content: io.UnknownC;
}>]>;
export declare type SocketPayload = io.TypeOf<typeof socketPayload>;
