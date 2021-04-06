import * as io from 'io-ts';
export declare const country: io.TypeC<{
    name: io.StringC;
    languages: io.ArrayC<io.StringC>;
    flagEmoji: io.StringC;
    flagEmojiU: io.StringC;
    phone: io.StringC;
    currency: io.StringC;
}>;
export declare type Country = io.TypeOf<typeof country>;
