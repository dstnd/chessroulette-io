import * as io from "io-ts";
// import { lichessUserRecord } from "./lichessRecords";

export const userInfoRecord = io.type({
  id: io.string,
  firstName: io.string,
  lastName: io.string,
  avatarId: io.string,
  // Add any other pertinent details here if needed!

  // @deprecate in favor of the more explicit first/last name
  name: io.string,
});
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
  userInfoRecord,
  io.type({
    isGuest: io.literal(false),
    email: io.string,
    profilePicUrl: io.union([io.string, io.undefined]),
    externalAccounts: io.union([io.undefined, userExternalAccountByVendorMap]),
  }),
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
