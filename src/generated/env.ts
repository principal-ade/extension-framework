import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { EnvServiceClient as _host_EnvServiceClient, EnvServiceDefinition as _host_EnvServiceDefinition } from './host/EnvService';

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
    ClipboardReadTextResponse: MessageTypeDefinition
    ClipboardWriteTextRequest: MessageTypeDefinition
    EnvService: SubtypeConstructor<typeof grpc.Client, _host_EnvServiceClient> & { service: _host_EnvServiceDefinition }
    GetHostVersionResponse: MessageTypeDefinition
    GetIdeRedirectUriResponse: MessageTypeDefinition
    GetMachineIdResponse: MessageTypeDefinition
    TelemetrySettings: MessageTypeDefinition
  }
}
