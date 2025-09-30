import {
  sendUnaryData,
  ServerUnaryCall,
  ServerWritableStream,
} from '@grpc/grpc-js';
import { EnvServiceHandlers } from '../generated/host/EnvService';
import { Empty__Output } from '../generated/host/Empty';
import { ClipboardWriteTextRequest__Output } from '../generated/host/ClipboardWriteTextRequest';
import { Empty } from '../generated/host/Empty';
import { GetHostVersionResponse } from '../generated/host/GetHostVersionResponse';
import { GetIdeRedirectUriResponse } from '../generated/host/GetIdeRedirectUriResponse';
import { GetMachineIdResponse } from '../generated/host/GetMachineIdResponse';
import { ClipboardReadTextResponse } from '../generated/host/ClipboardReadTextResponse';
import { TelemetrySettings } from '../generated/host/TelemetrySettings';

export const envServiceHandlers: EnvServiceHandlers = {
  getHostVersion(
    call: ServerUnaryCall<Empty__Output, GetHostVersionResponse>,
    callback: sendUnaryData<GetHostVersionResponse>
  ) {
    throw new Error('Method not implemented.');
  },

  getIdeRedirectUri(
    call: ServerUnaryCall<Empty__Output, GetIdeRedirectUriResponse>,
    callback: sendUnaryData<GetIdeRedirectUriResponse>
  ) {
    throw new Error('Method not implemented.');
  },

  getMachineId(
    call: ServerUnaryCall<Empty__Output, GetMachineIdResponse>,
    callback: sendUnaryData<GetMachineIdResponse>
  ) {
    throw new Error('Method not implemented.');
  },

  clipboardReadText(
    call: ServerUnaryCall<Empty__Output, ClipboardReadTextResponse>,
    callback: sendUnaryData<ClipboardReadTextResponse>
  ) {
    throw new Error('Method not implemented.');
  },

  clipboardWriteText(
    call: ServerUnaryCall<ClipboardWriteTextRequest__Output, Empty>,
    callback: sendUnaryData<Empty>
  ) {
    throw new Error('Method not implemented.');
  },

  subscribeToTelemetrySettings(
    call: ServerWritableStream<Empty__Output, TelemetrySettings>
  ) {
    throw new Error('Method not implemented.');
  },

  getTelemetrySettings(
    call: ServerUnaryCall<Empty__Output, TelemetrySettings>,
    callback: sendUnaryData<TelemetrySettings>
  ) {
    throw new Error('Method not implemented.');
  },
};