import * as io from 'io-ts';
import { ErrResponseOf, OkResponseOf, RequestOf, Resource, ResponseOf } from '../../sdk/resource';
import { guestUserRecord } from '../../records/userRecord';

export namespace GuestAuthentication {
  const request = io.type({
    guestUser: io.union([guestUserRecord, io.null]),
  });

  const okResponse = io.type({
    guest: guestUserRecord,
  });

  export const resource = new Resource(
    request,
    okResponse,
  );

  export type Request = RequestOf<typeof resource>;
  export type OkResponse = OkResponseOf<typeof resource>;
  export type ErrResponse = ErrResponseOf<typeof resource>;
  export type Response = ResponseOf<typeof resource>;
}
