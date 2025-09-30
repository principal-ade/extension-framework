// Original file: /app/src/proto/window.proto

import type { Editor as _host_Editor, Editor__Output as _host_Editor__Output } from '../host/Editor';

export interface GetActiveEditorResponse {
  'editor'?: (_host_Editor | null);
  '_editor'?: "editor";
}

export interface GetActiveEditorResponse__Output {
  'editor'?: (_host_Editor__Output);
}
