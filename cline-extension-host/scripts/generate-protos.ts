import { exec } from 'child_process';
import { glob } from 'glob';
import { mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';

const PROTO_DIR = join(__dirname, '../src/proto');
const GENERATED_DIR = join(__dirname, '../src/generated');
const PROTOC_GEN_TS_PATH = join(__dirname, '../node_modules/.bin/protoc-gen-ts');
const GRPC_TOOLS_NODE_PROTOC = join(__dirname, '../node_modules/.bin/grpc_tools_node_protoc');

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

const command = [
  GRPC_TOOLS_NODE_PROTOC,
  `--plugin=protoc-gen-ts=${PROTOC_GEN_TS_PATH}`,
  `--js_out=import_style=commonjs,binary:${GENERATED_DIR}`,
  `--ts_out=service=grpc-js:${GENERATED_DIR}`,
  `--grpc_out=grpc_js:${GENERATED_DIR}`,
  `-I ${PROTO_DIR}`,
  ...protoFiles,
].join(' ');

console.log(`Running command: ${command}`);

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error generating protos: ${error.message}`);
    console.error(stderr);
    process.exit(1);
  }

  if (stderr) {
    console.warn(`protoc stderr: ${stderr}`);
  }

  console.log('Successfully generated protobuf and gRPC files.');
  console.log(stdout);
});