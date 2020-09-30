import * as io from 'io-ts';
import { isoDateTimeFromIsoString } from 'io-ts-isodatetime';
import { chessGameState, chessGameOffer } from '../chessGame';
import { peerRecord } from './peerRecord';
import { roomRecord } from './roomRecord';

export const roomStatsRecord = io.intersection([
  roomRecord,
  io.type({
    peersCount: io.number,
  }),
  // io.type({
  //   id: io.string,
  //   name: io.string,
    
  //   peers: io.record(io.string, peerRecord),
  //   createdAt: isoDateTimeFromIsoString,
  //   createdBy: io.string,

  //   // @deprecate in favor of activity
  //   game: chessGameState,
  //   gameOffer: chessGameOffer,
  // }),
  // io.union([
  //   io.type({ type: io.literal('public')}),
  //   io.type({
  //     type: io.literal('private'),
  //     code: io.string,
  //   })
  // ])
]);
export type RoomStatsRecord = io.TypeOf<typeof roomStatsRecord>;
