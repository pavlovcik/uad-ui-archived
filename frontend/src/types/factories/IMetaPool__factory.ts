/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IMetaPool } from "../IMetaPool";

export class IMetaPool__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMetaPool {
    return new Contract(address, _abi, signerOrProvider) as IMetaPool;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[2]",
        name: "token_amounts",
        type: "uint256[2]",
      },
      {
        indexed: false,
        internalType: "uint256[2]",
        name: "fees",
        type: "uint256[2]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "invariant",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "token_supply",
        type: "uint256",
      },
    ],
    name: "AddLiquidity",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "admin",
        type: "address",
      },
    ],
    name: "CommitNewAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "admin_fee",
        type: "uint256",
      },
    ],
    name: "CommitNewFee",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "admin",
        type: "address",
      },
    ],
    name: "NewAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "admin_fee",
        type: "uint256",
      },
    ],
    name: "NewFee",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "old_A",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "new_A",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "initial_time",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "future_time",
        type: "uint256",
      },
    ],
    name: "RampA",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[2]",
        name: "token_amounts",
        type: "uint256[2]",
      },
      {
        indexed: false,
        internalType: "uint256[2]",
        name: "fees",
        type: "uint256[2]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "token_supply",
        type: "uint256",
      },
    ],
    name: "RemoveLiquidity",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[2]",
        name: "token_amounts",
        type: "uint256[2]",
      },
      {
        indexed: false,
        internalType: "uint256[2]",
        name: "fees",
        type: "uint256[2]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "invariant",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "token_supply",
        type: "uint256",
      },
    ],
    name: "RemoveLiquidityImbalance",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "token_amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "coin_amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "token_supply",
        type: "uint256",
      },
    ],
    name: "RemoveLiquidityOne",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "A",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "t",
        type: "uint256",
      },
    ],
    name: "StopRampA",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "int128",
        name: "sold_id",
        type: "int128",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokens_sold",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "int128",
        name: "bought_id",
        type: "int128",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokens_bought",
        type: "uint256",
      },
    ],
    name: "TokenExchange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "int128",
        name: "sold_id",
        type: "int128",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokens_sold",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "int128",
        name: "bought_id",
        type: "int128",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokens_bought",
        type: "uint256",
      },
    ],
    name: "TokenExchangeUnderlying",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "A",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "A_precise",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "_amounts",
        type: "uint256[2]",
      },
      {
        internalType: "uint256",
        name: "_min_mint_amount",
        type: "uint256",
      },
    ],
    name: "add_liquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "_amounts",
        type: "uint256[2]",
      },
      {
        internalType: "uint256",
        name: "_min_mint_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
    ],
    name: "add_liquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "i",
        type: "uint256",
      },
    ],
    name: "admin_balances",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "admin_fee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "arg0",
        type: "address",
      },
      {
        internalType: "address",
        name: "arg1",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "arg0",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "arg0",
        type: "uint256",
      },
    ],
    name: "balances",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "block_timestamp_last",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "_amounts",
        type: "uint256[2]",
      },
      {
        internalType: "bool",
        name: "_is_deposit",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "_previous",
        type: "bool",
      },
    ],
    name: "calc_token_amount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "_amounts",
        type: "uint256[2]",
      },
      {
        internalType: "bool",
        name: "_is_deposit",
        type: "bool",
      },
    ],
    name: "calc_token_amount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_burn_amount",
        type: "uint256",
      },
      {
        internalType: "int128",
        name: "i",
        type: "int128",
      },
      {
        internalType: "bool",
        name: "_previous",
        type: "bool",
      },
    ],
    name: "calc_withdraw_one_coin",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_burn_amount",
        type: "uint256",
      },
      {
        internalType: "int128",
        name: "i",
        type: "int128",
      },
    ],
    name: "calc_withdraw_one_coin",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "arg0",
        type: "uint256",
      },
    ],
    name: "coins",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int128",
        name: "i",
        type: "int128",
      },
      {
        internalType: "int128",
        name: "j",
        type: "int128",
      },
      {
        internalType: "uint256",
        name: "dx",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "min_dy",
        type: "uint256",
      },
    ],
    name: "exchange",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int128",
        name: "i",
        type: "int128",
      },
      {
        internalType: "int128",
        name: "j",
        type: "int128",
      },
      {
        internalType: "uint256",
        name: "dx",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "min_dy",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
    ],
    name: "exchange",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int128",
        name: "i",
        type: "int128",
      },
      {
        internalType: "int128",
        name: "j",
        type: "int128",
      },
      {
        internalType: "uint256",
        name: "dx",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "min_dy",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
    ],
    name: "exchange_underlying",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int128",
        name: "i",
        type: "int128",
      },
      {
        internalType: "int128",
        name: "j",
        type: "int128",
      },
      {
        internalType: "uint256",
        name: "dx",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "min_dy",
        type: "uint256",
      },
    ],
    name: "exchange_underlying",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "fee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "future_A",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "future_A_time",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "get_balances",
    outputs: [
      {
        internalType: "uint256[2]",
        name: "",
        type: "uint256[2]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int128",
        name: "i",
        type: "int128",
      },
      {
        internalType: "int128",
        name: "j",
        type: "int128",
      },
      {
        internalType: "uint256",
        name: "dx",
        type: "uint256",
      },
    ],
    name: "get_dy",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int128",
        name: "i",
        type: "int128",
      },
      {
        internalType: "int128",
        name: "j",
        type: "int128",
      },
      {
        internalType: "uint256",
        name: "dx",
        type: "uint256",
      },
      {
        internalType: "uint256[2]",
        name: "_balances",
        type: "uint256[2]",
      },
    ],
    name: "get_dy",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int128",
        name: "i",
        type: "int128",
      },
      {
        internalType: "int128",
        name: "j",
        type: "int128",
      },
      {
        internalType: "uint256",
        name: "dx",
        type: "uint256",
      },
    ],
    name: "get_dy_underlying",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int128",
        name: "i",
        type: "int128",
      },
      {
        internalType: "int128",
        name: "j",
        type: "int128",
      },
      {
        internalType: "uint256",
        name: "dx",
        type: "uint256",
      },
      {
        internalType: "uint256[2]",
        name: "_balances",
        type: "uint256[2]",
      },
    ],
    name: "get_dy_underlying",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "get_previous_balances",
    outputs: [
      {
        internalType: "uint256[2]",
        name: "",
        type: "uint256[2]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "get_price_cumulative_last",
    outputs: [
      {
        internalType: "uint256[2]",
        name: "",
        type: "uint256[2]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "_first_balances",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2]",
        name: "_last_balances",
        type: "uint256[2]",
      },
      {
        internalType: "uint256",
        name: "_time_elapsed",
        type: "uint256",
      },
    ],
    name: "get_twap_balances",
    outputs: [
      {
        internalType: "uint256[2]",
        name: "",
        type: "uint256[2]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "get_virtual_price",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "initial_A",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "initial_A_time",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "address",
        name: "_coin",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_decimals",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_A",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_future_A",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_future_time",
        type: "uint256",
      },
    ],
    name: "ramp_A",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_burn_amount",
        type: "uint256",
      },
      {
        internalType: "uint256[2]",
        name: "_min_amounts",
        type: "uint256[2]",
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
    ],
    name: "remove_liquidity",
    outputs: [
      {
        internalType: "uint256[2]",
        name: "",
        type: "uint256[2]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_burn_amount",
        type: "uint256",
      },
      {
        internalType: "uint256[2]",
        name: "_min_amounts",
        type: "uint256[2]",
      },
    ],
    name: "remove_liquidity",
    outputs: [
      {
        internalType: "uint256[2]",
        name: "",
        type: "uint256[2]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "_amounts",
        type: "uint256[2]",
      },
      {
        internalType: "uint256",
        name: "_max_burn_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
    ],
    name: "remove_liquidity_imbalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "_amounts",
        type: "uint256[2]",
      },
      {
        internalType: "uint256",
        name: "_max_burn_amount",
        type: "uint256",
      },
    ],
    name: "remove_liquidity_imbalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_burn_amount",
        type: "uint256",
      },
      {
        internalType: "int128",
        name: "i",
        type: "int128",
      },
      {
        internalType: "uint256",
        name: "_min_received",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
    ],
    name: "remove_liquidity_one_coin",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_burn_amount",
        type: "uint256",
      },
      {
        internalType: "int128",
        name: "i",
        type: "int128",
      },
      {
        internalType: "uint256",
        name: "_min_received",
        type: "uint256",
      },
    ],
    name: "remove_liquidity_one_coin",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stop_ramp_A",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw_admin_fees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
