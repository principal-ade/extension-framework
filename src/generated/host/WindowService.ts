// Original file: /app/src/proto/window.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Empty as _google_protobuf_Empty, Empty__Output as _google_protobuf_Empty__Output } from '../google/protobuf/Empty';
import type { GetActiveEditorResponse as _host_GetActiveEditorResponse, GetActiveEditorResponse__Output as _host_GetActiveEditorResponse__Output } from '../host/GetActiveEditorResponse';
import type { GetTabsResponse as _host_GetTabsResponse, GetTabsResponse__Output as _host_GetTabsResponse__Output } from '../host/GetTabsResponse';
import type { OpenFileRequest as _host_OpenFileRequest, OpenFileRequest__Output as _host_OpenFileRequest__Output } from '../host/OpenFileRequest';
import type { ShowInputBoxRequest as _host_ShowInputBoxRequest, ShowInputBoxRequest__Output as _host_ShowInputBoxRequest__Output } from '../host/ShowInputBoxRequest';
import type { ShowInputBoxResponse as _host_ShowInputBoxResponse, ShowInputBoxResponse__Output as _host_ShowInputBoxResponse__Output } from '../host/ShowInputBoxResponse';
import type { ShowMessageRequest as _host_ShowMessageRequest, ShowMessageRequest__Output as _host_ShowMessageRequest__Output } from '../host/ShowMessageRequest';
import type { ShowOpenDialogRequest as _host_ShowOpenDialogRequest, ShowOpenDialogRequest__Output as _host_ShowOpenDialogRequest__Output } from '../host/ShowOpenDialogRequest';
import type { ShowOpenDialogResponse as _host_ShowOpenDialogResponse, ShowOpenDialogResponse__Output as _host_ShowOpenDialogResponse__Output } from '../host/ShowOpenDialogResponse';
import type { ShowSaveDialogRequest as _host_ShowSaveDialogRequest, ShowSaveDialogRequest__Output as _host_ShowSaveDialogRequest__Output } from '../host/ShowSaveDialogRequest';
import type { ShowSaveDialogResponse as _host_ShowSaveDialogResponse, ShowSaveDialogResponse__Output as _host_ShowSaveDialogResponse__Output } from '../host/ShowSaveDialogResponse';

export interface WindowServiceClient extends grpc.Client {
  getActiveEditor(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_host_GetActiveEditorResponse__Output>): grpc.ClientUnaryCall;
  getActiveEditor(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_host_GetActiveEditorResponse__Output>): grpc.ClientUnaryCall;
  getActiveEditor(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_host_GetActiveEditorResponse__Output>): grpc.ClientUnaryCall;
  getActiveEditor(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_host_GetActiveEditorResponse__Output>): grpc.ClientUnaryCall;

  getOpenTabs(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_host_GetTabsResponse__Output>): grpc.ClientUnaryCall;
  getOpenTabs(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_host_GetTabsResponse__Output>): grpc.ClientUnaryCall;
  getOpenTabs(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_host_GetTabsResponse__Output>): grpc.ClientUnaryCall;
  getOpenTabs(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_host_GetTabsResponse__Output>): grpc.ClientUnaryCall;

  getVisibleTabs(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_host_GetTabsResponse__Output>): grpc.ClientUnaryCall;
  getVisibleTabs(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_host_GetTabsResponse__Output>): grpc.ClientUnaryCall;
  getVisibleTabs(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_host_GetTabsResponse__Output>): grpc.ClientUnaryCall;
  getVisibleTabs(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_host_GetTabsResponse__Output>): grpc.ClientUnaryCall;

  openFile(argument: _host_OpenFileRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  openFile(argument: _host_OpenFileRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  openFile(argument: _host_OpenFileRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  openFile(argument: _host_OpenFileRequest, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;

  showInputBox(argument: _host_ShowInputBoxRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_host_ShowInputBoxResponse__Output>): grpc.ClientUnaryCall;
  showInputBox(argument: _host_ShowInputBoxRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_host_ShowInputBoxResponse__Output>): grpc.ClientUnaryCall;
  showInputBox(argument: _host_ShowInputBoxRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_host_ShowInputBoxResponse__Output>): grpc.ClientUnaryCall;
  showInputBox(argument: _host_ShowInputBoxRequest, callback: grpc.requestCallback<_host_ShowInputBoxResponse__Output>): grpc.ClientUnaryCall;

  showMessage(argument: _host_ShowMessageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  showMessage(argument: _host_ShowMessageRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  showMessage(argument: _host_ShowMessageRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  showMessage(argument: _host_ShowMessageRequest, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;

  showOpenDialog(argument: _host_ShowOpenDialogRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_host_ShowOpenDialogResponse__Output>): grpc.ClientUnaryCall;
  showOpenDialog(argument: _host_ShowOpenDialogRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_host_ShowOpenDialogResponse__Output>): grpc.ClientUnaryCall;
  showOpenDialog(argument: _host_ShowOpenDialogRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_host_ShowOpenDialogResponse__Output>): grpc.ClientUnaryCall;
  showOpenDialog(argument: _host_ShowOpenDialogRequest, callback: grpc.requestCallback<_host_ShowOpenDialogResponse__Output>): grpc.ClientUnaryCall;

  showSaveDialog(argument: _host_ShowSaveDialogRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_host_ShowSaveDialogResponse__Output>): grpc.ClientUnaryCall;
  showSaveDialog(argument: _host_ShowSaveDialogRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_host_ShowSaveDialogResponse__Output>): grpc.ClientUnaryCall;
  showSaveDialog(argument: _host_ShowSaveDialogRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_host_ShowSaveDialogResponse__Output>): grpc.ClientUnaryCall;
  showSaveDialog(argument: _host_ShowSaveDialogRequest, callback: grpc.requestCallback<_host_ShowSaveDialogResponse__Output>): grpc.ClientUnaryCall;

}

export interface WindowServiceHandlers extends grpc.UntypedServiceImplementation {
  getActiveEditor: grpc.handleUnaryCall<_google_protobuf_Empty__Output, _host_GetActiveEditorResponse>;

  getOpenTabs: grpc.handleUnaryCall<_google_protobuf_Empty__Output, _host_GetTabsResponse>;

  getVisibleTabs: grpc.handleUnaryCall<_google_protobuf_Empty__Output, _host_GetTabsResponse>;

  openFile: grpc.handleUnaryCall<_host_OpenFileRequest__Output, _google_protobuf_Empty>;

  showInputBox: grpc.handleUnaryCall<_host_ShowInputBoxRequest__Output, _host_ShowInputBoxResponse>;

  showMessage: grpc.handleUnaryCall<_host_ShowMessageRequest__Output, _google_protobuf_Empty>;

  showOpenDialog: grpc.handleUnaryCall<_host_ShowOpenDialogRequest__Output, _host_ShowOpenDialogResponse>;

  showSaveDialog: grpc.handleUnaryCall<_host_ShowSaveDialogRequest__Output, _host_ShowSaveDialogResponse>;

}

export interface WindowServiceDefinition extends grpc.ServiceDefinition {
  getActiveEditor: MethodDefinition<_google_protobuf_Empty, _host_GetActiveEditorResponse, _google_protobuf_Empty__Output, _host_GetActiveEditorResponse__Output>
  getOpenTabs: MethodDefinition<_google_protobuf_Empty, _host_GetTabsResponse, _google_protobuf_Empty__Output, _host_GetTabsResponse__Output>
  getVisibleTabs: MethodDefinition<_google_protobuf_Empty, _host_GetTabsResponse, _google_protobuf_Empty__Output, _host_GetTabsResponse__Output>
  openFile: MethodDefinition<_host_OpenFileRequest, _google_protobuf_Empty, _host_OpenFileRequest__Output, _google_protobuf_Empty__Output>
  showInputBox: MethodDefinition<_host_ShowInputBoxRequest, _host_ShowInputBoxResponse, _host_ShowInputBoxRequest__Output, _host_ShowInputBoxResponse__Output>
  showMessage: MethodDefinition<_host_ShowMessageRequest, _google_protobuf_Empty, _host_ShowMessageRequest__Output, _google_protobuf_Empty__Output>
  showOpenDialog: MethodDefinition<_host_ShowOpenDialogRequest, _host_ShowOpenDialogResponse, _host_ShowOpenDialogRequest__Output, _host_ShowOpenDialogResponse__Output>
  showSaveDialog: MethodDefinition<_host_ShowSaveDialogRequest, _host_ShowSaveDialogResponse, _host_ShowSaveDialogRequest__Output, _host_ShowSaveDialogResponse__Output>
}
