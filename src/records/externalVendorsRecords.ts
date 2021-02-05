import * as io from 'io-ts';
import { lichessUserRecord } from './lichessRecords';


export const facebookUserRecord = io.type({
  id: io.string,
  email: io.string,
  firstName: io.union([io.string, io.undefined]),
  lastName: io.union([io.string, io.undefined]),
  name: io.union([io.string, io.undefined]),
});
export type FacebookUserRecord = io.TypeOf<typeof facebookUserRecord>;

export const externalUserRecord = io.union([
  lichessUserRecord,
  facebookUserRecord,
]);

export type ExternalUserRecord = io.TypeOf<typeof externalUserRecord>;
