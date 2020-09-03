import * as PayloadCodecs from './payloads';
import { Either } from 'fp-ts/lib/Either';
import { Result } from './ts-results';
import * as ioTs from 'io-ts';
export declare const toResult: <T, E>(either: Either<E, T>) => Result<T, E>;
export declare const io: {
    serialize: <K extends "publicRoomResponsePayload" | "publicRoomsResponsePayload" | "privateRoomResponsePayload" | "gameInitConfig" | "createRoomRequest" | "createRoomResponse" | "createChallengeRequest" | "createChallengeResponse" | "iceServerRecord" | "iceServersResponse" | "webrtcInvitationPayload" | "webrtcNegotationPayload" | "webrtcRefusalPayload" | "signalingPayload" | "userIdentificationPayload" | "pingPayload" | "connectionOpenedPayload" | "whoAmIRequestPayload" | "genericFailureResponsePayload" | "socketPayload" | "registerPeerRequestPayload" | "registerPeerResponsePayload" | "myStatsPayload" | "registerUserResponsePayload" | "gameJoinRequestPayload" | "gameDrawOfferingRequestPayload" | "gameResignationRequestPayload" | "gameMoveRequestPayload" | "roomStatsPayload" | "joinRoomRequestPayload" | "joinRoomSuccessPayload" | "joinRoomFailurePayload" | "peerJoinedRoomPayload", TCodec extends typeof PayloadCodecs[K], TRecord extends ioTs.TypeOf<TCodec>>(_: TCodec, record: TRecord) => TRecord;
    deserialize: <K_1 extends "publicRoomResponsePayload" | "publicRoomsResponsePayload" | "privateRoomResponsePayload" | "gameInitConfig" | "createRoomRequest" | "createRoomResponse" | "createChallengeRequest" | "createChallengeResponse" | "iceServerRecord" | "iceServersResponse" | "webrtcInvitationPayload" | "webrtcNegotationPayload" | "webrtcRefusalPayload" | "signalingPayload" | "userIdentificationPayload" | "pingPayload" | "connectionOpenedPayload" | "whoAmIRequestPayload" | "genericFailureResponsePayload" | "socketPayload" | "registerPeerRequestPayload" | "registerPeerResponsePayload" | "myStatsPayload" | "registerUserResponsePayload" | "gameJoinRequestPayload" | "gameDrawOfferingRequestPayload" | "gameResignationRequestPayload" | "gameMoveRequestPayload" | "roomStatsPayload" | "joinRoomRequestPayload" | "joinRoomSuccessPayload" | "joinRoomFailurePayload" | "peerJoinedRoomPayload", TCodec_1 extends typeof PayloadCodecs[K_1], TRecord_1 extends ioTs.TypeOf<TCodec_1>>(codec: TCodec_1, serialized: string) => Result<TRecord_1, {
        type: 'BadEncoding';
        reasons: ioTs.ValidationError[];
    }>;
    toResult: <T, E>(either: Either<E, T>) => Result<T, E>;
};
