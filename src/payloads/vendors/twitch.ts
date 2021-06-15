import * as io from 'io-ts';
import { twitchUserRecord } from '../../records/twitchRecords';

export const verifyTwitchUserRequestPayload = io.type({
  token: io.string,
});
export type VerifyTwitchUserRequestPayload = io.TypeOf<typeof verifyTwitchUserRequestPayload>;

export const verifyTwitchUserResponsePayload = io.type({
  user: twitchUserRecord,
});
export type VerifyLichessUserResponsePayload = io.TypeOf<typeof verifyTwitchUserResponsePayload>;
