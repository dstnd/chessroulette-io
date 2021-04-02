import * as io from 'io-ts';
import { ErrResponseOf, OkResponseOf, RequestOf, Resource, ResponseOf } from '../../sdk/resource';
import { gameRecord } from '../../records/gameRecord';

export namespace GetUserGames {
  const request = io.type({
    userId: io.string,
    pageSize: io.number,
    currentIndex: io.number,
  });

  const withPaginatorResponse = <TCodec extends io.Mixed>(codec: TCodec) =>
    io.type({
      items: io.array(codec),
      itemsTotal: io.number,
      currentIndex: io.number,
    });

  const okResponse = withPaginatorResponse(gameRecord);

  export const resource = new Resource(request, okResponse);

  export type Request = RequestOf<typeof resource>;
  export type OkResponse = OkResponseOf<typeof resource>;
  export type ErrResponse = ErrResponseOf<typeof resource>;
  export type Response = ResponseOf<typeof resource>;
}
