// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { A2fMessageFormat } from './a2f-message-format.js';
import { Bits256 } from './bits256.js';
import { Bits96 } from './bits96.js';
import { Version } from './version.js';


export class A2fPlainAuthPreamble {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):A2fPlainAuthPreamble {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsA2fPlainAuthPreamble(bb:flatbuffers.ByteBuffer, obj?:A2fPlainAuthPreamble):A2fPlainAuthPreamble {
  return (obj || new A2fPlainAuthPreamble()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsA2fPlainAuthPreamble(bb:flatbuffers.ByteBuffer, obj?:A2fPlainAuthPreamble):A2fPlainAuthPreamble {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new A2fPlainAuthPreamble()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

agentVersion(obj?:Version):Version|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new Version()).__init(this.bb_pos + offset, this.bb!) : null;
}

salt(obj?:Bits256):Bits256|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new Bits256()).__init(this.bb_pos + offset, this.bb!) : null;
}

pbkdf2Iterations():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
}

challengeEncryptionType():A2fMessageFormat {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : A2fMessageFormat.Plain;
}

challengeIv(obj?:Bits96):Bits96|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? (obj || new Bits96()).__init(this.bb_pos + offset, this.bb!) : null;
}

challengeNonce(obj?:Bits256):Bits256|null {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? (obj || new Bits256()).__init(this.bb_pos + offset, this.bb!) : null;
}

static startA2fPlainAuthPreamble(builder:flatbuffers.Builder) {
  builder.startObject(6);
}

static addAgentVersion(builder:flatbuffers.Builder, agentVersionOffset:flatbuffers.Offset) {
  builder.addFieldStruct(0, agentVersionOffset, 0);
}

static addSalt(builder:flatbuffers.Builder, saltOffset:flatbuffers.Offset) {
  builder.addFieldStruct(1, saltOffset, 0);
}

static addPbkdf2Iterations(builder:flatbuffers.Builder, pbkdf2Iterations:number) {
  builder.addFieldInt32(2, pbkdf2Iterations, 0);
}

static addChallengeEncryptionType(builder:flatbuffers.Builder, challengeEncryptionType:A2fMessageFormat) {
  builder.addFieldInt8(3, challengeEncryptionType, A2fMessageFormat.Plain);
}

static addChallengeIv(builder:flatbuffers.Builder, challengeIvOffset:flatbuffers.Offset) {
  builder.addFieldStruct(4, challengeIvOffset, 0);
}

static addChallengeNonce(builder:flatbuffers.Builder, challengeNonceOffset:flatbuffers.Offset) {
  builder.addFieldStruct(5, challengeNonceOffset, 0);
}

static endA2fPlainAuthPreamble(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

}
