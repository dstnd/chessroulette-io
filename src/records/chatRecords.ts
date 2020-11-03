import * as io from 'io-ts';
import { isoDateTimeFromIsoString } from 'io-ts-isodatetime';
import { userInfoRecord } from './userRecord';

export const chatMessageRecord = io.type({
  content: io.string,
  fromUserId: io.string,
  sentAt: isoDateTimeFromIsoString,
});

export type ChatMessageRecord = io.TypeOf<typeof chatMessageRecord>;

export const chatHistoryRecord = io.type({
  id: io.string,
  messages: io.array(chatMessageRecord),
  usersInfo: io.record(io.string, userInfoRecord),
});
export type ChatHistoryRecord = io.TypeOf<typeof chatHistoryRecord>;