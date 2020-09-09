import { ChessGameColor, ChessColorWhite, ChessColorBlack } from './records';
export declare function otherChessColor<C extends ChessGameColor>(c: C): C extends ChessColorWhite ? ChessColorBlack : ChessColorWhite;
/**
 * https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 *
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
export declare function shuffle<T extends unknown>(a: T[]): T[];
export declare const getRandomChessColor: () => "white" | "black";
