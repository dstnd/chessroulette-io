import * as io from 'io-ts';
import { userRecord, guestUserRecord } from '../records/userRecord';


export const authenticationViaExternalAccountRequestPayload = io.type({
  externalAccountType: io.keyof({
    lichess: null,
    facebook: null,
  }),
  externalAccountToken: io.string,
});
export type AuthenticationViaExternalAccountRequestPayload = io.TypeOf<
  typeof authenticationViaExternalAccountRequestPayload
>;

export const authenticationViaExistentUserRequestPayload = io.type({
  userId: io.string,
});
export type AuthenticationViaExistentUserRequestPayload = io.TypeOf<
  typeof authenticationViaExistentUserRequestPayload
>;

export const authenticationRequestPayload = io.union([
  authenticationViaExternalAccountRequestPayload,
  authenticationViaExistentUserRequestPayload,
]);
export type AuthenticationRequestPayload = io.TypeOf<typeof authenticationRequestPayload>;

export const authenticationResponsePayload = io.type({
  user: userRecord,

  /// TODO: Commenting this for now but it's supposed to be used later
  //  in all subsequent request headers
  // authToken: io.string,
});
export type AuthenticationResponsePayload = io.TypeOf<typeof authenticationResponsePayload>;

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
