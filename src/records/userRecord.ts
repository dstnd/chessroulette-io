import * as io from 'io-ts';

export const userInfoRecord = io.type({
  id: io.string,
  name: io.string,
  avatarId: io.string,
  // Add any other pertinent details here if needed!
});
export type UserInfoRecord = io.TypeOf<typeof userInfoRecord>;

export const registeredUserRecord = io.intersection([
  userInfoRecord,
  io.type({
    isGuest: io.literal(false),
  }),
]);

export type RegisterdUserRecord = io.TypeOf<typeof registeredUserRecord>;

export const guestUserRecord = io.intersection([
  userInfoRecord,
  io.type({
    isGuest: io.literal(true),
  }),
]);

export type GuestUserRecord = io.TypeOf<typeof guestUserRecord>;

export const userRecord = io.union([registeredUserRecord, guestUserRecord]);

export type UserRecord = io.TypeOf<typeof userRecord>;
