import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface _SERVICE {
  'getBalance' : ActorMethod<[Principal], bigint>,
  'hasNFT' : ActorMethod<[Principal], boolean>,
  'mintNFT' : ActorMethod<[Principal], string>,
  'uploadEncryptedRecord' : ActorMethod<[Principal, string], string>,
}
