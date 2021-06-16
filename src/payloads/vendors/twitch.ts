import * as io from 'io-ts';
import { twitchUserRecord } from '../../records/twitchRecords';

export const twitchAuthenticationRedirectUrlResponsePayload = io.type({
  redirectUrl: io.string,
});
export type TwitchAuthenticationRedirectUrlPayload = io.TypeOf<
  typeof twitchAuthenticationRedirectUrlResponsePayload
>;
export const verifyTwitchUserRequestPayload = io.type({
  token: io.string,
});
export type VerifyTwitchUserRequestPayload = io.TypeOf<typeof verifyTwitchUserRequestPayload>;

export const verifyTwitchUserResponsePayload = io.type({
  user: twitchUserRecord,
});
export type VerifyTwitchUserResponsePayload = io.TypeOf<typeof verifyTwitchUserResponsePayload>;
