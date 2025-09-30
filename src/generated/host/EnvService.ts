// Original file: /app/src/proto/env.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { ClipboardReadTextResponse as _host_ClipboardReadTextResponse, ClipboardReadTextResponse__Output as _host_ClipboardReadTextResponse__Output } from '../host/ClipboardReadTextResponse';
import type { ClipboardWriteTextRequest as _host_ClipboardWriteTextRequest, ClipboardWriteTextRequest__Output as _host_ClipboardWriteTextRequest__Output } from '../host/ClipboardWriteTextRequest';
import type { Empty as _google_protobuf_Empty, Empty__Output as _google_protobuf_Empty__Output } from '../google/protobuf/Empty';
import type { GetHostVersionResponse as _host_GetHostVersionResponse, GetHostVersionResponse__Output as _host_GetHostVersionResponse__Output } from '../host/GetHostVersionResponse';
import type { GetIdeRedirectUriResponse as _host_GetIdeRedirectUriResponse, GetIdeRedirectUriResponse__Output as _host_GetIdeRedirectUriResponse__Output } from '../host/GetIdeRedirectUriResponse';
import type { GetMachineIdResponse as _host_GetMachineIdResponse, GetMachineIdResponse__Output as _host_GetMachineIdResponse__Output } from '../host/GetMachineIdResponse';
import type { TelemetrySettings as _host_TelemetrySettings, TelemetrySettings__Output as _host_TelemetrySettings__Output } from '../host/TelemetrySettings';

export interface EnvServiceClient extends grpc.Client {
  clipboardReadText(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_host_ClipboardReadTextResponse__Output>): grpc.ClientUnaryCall;
  clipboardReadText(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_host_ClipboardReadTextResponse__Output>): grpc.ClientUnaryCall;
  clipboardReadText(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_host_ClipboardReadTextResponse__Output>): grpc.ClientUnaryCall;
  clipboardReadText(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_host_ClipboardReadTextResponse__Output>): grpc.ClientUnaryCall;

  clipboardWriteText(argument: _host_ClipboardWriteTextRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  clipboardWriteText(argument: _host_ClipboardWriteTextRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  clipboardWriteText(argument: _host_ClipboardWriteTextRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  clipboardWriteText(argument: _host_ClipboardWriteTextRequest, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;

  getHostVersion(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_host_GetHostVersionResponse__Output>): grpc.ClientUnaryCall;
  getHostVersion(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_host_GetHostVersionResponse__Output>): grpc.ClientUnaryCall;
  getHostVersion(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_host_GetHostVersionResponse__Output>): grpc.ClientUnaryCall;
  getHostVersion(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_host_GetHostVersionResponse__Output>): grpc.ClientUnaryCall;

  getIdeRedirectUri(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_host_GetIdeRedirectUriResponse__Output>): grpc.ClientUnaryCall;
  getIdeRedirectUri(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_host_GetIdeRedirectUriResponse__Output>): grpc.ClientUnaryCall;
  getIdeRedirectUri(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_host_GetIdeRedirectUriResponse__Output>): grpc.ClientUnaryCall;
  getIdeRedirectUri(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_host_GetIdeRedirectUriResponse__Output>): grpc.ClientUnaryCall;

  getMachineId(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_host_GetMachineIdResponse__Output>): grpc.ClientUnaryCall;
  getMachineId(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_host_GetMachineIdResponse__Output>): grpc.ClientUnaryCall;
  getMachineId(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_host_GetMachineIdResponse__Output>): grpc.ClientUnaryCall;
  getMachineId(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_host_GetMachineIdResponse__Output>): grpc.ClientUnaryCall;

  getTelemetrySettings(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_host_TelemetrySettings__Output>): grpc.ClientUnaryCall;
  getTelemetrySettings(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_host_TelemetrySettings__Output>): grpc.ClientUnaryCall;
  getTelemetrySettings(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_host_TelemetrySettings__Output>): grpc.ClientUnaryCall;
  getTelemetrySettings(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_host_TelemetrySettings__Output>): grpc.ClientUnaryCall;

  subscribeToTelemetrySettings(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_host_TelemetrySettings__Output>;
  subscribeToTelemetrySettings(argument: _google_protobuf_Empty, options?: grpc.CallOptions): grpc.ClientReadableStream<_host_TelemetrySettings__Output>;

}

export interface EnvServiceHandlers extends grpc.UntypedServiceImplementation {
  clipboardReadText: grpc.handleUnaryCall<_google_protobuf_Empty__Output, _host_ClipboardReadTextResponse>;

  clipboardWriteText: grpc.handleUnaryCall<_host_ClipboardWriteTextRequest__Output, _google_protobuf_Empty>;

  getHostVersion: grpc.handleUnaryCall<_google_protobuf_Empty__Output, _host_GetHostVersionResponse>;

  getIdeRedirectUri: grpc.handleUnaryCall<_google_protobuf_Empty__Output, _host_GetIdeRedirectUriResponse>;

  getMachineId: grpc.handleUnaryCall<_google_protobuf_Empty__Output, _host_GetMachineIdResponse>;

  getTelemetrySettings: grpc.handleUnaryCall<_google_protobuf_Empty__Output, _host_TelemetrySettings>;

  subscribeToTelemetrySettings: grpc.handleServerStreamingCall<_google_protobuf_Empty__Output, _host_TelemetrySettings>;

}

export interface EnvServiceDefinition extends grpc.ServiceDefinition {
  clipboardReadText: MethodDefinition<_google_protobuf_Empty, _host_ClipboardReadTextResponse, _google_protobuf_Empty__Output, _host_ClipboardReadTextResponse__Output>
  clipboardWriteText: MethodDefinition<_host_ClipboardWriteTextRequest, _google_protobuf_Empty, _host_ClipboardWriteTextRequest__Output, _google_protobuf_Empty__Output>
  getHostVersion: MethodDefinition<_google_protobuf_Empty, _host_GetHostVersionResponse, _google_protobuf_Empty__Output, _host_GetHostVersionResponse__Output>
  getIdeRedirectUri: MethodDefinition<_google_protobuf_Empty, _host_GetIdeRedirectUriResponse, _google_protobuf_Empty__Output, _host_GetIdeRedirectUriResponse__Output>
  getMachineId: MethodDefinition<_google_protobuf_Empty, _host_GetMachineIdResponse, _google_protobuf_Empty__Output, _host_GetMachineIdResponse__Output>
  getTelemetrySettings: MethodDefinition<_google_protobuf_Empty, _host_TelemetrySettings, _google_protobuf_Empty__Output, _host_TelemetrySettings__Output>
  subscribeToTelemetrySettings: MethodDefinition<_google_protobuf_Empty, _host_TelemetrySettings, _google_protobuf_Empty__Output, _host_TelemetrySettings__Output>
}
