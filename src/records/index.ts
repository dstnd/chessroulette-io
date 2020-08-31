import * as io from 'io-ts';

export const userInfoRecord = io.type({
  id: io.string,
  name: io.string,
  avatarId: io.string,
  // Add any other pertinent details here if needed!
});
export type UserInfoRecord = io.TypeOf<typeof userInfoRecord>;

export const peerRecord = io.type({
  id: io.string,
  user: userInfoRecord,
});
export type PeerRecord = io.TypeOf<typeof peerRecord>;

export const roomStatsRecord = io.intersection([
  io.type({
    id: io.string,
    name: io.string,
    peersCount: io.number,
    peers: io.record(io.string, peerRecord),
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

// export const userRecord = peerRecord;
// export type UserRecord = io.TypeOf<typeof userRecord>;