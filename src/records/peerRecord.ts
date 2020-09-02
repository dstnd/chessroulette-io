import * as io from 'io-ts';
import { userInfoRecord, userRecord } from './userRecord';

export const peerRecord = io.type({
  id: io.string,
  user: userRecord,
});
export type PeerRecord = io.TypeOf<typeof peerRecord>;