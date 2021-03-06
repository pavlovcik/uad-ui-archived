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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface SushiSwapPoolInterface extends ethers.utils.Interface {
  functions: {
    "factory()": FunctionFragment;
    "manager()": FunctionFragment;
    "pair()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(functionFragment: "manager", values?: undefined): string;
  encodeFunctionData(functionFragment: "pair", values?: undefined): string;

  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "manager", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pair", data: BytesLike): Result;

  events: {};
}

export class SushiSwapPool extends Contract {
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

  interface: SushiSwapPoolInterface;

  functions: {
    factory(overrides?: CallOverrides): Promise<[string]>;

    "factory()"(overrides?: CallOverrides): Promise<[string]>;

    manager(overrides?: CallOverrides): Promise<[string]>;

    "manager()"(overrides?: CallOverrides): Promise<[string]>;

    pair(overrides?: CallOverrides): Promise<[string]>;

    "pair()"(overrides?: CallOverrides): Promise<[string]>;
  };

  factory(overrides?: CallOverrides): Promise<string>;

  "factory()"(overrides?: CallOverrides): Promise<string>;

  manager(overrides?: CallOverrides): Promise<string>;

  "manager()"(overrides?: CallOverrides): Promise<string>;

  pair(overrides?: CallOverrides): Promise<string>;

  "pair()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    factory(overrides?: CallOverrides): Promise<string>;

    "factory()"(overrides?: CallOverrides): Promise<string>;

    manager(overrides?: CallOverrides): Promise<string>;

    "manager()"(overrides?: CallOverrides): Promise<string>;

    pair(overrides?: CallOverrides): Promise<string>;

    "pair()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    factory(overrides?: CallOverrides): Promise<BigNumber>;

    "factory()"(overrides?: CallOverrides): Promise<BigNumber>;

    manager(overrides?: CallOverrides): Promise<BigNumber>;

    "manager()"(overrides?: CallOverrides): Promise<BigNumber>;

    pair(overrides?: CallOverrides): Promise<BigNumber>;

    "pair()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "factory()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    manager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "manager()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pair(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "pair()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
