import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { DiffServiceClient as _host_DiffServiceClient, DiffServiceDefinition as _host_DiffServiceDefinition } from './host/DiffService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Empty: MessageTypeDefinition
    }
  }
  host: {
    DiffRequest: MessageTypeDefinition
    DiffService: SubtypeConstructor<typeof grpc.Client, _host_DiffServiceClient> & { service: _host_DiffServiceDefinition }
    GetDocumentTextRequest: MessageTypeDefinition
    GetDocumentTextResponse: MessageTypeDefinition
    MultiFileDiffRequest: MessageTypeDefinition
    ReplaceTextRequest: MessageTypeDefinition
    SaveDocumentRequest: MessageTypeDefinition
    ScrollDiffRequest: MessageTypeDefinition
    TruncateDocumentRequest: MessageTypeDefinition
  }
}
