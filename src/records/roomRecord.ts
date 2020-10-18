import * as io from 'io-ts';
import { isoDateTimeFromIsoString } from 'io-ts-isodatetime';
import { chessGameState, chessGameOffer } from '../chessGame';
import { peerRecord } from './peerRecord';

export const roomActivityOption = io.keyof({
  none: null,
  play: null,
});
export type RoomActivityOption = io.TypeOf<typeof roomActivityOption>;

export const roomNoActivityRecord = io.type({
  type: io.literal('none'),
});

export type RoomNoActivityRecord = io.TypeOf<typeof roomNoActivityRecord>;

export const roomPlayActivityRecord = io.intersection([
  io.type({
    type: io.literal('play'),
    game: chessGameState,
  }),
  io.partial({
    offer: chessGameOffer,
  }),
]);

export type RoomPlayActivityRecord = io.TypeOf<typeof roomPlayActivityRecord>;

export const roomActivityRecord = io.union([
  roomNoActivityRecord,
  roomPlayActivityRecord,
]);

export type RoomActivityRecord = io.TypeOf<typeof roomActivityRecord>;

export const roomType = io.keyof({
  public: null,
  private: null,
});
export type RoomType = io.TypeOf<typeof roomType>;

export const roomRecord = io.intersection([
  io.type({
    id: io.string,
    name: io.string,
    createdAt: isoDateTimeFromIsoString,
    createdBy: io.string,
    slug: io.string,

    peers: io.record(io.string, peerRecord),
    activity: roomActivityRecord,

    // TODO: Add
    // lastJoinedAt: null | ISODateTime;
    // lastLeftAt: null | ISODateTime;

    // TODO: Temporarily additon to match the room stats record
    // game: chessGameState,
    // gameOffer: chessGameOffer,
  }),
  io.union([
    io.type({
      type: io.literal('public'),
      code: io.null,
    }),
    io.type({
      type: io.literal('private'),
      code: io.string,
    })
  ])
]);
export type RoomRecord = io.TypeOf<typeof roomRecord>;

export const publicRoomRecord = io.intersection([
  roomRecord,
  io.type({
    type: io.literal('public'),
  }),
]);
export type PublicRoomRecord = io.TypeOf<typeof publicRoomRecord>;

export const privateRoomRecord = io.intersection([
  roomRecord,
  io.type({
    type: io.literal('private'),
  }),
]);;
export type PrivateRoomRecord = io.TypeOf<typeof privateRoomRecord>;

export const roomWithPlayActivityRecord = io.intersection([
  roomRecord,
  io.type({
    activity: roomPlayActivityRecord,
  }),
]);
export type RoomWithPlayActivityRecord = io.TypeOf<typeof roomWithPlayActivityRecord>;

export const roomWithNoActivityRecord = io.intersection([
  roomRecord,
  io.type({
    activity: roomNoActivityRecord,
  }),
]);
export type RoomWithNoActivityRecord = io.TypeOf<typeof roomWithNoActivityRecord>;
