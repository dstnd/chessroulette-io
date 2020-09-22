import * as io from 'io-ts';
import { isoDateTimeFromIsoString } from 'io-ts-isodatetime';
import { userRecord } from './userRecord';

export const peerRecord = io.intersection([
  io.type({
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