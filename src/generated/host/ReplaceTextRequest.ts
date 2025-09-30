// Original file: /app/src/proto/diff.proto


export interface ReplaceTextRequest {
  'filePath'?: (string);
  'startLine'?: (number);
  'startChar'?: (number);
  'endLine'?: (number);
  'endChar'?: (number);
  'newText'?: (string);
}

export interface ReplaceTextRequest__Output {
  'filePath'?: (string);
  'startLine'?: (number);
  'startChar'?: (number);
  'endLine'?: (number);
  'endChar'?: (number);
  'newText'?: (string);
}
