import { ChessGameColor, ChessColorWhite, ChessColorBlack } from './records';
import { Move } from 'chess.js';
export declare function otherChessColor<C extends ChessGameColor>(c: C): C extends ChessColorWhite ? ChessColorBlack : ChessColorWhite;
/**
 * https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 *
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
export declare function shuffle<T extends unknown>(a: T[]): T[];
export declare const getRandomChessColor: () => "white" | "black";
export declare const getCapturedPiecesState: (history: Move[]) => {
    white: {
        p: number;
        n: number;
        b: number;
        r: number;
        q: number;
    };
    black: {
        p: number;
        n: number;
        b: number;
        r: number;
        q: number;
    };
};
