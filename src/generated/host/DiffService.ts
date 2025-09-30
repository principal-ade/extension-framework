// Original file: /app/src/proto/diff.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { DiffRequest as _host_DiffRequest, DiffRequest__Output as _host_DiffRequest__Output } from '../host/DiffRequest';
import type { Empty as _google_protobuf_Empty, Empty__Output as _google_protobuf_Empty__Output } from '../google/protobuf/Empty';
import type { GetDocumentTextRequest as _host_GetDocumentTextRequest, GetDocumentTextRequest__Output as _host_GetDocumentTextRequest__Output } from '../host/GetDocumentTextRequest';
import type { GetDocumentTextResponse as _host_GetDocumentTextResponse, GetDocumentTextResponse__Output as _host_GetDocumentTextResponse__Output } from '../host/GetDocumentTextResponse';
import type { MultiFileDiffRequest as _host_MultiFileDiffRequest, MultiFileDiffRequest__Output as _host_MultiFileDiffRequest__Output } from '../host/MultiFileDiffRequest';
import type { ReplaceTextRequest as _host_ReplaceTextRequest, ReplaceTextRequest__Output as _host_ReplaceTextRequest__Output } from '../host/ReplaceTextRequest';
import type { SaveDocumentRequest as _host_SaveDocumentRequest, SaveDocumentRequest__Output as _host_SaveDocumentRequest__Output } from '../host/SaveDocumentRequest';
import type { ScrollDiffRequest as _host_ScrollDiffRequest, ScrollDiffRequest__Output as _host_ScrollDiffRequest__Output } from '../host/ScrollDiffRequest';
import type { TruncateDocumentRequest as _host_TruncateDocumentRequest, TruncateDocumentRequest__Output as _host_TruncateDocumentRequest__Output } from '../host/TruncateDocumentRequest';

export interface DiffServiceClient extends grpc.Client {
  closeAllDiffs(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  closeAllDiffs(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  closeAllDiffs(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  closeAllDiffs(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;

  getDocumentText(argument: _host_GetDocumentTextRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_host_GetDocumentTextResponse__Output>): grpc.ClientUnaryCall;
  getDocumentText(argument: _host_GetDocumentTextRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_host_GetDocumentTextResponse__Output>): grpc.ClientUnaryCall;
  getDocumentText(argument: _host_GetDocumentTextRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_host_GetDocumentTextResponse__Output>): grpc.ClientUnaryCall;
  getDocumentText(argument: _host_GetDocumentTextRequest, callback: grpc.requestCallback<_host_GetDocumentTextResponse__Output>): grpc.ClientUnaryCall;

  openDiff(argument: _host_DiffRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  openDiff(argument: _host_DiffRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  openDiff(argument: _host_DiffRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  openDiff(argument: _host_DiffRequest, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;

  openMultiFileDiff(argument: _host_MultiFileDiffRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  openMultiFileDiff(argument: _host_MultiFileDiffRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  openMultiFileDiff(argument: _host_MultiFileDiffRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  openMultiFileDiff(argument: _host_MultiFileDiffRequest, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;

  replaceText(argument: _host_ReplaceTextRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  replaceText(argument: _host_ReplaceTextRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  replaceText(argument: _host_ReplaceTextRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  replaceText(argument: _host_ReplaceTextRequest, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;

  saveDocument(argument: _host_SaveDocumentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  saveDocument(argument: _host_SaveDocumentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  saveDocument(argument: _host_SaveDocumentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  saveDocument(argument: _host_SaveDocumentRequest, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;

  scrollDiff(argument: _host_ScrollDiffRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  scrollDiff(argument: _host_ScrollDiffRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  scrollDiff(argument: _host_ScrollDiffRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  scrollDiff(argument: _host_ScrollDiffRequest, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;

  truncateDocument(argument: _host_TruncateDocumentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  truncateDocument(argument: _host_TruncateDocumentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  truncateDocument(argument: _host_TruncateDocumentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  truncateDocument(argument: _host_TruncateDocumentRequest, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;

}

export interface DiffServiceHandlers extends grpc.UntypedServiceImplementation {
  closeAllDiffs: grpc.handleUnaryCall<_google_protobuf_Empty__Output, _google_protobuf_Empty>;

  getDocumentText: grpc.handleUnaryCall<_host_GetDocumentTextRequest__Output, _host_GetDocumentTextResponse>;

  openDiff: grpc.handleUnaryCall<_host_DiffRequest__Output, _google_protobuf_Empty>;

  openMultiFileDiff: grpc.handleUnaryCall<_host_MultiFileDiffRequest__Output, _google_protobuf_Empty>;

  replaceText: grpc.handleUnaryCall<_host_ReplaceTextRequest__Output, _google_protobuf_Empty>;

  saveDocument: grpc.handleUnaryCall<_host_SaveDocumentRequest__Output, _google_protobuf_Empty>;

  scrollDiff: grpc.handleUnaryCall<_host_ScrollDiffRequest__Output, _google_protobuf_Empty>;

  truncateDocument: grpc.handleUnaryCall<_host_TruncateDocumentRequest__Output, _google_protobuf_Empty>;

}

export interface DiffServiceDefinition extends grpc.ServiceDefinition {
  closeAllDiffs: MethodDefinition<_google_protobuf_Empty, _google_protobuf_Empty, _google_protobuf_Empty__Output, _google_protobuf_Empty__Output>
  getDocumentText: MethodDefinition<_host_GetDocumentTextRequest, _host_GetDocumentTextResponse, _host_GetDocumentTextRequest__Output, _host_GetDocumentTextResponse__Output>
  openDiff: MethodDefinition<_host_DiffRequest, _google_protobuf_Empty, _host_DiffRequest__Output, _google_protobuf_Empty__Output>
  openMultiFileDiff: MethodDefinition<_host_MultiFileDiffRequest, _google_protobuf_Empty, _host_MultiFileDiffRequest__Output, _google_protobuf_Empty__Output>
  replaceText: MethodDefinition<_host_ReplaceTextRequest, _google_protobuf_Empty, _host_ReplaceTextRequest__Output, _google_protobuf_Empty__Output>
  saveDocument: MethodDefinition<_host_SaveDocumentRequest, _google_protobuf_Empty, _host_SaveDocumentRequest__Output, _google_protobuf_Empty__Output>
  scrollDiff: MethodDefinition<_host_ScrollDiffRequest, _google_protobuf_Empty, _host_ScrollDiffRequest__Output, _google_protobuf_Empty__Output>
  truncateDocument: MethodDefinition<_host_TruncateDocumentRequest, _google_protobuf_Empty, _host_TruncateDocumentRequest__Output, _google_protobuf_Empty__Output>
}
