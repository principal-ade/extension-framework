// Original file: /app/src/proto/window.proto


export interface ShowOpenDialogRequest {
  'canSelectFiles'?: (boolean);
  'canSelectFolders'?: (boolean);
  'canSelectMany'?: (boolean);
  'defaultUri'?: (string);
}

export interface ShowOpenDialogRequest__Output {
  'canSelectFiles'?: (boolean);
  'canSelectFolders'?: (boolean);
  'canSelectMany'?: (boolean);
  'defaultUri'?: (string);
}
