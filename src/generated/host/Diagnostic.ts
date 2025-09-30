// Original file: /app/src/proto/workspace.proto


// Original file: /app/src/proto/workspace.proto

export const _host_Diagnostic_Severity = {
  UNKNOWN: 0,
  HINT: 1,
  INFORMATION: 2,
  WARNING: 3,
  ERROR: 4,
} as const;

export type _host_Diagnostic_Severity =
  | 'UNKNOWN'
  | 0
  | 'HINT'
  | 1
  | 'INFORMATION'
  | 2
  | 'WARNING'
  | 3
  | 'ERROR'
  | 4

export type _host_Diagnostic_Severity__Output = typeof _host_Diagnostic_Severity[keyof typeof _host_Diagnostic_Severity]

export interface Diagnostic {
  'severity'?: (_host_Diagnostic_Severity);
  'message'?: (string);
  'source'?: (string);
  'lineStart'?: (number);
  'charStart'?: (number);
  'lineEnd'?: (number);
  'charEnd'?: (number);
}

export interface Diagnostic__Output {
  'severity'?: (_host_Diagnostic_Severity__Output);
  'message'?: (string);
  'source'?: (string);
  'lineStart'?: (number);
  'charStart'?: (number);
  'lineEnd'?: (number);
  'charEnd'?: (number);
}
