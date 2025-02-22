// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import { EmptyTable } from './empty-table.js';
import { R2fError } from './r2f-error.js';
import { R2fFromAgent } from './r2f-from-agent.js';


export enum R2fRootPayload {
  NONE = 0,
  Error = 1,
  FromAgent = 2,
  RelayShuttingDown = 4
}

export function unionToR2fRootPayload(
  type: R2fRootPayload,
  accessor: (obj:EmptyTable|R2fError|R2fFromAgent) => EmptyTable|R2fError|R2fFromAgent|null
): EmptyTable|R2fError|R2fFromAgent|null {
  switch(R2fRootPayload[type]) {
    case 'NONE': return null; 
    case 'Error': return accessor(new R2fError())! as R2fError;
    case 'FromAgent': return accessor(new R2fFromAgent())! as R2fFromAgent;
    case 'RelayShuttingDown': return accessor(new EmptyTable())! as EmptyTable;
    default: return null;
  }
}

export function unionListToR2fRootPayload(
  type: R2fRootPayload, 
  accessor: (index: number, obj:EmptyTable|R2fError|R2fFromAgent) => EmptyTable|R2fError|R2fFromAgent|null, 
  index: number
): EmptyTable|R2fError|R2fFromAgent|null {
  switch(R2fRootPayload[type]) {
    case 'NONE': return null; 
    case 'Error': return accessor(index, new R2fError())! as R2fError;
    case 'FromAgent': return accessor(index, new R2fFromAgent())! as R2fFromAgent;
    case 'RelayShuttingDown': return accessor(index, new EmptyTable())! as EmptyTable;
    default: return null;
  }
}
