import { ChessInstance, Chess } from 'chess.js';

export const getNewChessGame = (pgn?: string) => new (Chess as any)(pgn) as ChessInstance;

export type { ChessInstance } from 'chess.js';