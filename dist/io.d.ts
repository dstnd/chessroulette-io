import * as PayloadCodecs from './payloads';
import { Either } from 'fp-ts/lib/Either';
import { Result } from './ts-results';
import * as ioTs from 'io-ts';
export declare const toResult: <T, E>(either: Either<E, T>) => Result<T, E>;
export declare const io: {
    serialize: <K extends "publicRoomResponsePayload" | "publicRoomsResponsePayload" | "privateRoomResponsePayload" | "createRoomRequest" | "createRoomResponse" | "createChallengeRequest" | "createChallengeResponse" | "iceServerRecord" | "iceServersResponse" | "webrtcInvitationPayload" | "webrtcNegotationPayload" | "webrtcRefusalPayload" | "signalingPayload" | "userIdentificationPayload" | "pingPayload" | "myStatsPayload" | "roomStatsPayload" | "connectionOpenedPayload" | "peerJoinedRoomPayload" | "joinRoomRequestPayload" | "joinRoomSuccessPayload" | "joinRoomFailurePayload" | "whoAmIRequestPayload" | "socketPayload" | "createUserRequestPayload" | "createUserResponsePayload", TCodec extends typeof PayloadCodecs[K], TRecord extends TCodec["_A"]>(_: TCodec, record: TRecord) => TRecord;
    deserialize: <K_1 extends "publicRoomResponsePayload" | "publicRoomsResponsePayload" | "privateRoomResponsePayload" | "createRoomRequest" | "createRoomResponse" | "createChallengeRequest" | "createChallengeResponse" | "iceServerRecord" | "iceServersResponse" | "webrtcInvitationPayload" | "webrtcNegotationPayload" | "webrtcRefusalPayload" | "signalingPayload" | "userIdentificationPayload" | "pingPayload" | "myStatsPayload" | "roomStatsPayload" | "connectionOpenedPayload" | "peerJoinedRoomPayload" | "joinRoomRequestPayload" | "joinRoomSuccessPayload" | "joinRoomFailurePayload" | "whoAmIRequestPayload" | "socketPayload" | "createUserRequestPayload" | "createUserResponsePayload", TCodec_1 extends typeof PayloadCodecs[K_1], TRecord_1 extends TCodec_1["_A"]>(codec: TCodec_1, serialized: string) => Result<TRecord_1, {
        type: "BadEncoding";
        reasons: ioTs.ValidationError[];
    }>;
    toResult: <T, E>(either: Either<E, T>) => Result<T, E>;
};
