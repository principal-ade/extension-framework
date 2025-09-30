import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { WindowServiceClient as _host_WindowServiceClient, WindowServiceDefinition as _host_WindowServiceDefinition } from './host/WindowService';

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
    Editor: MessageTypeDefinition
    GetActiveEditorResponse: MessageTypeDefinition
    GetTabsResponse: MessageTypeDefinition
    OpenFileRequest: MessageTypeDefinition
    ShowInputBoxRequest: MessageTypeDefinition
    ShowInputBoxResponse: MessageTypeDefinition
    ShowMessageRequest: MessageTypeDefinition
    ShowOpenDialogRequest: MessageTypeDefinition
    ShowOpenDialogResponse: MessageTypeDefinition
    ShowSaveDialogRequest: MessageTypeDefinition
    ShowSaveDialogResponse: MessageTypeDefinition
    Tab: MessageTypeDefinition
    WindowService: SubtypeConstructor<typeof grpc.Client, _host_WindowServiceClient> & { service: _host_WindowServiceDefinition }
  }
}
