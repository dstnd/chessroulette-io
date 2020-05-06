import * as io from 'io-ts';

export const peerRecord = io.type({
  id: io.string,
  name: io.string,
});
export type PeerRecord = io.TypeOf<typeof peerRecord>;

export const roomStatsRecord = io.type({
  id: io.string,
  name: io.string,
  peersCount: io.number,
  peers: io.record(io.string, peerRecord),
});
export type RoomStatsRecord = io.TypeOf<typeof roomStatsRecord>;
