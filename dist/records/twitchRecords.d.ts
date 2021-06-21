import * as io from 'io-ts';
export declare const twitchUserRecord: io.TypeC<{
    id: io.StringC;
    email: io.StringC;
    display_name: io.StringC;
    profile_image_url: io.StringC;
}>;
export declare type TwitchUserRecord = io.TypeOf<typeof twitchUserRecord>;
