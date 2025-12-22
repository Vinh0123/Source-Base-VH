import { PageMetaDto } from "./page-meta.dto";

export class ResponsePaginateDto<T> {
  constructor(public data: T[], public meta: PageMetaDto) {}
}
