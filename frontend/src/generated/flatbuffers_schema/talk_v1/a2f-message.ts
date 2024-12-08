// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import { A2fActivityCreateResponse } from './a2f-activity-create-response.js';
import { A2fActivityOutput } from './a2f-activity-output.js';
import { A2fError } from './a2f-error.js';


export enum A2fMessage {
  NONE = 0,
  Error = 1,
  ActivityOutput = 2,
  ActivityCreateResponse = 4
}

export function unionToA2fMessage(
  type: A2fMessage,
  accessor: (obj:A2fActivityCreateResponse|A2fActivityOutput|A2fError) => A2fActivityCreateResponse|A2fActivityOutput|A2fError|null
): A2fActivityCreateResponse|A2fActivityOutput|A2fError|null {
  switch(A2fMessage[type]) {
    case 'NONE': return null; 
    case 'Error': return accessor(new A2fError())! as A2fError;
    case 'ActivityOutput': return accessor(new A2fActivityOutput())! as A2fActivityOutput;
    case 'ActivityCreateResponse': return accessor(new A2fActivityCreateResponse())! as A2fActivityCreateResponse;
    default: return null;
  }
}

export function unionListToA2fMessage(
  type: A2fMessage, 
  accessor: (index: number, obj:A2fActivityCreateResponse|A2fActivityOutput|A2fError) => A2fActivityCreateResponse|A2fActivityOutput|A2fError|null, 
  index: number
): A2fActivityCreateResponse|A2fActivityOutput|A2fError|null {
  switch(A2fMessage[type]) {
    case 'NONE': return null; 
    case 'Error': return accessor(index, new A2fError())! as A2fError;
    case 'ActivityOutput': return accessor(index, new A2fActivityOutput())! as A2fActivityOutput;
    case 'ActivityCreateResponse': return accessor(index, new A2fActivityCreateResponse())! as A2fActivityCreateResponse;
    default: return null;
  }
}
