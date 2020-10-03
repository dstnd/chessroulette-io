import * as io from 'io-ts';

export const iceServerRecord = io.type({
  url: io.string,
  urls: io.string,
  credential: io.union([io.string, io.undefined]),
  username: io.union([io.string, io.undefined]),
})
export type IceServerRecord = io.TypeOf<typeof iceServerRecord>;

export const iceServersResponse = io.array(iceServerRecord);
export type IceServersResponse = io.TypeOf<typeof iceServersResponse>;
