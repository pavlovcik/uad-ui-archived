/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface MasterChefV2Interface extends ethers.utils.Interface {
  functions: {
    "deposit(address,uint256,uint256)": FunctionFragment;
    "getBondingShareInfo(uint256)": FunctionFragment;
    "getRewards(uint256)": FunctionFragment;
    "lastPrice()": FunctionFragment;
    "manager()": FunctionFragment;
    "minPriceDiffToUpdateMultiplier()": FunctionFragment;
    "pendingUGOV(uint256)": FunctionFragment;
    "pool()": FunctionFragment;
    "setMinPriceDiffToUpdateMultiplier(uint256)": FunctionFragment;
    "setUGOVPerBlock(uint256)": FunctionFragment;
    "setUGOVShareForTreasury(uint256)": FunctionFragment;
    "totalShares()": FunctionFragment;
    "uGOVDivider()": FunctionFragment;
    "uGOVPerBlock()": FunctionFragment;
    "uGOVmultiplier()": FunctionFragment;
    "withdraw(address,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "deposit",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getBondingShareInfo",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRewards",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "lastPrice", values?: undefined): string;
  encodeFunctionData(functionFragment: "manager", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "minPriceDiffToUpdateMultiplier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pendingUGOV",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "pool", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setMinPriceDiffToUpdateMultiplier",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setUGOVPerBlock",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setUGOVShareForTreasury",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalShares",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "uGOVDivider",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "uGOVPerBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "uGOVmultiplier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getBondingShareInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getRewards", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lastPrice", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "manager", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "minPriceDiffToUpdateMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingUGOV",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setMinPriceDiffToUpdateMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setUGOVPerBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setUGOVShareForTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalShares",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "uGOVDivider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "uGOVPerBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "uGOVmultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "Deposit(address,uint256,uint256)": EventFragment;
    "Withdraw(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export class MasterChefV2 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: MasterChefV2Interface;

  functions: {
    deposit(
      to: string,
      _amount: BigNumberish,
      _bondingShareID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "deposit(address,uint256,uint256)"(
      to: string,
      _amount: BigNumberish,
      _bondingShareID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getBondingShareInfo(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[[BigNumber, BigNumber]]>;

    "getBondingShareInfo(uint256)"(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[[BigNumber, BigNumber]]>;

    getRewards(
      bondingShareID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "getRewards(uint256)"(
      bondingShareID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    lastPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    "lastPrice()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    manager(overrides?: CallOverrides): Promise<[string]>;

    "manager()"(overrides?: CallOverrides): Promise<[string]>;

    minPriceDiffToUpdateMultiplier(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "minPriceDiffToUpdateMultiplier()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    pendingUGOV(
      bondingShareID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "pendingUGOV(uint256)"(
      bondingShareID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    pool(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        lastRewardBlock: BigNumber;
        accuGOVPerShare: BigNumber;
      }
    >;

    "pool()"(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        lastRewardBlock: BigNumber;
        accuGOVPerShare: BigNumber;
      }
    >;

    setMinPriceDiffToUpdateMultiplier(
      _minPriceDiffToUpdateMultiplier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setMinPriceDiffToUpdateMultiplier(uint256)"(
      _minPriceDiffToUpdateMultiplier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setUGOVPerBlock(
      _uGOVPerBlock: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setUGOVPerBlock(uint256)"(
      _uGOVPerBlock: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setUGOVShareForTreasury(
      _uGOVDivider: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setUGOVShareForTreasury(uint256)"(
      _uGOVDivider: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    totalShares(overrides?: CallOverrides): Promise<[BigNumber]>;

    "totalShares()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    uGOVDivider(overrides?: CallOverrides): Promise<[BigNumber]>;

    "uGOVDivider()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    uGOVPerBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    "uGOVPerBlock()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    uGOVmultiplier(overrides?: CallOverrides): Promise<[BigNumber]>;

    "uGOVmultiplier()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    withdraw(
      to: string,
      _amount: BigNumberish,
      _bondingShareID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "withdraw(address,uint256,uint256)"(
      to: string,
      _amount: BigNumberish,
      _bondingShareID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  deposit(
    to: string,
    _amount: BigNumberish,
    _bondingShareID: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "deposit(address,uint256,uint256)"(
    to: string,
    _amount: BigNumberish,
    _bondingShareID: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getBondingShareInfo(
    _id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  "getBondingShareInfo(uint256)"(
    _id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  getRewards(
    bondingShareID: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "getRewards(uint256)"(
    bondingShareID: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  lastPrice(overrides?: CallOverrides): Promise<BigNumber>;

  "lastPrice()"(overrides?: CallOverrides): Promise<BigNumber>;

  manager(overrides?: CallOverrides): Promise<string>;

  "manager()"(overrides?: CallOverrides): Promise<string>;

  minPriceDiffToUpdateMultiplier(overrides?: CallOverrides): Promise<BigNumber>;

  "minPriceDiffToUpdateMultiplier()"(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  pendingUGOV(
    bondingShareID: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "pendingUGOV(uint256)"(
    bondingShareID: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  pool(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      lastRewardBlock: BigNumber;
      accuGOVPerShare: BigNumber;
    }
  >;

  "pool()"(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      lastRewardBlock: BigNumber;
      accuGOVPerShare: BigNumber;
    }
  >;

  setMinPriceDiffToUpdateMultiplier(
    _minPriceDiffToUpdateMultiplier: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setMinPriceDiffToUpdateMultiplier(uint256)"(
    _minPriceDiffToUpdateMultiplier: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setUGOVPerBlock(
    _uGOVPerBlock: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setUGOVPerBlock(uint256)"(
    _uGOVPerBlock: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setUGOVShareForTreasury(
    _uGOVDivider: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setUGOVShareForTreasury(uint256)"(
    _uGOVDivider: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  totalShares(overrides?: CallOverrides): Promise<BigNumber>;

  "totalShares()"(overrides?: CallOverrides): Promise<BigNumber>;

  uGOVDivider(overrides?: CallOverrides): Promise<BigNumber>;

  "uGOVDivider()"(overrides?: CallOverrides): Promise<BigNumber>;

  uGOVPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

  "uGOVPerBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

  uGOVmultiplier(overrides?: CallOverrides): Promise<BigNumber>;

  "uGOVmultiplier()"(overrides?: CallOverrides): Promise<BigNumber>;

  withdraw(
    to: string,
    _amount: BigNumberish,
    _bondingShareID: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "withdraw(address,uint256,uint256)"(
    to: string,
    _amount: BigNumberish,
    _bondingShareID: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    deposit(
      to: string,
      _amount: BigNumberish,
      _bondingShareID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "deposit(address,uint256,uint256)"(
      to: string,
      _amount: BigNumberish,
      _bondingShareID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getBondingShareInfo(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    "getBondingShareInfo(uint256)"(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    getRewards(
      bondingShareID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getRewards(uint256)"(
      bondingShareID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastPrice(overrides?: CallOverrides): Promise<BigNumber>;

    "lastPrice()"(overrides?: CallOverrides): Promise<BigNumber>;

    manager(overrides?: CallOverrides): Promise<string>;

    "manager()"(overrides?: CallOverrides): Promise<string>;

    minPriceDiffToUpdateMultiplier(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "minPriceDiffToUpdateMultiplier()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pendingUGOV(
      bondingShareID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "pendingUGOV(uint256)"(
      bondingShareID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pool(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        lastRewardBlock: BigNumber;
        accuGOVPerShare: BigNumber;
      }
    >;

    "pool()"(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        lastRewardBlock: BigNumber;
        accuGOVPerShare: BigNumber;
      }
    >;

    setMinPriceDiffToUpdateMultiplier(
      _minPriceDiffToUpdateMultiplier: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setMinPriceDiffToUpdateMultiplier(uint256)"(
      _minPriceDiffToUpdateMultiplier: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setUGOVPerBlock(
      _uGOVPerBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setUGOVPerBlock(uint256)"(
      _uGOVPerBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setUGOVShareForTreasury(
      _uGOVDivider: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setUGOVShareForTreasury(uint256)"(
      _uGOVDivider: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    totalShares(overrides?: CallOverrides): Promise<BigNumber>;

    "totalShares()"(overrides?: CallOverrides): Promise<BigNumber>;

    uGOVDivider(overrides?: CallOverrides): Promise<BigNumber>;

    "uGOVDivider()"(overrides?: CallOverrides): Promise<BigNumber>;

    uGOVPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    "uGOVPerBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

    uGOVmultiplier(overrides?: CallOverrides): Promise<BigNumber>;

    "uGOVmultiplier()"(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      to: string,
      _amount: BigNumberish,
      _bondingShareID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdraw(address,uint256,uint256)"(
      to: string,
      _amount: BigNumberish,
      _bondingShareID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    Deposit(
      user: string | null,
      amount: null,
      bondingShareId: BigNumberish | null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { user: string; amount: BigNumber; bondingShareId: BigNumber }
    >;

    Withdraw(
      user: string | null,
      amount: null,
      bondingShareId: BigNumberish | null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { user: string; amount: BigNumber; bondingShareId: BigNumber }
    >;
  };

  estimateGas: {
    deposit(
      to: string,
      _amount: BigNumberish,
      _bondingShareID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "deposit(address,uint256,uint256)"(
      to: string,
      _amount: BigNumberish,
      _bondingShareID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getBondingShareInfo(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getBondingShareInfo(uint256)"(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRewards(
      bondingShareID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "getRewards(uint256)"(
      bondingShareID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    lastPrice(overrides?: CallOverrides): Promise<BigNumber>;

    "lastPrice()"(overrides?: CallOverrides): Promise<BigNumber>;

    manager(overrides?: CallOverrides): Promise<BigNumber>;

    "manager()"(overrides?: CallOverrides): Promise<BigNumber>;

    minPriceDiffToUpdateMultiplier(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "minPriceDiffToUpdateMultiplier()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pendingUGOV(
      bondingShareID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "pendingUGOV(uint256)"(
      bondingShareID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pool(overrides?: CallOverrides): Promise<BigNumber>;

    "pool()"(overrides?: CallOverrides): Promise<BigNumber>;

    setMinPriceDiffToUpdateMultiplier(
      _minPriceDiffToUpdateMultiplier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setMinPriceDiffToUpdateMultiplier(uint256)"(
      _minPriceDiffToUpdateMultiplier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setUGOVPerBlock(
      _uGOVPerBlock: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setUGOVPerBlock(uint256)"(
      _uGOVPerBlock: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setUGOVShareForTreasury(
      _uGOVDivider: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setUGOVShareForTreasury(uint256)"(
      _uGOVDivider: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    totalShares(overrides?: CallOverrides): Promise<BigNumber>;

    "totalShares()"(overrides?: CallOverrides): Promise<BigNumber>;

    uGOVDivider(overrides?: CallOverrides): Promise<BigNumber>;

    "uGOVDivider()"(overrides?: CallOverrides): Promise<BigNumber>;

    uGOVPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    "uGOVPerBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

    uGOVmultiplier(overrides?: CallOverrides): Promise<BigNumber>;

    "uGOVmultiplier()"(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      to: string,
      _amount: BigNumberish,
      _bondingShareID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "withdraw(address,uint256,uint256)"(
      to: string,
      _amount: BigNumberish,
      _bondingShareID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deposit(
      to: string,
      _amount: BigNumberish,
      _bondingShareID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "deposit(address,uint256,uint256)"(
      to: string,
      _amount: BigNumberish,
      _bondingShareID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getBondingShareInfo(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getBondingShareInfo(uint256)"(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRewards(
      bondingShareID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "getRewards(uint256)"(
      bondingShareID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    lastPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "lastPrice()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    manager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "manager()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minPriceDiffToUpdateMultiplier(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "minPriceDiffToUpdateMultiplier()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pendingUGOV(
      bondingShareID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "pendingUGOV(uint256)"(
      bondingShareID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "pool()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setMinPriceDiffToUpdateMultiplier(
      _minPriceDiffToUpdateMultiplier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setMinPriceDiffToUpdateMultiplier(uint256)"(
      _minPriceDiffToUpdateMultiplier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setUGOVPerBlock(
      _uGOVPerBlock: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setUGOVPerBlock(uint256)"(
      _uGOVPerBlock: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setUGOVShareForTreasury(
      _uGOVDivider: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setUGOVShareForTreasury(uint256)"(
      _uGOVDivider: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    totalShares(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalShares()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    uGOVDivider(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "uGOVDivider()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    uGOVPerBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "uGOVPerBlock()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    uGOVmultiplier(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "uGOVmultiplier()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      to: string,
      _amount: BigNumberish,
      _bondingShareID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "withdraw(address,uint256,uint256)"(
      to: string,
      _amount: BigNumberish,
      _bondingShareID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
