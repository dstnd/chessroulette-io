import {
  emptyRequest,
  ErrResponseOf,
  OkResponseOf,
  RequestOf,
  Resource,
  ResponseOf,
} from '../../sdk/resource';
import { registeredUserRecord } from '../../records/userRecord';

export namespace GetUser {
  export const response = registeredUserRecord;

  export const resource = new Resource(
    emptyRequest,
    response,
  );

  export type Request = RequestOf<typeof resource>;
  export type OkResponse = OkResponseOf<typeof resource>;
  export type ErrResponse = ErrResponseOf<typeof resource>;
  export type Response = ResponseOf<typeof resource>;
}
