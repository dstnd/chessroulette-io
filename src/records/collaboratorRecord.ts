import * as io from 'io-ts';

export const collaboratorPlatform = io.keyof({
  Twitch: true,
});

export type CollaboratorPlatform = io.TypeOf<typeof collaboratorPlatform>;

export const collaboratorRecord = io.type({
  email: io.string,
  platform: collaboratorPlatform,
  profileUrl: io.string,
  profilePicUrl: io.string,
  featuringRank: io.number,
  extra: io.union([io.undefined, io.type({})]),
});

export type CollaboratorRecord = io.TypeOf<typeof collaboratorRecord>;
