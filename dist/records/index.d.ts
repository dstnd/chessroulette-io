import * as io from 'io-ts';
export declare const peerRecord: io.TypeC<{
    id: io.StringC;
    name: io.StringC;
}>;
export declare type PeerRecord = io.TypeOf<typeof peerRecord>;
export declare const roomStatsRecord: io.TypeC<{
    id: io.StringC;
    name: io.StringC;
    peersCount: io.NumberC;
    peers: io.RecordC<io.StringC, io.TypeC<{
        id: io.StringC;
        name: io.StringC;
    }>>;
}>;
export declare type RoomStatsRecord = io.TypeOf<typeof roomStatsRecord>;
