import { ChessInstance } from "chess.js";
import * as Chess from "chess.js";

export const getNewChessGame = (pgn?: string) => {
  return new (Chess as any)(pgn) as ChessInstance;
};

export type { ChessInstance } from "chess.js";
