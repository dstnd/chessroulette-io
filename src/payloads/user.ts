import { userRecord } from '../records';
import * as io from 'io-ts';

export const registerUserResponsePayload = userRecord;

export type RegisterUserResponsePayload = io.TypeOf<typeof registerUserResponsePayload>;