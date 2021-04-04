import * as io from 'io-ts';
import { IntFromString } from 'io-ts-types/lib/IntFromString';
import {
  ErrResponseOf,
  OkResponseOf,
  RequestOf,
  Resource,
  ResponseOf,
  withPaginatorResponse,
} from '../../sdk/resource';
import { gameRecord } from '../../records/gameRecord';

export namespace GetUserGames {
  const request = io.type({
    userId: io.string,
    pageSize: IntFromString,
    currentIndex: IntFromString,
  });

  const okResponse = withPaginatorResponse(gameRecord);

  export const resource = new Resource(request, okResponse);

  export type Request = RequestOf<typeof resource>;
  export type OkResponse = OkResponseOf<typeof resource>;
  export type ErrResponse = ErrResponseOf<typeof resource>;
  export type Response = ResponseOf<typeof resource>;
}
