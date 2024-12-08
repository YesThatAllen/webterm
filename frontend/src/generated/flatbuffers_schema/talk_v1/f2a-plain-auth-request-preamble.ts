// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { Version } from './version.js';


export class F2aPlainAuthRequestPreamble {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):F2aPlainAuthRequestPreamble {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsF2aPlainAuthRequestPreamble(bb:flatbuffers.ByteBuffer, obj?:F2aPlainAuthRequestPreamble):F2aPlainAuthRequestPreamble {
  return (obj || new F2aPlainAuthRequestPreamble()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsF2aPlainAuthRequestPreamble(bb:flatbuffers.ByteBuffer, obj?:F2aPlainAuthRequestPreamble):F2aPlainAuthRequestPreamble {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new F2aPlainAuthRequestPreamble()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

frontendVersion(obj?:Version):Version|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new Version()).__init(this.bb_pos + offset, this.bb!) : null;
}

static startF2aPlainAuthRequestPreamble(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addFrontendVersion(builder:flatbuffers.Builder, frontendVersionOffset:flatbuffers.Offset) {
  builder.addFieldStruct(0, frontendVersionOffset, 0);
}

static endF2aPlainAuthRequestPreamble(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createF2aPlainAuthRequestPreamble(builder:flatbuffers.Builder, frontendVersionOffset:flatbuffers.Offset):flatbuffers.Offset {
  F2aPlainAuthRequestPreamble.startF2aPlainAuthRequestPreamble(builder);
  F2aPlainAuthRequestPreamble.addFrontendVersion(builder, frontendVersionOffset);
  return F2aPlainAuthRequestPreamble.endF2aPlainAuthRequestPreamble(builder);
}
}
