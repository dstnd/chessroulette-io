import * as io from 'io-ts';

export const country = io.type({
  name: io.string,
  languages: io.array(io.string),
  flagEmoji: io.string,
  flagEmojiU: io.string,
  phone: io.string,
  currency: io.string,
});

export type Country = io.TypeOf<typeof country>;
