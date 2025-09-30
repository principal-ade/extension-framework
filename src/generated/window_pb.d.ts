// package: host
// file: window.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class ShowMessageRequest extends jspb.Message {
  getType(): ShowMessageRequest.MessageTypeMap[keyof ShowMessageRequest.MessageTypeMap];
  setType(value: ShowMessageRequest.MessageTypeMap[keyof ShowMessageRequest.MessageTypeMap]): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShowMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ShowMessageRequest): ShowMessageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShowMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShowMessageRequest;
  static deserializeBinaryFromReader(message: ShowMessageRequest, reader: jspb.BinaryReader): ShowMessageRequest;
}

export namespace ShowMessageRequest {
  export type AsObject = {
    type: ShowMessageRequest.MessageTypeMap[keyof ShowMessageRequest.MessageTypeMap],
    message: string,
  }

  export interface MessageTypeMap {
    INFO: 0;
    WARNING: 1;
    ERROR: 2;
  }

  export const MessageType: MessageTypeMap;
}

export class ShowInputBoxRequest extends jspb.Message {
  getPrompt(): string;
  setPrompt(value: string): void;

  getPlaceholder(): string;
  setPlaceholder(value: string): void;

  getDefaultValue(): string;
  setDefaultValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShowInputBoxRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ShowInputBoxRequest): ShowInputBoxRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShowInputBoxRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShowInputBoxRequest;
  static deserializeBinaryFromReader(message: ShowInputBoxRequest, reader: jspb.BinaryReader): ShowInputBoxRequest;
}

export namespace ShowInputBoxRequest {
  export type AsObject = {
    prompt: string,
    placeholder: string,
    defaultValue: string,
  }
}

export class ShowInputBoxResponse extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShowInputBoxResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ShowInputBoxResponse): ShowInputBoxResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShowInputBoxResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShowInputBoxResponse;
  static deserializeBinaryFromReader(message: ShowInputBoxResponse, reader: jspb.BinaryReader): ShowInputBoxResponse;
}

export namespace ShowInputBoxResponse {
  export type AsObject = {
    value: string,
  }
}

export class ShowOpenDialogRequest extends jspb.Message {
  getCanSelectFiles(): boolean;
  setCanSelectFiles(value: boolean): void;

  getCanSelectFolders(): boolean;
  setCanSelectFolders(value: boolean): void;

  getCanSelectMany(): boolean;
  setCanSelectMany(value: boolean): void;

  getDefaultUri(): string;
  setDefaultUri(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShowOpenDialogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ShowOpenDialogRequest): ShowOpenDialogRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShowOpenDialogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShowOpenDialogRequest;
  static deserializeBinaryFromReader(message: ShowOpenDialogRequest, reader: jspb.BinaryReader): ShowOpenDialogRequest;
}

export namespace ShowOpenDialogRequest {
  export type AsObject = {
    canSelectFiles: boolean,
    canSelectFolders: boolean,
    canSelectMany: boolean,
    defaultUri: string,
  }
}

export class ShowOpenDialogResponse extends jspb.Message {
  clearSelectedUrisList(): void;
  getSelectedUrisList(): Array<string>;
  setSelectedUrisList(value: Array<string>): void;
  addSelectedUris(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShowOpenDialogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ShowOpenDialogResponse): ShowOpenDialogResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShowOpenDialogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShowOpenDialogResponse;
  static deserializeBinaryFromReader(message: ShowOpenDialogResponse, reader: jspb.BinaryReader): ShowOpenDialogResponse;
}

export namespace ShowOpenDialogResponse {
  export type AsObject = {
    selectedUrisList: Array<string>,
  }
}

export class ShowSaveDialogRequest extends jspb.Message {
  getDefaultUri(): string;
  setDefaultUri(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShowSaveDialogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ShowSaveDialogRequest): ShowSaveDialogRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShowSaveDialogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShowSaveDialogRequest;
  static deserializeBinaryFromReader(message: ShowSaveDialogRequest, reader: jspb.BinaryReader): ShowSaveDialogRequest;
}

export namespace ShowSaveDialogRequest {
  export type AsObject = {
    defaultUri: string,
  }
}

export class ShowSaveDialogResponse extends jspb.Message {
  getSavedUri(): string;
  setSavedUri(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShowSaveDialogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ShowSaveDialogResponse): ShowSaveDialogResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShowSaveDialogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShowSaveDialogResponse;
  static deserializeBinaryFromReader(message: ShowSaveDialogResponse, reader: jspb.BinaryReader): ShowSaveDialogResponse;
}

export namespace ShowSaveDialogResponse {
  export type AsObject = {
    savedUri: string,
  }
}

export class OpenFileRequest extends jspb.Message {
  getFileUri(): string;
  setFileUri(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OpenFileRequest): OpenFileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OpenFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenFileRequest;
  static deserializeBinaryFromReader(message: OpenFileRequest, reader: jspb.BinaryReader): OpenFileRequest;
}

export namespace OpenFileRequest {
  export type AsObject = {
    fileUri: string,
  }
}

export class Tab extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getLabel(): string;
  setLabel(value: string): void;

  getIsActive(): boolean;
  setIsActive(value: boolean): void;

  getIsVisible(): boolean;
  setIsVisible(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tab.AsObject;
  static toObject(includeInstance: boolean, msg: Tab): Tab.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Tab, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tab;
  static deserializeBinaryFromReader(message: Tab, reader: jspb.BinaryReader): Tab;
}

export namespace Tab {
  export type AsObject = {
    id: string,
    label: string,
    isActive: boolean,
    isVisible: boolean,
  }
}

export class GetTabsResponse extends jspb.Message {
  clearTabsList(): void;
  getTabsList(): Array<Tab>;
  setTabsList(value: Array<Tab>): void;
  addTabs(value?: Tab, index?: number): Tab;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTabsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTabsResponse): GetTabsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTabsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTabsResponse;
  static deserializeBinaryFromReader(message: GetTabsResponse, reader: jspb.BinaryReader): GetTabsResponse;
}

export namespace GetTabsResponse {
  export type AsObject = {
    tabsList: Array<Tab.AsObject>,
  }
}

export class Editor extends jspb.Message {
  getFileUri(): string;
  setFileUri(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Editor.AsObject;
  static toObject(includeInstance: boolean, msg: Editor): Editor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Editor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Editor;
  static deserializeBinaryFromReader(message: Editor, reader: jspb.BinaryReader): Editor;
}

export namespace Editor {
  export type AsObject = {
    fileUri: string,
  }
}

export class GetActiveEditorResponse extends jspb.Message {
  hasEditor(): boolean;
  clearEditor(): void;
  getEditor(): Editor | undefined;
  setEditor(value?: Editor): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetActiveEditorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetActiveEditorResponse): GetActiveEditorResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetActiveEditorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetActiveEditorResponse;
  static deserializeBinaryFromReader(message: GetActiveEditorResponse, reader: jspb.BinaryReader): GetActiveEditorResponse;
}

export namespace GetActiveEditorResponse {
  export type AsObject = {
    editor?: Editor.AsObject,
  }
}
