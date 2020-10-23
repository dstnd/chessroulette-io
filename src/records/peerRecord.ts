import * as io from 'io-ts';
import { isoDateTimeFromIsoString } from 'io-ts-isodatetime';
import { userRecord } from './userRecord';

// A Peer Record is a User that has an activ Session
export const peerRecord = io.intersection([
  io.type({
    // Deprecate this in favor of only using peer.user.id
    // This will ensure no discrepancies between the 2 ever exist
    //  since atm peer.id and peer.user.id are [implicitly] supposed to be the same
    id: io.string,
    user: userRecord,
  }),
  io.union([
    io.type({
      hasJoinedRoom: io.literal(false),
      joinedRoomId: io.null,
      joinedRoomAt: io.null,
    }),
    io.type({
      hasJoinedRoom: io.literal(true),
      joinedRoomId: io.string,
      joinedRoomAt: isoDateTimeFromIsoString,
    })
  ])
]);

export type PeerRecord = io.TypeOf<typeof peerRecord>;