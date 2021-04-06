import * as io from 'io-ts';
import { country } from '../../records/locationRecords';
import {
  Resource,
  RequestOf,
  ErrResponseOf,
  OkResponseOf,
  ResponseOf,
  emptyRequest,
} from '../../sdk/resource';

export namespace GetAllCountries {
  export const response = io.record(io.string, country);

  export const resource = new Resource(emptyRequest, response);

  export type Request = RequestOf<typeof resource>;
  export type OkResponse = OkResponseOf<typeof resource>;
  export type ErrResponse = ErrResponseOf<typeof resource>;
  export type Response = ResponseOf<typeof resource>;
}
