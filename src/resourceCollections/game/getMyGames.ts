import * as io from 'io-ts';
import {
  emptyRequest,
  ErrResponseOf,
  OkResponseOf,
  RequestOf,
  Resource,
  ResponseOf,
} from '../../sdk/resource';
import { gameRecord } from '../../records/gameRecord';

export namespace GetMyGames {

  const okResponse = io.array(gameRecord);

  export const resource = new Resource(
    emptyRequest,
    okResponse,
  );

  export type Request = RequestOf<typeof resource>;
  export type OkResponse = OkResponseOf<typeof resource>;
  export type ErrResponse = ErrResponseOf<typeof resource>;
  export type Response = ResponseOf<typeof resource>;
}
