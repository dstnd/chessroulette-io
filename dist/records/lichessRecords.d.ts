import * as io from 'io-ts';
export declare const lichessRatingRecord: io.TypeC<{
    games: io.NumberC;
    rating: io.NumberC;
}>;
export declare type LichessRatingRecord = io.TypeOf<typeof lichessRatingRecord>;
export declare const lichessUserRecord: io.TypeC<{
    email: io.StringC;
    id: io.StringC;
    username: io.StringC;
    perfs: io.TypeC<{
        blitz: io.TypeC<{
            games: io.NumberC;
            rating: io.NumberC;
        }>;
        bullet: io.TypeC<{
            games: io.NumberC;
            rating: io.NumberC;
        }>;
        classical: io.TypeC<{
            games: io.NumberC;
            rating: io.NumberC;
        }>;
        correspondence: io.TypeC<{
            games: io.NumberC;
            rating: io.NumberC;
        }>;
        puzzle: io.TypeC<{
            games: io.NumberC;
            rating: io.NumberC;
        }>;
        rapid: io.TypeC<{
            games: io.NumberC;
            rating: io.NumberC;
        }>;
    }>;
}>;
export declare type LichessUserRecord = io.TypeOf<typeof lichessUserRecord>;
