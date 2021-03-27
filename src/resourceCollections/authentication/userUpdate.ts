import { formModel } from 'src/sdk/http';
import * as io from 'io-ts';
import { OkResponseOf, RequestOf, Resource, ResponseOf } from 'src/sdk/resource';
import { registeredUserRecord } from 'src/records/userRecord';

export namespace UserUpdate {
  const request = io.type({
    firstName: io.string,
    lastName: io.string,
    email: io.string,
    avatarId: io.string,
  });

  const response = registeredUserRecord;

  export const resource = new Resource(request, response);

  export type Request = RequestOf<typeof resource>;
  export type OkResponse = OkResponseOf<typeof resource>;
  export type ErrResponse = ErrResponseOf<typeof resource>;
  export type Response = ResponseOf<typeof resource>;
}
