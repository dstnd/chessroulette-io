import * as io from 'io-ts';
import { userRecord } from '../records';

export const createUserRequestPayload = io.type({
  name: io.string,
});
export type CreateUserRequestPayload = io.TypeOf<typeof createUserRequestPayload>;

export const createUserResponsePayload = userRecord;
export type CreateUserResponsePayload = io.TypeOf<typeof createUserResponsePayload>;