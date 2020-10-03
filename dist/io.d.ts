import * as PayloadCodecs from './payloads';
import { Either } from 'fp-ts/lib/Either';
import { Result } from 'ts-results';
import * as ioTs from 'io-ts';
export declare const toResult: <T, E>(either: Either<E, T>) => Result<T, E>;
export declare type IODeserializationError = {
    type: 'BadEncoding';
    reasons: ioTs.ValidationError[];
};
export declare const isIODeserializationError: (e: unknown) => e is IODeserializationError;
export declare const io: {
    serialize: <K extends "statsReaderIdentificationPayload" | "iceServerRecord" | "iceServersResponse" | "webrtcInvitationPayload" | "webrtcNegotationPayload" | "webrtcRefusalPayload" | "signalingPayload" | "userIdentificationPayload" | "pingPayload" | "connectionOpenedPayload" | "whoAmIRequestPayload" | "genericFailureResponsePayload" | "socketPayload" | "registerPeerRequestPayload" | "registerPeerResponsePayload" | "myStatsPayload" | "registerUserResponsePayload" | "gameJoinRequestPayload" | "gameDrawOfferingRequestPayload" | "gameDrawAcceptRequestPayload" | "gameDrawDenyRequestPayload" | "gameResignationRequestPayload" | "gameAbortionRequestPayload" | "gameMoveRequestPayload" | "gameRematchOfferingRequestPayload" | "gameRematchAcceptRequestPayload" | "gameRematchDenyRequestPayload" | "createRoomRequest" | "createRoomResponse" | "publicRoomResponsePayload" | "privateRoomResponsePayload" | "publicRoomsResponsePayload" | "roomResponsePayload" | "joinedRoomUpdatedPayload" | "joinRoomRequestPayload" | "joinRoomSuccessPayload" | "joinRoomFailurePayload" | "peerJoinedRoomPayload" | "lichessUserResponsePayload" | "authenticationRedirectUrlResponsePayload" | "getLichessUserRequestPayload" | "getLichessUserResponsePayload" | "authenticationViaExternalAccountRequestPayload" | "authenticationViaExistentUserRequestPayload" | "authenticationRequestPayload" | "authenticationResponsePayload" | "guestAuthenticationRequestPayload" | "guestAuthenticationResponsePayload" | "roomsStatsPayload" | "peersStatsPayload" | "statsSocketPayload" | "baseCreateChallengeRequest" | "createPublicChallengeRequest" | "createPrivateChallengeRequest" | "createChallengeRequest" | "createChallengeResponse" | "removeChallengeRequest" | "acceptChallengeRequest" | "quickPairingRequest" | "quickPairingMatchedResponse" | "quickPairingPendingResponse" | "quickPairingResponse" | "challengeAcceptedPayload", TCodec extends typeof PayloadCodecs[K], TRecord extends ioTs.TypeOf<TCodec>>(_: TCodec, record: TRecord) => TRecord;
    deserialize: <K_1 extends "statsReaderIdentificationPayload" | "iceServerRecord" | "iceServersResponse" | "webrtcInvitationPayload" | "webrtcNegotationPayload" | "webrtcRefusalPayload" | "signalingPayload" | "userIdentificationPayload" | "pingPayload" | "connectionOpenedPayload" | "whoAmIRequestPayload" | "genericFailureResponsePayload" | "socketPayload" | "registerPeerRequestPayload" | "registerPeerResponsePayload" | "myStatsPayload" | "registerUserResponsePayload" | "gameJoinRequestPayload" | "gameDrawOfferingRequestPayload" | "gameDrawAcceptRequestPayload" | "gameDrawDenyRequestPayload" | "gameResignationRequestPayload" | "gameAbortionRequestPayload" | "gameMoveRequestPayload" | "gameRematchOfferingRequestPayload" | "gameRematchAcceptRequestPayload" | "gameRematchDenyRequestPayload" | "createRoomRequest" | "createRoomResponse" | "publicRoomResponsePayload" | "privateRoomResponsePayload" | "publicRoomsResponsePayload" | "roomResponsePayload" | "joinedRoomUpdatedPayload" | "joinRoomRequestPayload" | "joinRoomSuccessPayload" | "joinRoomFailurePayload" | "peerJoinedRoomPayload" | "lichessUserResponsePayload" | "authenticationRedirectUrlResponsePayload" | "getLichessUserRequestPayload" | "getLichessUserResponsePayload" | "authenticationViaExternalAccountRequestPayload" | "authenticationViaExistentUserRequestPayload" | "authenticationRequestPayload" | "authenticationResponsePayload" | "guestAuthenticationRequestPayload" | "guestAuthenticationResponsePayload" | "roomsStatsPayload" | "peersStatsPayload" | "statsSocketPayload" | "baseCreateChallengeRequest" | "createPublicChallengeRequest" | "createPrivateChallengeRequest" | "createChallengeRequest" | "createChallengeResponse" | "removeChallengeRequest" | "acceptChallengeRequest" | "quickPairingRequest" | "quickPairingMatchedResponse" | "quickPairingPendingResponse" | "quickPairingResponse" | "challengeAcceptedPayload", TCodec_1 extends typeof PayloadCodecs[K_1], TRecord_1 extends ioTs.TypeOf<TCodec_1>>(codec: TCodec_1, serialized: string) => Result<TRecord_1, IODeserializationError>;
    toResult: <T, E>(either: Either<E, T>) => Result<T, E>;
    isIODeserializationError: (e: unknown) => e is IODeserializationError;
};
