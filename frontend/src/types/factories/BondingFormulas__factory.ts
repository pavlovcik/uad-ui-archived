/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { BondingFormulas } from "../BondingFormulas";

export class BondingFormulas__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BondingFormulas> {
    return super.deploy(overrides || {}) as Promise<BondingFormulas>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BondingFormulas {
    return super.attach(address) as BondingFormulas;
  }
  connect(signer: Signer): BondingFormulas__factory {
    return super.connect(signer) as BondingFormulas__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BondingFormulas {
    return new Contract(address, _abi, signerOrProvider) as BondingFormulas;
  }
}

const _abi = [
  {
    inputs: [],
    name: "ONE",
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
        name: "_totalLpDeposited",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_bondingLpBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "correctedAmountToWithdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "minter",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "lpFirstDeposited",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "creationBlock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lpRewardDebt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endBlock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lpAmount",
            type: "uint256",
          },
        ],
        internalType: "struct BondingShareV2.Bond",
        name: "_bond",
        type: "tuple",
      },
      {
        internalType: "uint256[2]",
        name: "_shareInfo",
        type: "uint256[2]",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "lpRewardsAddLiquidityNormalization",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "minter",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "lpFirstDeposited",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "creationBlock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lpRewardDebt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endBlock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lpAmount",
            type: "uint256",
          },
        ],
        internalType: "struct BondingShareV2.Bond",
        name: "_bond",
        type: "tuple",
      },
      {
        internalType: "uint256[2]",
        name: "_shareInfo",
        type: "uint256[2]",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "lpRewardsRemoveLiquidityNormalization",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "minter",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "lpFirstDeposited",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "creationBlock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lpRewardDebt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endBlock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lpAmount",
            type: "uint256",
          },
        ],
        internalType: "struct BondingShareV2.Bond",
        name: "_bond",
        type: "tuple",
      },
      {
        internalType: "uint256[2]",
        name: "_shareInfo",
        type: "uint256[2]",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "sharesForLP",
    outputs: [
      {
        internalType: "uint256",
        name: "_uLP",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610a47806100206000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c8063a64154f011610050578063a64154f0146100a4578063c2ee3a08146100b8578063d5a8cf64146100a457610067565b8063629056cb1461006c578063a609d91214610091575b600080fd5b61007f61007a366004610927565b6100c7565b60405190815260200160405180910390f35b61007f61009f3660046109d0565b61013c565b61007f6100b2366004610927565b92915050565b61007f670de0b6b3a764000081565b815160009081906100d790610197565b905060006100e484610197565b905060006100f58760a00151610197565b9050610131610122826101126001600160801b03198716866101fd565b6001600160801b03191690610496565b6001600160801b03191661079c565b979650505050505050565b6000838310801561014d5750600083115b1561018d5761018661012261016186610197565b61011261016d87610197565b61017687610197565b6001600160801b031916906101fd565b9050610190565b50805b9392505050565b6000816101a6575060006101f8565b8160006101b282610820565b905060708110156101cb578060700382901b91506101de565b60708111156101de576070810382901c91505b613fff0160701b6001600160701b03919091161760801b90505b919050565b6000617fff60f084811c8216919084901c8116908214156102b65780617fff141561027b576001600160801b0319858116908516141561024857505050600160ff1b811682186100b2565b600160ff1b6001600160801b031986861816141561026b575050508181176100b2565b5061ffff60ef1b91506100b29050565b6f7fffffffffffffffffffffffffffffff60801b84166102a5575061ffff60ef1b91506100b29050565b505050600160ff1b811682186100b2565b80617fff14156102fb576f7fffffffffffffffffffffffffffffff60801b85166102ea575061ffff60ef1b91506100b29050565b505050600160ff1b821681186100b2565b6001600160701b03608086901c1682610317576001925061031e565b600160701b175b6001600160701b03608086901c168261033a5760019250610341565b600160701b175b908102908161036f57600160ff1b8787181661035e576000610364565b600160ff1b5b9450505050506100b2565b928201926000600160e11b8310156103a357600160e01b83101561039b5761039683610820565b61039e565b60e05b6103a6565b60e15b905061407081860110156103c157600094506000925061045e565b6140e08186011015610404576140708510156103e657846140700383901c92506103fb565b6140708511156103fb57614070850383901b92505b6000945061045e565b61c0dd818601111561041e57617fff94506000925061045e565b6070811115610435576070810383901c9250610448565b6070811015610448578060700383901b92505b6001600160701b03831692506140df8186010394505b82607086901b888a186001607f1b60801b1660801c6fffffffffffffffffffffffffffffffff16171760801b955050505050506100b2565b6000617fff60f084811c8216919084901c8116908214156104cb5780617fff14156102a5575061ffff60ef1b91506100b29050565b80617fff141561051c577dffffffffffffffffffffffffffff0000000000000000000000000000000084161561050b575061ffff60ef1b91506100b29050565b505050808218600160ff1b166100b2565b6f7fffffffffffffffffffffffffffffff60801b8416610578576f7fffffffffffffffffffffffffffffff60801b8516610560575061ffff60ef1b91506100b29050565b505050808218600160ff1b16617fff60f01b176100b2565b6001600160701b03608085901c1681610594576001915061059b565b600160701b175b6001600160701b03608087901c16836105da5780156105d55760006105bf82610820565b6001955060e20393840160711901939190911b90505b6105e4565b600160701b1760721b5b81818161060157634e487b7160e01b600052601260045260246000fd5b0490508061061d57600160ff1b8787181661035e576000610364565b6d100000000000000000000000000081101561064957634e487b7160e01b600052600160045260246000fd5b60006e0800000000000000000000000000008210156106aa576e04000000000000000000000000000082101561069f576e02000000000000000000000000000082101561069757607061069a565b60715b6106a2565b60725b60ff166106b3565b6106b382610820565b9050836140710181860111156106d157617fff945060009150610764565b83818601613ffc0110156106ec576000945060009150610764565b83818601613f8c011015610739578385613ffc011115610717578385613ffc010382901b9150610730565b8385613ffc01101561073057613ffc8585030382901c91505b60009450610764565b607081111561074c576070810382901c91505b6001600160701b038216915083818601613f8d010394505b81607086901b888a186001607f1b60801b1660801c6fffffffffffffffffffffffffffffffff16171760801b955050505050506100b2565b6000617fff60f083901c16613fff8110156107bb5760009150506101f8565b6001607f1b608084901c106107cf57600080fd5b6140fe8111156107de57600080fd5b600160701b6001600160701b03608085901c161761406f8210156108085761406f8290031c610190565b61406f8211156101905761406e1982011b9392505050565b600080821161082e57600080fd5b6000700100000000000000000000000000000000831061085057608092831c92015b68010000000000000000831061086857604092831c92015b640100000000831061087c57602092831c92015b62010000831061088e57601092831c92015b610100831061089f57600892831c92015b601083106108af57600492831c92015b600483106108bf57600292831c92015b600283106100b25760010192915050565b600082601f8301126108e0578081fd5b6108ea60406109fb565b8083856040860111156108fb578384fd5b835b600281101561091c5781358452602093840193909101906001016108fd565b509095945050505050565b600080600083850361012081121561093d578384fd5b60c081121561094a578384fd5b5061095560c06109fb565b843573ffffffffffffffffffffffffffffffffffffffff81168114610978578485fd5b808252506020850135602082015260408501356040820152606085013560608201526080850135608082015260a085013560a0820152809350506109bf8560c086016108d0565b915061010084013590509250925092565b6000806000606084860312156109e4578283fd5b505081359360208301359350604090920135919050565b604051601f8201601f1916810167ffffffffffffffff81118282101715610a3257634e487b7160e01b600052604160045260246000fd5b60405291905056fea164736f6c6343000803000a";
