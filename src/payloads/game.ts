import * as io from 'io-ts';
import { chessMove } from '../chessGame/boardRecords';
import { chessGameColor } from '../chessGame';

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

export const gameResignationRequestPayload = io.type({
  kind: io.literal('gameResignationRequest'),
  content: io.type({
    resigningColor: chessGameColor,
  }),
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

