// package: host
// file: workspace.proto

import * as jspb from "google-protobuf";

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export class GetWorkspacePathsResponse extends jspb.Message {
  clearPathsList(): void;
  getPathsList(): Array<string>;
  setPathsList(value: Array<string>): void;
  addPaths(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWorkspacePathsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetWorkspacePathsResponse): GetWorkspacePathsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetWorkspacePathsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWorkspacePathsResponse;
  static deserializeBinaryFromReader(message: GetWorkspacePathsResponse, reader: jspb.BinaryReader): GetWorkspacePathsResponse;
}

export namespace GetWorkspacePathsResponse {
  export type AsObject = {
    pathsList: Array<string>,
  }
}

export class SaveOpenDocumentIfDirtyRequest extends jspb.Message {
  getDocumentUri(): string;
  setDocumentUri(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveOpenDocumentIfDirtyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SaveOpenDocumentIfDirtyRequest): SaveOpenDocumentIfDirtyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SaveOpenDocumentIfDirtyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveOpenDocumentIfDirtyRequest;
  static deserializeBinaryFromReader(message: SaveOpenDocumentIfDirtyRequest, reader: jspb.BinaryReader): SaveOpenDocumentIfDirtyRequest;
}

export namespace SaveOpenDocumentIfDirtyRequest {
  export type AsObject = {
    documentUri: string,
  }
}

export class Diagnostic extends jspb.Message {
  getSeverity(): Diagnostic.SeverityMap[keyof Diagnostic.SeverityMap];
  setSeverity(value: Diagnostic.SeverityMap[keyof Diagnostic.SeverityMap]): void;

  getMessage(): string;
  setMessage(value: string): void;

  getSource(): string;
  setSource(value: string): void;

  getLineStart(): number;
  setLineStart(value: number): void;

  getCharStart(): number;
  setCharStart(value: number): void;

  getLineEnd(): number;
  setLineEnd(value: number): void;

  getCharEnd(): number;
  setCharEnd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Diagnostic.AsObject;
  static toObject(includeInstance: boolean, msg: Diagnostic): Diagnostic.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Diagnostic, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Diagnostic;
  static deserializeBinaryFromReader(message: Diagnostic, reader: jspb.BinaryReader): Diagnostic;
}

export namespace Diagnostic {
  export type AsObject = {
    severity: Diagnostic.SeverityMap[keyof Diagnostic.SeverityMap],
    message: string,
    source: string,
    lineStart: number,
    charStart: number,
    lineEnd: number,
    charEnd: number,
  }

  export interface SeverityMap {
    UNKNOWN: 0;
    HINT: 1;
    INFORMATION: 2;
    WARNING: 3;
    ERROR: 4;
  }

  export const Severity: SeverityMap;
}

export class GetDiagnosticsResponse extends jspb.Message {
  clearDiagnosticsList(): void;
  getDiagnosticsList(): Array<Diagnostic>;
  setDiagnosticsList(value: Array<Diagnostic>): void;
  addDiagnostics(value?: Diagnostic, index?: number): Diagnostic;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDiagnosticsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDiagnosticsResponse): GetDiagnosticsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDiagnosticsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDiagnosticsResponse;
  static deserializeBinaryFromReader(message: GetDiagnosticsResponse, reader: jspb.BinaryReader): GetDiagnosticsResponse;
}

export namespace GetDiagnosticsResponse {
  export type AsObject = {
    diagnosticsList: Array<Diagnostic.AsObject>,
  }
}
