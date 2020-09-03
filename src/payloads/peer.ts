import * as io from 'io-ts';
import { peerRecord } from '../records/peerRecord';
// import { userRecord } from '../records';

export const registerPeerRequestPayload = io.type({
  userId: io.string,
});
export type RegisterPeerRequestPayload = io.TypeOf<typeof registerPeerRequestPayload>;

export const registerPeerResponsePayload = peerRecord;
export type RegisterPeerResponsePayload = io.TypeOf<typeof registerPeerResponsePayload>;

export const myStatsPayload = io.type({
  kind: io.literal('myStats'),
  content: peerRecord,
});
export type MyStatsPayload = io.TypeOf<typeof myStatsPayload>;