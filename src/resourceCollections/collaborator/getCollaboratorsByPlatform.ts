import * as io from 'io-ts';
import { ErrResponseOf, OkResponseOf, RequestOf, Resource, ResponseOf, withPaginatorResponse } from '../../sdk/resource';
import { collaboratorPlatform, collaboratorRecord } from 'src/records/collaboratorRecord';
import { NumberFromString } from 'io-ts-types/lib/NumberFromString';

export namespace GetCollaboratorsByPlatform {
  const request = io.type({
    platform: collaboratorPlatform,
    pageSize: NumberFromString,
    currentIndex: NumberFromString,
  });

  const response = withPaginatorResponse(collaboratorRecord);

  export const resource = new Resource(request, response);

  export type Request = RequestOf<typeof resource>;
  export type OkResponse = OkResponseOf<typeof resource>;
  export type ErrResponse = ErrResponseOf<typeof resource>;
  export type Response = ResponseOf<typeof resource>;
}
