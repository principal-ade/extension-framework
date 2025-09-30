// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var diff_pb = require('./diff_pb.js');
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

function serialize_host_DiffRequest(arg) {
  if (!(arg instanceof diff_pb.DiffRequest)) {
    throw new Error('Expected argument of type host.DiffRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_host_DiffRequest(buffer_arg) {
  return diff_pb.DiffRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_host_GetDocumentTextRequest(arg) {
  if (!(arg instanceof diff_pb.GetDocumentTextRequest)) {
    throw new Error('Expected argument of type host.GetDocumentTextRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_host_GetDocumentTextRequest(buffer_arg) {
  return diff_pb.GetDocumentTextRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_host_GetDocumentTextResponse(arg) {
  if (!(arg instanceof diff_pb.GetDocumentTextResponse)) {
    throw new Error('Expected argument of type host.GetDocumentTextResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_host_GetDocumentTextResponse(buffer_arg) {
  return diff_pb.GetDocumentTextResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_host_MultiFileDiffRequest(arg) {
  if (!(arg instanceof diff_pb.MultiFileDiffRequest)) {
    throw new Error('Expected argument of type host.MultiFileDiffRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_host_MultiFileDiffRequest(buffer_arg) {
  return diff_pb.MultiFileDiffRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_host_ReplaceTextRequest(arg) {
  if (!(arg instanceof diff_pb.ReplaceTextRequest)) {
    throw new Error('Expected argument of type host.ReplaceTextRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_host_ReplaceTextRequest(buffer_arg) {
  return diff_pb.ReplaceTextRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_host_SaveDocumentRequest(arg) {
  if (!(arg instanceof diff_pb.SaveDocumentRequest)) {
    throw new Error('Expected argument of type host.SaveDocumentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_host_SaveDocumentRequest(buffer_arg) {
  return diff_pb.SaveDocumentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_host_ScrollDiffRequest(arg) {
  if (!(arg instanceof diff_pb.ScrollDiffRequest)) {
    throw new Error('Expected argument of type host.ScrollDiffRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_host_ScrollDiffRequest(buffer_arg) {
  return diff_pb.ScrollDiffRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_host_TruncateDocumentRequest(arg) {
  if (!(arg instanceof diff_pb.TruncateDocumentRequest)) {
    throw new Error('Expected argument of type host.TruncateDocumentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_host_TruncateDocumentRequest(buffer_arg) {
  return diff_pb.TruncateDocumentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var DiffServiceService = exports.DiffServiceService = {
  openDiff: {
    path: '/host.DiffService/openDiff',
    requestStream: false,
    responseStream: false,
    requestType: diff_pb.DiffRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_host_DiffRequest,
    requestDeserialize: deserialize_host_DiffRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  openMultiFileDiff: {
    path: '/host.DiffService/openMultiFileDiff',
    requestStream: false,
    responseStream: false,
    requestType: diff_pb.MultiFileDiffRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_host_MultiFileDiffRequest,
    requestDeserialize: deserialize_host_MultiFileDiffRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getDocumentText: {
    path: '/host.DiffService/getDocumentText',
    requestStream: false,
    responseStream: false,
    requestType: diff_pb.GetDocumentTextRequest,
    responseType: diff_pb.GetDocumentTextResponse,
    requestSerialize: serialize_host_GetDocumentTextRequest,
    requestDeserialize: deserialize_host_GetDocumentTextRequest,
    responseSerialize: serialize_host_GetDocumentTextResponse,
    responseDeserialize: deserialize_host_GetDocumentTextResponse,
  },
  replaceText: {
    path: '/host.DiffService/replaceText',
    requestStream: false,
    responseStream: false,
    requestType: diff_pb.ReplaceTextRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_host_ReplaceTextRequest,
    requestDeserialize: deserialize_host_ReplaceTextRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  scrollDiff: {
    path: '/host.DiffService/scrollDiff',
    requestStream: false,
    responseStream: false,
    requestType: diff_pb.ScrollDiffRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_host_ScrollDiffRequest,
    requestDeserialize: deserialize_host_ScrollDiffRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  truncateDocument: {
    path: '/host.DiffService/truncateDocument',
    requestStream: false,
    responseStream: false,
    requestType: diff_pb.TruncateDocumentRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_host_TruncateDocumentRequest,
    requestDeserialize: deserialize_host_TruncateDocumentRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  saveDocument: {
    path: '/host.DiffService/saveDocument',
    requestStream: false,
    responseStream: false,
    requestType: diff_pb.SaveDocumentRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_host_SaveDocumentRequest,
    requestDeserialize: deserialize_host_SaveDocumentRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  closeAllDiffs: {
    path: '/host.DiffService/closeAllDiffs',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.DiffServiceClient = grpc.makeGenericClientConstructor(DiffServiceService, 'DiffService');
