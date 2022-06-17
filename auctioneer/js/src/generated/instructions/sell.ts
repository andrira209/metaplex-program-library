/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solana/spl-token';
import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';

/**
 * @category Instructions
 * @category Sell
 * @category generated
 */
export type SellInstructionArgs = {
  tradeStateBump: number;
  freeTradeStateBump: number;
  programAsSignerBump: number;
  auctioneerAuthorityBump: number;
  tokenSize: beet.bignum;
  startTime: beet.bignum;
  endTime: beet.bignum;
  reservePrice: beet.bignum;
};
/**
 * @category Instructions
 * @category Sell
 * @category generated
 */
const sellStruct = new beet.BeetArgsStruct<
  SellInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */;
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['tradeStateBump', beet.u8],
    ['freeTradeStateBump', beet.u8],
    ['programAsSignerBump', beet.u8],
    ['auctioneerAuthorityBump', beet.u8],
    ['tokenSize', beet.u64],
    ['startTime', beet.i64],
    ['endTime', beet.i64],
    ['reservePrice', beet.u64],
  ],
  'SellInstructionArgs',
);
/**
 * Accounts required by the _sell_ instruction
 *
 * @property [] auctionHouseProgram
 * @property [_writable_] listingConfig
 * @property [_writable_] wallet
 * @property [_writable_] tokenAccount
 * @property [] metadata
 * @property [] authority
 * @property [] auctionHouse
 * @property [_writable_] auctionHouseFeeAccount
 * @property [_writable_] sellerTradeState
 * @property [_writable_] freeSellerTradeState
 * @property [] auctioneerAuthority
 * @property [] ahAuctioneerPda
 * @property [] programAsSigner
 * @category Instructions
 * @category Sell
 * @category generated
 */
export type SellInstructionAccounts = {
  auctionHouseProgram: web3.PublicKey;
  listingConfig: web3.PublicKey;
  wallet: web3.PublicKey;
  tokenAccount: web3.PublicKey;
  metadata: web3.PublicKey;
  authority: web3.PublicKey;
  auctionHouse: web3.PublicKey;
  auctionHouseFeeAccount: web3.PublicKey;
  sellerTradeState: web3.PublicKey;
  freeSellerTradeState: web3.PublicKey;
  auctioneerAuthority: web3.PublicKey;
  ahAuctioneerPda: web3.PublicKey;
  programAsSigner: web3.PublicKey;
};

const sellInstructionDiscriminator = [51, 230, 133, 164, 1, 127, 131, 173];

/**
 * Creates a _Sell_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category Sell
 * @category generated
 */
export function createSellInstruction(
  accounts: SellInstructionAccounts,
  args: SellInstructionArgs,
) {
  const {
    auctionHouseProgram,
    listingConfig,
    wallet,
    tokenAccount,
    metadata,
    authority,
    auctionHouse,
    auctionHouseFeeAccount,
    sellerTradeState,
    freeSellerTradeState,
    auctioneerAuthority,
    ahAuctioneerPda,
    programAsSigner,
  } = accounts;

  const [data] = sellStruct.serialize({
    instructionDiscriminator: sellInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: auctionHouseProgram,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: listingConfig,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: wallet,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: tokenAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: metadata,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: authority,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: auctionHouse,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: auctionHouseFeeAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: sellerTradeState,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: freeSellerTradeState,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: auctioneerAuthority,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: ahAuctioneerPda,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: programAsSigner,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: web3.SYSVAR_RENT_PUBKEY,
      isWritable: false,
      isSigner: false,
    },
  ];

  const ix = new web3.TransactionInstruction({
    programId: new web3.PublicKey('neer8g6yJq2mQM6KbnViEDAD4gr3gRZyMMf4F2p3MEh'),
    keys,
    data,
  });
  return ix;
}