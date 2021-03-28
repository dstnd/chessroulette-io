// This idea is 100% borrowed from this article:
//  https://spin.atomicobject.com/2017/06/19/strongly-typed-date-string-typescript/
// It works pretty nice o be able to take a string and brand with a nominal type!

import { getNewChessGame } from './sdk';

// Also see https://basarat.gitbooks.io/typescript/docs/tips/nominalTyping.html
enum SimplePGNBrand {
  _ = '',
}

/**
 * A String that represents the extended PGN Format
 *  based on this spec https://www.enpassant.dk/chess/palview/enhancedpgn.htm
 */
export type SimplePGN = SimplePGNBrand & string;

enum EnhancedPGNBrand {
  _ = '',
}

/**
 * A String that represents the extended PGN Format
 *  based on this spec https://www.enpassant.dk/chess/palview/enhancedpgn.htm
 */
export type EnhancedPGN = EnhancedPGNBrand & string;

const getHistoryFromPgnAsString = (pgn: string) => {
  const instance = getNewChessGame(pgn);

  return instance.history();
};

/**
 * This function checks if the given string is of the SimplePGN format
 *
 * @param s
 */
export const isSimplePGN = (s: string): s is SimplePGN => getHistoryFromPgnAsString(s).length > 0;

/**
 * This function checks if the given string is of the SimplePGN format
 *
 * @param s
 */
export const isEnhancedPGN = (s: string): s is EnhancedPGN => {
  return (
    isSimplePGN(s) 
    // Verifies that the amount of moves is equal to the amount of clcok commands
    // TODO: This could be further improved, either by adding more commands to the parser
    //  as well by verifying that the format is actually correct
    && String(s).match(/\[%clk \d+\:\d+\:\d+\]/gm)?.length === getHistoryFromPgnAsString(s).length
  );
};
