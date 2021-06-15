import * as io from 'io-ts';

export const twitchUserRecord = io.type({
  id: io.string,
  email: io.string,
  firstName: io.union([io.string, io.undefined]),
  lastName: io.union([io.string, io.undefined]),
  name: io.union([io.string, io.undefined]),
});

export type TwitchUserRecord = io.TypeOf<typeof twitchUserRecord>;
