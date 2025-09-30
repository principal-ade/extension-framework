// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var env_pb = require('./env_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_host_ClipboardReadTextResponse(arg) {
  if (!(arg instanceof env_pb.ClipboardReadTextResponse)) {
    throw new Error('Expected argument of type host.ClipboardReadTextResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_host_ClipboardReadTextResponse(buffer_arg) {
  return env_pb.ClipboardReadTextResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_host_ClipboardWriteTextRequest(arg) {
  if (!(arg instanceof env_pb.ClipboardWriteTextRequest)) {
    throw new Error('Expected argument of type host.ClipboardWriteTextRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_host_ClipboardWriteTextRequest(buffer_arg) {
  return env_pb.ClipboardWriteTextRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_host_GetHostVersionResponse(arg) {
  if (!(arg instanceof env_pb.GetHostVersionResponse)) {
    throw new Error('Expected argument of type host.GetHostVersionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_host_GetHostVersionResponse(buffer_arg) {
  return env_pb.GetHostVersionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_host_GetIdeRedirectUriResponse(arg) {
  if (!(arg instanceof env_pb.GetIdeRedirectUriResponse)) {
    throw new Error('Expected argument of type host.GetIdeRedirectUriResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_host_GetIdeRedirectUriResponse(buffer_arg) {
  return env_pb.GetIdeRedirectUriResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_host_GetMachineIdResponse(arg) {
  if (!(arg instanceof env_pb.GetMachineIdResponse)) {
    throw new Error('Expected argument of type host.GetMachineIdResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_host_GetMachineIdResponse(buffer_arg) {
  return env_pb.GetMachineIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_host_TelemetrySettings(arg) {
  if (!(arg instanceof env_pb.TelemetrySettings)) {
    throw new Error('Expected argument of type host.TelemetrySettings');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_host_TelemetrySettings(buffer_arg) {
  return env_pb.TelemetrySettings.deserializeBinary(new Uint8Array(buffer_arg));
}


var EnvServiceService = exports.EnvServiceService = {
  getHostVersion: {
    path: '/host.EnvService/getHostVersion',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: env_pb.GetHostVersionResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_host_GetHostVersionResponse,
    responseDeserialize: deserialize_host_GetHostVersionResponse,
  },
  getIdeRedirectUri: {
    path: '/host.EnvService/getIdeRedirectUri',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: env_pb.GetIdeRedirectUriResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_host_GetIdeRedirectUriResponse,
    responseDeserialize: deserialize_host_GetIdeRedirectUriResponse,
  },
  getMachineId: {
    path: '/host.EnvService/getMachineId',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: env_pb.GetMachineIdResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_host_GetMachineIdResponse,
    responseDeserialize: deserialize_host_GetMachineIdResponse,
  },
  clipboardReadText: {
    path: '/host.EnvService/clipboardReadText',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: env_pb.ClipboardReadTextResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_host_ClipboardReadTextResponse,
    responseDeserialize: deserialize_host_ClipboardReadTextResponse,
  },
  clipboardWriteText: {
    path: '/host.EnvService/clipboardWriteText',
    requestStream: false,
    responseStream: false,
    requestType: env_pb.ClipboardWriteTextRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_host_ClipboardWriteTextRequest,
    requestDeserialize: deserialize_host_ClipboardWriteTextRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  subscribeToTelemetrySettings: {
    path: '/host.EnvService/subscribeToTelemetrySettings',
    requestStream: false,
    responseStream: true,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: env_pb.TelemetrySettings,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_host_TelemetrySettings,
    responseDeserialize: deserialize_host_TelemetrySettings,
  },
  getTelemetrySettings: {
    path: '/host.EnvService/getTelemetrySettings',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: env_pb.TelemetrySettings,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_host_TelemetrySettings,
    responseDeserialize: deserialize_host_TelemetrySettings,
  },
};

exports.EnvServiceClient = grpc.makeGenericClientConstructor(EnvServiceService, 'EnvService');
