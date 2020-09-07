import * as io from 'io-ts';
import { chessMove } from '../chessGame/boardRecords';

export const gameJoinRequestPayload = io.type({
  kind: io.literal('gameJoinRequest'),
  content: io.undefined,
});
export type GameJoinRequestPayload = io.TypeOf<typeof gameJoinRequestPayload>;

export const gameDrawOfferingRequestPayload = io.type({
  kind: io.literal('gameDrawOfferingRequest'),
  content: io.undefined,
});
export type GameDrawOfferingRequestPayload = io.TypeOf<typeof gameDrawOfferingRequestPayload>;

export const gameDrawAcceptRequestPayload = io.type({
  kind: io.literal('gameDrawAcceptRequest'),
  content: io.undefined,
});
export type GameDrawAcceptRequestPayload = io.TypeOf<typeof gameDrawAcceptRequestPayload>;

export const gameDrawDenyRequestPayload = io.type({
  kind: io.literal('gameDrawDenyRequest'),
  content: io.undefined,
});
export type GameDrawDenyRequestPayload = io.TypeOf<typeof gameDrawDenyRequestPayload>;

export const gameResignationRequestPayload = io.type({
  kind: io.literal('gameResignationRequest'),
  content: io.undefined,
});
export type GameResignationRequestPayload = io.TypeOf<typeof gameResignationRequestPayload>;

export const gameAbortionRequestPayload = io.type({
  kind: io.literal('gameAbortionRequest'),
  content: io.undefined,
});
export type GameAbortionRequestPayload = io.TypeOf<typeof gameAbortionRequestPayload>;

export const gameMoveRequestPayload = io.type({
  kind: io.literal('gameMoveRequest'),
  content: chessMove,
});
export type GameMoveRequestPayload = io.TypeOf<typeof gameMoveRequestPayload>;

export const gameRematchOfferingRequestPayload = io.type({
  kind: io.literal('gameRematchOfferingRequest'),
  content: io.undefined,
});
export type GameRematchOfferingRequestPayload = io.TypeOf<typeof gameRematchOfferingRequestPayload>;

export const gameRematchAcceptRequestPayload = io.type({
  kind: io.literal('gameRematchAcceptRequest'),
  content: io.undefined,
});
export type GameRematchAcceptRequestPayload = io.TypeOf<typeof gameRematchAcceptRequestPayload>;

export const gameRematchDenyRequestPayload = io.type({
  kind: io.literal('gameRematchDenyRequest'),
  content: io.undefined,
});
export type GameRematchDenyRequestPayload = io.TypeOf<typeof gameRematchDenyRequestPayload>;
