// package: host
// file: diff.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class DiffRequest extends jspb.Message {
  getFilePathA(): string;
  setFilePathA(value: string): void;

  getFilePathB(): string;
  setFilePathB(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiffRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DiffRequest): DiffRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiffRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiffRequest;
  static deserializeBinaryFromReader(message: DiffRequest, reader: jspb.BinaryReader): DiffRequest;
}

export namespace DiffRequest {
  export type AsObject = {
    filePathA: string,
    filePathB: string,
  }
}

export class MultiFileDiffRequest extends jspb.Message {
  clearDiffsList(): void;
  getDiffsList(): Array<DiffRequest>;
  setDiffsList(value: Array<DiffRequest>): void;
  addDiffs(value?: DiffRequest, index?: number): DiffRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiFileDiffRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MultiFileDiffRequest): MultiFileDiffRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MultiFileDiffRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiFileDiffRequest;
  static deserializeBinaryFromReader(message: MultiFileDiffRequest, reader: jspb.BinaryReader): MultiFileDiffRequest;
}

export namespace MultiFileDiffRequest {
  export type AsObject = {
    diffsList: Array<DiffRequest.AsObject>,
  }
}

export class GetDocumentTextRequest extends jspb.Message {
  getFilePath(): string;
  setFilePath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDocumentTextRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDocumentTextRequest): GetDocumentTextRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDocumentTextRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDocumentTextRequest;
  static deserializeBinaryFromReader(message: GetDocumentTextRequest, reader: jspb.BinaryReader): GetDocumentTextRequest;
}

export namespace GetDocumentTextRequest {
  export type AsObject = {
    filePath: string,
  }
}

export class GetDocumentTextResponse extends jspb.Message {
  getText(): string;
  setText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDocumentTextResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDocumentTextResponse): GetDocumentTextResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDocumentTextResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDocumentTextResponse;
  static deserializeBinaryFromReader(message: GetDocumentTextResponse, reader: jspb.BinaryReader): GetDocumentTextResponse;
}

export namespace GetDocumentTextResponse {
  export type AsObject = {
    text: string,
  }
}

export class ReplaceTextRequest extends jspb.Message {
  getFilePath(): string;
  setFilePath(value: string): void;

  getStartLine(): number;
  setStartLine(value: number): void;

  getStartChar(): number;
  setStartChar(value: number): void;

  getEndLine(): number;
  setEndLine(value: number): void;

  getEndChar(): number;
  setEndChar(value: number): void;

  getNewText(): string;
  setNewText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReplaceTextRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReplaceTextRequest): ReplaceTextRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReplaceTextRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReplaceTextRequest;
  static deserializeBinaryFromReader(message: ReplaceTextRequest, reader: jspb.BinaryReader): ReplaceTextRequest;
}

export namespace ReplaceTextRequest {
  export type AsObject = {
    filePath: string,
    startLine: number,
    startChar: number,
    endLine: number,
    endChar: number,
    newText: string,
  }
}

export class ScrollDiffRequest extends jspb.Message {
  getFilePath(): string;
  setFilePath(value: string): void;

  getLine(): number;
  setLine(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScrollDiffRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ScrollDiffRequest): ScrollDiffRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScrollDiffRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScrollDiffRequest;
  static deserializeBinaryFromReader(message: ScrollDiffRequest, reader: jspb.BinaryReader): ScrollDiffRequest;
}

export namespace ScrollDiffRequest {
  export type AsObject = {
    filePath: string,
    line: number,
  }
}

export class TruncateDocumentRequest extends jspb.Message {
  getFilePath(): string;
  setFilePath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TruncateDocumentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TruncateDocumentRequest): TruncateDocumentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TruncateDocumentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TruncateDocumentRequest;
  static deserializeBinaryFromReader(message: TruncateDocumentRequest, reader: jspb.BinaryReader): TruncateDocumentRequest;
}

export namespace TruncateDocumentRequest {
  export type AsObject = {
    filePath: string,
  }
}

export class SaveDocumentRequest extends jspb.Message {
  getFilePath(): string;
  setFilePath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveDocumentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SaveDocumentRequest): SaveDocumentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SaveDocumentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveDocumentRequest;
  static deserializeBinaryFromReader(message: SaveDocumentRequest, reader: jspb.BinaryReader): SaveDocumentRequest;
}

export namespace SaveDocumentRequest {
  export type AsObject = {
    filePath: string,
  }
}
