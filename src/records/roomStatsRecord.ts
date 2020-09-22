import * as io from 'io-ts';
import { isoDateTimeFromIsoString } from 'io-ts-isodatetime';
import { chessGameState, chessGameOffer } from '../chessGame';
import { peerRecord } from './peerRecord';


export const roomStatsRecord = io.intersection([
  io.type({
    id: io.string,
    name: io.string,
    peersCount: io.number,
    peers: io.record(io.string, peerRecord),
    game: chessGameState,
    gameOffer: chessGameOffer,
    createdAt: isoDateTimeFromIsoString,
    createdBy: io.string,
  }),
  io.union([
    io.type({ type: io.literal('public')}),
    io.type({
      type: io.literal('private'),
      code: io.string,
    })
  ])
]);
export type RoomStatsRecord = io.TypeOf<typeof roomStatsRecord>;

export const roomType = io.keyof({
  public: null,
  private: null,
});
export type RoomType = io.TypeOf<typeof roomType>;
