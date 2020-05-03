import * as io from 'io-ts';
export declare const joinRoomRequestPayload: io.TypeC<{
    room_id: io.StringC;
    peer_id: io.StringC;
}>;
export declare const joinRoomResponsePayload: io.TypeC<{
    me: io.StringC;
    count: io.NumberC;
    peers: io.RecordC<io.StringC, io.StringC>;
    all_rooms: io.RecordC<io.StringC, io.NullC>;
    joined_room: io.UnionC<[io.TypeC<{
        id: io.StringC;
        peers: io.RecordC<io.StringC, io.NullC>;
    }>, io.NullC]>;
}>;
export declare type JoinRoomRequestPayloadRecord = io.TypeOf<typeof joinRoomRequestPayload>;
export declare type JoinRoomResponsePayloadRecord = io.TypeOf<typeof joinRoomResponsePayload>;
