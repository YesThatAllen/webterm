// automatically generated by the FlatBuffers compiler, do not modify
// @generated
extern crate alloc;
extern crate flatbuffers;
use alloc::boxed::Box;
use alloc::string::{String, ToString};
use alloc::vec::Vec;
use core::mem;
use core::cmp::Ordering;
use self::flatbuffers::{EndianScalar, Follow};
use super::*;
pub enum A2fActivityOutputOffset {}
#[derive(Copy, Clone, PartialEq)]

pub struct A2fActivityOutput<'a> {
  pub _tab: flatbuffers::Table<'a>,
}

impl<'a> flatbuffers::Follow<'a> for A2fActivityOutput<'a> {
  type Inner = A2fActivityOutput<'a>;
  #[inline]
  unsafe fn follow(buf: &'a [u8], loc: usize) -> Self::Inner {
    Self { _tab: flatbuffers::Table::new(buf, loc) }
  }
}

impl<'a> A2fActivityOutput<'a> {
  pub const VT_ACTIVITY_ID: flatbuffers::VOffsetT = 4;
  pub const VT_OUTPUT: flatbuffers::VOffsetT = 6;

  #[inline]
  pub unsafe fn init_from_table(table: flatbuffers::Table<'a>) -> Self {
    A2fActivityOutput { _tab: table }
  }
  #[allow(unused_mut)]
  pub fn create<'bldr: 'args, 'args: 'mut_bldr, 'mut_bldr, A: flatbuffers::Allocator + 'bldr>(
    _fbb: &'mut_bldr mut flatbuffers::FlatBufferBuilder<'bldr, A>,
    args: &'args A2fActivityOutputArgs<'args>
  ) -> flatbuffers::WIPOffset<A2fActivityOutput<'bldr>> {
    let mut builder = A2fActivityOutputBuilder::new(_fbb);
    builder.add_activity_id(args.activity_id);
    if let Some(x) = args.output { builder.add_output(x); }
    builder.finish()
  }


  #[inline]
  pub fn activity_id(&self) -> u64 {
    // Safety:
    // Created from valid Table for this object
    // which contains a valid value in this slot
    unsafe { self._tab.get::<u64>(A2fActivityOutput::VT_ACTIVITY_ID, Some(0)).unwrap()}
  }
  #[inline]
  pub fn output(&self) -> Option<flatbuffers::Vector<'a, u8>> {
    // Safety:
    // Created from valid Table for this object
    // which contains a valid value in this slot
    unsafe { self._tab.get::<flatbuffers::ForwardsUOffset<flatbuffers::Vector<'a, u8>>>(A2fActivityOutput::VT_OUTPUT, None)}
  }
}

impl flatbuffers::Verifiable for A2fActivityOutput<'_> {
  #[inline]
  fn run_verifier(
    v: &mut flatbuffers::Verifier, pos: usize
  ) -> Result<(), flatbuffers::InvalidFlatbuffer> {
    use self::flatbuffers::Verifiable;
    v.visit_table(pos)?
     .visit_field::<u64>("activity_id", Self::VT_ACTIVITY_ID, false)?
     .visit_field::<flatbuffers::ForwardsUOffset<flatbuffers::Vector<'_, u8>>>("output", Self::VT_OUTPUT, false)?
     .finish();
    Ok(())
  }
}
pub struct A2fActivityOutputArgs<'a> {
    pub activity_id: u64,
    pub output: Option<flatbuffers::WIPOffset<flatbuffers::Vector<'a, u8>>>,
}
impl<'a> Default for A2fActivityOutputArgs<'a> {
  #[inline]
  fn default() -> Self {
    A2fActivityOutputArgs {
      activity_id: 0,
      output: None,
    }
  }
}

pub struct A2fActivityOutputBuilder<'a: 'b, 'b, A: flatbuffers::Allocator + 'a> {
  fbb_: &'b mut flatbuffers::FlatBufferBuilder<'a, A>,
  start_: flatbuffers::WIPOffset<flatbuffers::TableUnfinishedWIPOffset>,
}
impl<'a: 'b, 'b, A: flatbuffers::Allocator + 'a> A2fActivityOutputBuilder<'a, 'b, A> {
  #[inline]
  pub fn add_activity_id(&mut self, activity_id: u64) {
    self.fbb_.push_slot::<u64>(A2fActivityOutput::VT_ACTIVITY_ID, activity_id, 0);
  }
  #[inline]
  pub fn add_output(&mut self, output: flatbuffers::WIPOffset<flatbuffers::Vector<'b , u8>>) {
    self.fbb_.push_slot_always::<flatbuffers::WIPOffset<_>>(A2fActivityOutput::VT_OUTPUT, output);
  }
  #[inline]
  pub fn new(_fbb: &'b mut flatbuffers::FlatBufferBuilder<'a, A>) -> A2fActivityOutputBuilder<'a, 'b, A> {
    let start = _fbb.start_table();
    A2fActivityOutputBuilder {
      fbb_: _fbb,
      start_: start,
    }
  }
  #[inline]
  pub fn finish(self) -> flatbuffers::WIPOffset<A2fActivityOutput<'a>> {
    let o = self.fbb_.end_table(self.start_);
    flatbuffers::WIPOffset::new(o.value())
  }
}

impl core::fmt::Debug for A2fActivityOutput<'_> {
  fn fmt(&self, f: &mut core::fmt::Formatter<'_>) -> core::fmt::Result {
    let mut ds = f.debug_struct("A2fActivityOutput");
      ds.field("activity_id", &self.activity_id());
      ds.field("output", &self.output());
      ds.finish()
  }
}
