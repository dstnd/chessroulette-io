import * as io from "io-ts";
import { lichessUserRecord } from "./lichessRecords";

export const userInfoRecord = io.type({
  id: io.string,
  name: io.string,
  avatarId: io.string,
  // Add any other pertinent details here if needed!
});
export type UserInfoRecord = io.TypeOf<typeof userInfoRecord>;

export const userExternalAccountOpts = io.type({
  externalAccountType: io.literal('lichess'),
  externalAccountId: io.string,
  externalAccountInfo: lichessUserRecord,
});
export type UserExternalAccountOpts = io.TypeOf<typeof userExternalAccountOpts>;

export const registeredUserRecord = io.intersection([
  userInfoRecord,
  io.type({
    isGuest: io.literal(false),
    email: io.string,
  }),
  userExternalAccountOpts,
]);

export type RegisteredUserRecord = io.TypeOf<typeof registeredUserRecord>;

export const guestUserRecord = io.intersection([
  userInfoRecord,
  io.type({
    isGuest: io.literal(true),

    // ServerId - This is needed to be able to maintain stale/fresh guests
    //  when the server flushes the DB
    sid: io.string,
  }),
]);

export type GuestUserRecord = io.TypeOf<typeof guestUserRecord>;

export const userRecord = io.union([registeredUserRecord, guestUserRecord]);

export type UserRecord = io.TypeOf<typeof userRecord>;
