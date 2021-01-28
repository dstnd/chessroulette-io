import * as io from 'io-ts';
import { lichessUserRecord } from '../records/lichessRecords';


export const lichessAuthenticationRedirectUrlResponsePayload = io.type({
  redirectUrl: io.string,
});
export type LichessAuthenticationRedirectUrlPayload = io.TypeOf<
  typeof lichessAuthenticationRedirectUrlResponsePayload
>;

export const verifyLichessUserRequestPayload = io.type({
  token: io.string,
});
export type VerifyLichessUserRequestPayload = io.TypeOf<typeof verifyLichessUserRequestPayload>;

export const verifyLichessUserResponsePayload = io.type({
  user: lichessUserRecord,
});
export type VerifyLichessUserResponsePayload = io.TypeOf<typeof verifyLichessUserResponsePayload>;
