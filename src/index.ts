import { Server, ServerCredentials, loadPackageDefinition } from '@grpc/grpc-js';
import { loadSync } from '@grpc/proto-loader';
import { join } from 'path';

import { workspaceServiceHandlers } from './services/workspace';
import { windowServiceHandlers } from './services/window';
import { envServiceHandlers } from './services/env';
import { diffServiceHandlers } from './services/diff';

import { ProtoGrpcType as WorkspaceProto } from './generated/workspace';
import { ProtoGrpcType as WindowProto } from './generated/window';
import { ProtoGrpcType as EnvProto } from './generated/env';
import { ProtoGrpcType as DiffProto } from './generated/diff';

const PROTO_DIR = join(__dirname, '..', 'src', 'proto');

const packageDefinition = loadSync(
  ['workspace.proto', 'window.proto', 'env.proto', 'diff.proto'],
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
    includeDirs: [PROTO_DIR],
  }
);

type FullProtoType = {
  host: WorkspaceProto['host'] &
    WindowProto['host'] &
    EnvProto['host'] &
    DiffProto['host'];
};

const protoDescriptor = loadPackageDefinition(
  packageDefinition
) as unknown as FullProtoType;

const server = new Server();

server.addService(
  protoDescriptor.host.WorkspaceService.service,
  workspaceServiceHandlers
);
server.addService(
  protoDescriptor.host.WindowService.service,
  windowServiceHandlers
);
server.addService(
  protoDescriptor.host.EnvService.service,
  envServiceHandlers
);
server.addService(
  protoDescriptor.host.DiffService.service,
  diffServiceHandlers
);

const port = process.env.PORT || '50051';

server.bindAsync(
  `0.0.0.0:${port}`,
  ServerCredentials.createInsecure(),
  (err, port) => {
    if (err) {
      if (err instanceof Error) {
        console.error(`Server error: ${err.message}`);
      } else {
        console.error('An unknown server error occurred.');
      }
      process.exit(1);
    }
    console.log(`Server listening on port ${port}`);
    server.start();
  }
);