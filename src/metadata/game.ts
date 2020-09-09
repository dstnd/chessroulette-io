import {
  ChessGameTimeLimit,
  ChessGameColor,
  ChessPrefferedColorOption,
} from "../chessGame";
import { minutes } from "../util";

export const chessGameTimeLimitMsMap: {
  [key in ChessGameTimeLimit]: number;
} = {
  bullet: minutes(1),
  blitz: minutes(5),
  rapid: minutes(15),
  untimed: -1,
};

export const chessGamePrefferedColorOptionList: ChessPrefferedColorOption[] = [
  "black",
  "white",
  "random",
];
