/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  DataSharing,
  DataSharingInterface,
} from "../../contracts/DataSharing";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_setNewPlatform",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AddressNotEligible",
    type: "error",
  },
  {
    inputs: [],
    name: "AlreadyExist",
    type: "error",
  },
  {
    inputs: [],
    name: "AlreadyRemoved",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidStatusApproveRequest",
    type: "error",
  },
  {
    inputs: [],
    name: "NikNeedRegistered",
    type: "error",
  },
  {
    inputs: [],
    name: "NotEligible",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "ProviderNotEligible",
    type: "error",
  },
  {
    inputs: [],
    name: "RequestAlreadyExist",
    type: "error",
  },
  {
    inputs: [],
    name: "RequestNotFound",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "consumer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "nik",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "ApproveDelegate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "creditorAddress",
        type: "address",
      },
    ],
    name: "CreditorAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "nik",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "debtorAddress",
        type: "address",
      },
    ],
    name: "DebtorAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "consumer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "nik",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "metadata",
        type: "string",
      },
    ],
    name: "RequestCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "nik",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "creditor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum Delegation.Status",
        name: "status",
        type: "uint8",
      },
    ],
    name: "StatusUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "creditorAddress",
        type: "address",
      },
    ],
    name: "addCreditor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "nik",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "debtorAddress",
        type: "address",
      },
    ],
    name: "addDebtor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "nik",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "creditor",
        type: "address",
      },
    ],
    name: "addDebtorToCreditor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_nik",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_consumer",
        type: "address",
      },
      {
        internalType: "enum Delegation.Status",
        name: "_status",
        type: "uint8",
      },
    ],
    name: "delegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_nik",
        type: "bytes32",
      },
      {
        internalType: "enum Delegation.Status",
        name: "_status",
        type: "uint8",
      },
    ],
    name: "getActiveCreditorsByStatus",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "nik",
        type: "bytes32",
      },
    ],
    name: "getDebtor",
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
        internalType: "bytes32",
        name: "_nik",
        type: "bytes32",
      },
    ],
    name: "getDebtorDataActiveCreditors",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
      {
        internalType: "enum Delegation.Status[]",
        name: "",
        type: "uint8[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
        internalType: "address",
        name: "creditorAddress",
        type: "address",
      },
    ],
    name: "removeCreditor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "nik",
        type: "bytes32",
      },
    ],
    name: "removeDebtor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_nik",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_creditor",
        type: "address",
      },
      {
        internalType: "string",
        name: "_metadata",
        type: "string",
      },
    ],
    name: "requestDelegation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516115ca3803806115ca83398101604081905261002f91610118565b338061005657604051631e4fbdf760e01b8152600060048201526024015b60405180910390fd5b61005f8161006f565b50610069816100bf565b50610148565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6100c76100e9565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031633146101165760405163118cdaa760e01b815233600482015260240161004d565b565b60006020828403121561012a57600080fd5b81516001600160a01b038116811461014157600080fd5b9392505050565b611473806101576000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80638baead351161008c578063a292a31611610066578063a292a3161461019f578063dd717300146101b2578063e13cecf0146101d2578063f2fde38b146101e557600080fd5b80638baead351461015a5780638beb8f001461017b5780638da5cb5b1461018e57600080fd5b80630bc5cccb146100d457806310b3971b146100e95780632fedc036146100fc578063335d07ad1461010f57806354ca45cf14610122578063715018a614610152575b600080fd5b6100e76100e236600461100b565b6101f8565b005b6100e76100f7366004611026565b610204565b6100e761010a36600461103f565b61020d565b6100e761011d36600461100b565b61021b565b610135610130366004611026565b610224565b6040516001600160a01b0390911681526020015b60405180910390f35b6100e7610243565b61016d610168366004611026565b610257565b6040516101499291906110e8565b6100e761018936600461103f565b610272565b6000546001600160a01b0316610135565b6100e76101ad36600461113e565b6102a7565b6101c56101c03660046111d7565b6102b9565b60405161014991906111fa565b6100e76101e036600461120d565b6102cc565b6100e76101f336600461100b565b6102dc565b6102018161031c565b50565b610201816103a1565b610217828261041f565b5050565b610201816104d9565b6000818152600260205260408120546001600160a01b03165b92915050565b61024b61058a565b61025560006105b7565b565b60608060008061026685610607565b90969095509350505050565b6001546001600160a01b0316331461029d576040516374e1ac0560e11b815260040160405180910390fd5b610217828261078a565b6102b384848484610865565b50505050565b60606102c58383610a4c565b9392505050565b6102d7838383610c2e565b505050565b6102e461058a565b6001600160a01b03811661031357604051631e4fbdf760e01b8152600060048201526024015b60405180910390fd5b610201816105b7565b6001546001600160a01b03163314610347576040516374e1ac0560e11b815260040160405180910390fd5b6001600160a01b03811660009081526003602052604090205460ff16610380576040516355adf54760e11b815260040160405180910390fd5b6001600160a01b03166000908152600360205260409020805460ff19169055565b6001546001600160a01b031633146103cc576040516374e1ac0560e11b815260040160405180910390fd5b6000818152600260205260409020546001600160a01b0316610401576040516355adf54760e11b815260040160405180910390fd5b600090815260026020526040902080546001600160a01b0319169055565b6001546001600160a01b0316331461044a576040516374e1ac0560e11b815260040160405180910390fd5b6000828152600260205260409020546001600160a01b031615610480576040516333e9449d60e21b815260040160405180910390fd5b60008281526002602052604080822080546001600160a01b0319166001600160a01b0385169081179091559051909184917f226cfdb4b4493ddc32a8b3a2ed7ada8e378f463baa4838887ed9280b4c0c92db9190a35050565b6001546001600160a01b03163314610504576040516374e1ac0560e11b815260040160405180910390fd5b6001600160a01b03811660009081526003602052604090205460ff161561053e576040516333e9449d60e21b815260040160405180910390fd5b6001600160a01b038116600081815260036020526040808220805460ff19166001179055517f677cec01f467f60af045b33c51312064f37a9a3f902651078220be4817a3d22f9190a250565b6000546001600160a01b031633146102555760405163118cdaa760e01b815233600482015260240161030a565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b606080600061061584610d3d565b600181015490915060008167ffffffffffffffff81111561063857610638611249565b604051908082528060200260200182016040528015610661578160200160208202803683370190505b50905060008267ffffffffffffffff81111561067f5761067f611249565b6040519080825280602002602001820160405280156106a8578160200160208202803683370190505b50905060005b8381101561077d5760008560010182815481106106cd576106cd61125f565b9060005260206000200160009054906101000a90046001600160a01b03169050808483815181106107005761070061125f565b6001600160a01b039283166020918202929092018101919091529082166000908152908790526040902054835160ff909116908490849081106107455761074561125f565b6020026020010190600281111561075e5761075e6110b0565b90816002811115610771576107716110b0565b905250506001016106ae565b5090969095509350505050565b600061079583610d3d565b905060006001600160a01b03831660009081526020839052604090205460ff1660028111156107c6576107c66110b0565b036107e4576040516333e9449d60e21b815260040160405180910390fd5b6001600160a01b038216600081815260208381526040808320805460ff19169055600180860180549182018155845291832090910180546001600160a01b031916841790555185917f16081091b5868bc39dc57eece2d2796f6131704cb6da9fb82a449497c6bf25a8916108589190611275565b60405180910390a3505050565b60006108748533866001610d64565b60408051608081019091529091504290806002815260200187815260200182815260200185858080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052509390945250503381526005602090815260408083206001600160a01b038b16845290915290208251815491925090829060ff19166001836002811115610912576109126110b0565b021790555060208201516001820155604082015160028201556060820151600382019061093f908261130b565b506000915061094b9050565b600281111561095c5761095c6110b0565b6001600160a01b038316600090815260046020908152604080832033845290915290205460ff166002811115610994576109946110b0565b036109d5576001600160a01b03821660009081526004602090815260408220600190810180549182018155835291200180546001600160a01b031916331790555b6001600160a01b038216600090815260046020908152604080832033808552925291829020805460ff1916600217905590517f13217199627941baff9c76ca4ee5d1b68773013a06883da9f86f14f2a5db493190610a3c9088908a9086908a908a906113ca565b60405180910390a2505050505050565b60606000610a5984610d3d565b90506000805b6001830154811015610aec57846002811115610a7d57610a7d6110b0565b836000016000856001018481548110610a9857610a9861125f565b60009182526020808320909101546001600160a01b0316835282019290925260400190205460ff166002811115610ad157610ad16110b0565b03610ae45781610ae081611416565b9250505b600101610a5f565b5060008167ffffffffffffffff811115610b0857610b08611249565b604051908082528060200260200182016040528015610b31578160200160208202803683370190505b5090506000805b6001850154811015610c2257866002811115610b5657610b566110b0565b856000016000876001018481548110610b7157610b7161125f565b60009182526020808320909101546001600160a01b0316835282019290925260400190205460ff166002811115610baa57610baa6110b0565b03610c1a57846001018181548110610bc457610bc461125f565b9060005260206000200160009054906101000a90046001600160a01b0316838381518110610bf457610bf461125f565b6001600160a01b039092166020928302919091019091015281610c1681611416565b9250505b600101610b38565b50909695505050505050565b6000610c3d8484336000610d64565b6001600160a01b038416600090815260056020908152604080832033845290915290208054919250429184919060ff19166001836002811115610c8257610c826110b0565b02179055506001600160a01b03808516600081815260056020908152604080832033845282528083206002908101879055948716835260048252808320938352929052208054859260ff19909116906001908490811115610ce557610ce56110b0565b021790555060408051338152602081018790529081018290526001600160a01b038516907f7f310e920b622bcd037c5bd634b04a53613caf70bbbd9efce14c97ac581a58d89060600160405180910390a25050505050565b6000908152600260209081526040808320546001600160a01b031683526004909152902090565b6000848152600260205260408120546001600160a01b031680610d9a576040516359570db960e01b815260040160405180910390fd5b610da385610fb6565b610dac84610fb6565b6000610db787610d3d565b905060006001600160a01b03861660009081526020839052604090205460ff166002811115610de857610de86110b0565b14610e0657604051632ca5a5f160e21b815260040160405180910390fd5b6001600160a01b03808716600090815260056020908152604080832093891683529290528181208251608081019093528054919291829060ff166002811115610e5157610e516110b0565b6002811115610e6257610e626110b0565b81526020016001820154815260200160028201548152602001600382018054610e8a90611283565b80601f0160208091040260200160405190810160405280929190818152602001828054610eb690611283565b8015610f035780601f10610ed857610100808354040283529160200191610f03565b820191906000526020600020905b815481529060010190602001808311610ee657829003601f168201915b5050505050815250509050600180811115610f2057610f206110b0565b856001811115610f3257610f326110b0565b03610f6a57600281516002811115610f4c57610f4c6110b0565b03610f6a57604051633568289760e21b815260040160405180910390fd5b6000856001811115610f7e57610f7e6110b0565b03610c2257600281516002811115610f9857610f986110b0565b14610c2257604051630bc3b16960e11b815260040160405180910390fd5b6001600160a01b03811660009081526003602052604090205460ff1661020157604051637c75aa6f60e11b815260040160405180910390fd5b80356001600160a01b038116811461100657600080fd5b919050565b60006020828403121561101d57600080fd5b6102c582610fef565b60006020828403121561103857600080fd5b5035919050565b6000806040838503121561105257600080fd5b8235915061106260208401610fef565b90509250929050565b600081518084526020840193506020830160005b828110156110a65781516001600160a01b031686526020958601959091019060010161107f565b5093949350505050565b634e487b7160e01b600052602160045260246000fd5b600381106110e457634e487b7160e01b600052602160045260246000fd5b9052565b6040815260006110fb604083018561106b565b828103602084015280845180835260208301915060208601925060005b81811015610c225761112b8385516110c6565b6020938401939290920191600101611118565b6000806000806060858703121561115457600080fd5b8435935061116460208601610fef565b9250604085013567ffffffffffffffff81111561118057600080fd5b8501601f8101871361119157600080fd5b803567ffffffffffffffff8111156111a857600080fd5b8760208284010111156111ba57600080fd5b949793965060200194505050565b80356003811061100657600080fd5b600080604083850312156111ea57600080fd5b82359150611062602084016111c8565b6020815260006102c5602083018461106b565b60008060006060848603121561122257600080fd5b8335925061123260208501610fef565b9150611240604085016111c8565b90509250925092565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b6020810161023d82846110c6565b600181811c9082168061129757607f821691505b6020821081036112b757634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156102d757806000526020600020601f840160051c810160208510156112e45750805b601f840160051c820191505b8181101561130457600081556001016112f0565b5050505050565b815167ffffffffffffffff81111561132557611325611249565b611339816113338454611283565b846112bd565b6020601f82116001811461136d57600083156113555750848201515b600019600385901b1c1916600184901b178455611304565b600084815260208120601f198516915b8281101561139d578785015182556020948501946001909201910161137d565b50848210156113bb5786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b60018060a01b038616815284602082015283604082015260806060820152816080820152818360a0830137600081830160a090810191909152601f909201601f19160101949350505050565b60006001820161143657634e487b7160e01b600052601160045260246000fd5b506001019056fea2646970667358221220c31d8f9aa2815aba41fc54614f540a6eb78f99ae831cb3928f4f2152dfcb0c8c64736f6c634300081c0033";

type DataSharingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DataSharingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DataSharing__factory extends ContractFactory {
  constructor(...args: DataSharingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _setNewPlatform: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_setNewPlatform, overrides || {});
  }
  override deploy(
    _setNewPlatform: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_setNewPlatform, overrides || {}) as Promise<
      DataSharing & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): DataSharing__factory {
    return super.connect(runner) as DataSharing__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DataSharingInterface {
    return new Interface(_abi) as DataSharingInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): DataSharing {
    return new Contract(address, _abi, runner) as unknown as DataSharing;
  }
}
