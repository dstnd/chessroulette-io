import * as io from 'io-ts';

export const publicRoomsResponsePayload = io.array(io.type({
  id: io.string,
  name: io.string,
  peersCount: io.number,
}));
export type PublicRoomsResponsePayload = io.TypeOf<typeof publicRoomsResponsePayload>;
