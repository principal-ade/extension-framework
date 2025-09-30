// Original file: /app/src/proto/diff.proto

import type { DiffRequest as _host_DiffRequest, DiffRequest__Output as _host_DiffRequest__Output } from '../host/DiffRequest';

export interface MultiFileDiffRequest {
  'diffs'?: (_host_DiffRequest)[];
}

export interface MultiFileDiffRequest__Output {
  'diffs'?: (_host_DiffRequest__Output)[];
}
