// package: host
// file: env.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class GetHostVersionResponse extends jspb.Message {
  getVersion(): string;
  setVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHostVersionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetHostVersionResponse): GetHostVersionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetHostVersionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHostVersionResponse;
  static deserializeBinaryFromReader(message: GetHostVersionResponse, reader: jspb.BinaryReader): GetHostVersionResponse;
}

export namespace GetHostVersionResponse {
  export type AsObject = {
    version: string,
  }
}

export class GetIdeRedirectUriResponse extends jspb.Message {
  getUri(): string;
  setUri(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIdeRedirectUriResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetIdeRedirectUriResponse): GetIdeRedirectUriResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetIdeRedirectUriResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIdeRedirectUriResponse;
  static deserializeBinaryFromReader(message: GetIdeRedirectUriResponse, reader: jspb.BinaryReader): GetIdeRedirectUriResponse;
}

export namespace GetIdeRedirectUriResponse {
  export type AsObject = {
    uri: string,
  }
}

export class GetMachineIdResponse extends jspb.Message {
  getMachineId(): string;
  setMachineId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMachineIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMachineIdResponse): GetMachineIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMachineIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMachineIdResponse;
  static deserializeBinaryFromReader(message: GetMachineIdResponse, reader: jspb.BinaryReader): GetMachineIdResponse;
}

export namespace GetMachineIdResponse {
  export type AsObject = {
    machineId: string,
  }
}

export class ClipboardReadTextResponse extends jspb.Message {
  getText(): string;
  setText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClipboardReadTextResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ClipboardReadTextResponse): ClipboardReadTextResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClipboardReadTextResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClipboardReadTextResponse;
  static deserializeBinaryFromReader(message: ClipboardReadTextResponse, reader: jspb.BinaryReader): ClipboardReadTextResponse;
}

export namespace ClipboardReadTextResponse {
  export type AsObject = {
    text: string,
  }
}

export class ClipboardWriteTextRequest extends jspb.Message {
  getText(): string;
  setText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClipboardWriteTextRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ClipboardWriteTextRequest): ClipboardWriteTextRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClipboardWriteTextRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClipboardWriteTextRequest;
  static deserializeBinaryFromReader(message: ClipboardWriteTextRequest, reader: jspb.BinaryReader): ClipboardWriteTextRequest;
}

export namespace ClipboardWriteTextRequest {
  export type AsObject = {
    text: string,
  }
}

export class TelemetrySettings extends jspb.Message {
  getTelemetryEnabled(): boolean;
  setTelemetryEnabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TelemetrySettings.AsObject;
  static toObject(includeInstance: boolean, msg: TelemetrySettings): TelemetrySettings.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TelemetrySettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TelemetrySettings;
  static deserializeBinaryFromReader(message: TelemetrySettings, reader: jspb.BinaryReader): TelemetrySettings;
}

export namespace TelemetrySettings {
  export type AsObject = {
    telemetryEnabled: boolean,
  }
}
