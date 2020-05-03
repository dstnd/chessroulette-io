import * as io from 'io-ts';
export declare const peerMessage: io.TypeC<{
    fromPeerId: io.StringC;
    toPeerId: io.StringC;
    content: io.StringC;
    timestamp: io.StringC;
}>;
export declare type PeerMessage = io.TypeOf<typeof peerMessage>;
