import * as io from 'io-ts';
import { isoDateFromUnixTime } from 'io-ts-isodatetime';

export const lichessRatingRecord = io.type({
  games: io.number,
  rating: io.number,

  // TODO: Not sure what these are
  // prog: io.number,
  // prov: io.boolean,
  // rd: io.number,
});

export type LichessRatingRecord = io.TypeOf<typeof lichessRatingRecord>;

export const lichessUserRecord = io.type({
  // createdAt: isoDateFromUnixTime,
  email: io.string,
  id: io.string,
  username: io.string,
  perfs: io.type({
    blitz: lichessRatingRecord,
    bullet: lichessRatingRecord,
    classical: lichessRatingRecord,
    correspondence: lichessRatingRecord,
    puzzle: lichessRatingRecord,
    rapid: lichessRatingRecord,
  }),
});

export type LichessUserRecord = io.TypeOf<typeof lichessUserRecord>;
