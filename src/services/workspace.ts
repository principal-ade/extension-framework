import { sendUnaryData, ServerUnaryCall } from '@grpc/grpc-js';
import { WorkspaceServiceHandlers } from '../generated/host/WorkspaceService';
import { Empty__Output } from '../generated/host/Empty';
import { GetDiagnosticsResponse } from '../generated/host/GetDiagnosticsResponse';
import { GetWorkspacePathsResponse } from '../generated/host/GetWorkspacePathsResponse';
import { SaveOpenDocumentIfDirtyRequest__Output } from '../generated/host/SaveOpenDocumentIfDirtyRequest';
import { Empty } from '../generated/host/Empty';

export const workspaceServiceHandlers: WorkspaceServiceHandlers = {
  getWorkspacePaths(
    call: ServerUnaryCall<Empty__Output, GetWorkspacePathsResponse>,
    callback: sendUnaryData<GetWorkspacePathsResponse>
  ) {
    throw new Error('Method not implemented.');
  },

  saveOpenDocumentIfDirty(
    call: ServerUnaryCall<SaveOpenDocumentIfDirtyRequest__Output, Empty>,
    callback: sendUnaryData<Empty>
  ) {
    throw new Error('Method not implemented.');
  },

  getDiagnostics(
    call: ServerUnaryCall<Empty__Output, GetDiagnosticsResponse>,
    callback: sendUnaryData<GetDiagnosticsResponse>
  ) {
    throw new Error('Method not implemented.');
  },

  openProblemsPanel(
    call: ServerUnaryCall<Empty__Output, Empty>,
    callback: sendUnaryData<Empty>
  ) {
    throw new Error('Method not implemented.');
  },

  openTerminalPanel(
    call: ServerUnaryCall<Empty__Output, Empty>,
    callback: sendUnaryData<Empty>
  ) {
    throw new Error('Method not implemented.');
  },

  openClineSidebarPanel(
    call: ServerUnaryCall<Empty__Output, Empty>,
    callback: sendUnaryData<Empty>
  ) {
    throw new Error('Method not implemented.');
  },
};