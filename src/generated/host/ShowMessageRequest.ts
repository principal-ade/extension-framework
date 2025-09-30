// Original file: /app/src/proto/window.proto


// Original file: /app/src/proto/window.proto

export const _host_ShowMessageRequest_MessageType = {
  INFO: 0,
  WARNING: 1,
  ERROR: 2,
} as const;

export type _host_ShowMessageRequest_MessageType =
  | 'INFO'
  | 0
  | 'WARNING'
  | 1
  | 'ERROR'
  | 2

export type _host_ShowMessageRequest_MessageType__Output = typeof _host_ShowMessageRequest_MessageType[keyof typeof _host_ShowMessageRequest_MessageType]

export interface ShowMessageRequest {
  'type'?: (_host_ShowMessageRequest_MessageType);
  'message'?: (string);
}

export interface ShowMessageRequest__Output {
  'type'?: (_host_ShowMessageRequest_MessageType__Output);
  'message'?: (string);
}
