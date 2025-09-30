// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var window_pb = require('./window_pb.js');
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

function serialize_host_GetActiveEditorResponse(arg) {
  if (!(arg instanceof window_pb.GetActiveEditorResponse)) {
    throw new Error('Expected argument of type host.GetActiveEditorResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_host_GetActiveEditorResponse(buffer_arg) {
  return window_pb.GetActiveEditorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_host_GetTabsResponse(arg) {
  if (!(arg instanceof window_pb.GetTabsResponse)) {
    throw new Error('Expected argument of type host.GetTabsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_host_GetTabsResponse(buffer_arg) {
  return window_pb.GetTabsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_host_OpenFileRequest(arg) {
  if (!(arg instanceof window_pb.OpenFileRequest)) {
    throw new Error('Expected argument of type host.OpenFileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_host_OpenFileRequest(buffer_arg) {
  return window_pb.OpenFileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_host_ShowInputBoxRequest(arg) {
  if (!(arg instanceof window_pb.ShowInputBoxRequest)) {
    throw new Error('Expected argument of type host.ShowInputBoxRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_host_ShowInputBoxRequest(buffer_arg) {
  return window_pb.ShowInputBoxRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_host_ShowInputBoxResponse(arg) {
  if (!(arg instanceof window_pb.ShowInputBoxResponse)) {
    throw new Error('Expected argument of type host.ShowInputBoxResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_host_ShowInputBoxResponse(buffer_arg) {
  return window_pb.ShowInputBoxResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_host_ShowMessageRequest(arg) {
  if (!(arg instanceof window_pb.ShowMessageRequest)) {
    throw new Error('Expected argument of type host.ShowMessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_host_ShowMessageRequest(buffer_arg) {
  return window_pb.ShowMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_host_ShowOpenDialogRequest(arg) {
  if (!(arg instanceof window_pb.ShowOpenDialogRequest)) {
    throw new Error('Expected argument of type host.ShowOpenDialogRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_host_ShowOpenDialogRequest(buffer_arg) {
  return window_pb.ShowOpenDialogRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_host_ShowOpenDialogResponse(arg) {
  if (!(arg instanceof window_pb.ShowOpenDialogResponse)) {
    throw new Error('Expected argument of type host.ShowOpenDialogResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_host_ShowOpenDialogResponse(buffer_arg) {
  return window_pb.ShowOpenDialogResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_host_ShowSaveDialogRequest(arg) {
  if (!(arg instanceof window_pb.ShowSaveDialogRequest)) {
    throw new Error('Expected argument of type host.ShowSaveDialogRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_host_ShowSaveDialogRequest(buffer_arg) {
  return window_pb.ShowSaveDialogRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_host_ShowSaveDialogResponse(arg) {
  if (!(arg instanceof window_pb.ShowSaveDialogResponse)) {
    throw new Error('Expected argument of type host.ShowSaveDialogResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_host_ShowSaveDialogResponse(buffer_arg) {
  return window_pb.ShowSaveDialogResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var WindowServiceService = exports.WindowServiceService = {
  showMessage: {
    path: '/host.WindowService/showMessage',
    requestStream: false,
    responseStream: false,
    requestType: window_pb.ShowMessageRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_host_ShowMessageRequest,
    requestDeserialize: deserialize_host_ShowMessageRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  showInputBox: {
    path: '/host.WindowService/showInputBox',
    requestStream: false,
    responseStream: false,
    requestType: window_pb.ShowInputBoxRequest,
    responseType: window_pb.ShowInputBoxResponse,
    requestSerialize: serialize_host_ShowInputBoxRequest,
    requestDeserialize: deserialize_host_ShowInputBoxRequest,
    responseSerialize: serialize_host_ShowInputBoxResponse,
    responseDeserialize: deserialize_host_ShowInputBoxResponse,
  },
  showOpenDialog: {
    path: '/host.WindowService/showOpenDialog',
    requestStream: false,
    responseStream: false,
    requestType: window_pb.ShowOpenDialogRequest,
    responseType: window_pb.ShowOpenDialogResponse,
    requestSerialize: serialize_host_ShowOpenDialogRequest,
    requestDeserialize: deserialize_host_ShowOpenDialogRequest,
    responseSerialize: serialize_host_ShowOpenDialogResponse,
    responseDeserialize: deserialize_host_ShowOpenDialogResponse,
  },
  showSaveDialog: {
    path: '/host.WindowService/showSaveDialog',
    requestStream: false,
    responseStream: false,
    requestType: window_pb.ShowSaveDialogRequest,
    responseType: window_pb.ShowSaveDialogResponse,
    requestSerialize: serialize_host_ShowSaveDialogRequest,
    requestDeserialize: deserialize_host_ShowSaveDialogRequest,
    responseSerialize: serialize_host_ShowSaveDialogResponse,
    responseDeserialize: deserialize_host_ShowSaveDialogResponse,
  },
  openFile: {
    path: '/host.WindowService/openFile',
    requestStream: false,
    responseStream: false,
    requestType: window_pb.OpenFileRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_host_OpenFileRequest,
    requestDeserialize: deserialize_host_OpenFileRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getOpenTabs: {
    path: '/host.WindowService/getOpenTabs',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: window_pb.GetTabsResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_host_GetTabsResponse,
    responseDeserialize: deserialize_host_GetTabsResponse,
  },
  getVisibleTabs: {
    path: '/host.WindowService/getVisibleTabs',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: window_pb.GetTabsResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_host_GetTabsResponse,
    responseDeserialize: deserialize_host_GetTabsResponse,
  },
  getActiveEditor: {
    path: '/host.WindowService/getActiveEditor',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: window_pb.GetActiveEditorResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_host_GetActiveEditorResponse,
    responseDeserialize: deserialize_host_GetActiveEditorResponse,
  },
};

exports.WindowServiceClient = grpc.makeGenericClientConstructor(WindowServiceService, 'WindowService');
