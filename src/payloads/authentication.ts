import * as io from "io-ts";
import { lichessUserRecord } from "../records/lichessRecords";
import { userRecord, guestUserRecord } from "../records/userRecord";

export const authenticationRedirectUrlResponsePayload = io.type({
  redirectUrl: io.string,
});

export type AuthenticationRedirectUrlPayload = io.TypeOf<
  typeof authenticationRedirectUrlResponsePayload
>;

export const getLichessUserRequestPayload = io.type({
  token: io.string,
});
export type GetLichessUserRequestPayload = io.TypeOf<
  typeof getLichessUserRequestPayload
>;

export const getLichessUserResponsePayload = io.type({
  user: lichessUserRecord,
});
export type GetLichessUserResponsePayload = io.TypeOf<
  typeof getLichessUserResponsePayload
>;

export const authenticationViaExternalAccountRequestPayload = io.type({
  externalAccountType: io.keyof({ lichess: null }),
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

export type AuthenticationRequestPayload = io.TypeOf<
  typeof authenticationRequestPayload
>;

export const authenticationResponsePayload = io.type({
  user: userRecord,

  /// TODO: Commenting this for now but it's supposed to be used later
  //  in all subsequent request headers
  // authToken: io.string,
});

export type AuthenticationResponsePayload = io.TypeOf<
  typeof authenticationResponsePayload
>;

export const guestAuthenticationResponsePayload = io.type({
  guest: guestUserRecord,
});

export type GuestAuthenticationResponsePayload = io.TypeOf<
  typeof guestAuthenticationResponsePayload
>;

// export const guestAuthenticationResponsePayload
