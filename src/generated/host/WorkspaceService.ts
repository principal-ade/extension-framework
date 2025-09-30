// Original file: /app/src/proto/workspace.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Empty as _host_Empty, Empty__Output as _host_Empty__Output } from '../host/Empty';
import type { GetDiagnosticsResponse as _host_GetDiagnosticsResponse, GetDiagnosticsResponse__Output as _host_GetDiagnosticsResponse__Output } from '../host/GetDiagnosticsResponse';
import type { GetWorkspacePathsResponse as _host_GetWorkspacePathsResponse, GetWorkspacePathsResponse__Output as _host_GetWorkspacePathsResponse__Output } from '../host/GetWorkspacePathsResponse';
import type { SaveOpenDocumentIfDirtyRequest as _host_SaveOpenDocumentIfDirtyRequest, SaveOpenDocumentIfDirtyRequest__Output as _host_SaveOpenDocumentIfDirtyRequest__Output } from '../host/SaveOpenDocumentIfDirtyRequest';

export interface WorkspaceServiceClient extends grpc.Client {
  getDiagnostics(argument: _host_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_host_GetDiagnosticsResponse__Output>): grpc.ClientUnaryCall;
  getDiagnostics(argument: _host_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_host_GetDiagnosticsResponse__Output>): grpc.ClientUnaryCall;
  getDiagnostics(argument: _host_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_host_GetDiagnosticsResponse__Output>): grpc.ClientUnaryCall;
  getDiagnostics(argument: _host_Empty, callback: grpc.requestCallback<_host_GetDiagnosticsResponse__Output>): grpc.ClientUnaryCall;

  getWorkspacePaths(argument: _host_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_host_GetWorkspacePathsResponse__Output>): grpc.ClientUnaryCall;
  getWorkspacePaths(argument: _host_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_host_GetWorkspacePathsResponse__Output>): grpc.ClientUnaryCall;
  getWorkspacePaths(argument: _host_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_host_GetWorkspacePathsResponse__Output>): grpc.ClientUnaryCall;
  getWorkspacePaths(argument: _host_Empty, callback: grpc.requestCallback<_host_GetWorkspacePathsResponse__Output>): grpc.ClientUnaryCall;

  openClineSidebarPanel(argument: _host_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_host_Empty__Output>): grpc.ClientUnaryCall;
  openClineSidebarPanel(argument: _host_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_host_Empty__Output>): grpc.ClientUnaryCall;
  openClineSidebarPanel(argument: _host_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_host_Empty__Output>): grpc.ClientUnaryCall;
  openClineSidebarPanel(argument: _host_Empty, callback: grpc.requestCallback<_host_Empty__Output>): grpc.ClientUnaryCall;

  openProblemsPanel(argument: _host_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_host_Empty__Output>): grpc.ClientUnaryCall;
  openProblemsPanel(argument: _host_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_host_Empty__Output>): grpc.ClientUnaryCall;
  openProblemsPanel(argument: _host_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_host_Empty__Output>): grpc.ClientUnaryCall;
  openProblemsPanel(argument: _host_Empty, callback: grpc.requestCallback<_host_Empty__Output>): grpc.ClientUnaryCall;

  openTerminalPanel(argument: _host_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_host_Empty__Output>): grpc.ClientUnaryCall;
  openTerminalPanel(argument: _host_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_host_Empty__Output>): grpc.ClientUnaryCall;
  openTerminalPanel(argument: _host_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_host_Empty__Output>): grpc.ClientUnaryCall;
  openTerminalPanel(argument: _host_Empty, callback: grpc.requestCallback<_host_Empty__Output>): grpc.ClientUnaryCall;

  saveOpenDocumentIfDirty(argument: _host_SaveOpenDocumentIfDirtyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_host_Empty__Output>): grpc.ClientUnaryCall;
  saveOpenDocumentIfDirty(argument: _host_SaveOpenDocumentIfDirtyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_host_Empty__Output>): grpc.ClientUnaryCall;
  saveOpenDocumentIfDirty(argument: _host_SaveOpenDocumentIfDirtyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_host_Empty__Output>): grpc.ClientUnaryCall;
  saveOpenDocumentIfDirty(argument: _host_SaveOpenDocumentIfDirtyRequest, callback: grpc.requestCallback<_host_Empty__Output>): grpc.ClientUnaryCall;

}

export interface WorkspaceServiceHandlers extends grpc.UntypedServiceImplementation {
  getDiagnostics: grpc.handleUnaryCall<_host_Empty__Output, _host_GetDiagnosticsResponse>;

  getWorkspacePaths: grpc.handleUnaryCall<_host_Empty__Output, _host_GetWorkspacePathsResponse>;

  openClineSidebarPanel: grpc.handleUnaryCall<_host_Empty__Output, _host_Empty>;

  openProblemsPanel: grpc.handleUnaryCall<_host_Empty__Output, _host_Empty>;

  openTerminalPanel: grpc.handleUnaryCall<_host_Empty__Output, _host_Empty>;

  saveOpenDocumentIfDirty: grpc.handleUnaryCall<_host_SaveOpenDocumentIfDirtyRequest__Output, _host_Empty>;

}

export interface WorkspaceServiceDefinition extends grpc.ServiceDefinition {
  getDiagnostics: MethodDefinition<_host_Empty, _host_GetDiagnosticsResponse, _host_Empty__Output, _host_GetDiagnosticsResponse__Output>
  getWorkspacePaths: MethodDefinition<_host_Empty, _host_GetWorkspacePathsResponse, _host_Empty__Output, _host_GetWorkspacePathsResponse__Output>
  openClineSidebarPanel: MethodDefinition<_host_Empty, _host_Empty, _host_Empty__Output, _host_Empty__Output>
  openProblemsPanel: MethodDefinition<_host_Empty, _host_Empty, _host_Empty__Output, _host_Empty__Output>
  openTerminalPanel: MethodDefinition<_host_Empty, _host_Empty, _host_Empty__Output, _host_Empty__Output>
  saveOpenDocumentIfDirty: MethodDefinition<_host_SaveOpenDocumentIfDirtyRequest, _host_Empty, _host_SaveOpenDocumentIfDirtyRequest__Output, _host_Empty__Output>
}
