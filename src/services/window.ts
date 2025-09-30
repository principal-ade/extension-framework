import { sendUnaryData, ServerUnaryCall } from '@grpc/grpc-js';
import { WindowServiceHandlers } from '../generated/host/WindowService';
import { Empty__Output } from '../generated/host/Empty';
import { ShowMessageRequest__Output } from '../generated/host/ShowMessageRequest';
import { ShowInputBoxRequest__Output } from '../generated/host/ShowInputBoxRequest';
import { ShowOpenDialogRequest__Output } from '../generated/host/ShowOpenDialogRequest';
import { ShowSaveDialogRequest__Output } from '../generated/host/ShowSaveDialogRequest';
import { OpenFileRequest__Output } from '../generated/host/OpenFileRequest';
import { Empty } from '../generated/host/Empty';
import { ShowInputBoxResponse } from '../generated/host/ShowInputBoxResponse';
import { ShowOpenDialogResponse } from '../generated/host/ShowOpenDialogResponse';
import { ShowSaveDialogResponse } from '../generated/host/ShowSaveDialogResponse';
import { GetTabsResponse } from '../generated/host/GetTabsResponse';
import { GetActiveEditorResponse } from '../generated/host/GetActiveEditorResponse';

export const windowServiceHandlers: WindowServiceHandlers = {
  showMessage(
    call: ServerUnaryCall<ShowMessageRequest__Output, Empty>,
    callback: sendUnaryData<Empty>
  ) {
    throw new Error('Method not implemented.');
  },

  showInputBox(
    call: ServerUnaryCall<ShowInputBoxRequest__Output, ShowInputBoxResponse>,
    callback: sendUnaryData<ShowInputBoxResponse>
  ) {
    throw new Error('Method not implemented.');
  },

  showOpenDialog(
    call: ServerUnaryCall<ShowOpenDialogRequest__Output, ShowOpenDialogResponse>,
    callback: sendUnaryData<ShowOpenDialogResponse>
  ) {
    throw new Error('Method not implemented.');
  },

  showSaveDialog(
    call: ServerUnaryCall<ShowSaveDialogRequest__Output, ShowSaveDialogResponse>,
    callback: sendUnaryData<ShowSaveDialogResponse>
  ) {
    throw new Error('Method not implemented.');
  },

  openFile(
    call: ServerUnaryCall<OpenFileRequest__Output, Empty>,
    callback: sendUnaryData<Empty>
  ) {
    throw new Error('Method not implemented.');
  },

  getOpenTabs(
    call: ServerUnaryCall<Empty__Output, GetTabsResponse>,
    callback: sendUnaryData<GetTabsResponse>
  ) {
    throw new Error('Method not implemented.');
  },

  getVisibleTabs(
    call: ServerUnaryCall<Empty__Output, GetTabsResponse>,
    callback: sendUnaryData<GetTabsResponse>
  ) {
    throw new Error('Method not implemented.');
  },

  getActiveEditor(
    call: ServerUnaryCall<Empty__Output, GetActiveEditorResponse>,
    callback: sendUnaryData<GetActiveEditorResponse>
  ) {
    throw new Error('Method not implemented.');
  },
};