import * as io from 'io-ts';
import { externalUserRecord } from '../records/externalVendorsRecords';
import { guestUserRecord } from '../records/userRecord';


// Check if User exists/ Attempts to Authenticate automatically if exists
export const externalVendor = io.keyof({
  facebook: null,
  lichess: null,
});
export type ExternalVendor = io.TypeOf<typeof externalVendor>;

export const userCheckInternalAccountRequestPayload = io.type({
  type: io.literal('internal'),
  email: io.string,
  verificationCode: io.string, // This is the code sent in the Email
});
export type UserCheckInternalAccountRequestPayload = io.TypeOf<typeof userCheckInternalAccountRequestPayload>;

export const userCheckExternalAccountRequestPayload = io.type({
  type: io.literal('external'),
  vendor: externalVendor,
  accessToken: io.string,
});
export type UserCheckExternalAccountRequestPayload = io.TypeOf<typeof userCheckExternalAccountRequestPayload>;

export const userCheckRequestPayload = io.union([
  userCheckInternalAccountRequestPayload,
  userCheckExternalAccountRequestPayload,
]);
export type UserCheckRequestPayload = io.TypeOf<typeof userCheckRequestPayload>;

export const userCheckVerificationFailedResponsePayload = io.type({
  status: io.literal('VerificationFailed'),
});
export type UserCheckVerificationFailedResponsePayload = io.TypeOf<typeof userCheckVerificationFailedResponsePayload>;

export const userCheckInexitentUserResponsePayload = io.type({
  status: io.literal('InexistentUser'),
  external: io.union([
    io.undefined,
    io.type({
      vendor: externalVendor,
      user: externalUserRecord,
    }),
  ]),
});
export type UserCheckInexitentUserResponsePayload = io.TypeOf<typeof userCheckInexitentUserResponsePayload>;

export const userCheckExistentUserResponsePayload = io.type({
  status: io.literal('ExistentUser'),
  accessToken: io.string,
});
export type UserCheckExistentUserResponsePayload = io.TypeOf<typeof userCheckExistentUserResponsePayload>;

export const userCheckResponsePayload = io.union([
  userCheckVerificationFailedResponsePayload,
  userCheckInexitentUserResponsePayload,
  userCheckExistentUserResponsePayload,
]);
export type UserCheckResponsePayload = io.TypeOf<typeof userCheckResponsePayload>;


// Email Verification

export const verifyEmailRequestPayload = io.type({
  email: io.string,
});
export type VerifyEmailRequestPayload = io.TypeOf<typeof verifyEmailRequestPayload>;

export const verifyEmailResponsePayload = io.undefined;
export type VerifyEmailResponsePayload = io.TypeOf<typeof verifyEmailResponsePayload>;

// Registration - In case the User Check came negative

export const createUserAccountRequestPayload = io.type({
  email: io.string,
  firstName: io.string,
  lastName: io.string,
  external: io.union([
    io.undefined,
    io.type({
      vendor: externalVendor,
      accessToken: io.string,
    }),
  ]),
});
export type CreateUserAccountRequestPayload = io.TypeOf<typeof createUserAccountRequestPayload>;

export const createUserAccountResponsePayload = io.type({
  // user: userRecord, // TODO: See if this is needed in this call - it's for ease of access at this point
  accessToken: io.string,
});
export type CreateUserAccountResponsePayload = io.TypeOf<typeof createUserAccountResponsePayload>;

export const guestAuthenticationRequestPayload = io.type({
  guestUser: io.union([guestUserRecord, io.undefined]),
});
export type GuestAuthenticationRequestPayload = io.TypeOf<
  typeof guestAuthenticationRequestPayload
>;

export const guestAuthenticationResponsePayload = io.type({
  guest: guestUserRecord,
});
export type GuestAuthenticationResponsePayload = io.TypeOf<
  typeof guestAuthenticationResponsePayload
>;
