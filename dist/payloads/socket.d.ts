import * as io from 'io-ts';
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
    content: io.TypeC<{
        id: io.StringC;
        name: io.StringC;
        peersCount: io.NumberC;
        peers: io.RecordC<io.StringC, io.TypeC<{
            id: io.StringC;
            name: io.StringC;
        }>>;
    }>;
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
    }>;
}>;
export declare type JoinRoomRequestPayload = io.TypeOf<typeof joinRoomRequestPayload>;
export declare const joinRoomSuccessPayload: io.TypeC<{
    kind: io.LiteralC<"joinRoomSuccess">;
    content: io.TypeC<{
        room: io.TypeC<{
            id: io.StringC;
            name: io.StringC;
            peersCount: io.NumberC;
            peers: io.RecordC<io.StringC, io.TypeC<{
                id: io.StringC;
                name: io.StringC;
            }>>;
        }>;
        me: io.TypeC<{
            id: io.StringC;
            name: io.StringC;
        }>;
    }>;
}>;
export declare type JoinRoomSuccessPayload = io.TypeOf<typeof joinRoomSuccessPayload>;
export declare const socketPayload: io.UnionC<[io.TypeC<{
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
    content: io.TypeC<{
        id: io.StringC;
        name: io.StringC;
        peersCount: io.NumberC;
        peers: io.RecordC<io.StringC, io.TypeC<{
            id: io.StringC;
            name: io.StringC;
        }>>;
    }>;
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
    }>;
}>, io.TypeC<{
    kind: io.LiteralC<"joinRoomSuccess">;
    content: io.TypeC<{
        room: io.TypeC<{
            id: io.StringC;
            name: io.StringC;
            peersCount: io.NumberC;
            peers: io.RecordC<io.StringC, io.TypeC<{
                id: io.StringC;
                name: io.StringC;
            }>>;
        }>;
        me: io.TypeC<{
            id: io.StringC;
            name: io.StringC;
        }>;
    }>;
}>]>;
export declare type SocketPayload = io.TypeOf<typeof socketPayload>;
