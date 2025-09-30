import { sendUnaryData, ServerUnaryCall } from '@grpc/grpc-js';
import { DiffServiceHandlers } from '../generated/host/DiffService';
import { DiffRequest__Output } from '../generated/host/DiffRequest';
import { MultiFileDiffRequest__Output } from '../generated/host/MultiFileDiffRequest';
import { GetDocumentTextRequest__Output } from '../generated/host/GetDocumentTextRequest';
import { ReplaceTextRequest__Output } from '../generated/host/ReplaceTextRequest';
import { ScrollDiffRequest__Output } from '../generated/host/ScrollDiffRequest';
import { TruncateDocumentRequest__Output } from '../generated/host/TruncateDocumentRequest';
import { SaveDocumentRequest__Output } from '../generated/host/SaveDocumentRequest';
import { Empty__Output } from '../generated/host/Empty';
import { Empty } from '../generated/host/Empty';
import { GetDocumentTextResponse } from '../generated/host/GetDocumentTextResponse';

export const diffServiceHandlers: DiffServiceHandlers = {
  openDiff(
    call: ServerUnaryCall<DiffRequest__Output, Empty>,
    callback: sendUnaryData<Empty>
  ) {
    throw new Error('Method not implemented.');
  },

  openMultiFileDiff(
    call: ServerUnaryCall<MultiFileDiffRequest__Output, Empty>,
    callback: sendUnaryData<Empty>
  ) {
    throw new Error('Method not implemented.');
  },

  getDocumentText(
    call: ServerUnaryCall<
      GetDocumentTextRequest__Output,
      GetDocumentTextResponse
    >,
    callback: sendUnaryData<GetDocumentTextResponse>
  ) {
    throw new Error('Method not implemented.');
  },

  replaceText(
    call: ServerUnaryCall<ReplaceTextRequest__Output, Empty>,
    callback: sendUnaryData<Empty>
  ) {
    throw new Error('Method not implemented.');
  },

  scrollDiff(
    call: ServerUnaryCall<ScrollDiffRequest__Output, Empty>,
    callback: sendUnaryData<Empty>
  ) {
    throw new Error('Method not implemented.');
  },

  truncateDocument(
    call: ServerUnaryCall<TruncateDocumentRequest__Output, Empty>,
    callback: sendUnaryData<Empty>
  ) {
    throw new Error('Method not implemented.');
  },

  saveDocument(
    call: ServerUnaryCall<SaveDocumentRequest__Output, Empty>,
    callback: sendUnaryData<Empty>
  ) {
    throw new Error('Method not implemented.');
  },

  closeAllDiffs(
    call: ServerUnaryCall<Empty__Output, Empty>,
    callback: sendUnaryData<Empty>
  ) {
    throw new Error('Method not implemented.');
  },
};