import * as io from 'io-ts';
import { chatMessageRecord } from '../records/chatRecords';

export const broadcastChatMessagePayload = io.type({
  kind: io.literal('broadcastChatMessage'),
  content: chatMessageRecord,
});
export type BroadcastChatMessagePayload = io.TypeOf<typeof broadcastChatMessagePayload>;