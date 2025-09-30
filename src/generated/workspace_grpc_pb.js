// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var workspace_pb = require('./workspace_pb.js');

function serialize_host_Empty(arg) {
  if (!(arg instanceof workspace_pb.Empty)) {
    throw new Error('Expected argument of type host.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_host_Empty(buffer_arg) {
  return workspace_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_host_GetDiagnosticsResponse(arg) {
  if (!(arg instanceof workspace_pb.GetDiagnosticsResponse)) {
    throw new Error('Expected argument of type host.GetDiagnosticsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_host_GetDiagnosticsResponse(buffer_arg) {
  return workspace_pb.GetDiagnosticsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_host_GetWorkspacePathsResponse(arg) {
  if (!(arg instanceof workspace_pb.GetWorkspacePathsResponse)) {
    throw new Error('Expected argument of type host.GetWorkspacePathsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_host_GetWorkspacePathsResponse(buffer_arg) {
  return workspace_pb.GetWorkspacePathsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_host_SaveOpenDocumentIfDirtyRequest(arg) {
  if (!(arg instanceof workspace_pb.SaveOpenDocumentIfDirtyRequest)) {
    throw new Error('Expected argument of type host.SaveOpenDocumentIfDirtyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_host_SaveOpenDocumentIfDirtyRequest(buffer_arg) {
  return workspace_pb.SaveOpenDocumentIfDirtyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var WorkspaceServiceService = exports.WorkspaceServiceService = {
  getWorkspacePaths: {
    path: '/host.WorkspaceService/getWorkspacePaths',
    requestStream: false,
    responseStream: false,
    requestType: workspace_pb.Empty,
    responseType: workspace_pb.GetWorkspacePathsResponse,
    requestSerialize: serialize_host_Empty,
    requestDeserialize: deserialize_host_Empty,
    responseSerialize: serialize_host_GetWorkspacePathsResponse,
    responseDeserialize: deserialize_host_GetWorkspacePathsResponse,
  },
  saveOpenDocumentIfDirty: {
    path: '/host.WorkspaceService/saveOpenDocumentIfDirty',
    requestStream: false,
    responseStream: false,
    requestType: workspace_pb.SaveOpenDocumentIfDirtyRequest,
    responseType: workspace_pb.Empty,
    requestSerialize: serialize_host_SaveOpenDocumentIfDirtyRequest,
    requestDeserialize: deserialize_host_SaveOpenDocumentIfDirtyRequest,
    responseSerialize: serialize_host_Empty,
    responseDeserialize: deserialize_host_Empty,
  },
  getDiagnostics: {
    path: '/host.WorkspaceService/getDiagnostics',
    requestStream: false,
    responseStream: false,
    requestType: workspace_pb.Empty,
    responseType: workspace_pb.GetDiagnosticsResponse,
    requestSerialize: serialize_host_Empty,
    requestDeserialize: deserialize_host_Empty,
    responseSerialize: serialize_host_GetDiagnosticsResponse,
    responseDeserialize: deserialize_host_GetDiagnosticsResponse,
  },
  openProblemsPanel: {
    path: '/host.WorkspaceService/openProblemsPanel',
    requestStream: false,
    responseStream: false,
    requestType: workspace_pb.Empty,
    responseType: workspace_pb.Empty,
    requestSerialize: serialize_host_Empty,
    requestDeserialize: deserialize_host_Empty,
    responseSerialize: serialize_host_Empty,
    responseDeserialize: deserialize_host_Empty,
  },
  openTerminalPanel: {
    path: '/host.WorkspaceService/openTerminalPanel',
    requestStream: false,
    responseStream: false,
    requestType: workspace_pb.Empty,
    responseType: workspace_pb.Empty,
    requestSerialize: serialize_host_Empty,
    requestDeserialize: deserialize_host_Empty,
    responseSerialize: serialize_host_Empty,
    responseDeserialize: deserialize_host_Empty,
  },
  openClineSidebarPanel: {
    path: '/host.WorkspaceService/openClineSidebarPanel',
    requestStream: false,
    responseStream: false,
    requestType: workspace_pb.Empty,
    responseType: workspace_pb.Empty,
    requestSerialize: serialize_host_Empty,
    requestDeserialize: deserialize_host_Empty,
    responseSerialize: serialize_host_Empty,
    responseDeserialize: deserialize_host_Empty,
  },
};

exports.WorkspaceServiceClient = grpc.makeGenericClientConstructor(WorkspaceServiceService, 'WorkspaceService');
