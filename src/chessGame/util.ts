import { ChessGameColor, ChessColorWhite, ChessColorBlack } from './records';

// I don't know why this needs to be typed like this
//  with a function declaration but if it's declared
//  as an anonymous function it throws a tsc error
export function otherChessColor<C extends ChessGameColor>(
  c: C
): C extends ChessColorWhite ? ChessColorBlack : ChessColorWhite;
export function otherChessColor<C extends ChessGameColor>(c: C) {
  return c === 'white' ? 'black' : 'white';
}

/**
 * https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 *
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
export function shuffle<T extends unknown>(a: T[]) {
  // eslint-disable-next-line no-plusplus
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // eslint-disable-next-line no-param-reassign
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const hours = (int: number) => int * minutes(60);
export const minutes = (int: number) => int * seconds(60);
export const seconds = (int: number) => int * second();
export const second = () => 1000;
export const milliseconds = (int: number) => int;