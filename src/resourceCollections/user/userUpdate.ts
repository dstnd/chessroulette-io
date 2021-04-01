import * as io from 'io-ts';
import { ErrResponseOf, OkResponseOf, RequestOf, Resource, ResponseOf } from '../../sdk/resource';
import { registeredUserRecord } from '../../records/userRecord';

export namespace UserUpdate {
  const request = io.type({
    firstName: io.string,
    lastName: io.string,
  });

  const response = registeredUserRecord;

  export const resource = new Resource(request, response);

  export type Request = RequestOf<typeof resource>;
  export type OkResponse = OkResponseOf<typeof resource>;
  export type ErrResponse = ErrResponseOf<typeof resource>;
  export type Response = ResponseOf<typeof resource>;
}
