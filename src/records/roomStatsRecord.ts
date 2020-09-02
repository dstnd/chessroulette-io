import * as io from 'io-ts';
import { chessGameState } from '../chessGame';
import { peerRecord } from './peerRecord';

export const roomStatsRecord = io.intersection([
  io.type({
    id: io.string,
    name: io.string,
    peersCount: io.number,
    peers: io.record(io.string, peerRecord),
    game: chessGameState,
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
