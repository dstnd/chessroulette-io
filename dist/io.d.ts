import * as PayloadCodecs from './payloads';
import { Result } from './ts-results';
import * as ioTs from 'io-ts';
export declare const io: {
    serialize: <K extends "publicRoomsResponsePayload" | "webrtcInvitationPayload" | "webrtcNegotationPayload" | "webrtcRefusalPayload" | "signalingPayload" | "pingPayload" | "myStatsPayload" | "roomStatsPayload" | "connectionOpenedPayload" | "peerJoinedRoomPayload" | "joinRoomRequestPayload" | "joinRoomSuccessPayload" | "socketPayload", TCodec extends typeof PayloadCodecs[K], TRecord extends TCodec["_A"]>(_: TCodec, record: TRecord) => TRecord;
    deserialize: <K_1 extends "publicRoomsResponsePayload" | "webrtcInvitationPayload" | "webrtcNegotationPayload" | "webrtcRefusalPayload" | "signalingPayload" | "pingPayload" | "myStatsPayload" | "roomStatsPayload" | "connectionOpenedPayload" | "peerJoinedRoomPayload" | "joinRoomRequestPayload" | "joinRoomSuccessPayload" | "socketPayload", TCodec_1 extends typeof PayloadCodecs[K_1], TRecord_1 extends TCodec_1["_A"]>(codec: TCodec_1, serialized: string) => Result<TRecord_1, {
        type: "BadEncoding";
        reasons: ioTs.ValidationError[];
    }>;
};
