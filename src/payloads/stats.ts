import * as io from 'io-ts';
import { peerRecord } from '../records/peerRecord';
import { roomStatsRecord } from '../records/roomStatsRecord';

export const roomsStatsPayload = io.type({
  kind: io.literal('roomsStats'),
  content: io.array(roomStatsRecord),
});
export type RoomsStatsPayload = io.TypeOf<typeof roomsStatsPayload>;

export const peersStatsPayload = io.type({
  kind: io.literal('peersStats'),
  content: io.array(peerRecord),
});
export type PeersStatsPayload = io.TypeOf<typeof peersStatsPayload>;

export const statsSocketPayload = io.union([
  peersStatsPayload,
  roomsStatsPayload,
]);
export type StatsSocketPayload = io.TypeOf<typeof statsSocketPayload>;