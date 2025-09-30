import { execSync } from 'child_process';
import { glob } from 'glob';
import { mkdirSync, existsSync } from 'fs';
import { join } from 'path';

const PROTO_DIR = join(__dirname, '../src/proto');
const GENERATED_DIR = join(__dirname, '../src/generated');
const GRPC_TOOLS_NODE_PROTOC = join(
  __dirname,
  '../node_modules/.bin/grpc_tools_node_protoc'
);
const PROTO_LOADER_GEN_TYPES = join(
  __dirname,
  '../node_modules/.bin/proto-loader-gen-types'
);

// Create the generated directory if it doesn't exist
if (!existsSync(GENERATED_DIR)) {
  mkdirSync(GENERATED_DIR, { recursive: true });
}

// Find all .proto files
const protoFiles = glob.sync(`${PROTO_DIR}/**/*.proto`);

if (protoFiles.length === 0) {
  console.log('No .proto files found.');
  process.exit(0);
}

const protocCommand = [
  GRPC_TOOLS_NODE_PROTOC,
  `--js_out=import_style=commonjs,binary:${GENERATED_DIR}`,
  `--grpc_out=grpc_js:${GENERATED_DIR}`,
  `-I ${PROTO_DIR}`,
  ...protoFiles,
].join(' ');

console.log(`Running command: ${protocCommand}`);

try {
  execSync(protocCommand);
  console.log('Successfully generated JavaScript protobuf and gRPC files.');
} catch (e) {
  if (e instanceof Error) {
    console.error(`Error generating JavaScript protos: ${e.message}`);
  } else {
    console.error('An unknown error occurred during JS proto generation.');
  }
  process.exit(1);
}

const tsCommand = [
  PROTO_LOADER_GEN_TYPES,
  '--grpcLib=@grpc/grpc-js',
  `--outDir=${GENERATED_DIR}`,
  ...protoFiles,
].join(' ');

console.log(`Running command: ${tsCommand}`);

try {
  execSync(tsCommand);
  console.log('Successfully generated TypeScript definition files.');
} catch (e) {
  if (e instanceof Error) {
    console.error(`Error generating TypeScript definitions: ${e.message}`);
  } else {
    console.error('An unknown error occurred during TS definition generation.');
  }
  process.exit(1);
}