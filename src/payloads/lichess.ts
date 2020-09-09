import * as io from 'io-ts';
import { lichessUserRecord } from '../records/lichessRecords';

export const lichessUserResponsePayload = io.type({
  user: lichessUserRecord,
});