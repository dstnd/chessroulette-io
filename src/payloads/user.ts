import { userRecord } from '../records/userRecord';
import * as io from 'io-ts';

export const registerUserResponsePayload = userRecord;

export type RegisterUserResponsePayload = io.TypeOf<typeof registerUserResponsePayload>;