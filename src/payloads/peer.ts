import * as io from 'io-ts';
import { peerRecord, userInfoRecord } from '../records';
// import { userRecord } from '../records';

export const registerPeerRequestPayload = io.type({
  userId: io.string,
});
export type RegisterPeerRequestPayload = io.TypeOf<typeof registerPeerRequestPayload>;

export const registerPeerResponsePayload = peerRecord;
export type RegisterPeerResponsePayload = io.TypeOf<typeof registerPeerResponsePayload>;