import * as io from 'io-ts';
export declare const myStatsPayload: io.TypeC<{
    msg_type: io.LiteralC<"my_stats">;
    content: io.TypeC<{
        id: io.StringC;
        name: io.StringC;
    }>;
}>;
export declare type MyStatsPayload = io.TypeOf<typeof myStatsPayload>;
export declare const roomStatsPayload: io.TypeC<{
    msg_type: io.LiteralC<"room_stats">;
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
    msg_type: io.LiteralC<"connection_opened">;
    content: io.TypeC<{
        me: io.TypeC<{
            id: io.StringC;
            name: io.StringC;
        }>;
    }>;
}>;
export declare type ConnectionOpenedPayload = io.TypeOf<typeof connectionOpenedPayload>;
export declare const peerJoinedRoomPayload: io.TypeC<{
    msg_type: io.LiteralC<"peer_joined_room">;
    content: io.TypeC<{
        room_id: io.StringC;
        peer_id: io.StringC;
    }>;
}>;
export declare type PeerJoinedRoomPayload = io.TypeOf<typeof peerJoinedRoomPayload>;
export declare const joinRoomRequestPayload: io.TypeC<{
    msg_type: io.LiteralC<"join_room_request">;
    content: io.TypeC<{
        room_id: io.StringC;
    }>;
}>;
export declare type JoinRoomRequestPayload = io.TypeOf<typeof joinRoomRequestPayload>;
export declare const joinRoomSuccessPayload: io.TypeC<{
    msg_type: io.LiteralC<"join_room_success">;
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
    msg_type: io.LiteralC<"connection_opened">;
    content: io.TypeC<{
        me: io.TypeC<{
            id: io.StringC;
            name: io.StringC;
        }>;
    }>;
}>, io.TypeC<{
    msg_type: io.LiteralC<"my_stats">;
    content: io.TypeC<{
        id: io.StringC;
        name: io.StringC;
    }>;
}>, io.TypeC<{
    msg_type: io.LiteralC<"room_stats">;
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
    msg_type: io.LiteralC<"peer_joined_room">;
    content: io.TypeC<{
        room_id: io.StringC;
        peer_id: io.StringC;
    }>;
}>, io.TypeC<{
    msg_type: io.LiteralC<"join_room_request">;
    content: io.TypeC<{
        room_id: io.StringC;
    }>;
}>, io.TypeC<{
    msg_type: io.LiteralC<"join_room_success">;
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
