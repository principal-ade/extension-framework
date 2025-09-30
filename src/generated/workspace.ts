import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { WorkspaceServiceClient as _host_WorkspaceServiceClient, WorkspaceServiceDefinition as _host_WorkspaceServiceDefinition } from './host/WorkspaceService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  host: {
    Diagnostic: MessageTypeDefinition
    Empty: MessageTypeDefinition
    GetDiagnosticsResponse: MessageTypeDefinition
    GetWorkspacePathsResponse: MessageTypeDefinition
    SaveOpenDocumentIfDirtyRequest: MessageTypeDefinition
    WorkspaceService: SubtypeConstructor<typeof grpc.Client, _host_WorkspaceServiceClient> & { service: _host_WorkspaceServiceDefinition }
  }
}
