/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { ITWAPOracle } from "../ITWAPOracle";

export class ITWAPOracle__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITWAPOracle {
    return new Contract(address, _abi, signerOrProvider) as ITWAPOracle;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "consult",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "update",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
