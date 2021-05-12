import * as io from "io-ts";
import { country } from "./locationRecords";
// import { lichessUserRecord } from "./lichessRecords";

const basicUserInfoRecord = io.type({
  id: io.string,
  firstName: io.string,
  lastName: io.string,
  avatarId: io.string,
  // Add any other pertinent details here if needed!

  // @deprecate in favor of the more explicit first/last name
  name: io.string,
});

export const guestUserInfoRecord = io.intersection([
  basicUserInfoRecord,
  io.type({
    isGuest: io.literal(true),
  }),
]);

export const registeredUserInfoRecord = io.intersection([
  basicUserInfoRecord,
  io.type({
    isGuest: io.literal(false),
    profilePicUrl: io.union([io.string, io.undefined]),
    username: io.string,
    country: io.union([country, io.undefined]),
  }),
]);

export const userInfoRecord = io.union([guestUserInfoRecord, registeredUserInfoRecord]);
export type UserInfoRecord = io.TypeOf<typeof userInfoRecord>;

// export const userExternalAccountOpts = io.type({
//   externalAccountType: io.literal('lichess'),
//   externalAccountId: io.string,
//   externalAccountInfo: lichessUserRecord,
// });
// export type UserExternalAccountOpts = io.TypeOf<typeof userExternalAccountOpts>;

export const userExternalAccountRecord = io.type({
  userId: io.union([io.undefined, io.string]),
});

export type UserExternalAccountRecord = io.TypeOf<typeof userExternalAccountRecord>;

export const userExternalAccountByVendorMap = io.type({
  facebook: io.union([io.undefined, userExternalAccountRecord]),
  lichess: io.union([io.undefined, userExternalAccountRecord]),
});

export type UserExternalAccountByVendorMap = io.TypeOf<typeof userExternalAccountByVendorMap>;

export const registeredUserRecord = io.intersection([
  // basicUserInfoRecord,
  registeredUserInfoRecord,
  io.type({
    // isGuest: io.literal(false),
    email: io.string,
    // profilePicUrl: io.union([io.string, io.undefined]),
    externalAccounts: io.union([io.undefined, userExternalAccountByVendorMap]),

    // username: io.string,
    // country: io.union([country, io.undefined]),
  }),
]);

export type RegisteredUserRecord = io.TypeOf<typeof registeredUserRecord>;

export const guestUserRecord = io.intersection([
  // basicUserInfoRecord,
  guestUserInfoRecord,
  io.type({
    // isGuest: io.literal(true),

    // ServerId - This is needed to be able to maintain stale/fresh guests
    //  when the server flushes the DB
    sid: io.string,
  }),
]);

export type GuestUserRecord = io.TypeOf<typeof guestUserRecord>;

export const userRecord = io.union([registeredUserRecord, guestUserRecord]);

export type UserRecord = io.TypeOf<typeof userRecord>;
