import { ChessGameTimeLimit, ChessPrefferedColorOption } from '../chessGame';
import { minutes, seconds } from '../util';

export const chessGameTimeLimitMsMap: {
  [key in ChessGameTimeLimit]: number;
} = {
  // bullet: minutes(1),
  // blitz: minutes(5),
  // rapid: minutes(15),
  // rapid30: minutes(30),
  // rapid10: minutes(10),
  // untimed: -1,

  bullet30: seconds(30),
  bullet1: minutes(1),
  blitz2: minutes(2),
  blitz3: minutes(3),
  blitz5: minutes(5),
  rapid10: minutes(10),
  rapid15: minutes(15),
  rapid20: minutes(20),
  rapid30: minutes(30),
  rapid45: minutes(45),
  rapid60: minutes(60),
  untimed: -1,
};

export const chessGamePrefferedColorOptionList: ChessPrefferedColorOption[] = [
  'black',
  'white',
  'random',
];
