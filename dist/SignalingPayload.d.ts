import * as io from 'io-ts';
export declare const webrtcInvitationPayload: io.TypeC<{
    msg_type: io.LiteralC<"webrtc_invitation">;
    content: io.TypeC<{
        peer_id: io.StringC;
    }>;
}>;
export declare const webrtcNegotationPayload: io.TypeC<{
    msg_type: io.LiteralC<"webrtc_negotiation">;
    content: io.TypeC<{
        peer_id: io.StringC;
        forward: io.StringC;
    }>;
}>;
export declare const webrtcRefusalPayload: io.TypeC<{
    msg_type: io.LiteralC<"webrtc_refusal">;
    content: io.TypeC<{
        peer_id: io.StringC;
        reason: io.UnionC<[io.StringC, io.NullC]>;
    }>;
}>;
export declare const signalingMessagePayload: io.UnionC<[io.TypeC<{
    msg_type: io.LiteralC<"webrtc_invitation">;
    content: io.TypeC<{
        peer_id: io.StringC;
    }>;
}>, io.TypeC<{
    msg_type: io.LiteralC<"webrtc_negotiation">;
    content: io.TypeC<{
        peer_id: io.StringC;
        forward: io.StringC;
    }>;
}>, io.TypeC<{
    msg_type: io.LiteralC<"webrtc_refusal">;
    content: io.TypeC<{
        peer_id: io.StringC;
        reason: io.UnionC<[io.StringC, io.NullC]>;
    }>;
}>]>;
export declare type WebrtcInvitationPayload = io.TypeOf<typeof webrtcInvitationPayload>;
export declare type WebrtcNegotationPayload = io.TypeOf<typeof webrtcNegotationPayload>;
export declare type WebrtcRefusalPayload = io.TypeOf<typeof webrtcRefusalPayload>;
export declare type SignalingMessagePayload = io.TypeOf<typeof signalingMessagePayload>;
export declare const connectionOpenedPayload: io.TypeC<{
    msg_type: io.LiteralC<"connection_opened">;
    content: io.TypeC<{
        my_address: io.StringC;
    }>;
}>;
export declare const roomRecord: io.TypeC<{
    id: io.StringC;
    peers: io.RecordC<io.StringC, io.NullC>;
}>;
export declare const peerNetworkRefreshPayloadContent: io.TypeC<{
    me: io.StringC;
    count: io.NumberC;
    peers: io.RecordC<io.StringC, io.StringC>;
    all_rooms: io.RecordC<io.StringC, io.NullC>;
    joined_room: io.UnionC<[io.TypeC<{
        id: io.StringC;
        peers: io.RecordC<io.StringC, io.NullC>;
    }>, io.NullC]>;
}>;
export declare const peerNetworkRefreshPayload: io.TypeC<{
    msg_type: io.LiteralC<"peer_network_refresh">;
    content: io.TypeC<{
        me: io.StringC;
        count: io.NumberC;
        peers: io.RecordC<io.StringC, io.StringC>;
        all_rooms: io.RecordC<io.StringC, io.NullC>;
        joined_room: io.UnionC<[io.TypeC<{
            id: io.StringC;
            peers: io.RecordC<io.StringC, io.NullC>;
        }>, io.NullC]>;
    }>;
}>;
export declare const roomStatsUpdatePayload: io.TypeC<{
    msg_type: io.LiteralC<"room_stats_update">;
    content: io.TypeC<{
        id: io.StringC;
        peers: io.RecordC<io.StringC, io.NullC>;
    }>;
}>;
export declare const joinRoomPayload: io.TypeC<{
    msg_type: io.LiteralC<"join_room">;
    content: io.TypeC<{
        room_id: io.StringC;
    }>;
}>;
export declare const peerJoinedRoomPayload: io.TypeC<{
    msg_type: io.LiteralC<"peer_joined_room">;
    content: io.TypeC<{
        room_id: io.StringC;
        peer_id: io.StringC;
    }>;
}>;
export declare const nonSignalingMessagePayload: io.UnionC<[io.TypeC<{
    msg_type: io.LiteralC<"connection_opened">;
    content: io.TypeC<{
        my_address: io.StringC;
    }>;
}>, io.TypeC<{
    msg_type: io.LiteralC<"peer_network_refresh">;
    content: io.TypeC<{
        me: io.StringC;
        count: io.NumberC;
        peers: io.RecordC<io.StringC, io.StringC>;
        all_rooms: io.RecordC<io.StringC, io.NullC>;
        joined_room: io.UnionC<[io.TypeC<{
            id: io.StringC;
            peers: io.RecordC<io.StringC, io.NullC>;
        }>, io.NullC]>;
    }>;
}>, io.TypeC<{
    msg_type: io.LiteralC<"room_stats_update">;
    content: io.TypeC<{
        id: io.StringC;
        peers: io.RecordC<io.StringC, io.NullC>;
    }>;
}>, io.TypeC<{
    msg_type: io.LiteralC<"peer_joined_room">;
    content: io.TypeC<{
        room_id: io.StringC;
        peer_id: io.StringC;
    }>;
}>, io.TypeC<{
    msg_type: io.LiteralC<"join_room">;
    content: io.TypeC<{
        room_id: io.StringC;
    }>;
}>]>;
export declare type PeerNetworkRefreshPayload = io.TypeOf<typeof peerNetworkRefreshPayload>;
export declare type RoomRecord = io.TypeOf<typeof roomRecord>;
export declare type RoomStatsUpdatePayload = io.TypeOf<typeof roomStatsUpdatePayload>;
export declare type JoinRoomPayload = io.TypeOf<typeof joinRoomPayload>;
export declare type PeerJoinedRoomPayload = io.TypeOf<typeof peerJoinedRoomPayload>;
export declare type NonSignalingMessagePayload = io.TypeOf<typeof nonSignalingMessagePayload>;
export declare const socketMessagePayload: io.UnionC<[io.UnionC<[io.TypeC<{
    msg_type: io.LiteralC<"webrtc_invitation">;
    content: io.TypeC<{
        peer_id: io.StringC;
    }>;
}>, io.TypeC<{
    msg_type: io.LiteralC<"webrtc_negotiation">;
    content: io.TypeC<{
        peer_id: io.StringC;
        forward: io.StringC;
    }>;
}>, io.TypeC<{
    msg_type: io.LiteralC<"webrtc_refusal">;
    content: io.TypeC<{
        peer_id: io.StringC;
        reason: io.UnionC<[io.StringC, io.NullC]>;
    }>;
}>]>, io.UnionC<[io.TypeC<{
    msg_type: io.LiteralC<"connection_opened">;
    content: io.TypeC<{
        my_address: io.StringC;
    }>;
}>, io.TypeC<{
    msg_type: io.LiteralC<"peer_network_refresh">;
    content: io.TypeC<{
        me: io.StringC;
        count: io.NumberC;
        peers: io.RecordC<io.StringC, io.StringC>;
        all_rooms: io.RecordC<io.StringC, io.NullC>;
        joined_room: io.UnionC<[io.TypeC<{
            id: io.StringC;
            peers: io.RecordC<io.StringC, io.NullC>;
        }>, io.NullC]>;
    }>;
}>, io.TypeC<{
    msg_type: io.LiteralC<"room_stats_update">;
    content: io.TypeC<{
        id: io.StringC;
        peers: io.RecordC<io.StringC, io.NullC>;
    }>;
}>, io.TypeC<{
    msg_type: io.LiteralC<"peer_joined_room">;
    content: io.TypeC<{
        room_id: io.StringC;
        peer_id: io.StringC;
    }>;
}>, io.TypeC<{
    msg_type: io.LiteralC<"join_room">;
    content: io.TypeC<{
        room_id: io.StringC;
    }>;
}>]>]>;
export declare type SocketMessagePayload = io.TypeOf<typeof socketMessagePayload>;
