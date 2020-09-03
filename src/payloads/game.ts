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

export const gameResignationRequestPayload = io.type({
  kind: io.literal('gameResignationRequest'),
  content: io.undefined,
});
export type GameResignationRequestPayload = io.TypeOf<typeof gameResignationRequestPayload>;

export const gameMoveRequestPayload = io.type({
  kind: io.literal('gameMoveRequest'),
  content: chessMove,
});
export type GameMoveRequestPayload = io.TypeOf<typeof gameMoveRequestPayload>;

