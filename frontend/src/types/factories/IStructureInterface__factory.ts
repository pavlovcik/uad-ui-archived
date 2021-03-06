/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IStructureInterface } from "../IStructureInterface";

export class IStructureInterface__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IStructureInterface {
    return new Contract(address, _abi, signerOrProvider) as IStructureInterface;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getValue",
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
];
