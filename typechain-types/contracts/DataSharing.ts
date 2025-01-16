/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export declare namespace DataSharing {
  export type RequestStruct = {
    requester: AddressLike;
    hashedNIK: BytesLike;
    approved: boolean;
    timestamp: BigNumberish;
  };

  export type RequestStructOutput = [
    requester: string,
    hashedNIK: string,
    approved: boolean,
    timestamp: bigint
  ] & {
    requester: string;
    hashedNIK: string;
    approved: boolean;
    timestamp: bigint;
  };
}

export interface DataSharingInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "accessData"
      | "approveRequest"
      | "getDataOwner"
      | "getRequestDetails"
      | "owner"
      | "registerDataOwner"
      | "renounceOwnership"
      | "submitRequest"
      | "transferOwnership"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "ApprovalLogged"
      | "DataAccessed"
      | "OwnershipTransferred"
      | "RequestSubmitted"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "accessData",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "approveRequest",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getDataOwner",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRequestDetails",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "registerDataOwner",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "submitRequest",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "accessData", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "approveRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDataOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRequestDetails",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "registerDataOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "submitRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
}

export namespace ApprovalLoggedEvent {
  export type InputTuple = [
    hashedNIK: BytesLike,
    approver: AddressLike,
    timestamp: BigNumberish
  ];
  export type OutputTuple = [
    hashedNIK: string,
    approver: string,
    timestamp: bigint
  ];
  export interface OutputObject {
    hashedNIK: string;
    approver: string;
    timestamp: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DataAccessedEvent {
  export type InputTuple = [
    hashedNIK: BytesLike,
    requester: AddressLike,
    timestamp: BigNumberish
  ];
  export type OutputTuple = [
    hashedNIK: string,
    requester: string,
    timestamp: bigint
  ];
  export interface OutputObject {
    hashedNIK: string;
    requester: string;
    timestamp: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RequestSubmittedEvent {
  export type InputTuple = [
    requester: AddressLike,
    hashedNIK: BytesLike,
    timestamp: BigNumberish
  ];
  export type OutputTuple = [
    requester: string,
    hashedNIK: string,
    timestamp: bigint
  ];
  export interface OutputObject {
    requester: string;
    hashedNIK: string;
    timestamp: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface DataSharing extends BaseContract {
  connect(runner?: ContractRunner | null): DataSharing;
  waitForDeployment(): Promise<this>;

  interface: DataSharingInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  accessData: TypedContractMethod<[hashedNIK: BytesLike], [void], "nonpayable">;

  approveRequest: TypedContractMethod<
    [hashedNIK: BytesLike],
    [void],
    "nonpayable"
  >;

  getDataOwner: TypedContractMethod<[hashedNIK: BytesLike], [string], "view">;

  getRequestDetails: TypedContractMethod<
    [hashedNIK: BytesLike],
    [DataSharing.RequestStructOutput],
    "view"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  registerDataOwner: TypedContractMethod<
    [hashedNIK: BytesLike, owner: AddressLike],
    [void],
    "nonpayable"
  >;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  submitRequest: TypedContractMethod<
    [hashedNIK: BytesLike],
    [void],
    "nonpayable"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "accessData"
  ): TypedContractMethod<[hashedNIK: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "approveRequest"
  ): TypedContractMethod<[hashedNIK: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getDataOwner"
  ): TypedContractMethod<[hashedNIK: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "getRequestDetails"
  ): TypedContractMethod<
    [hashedNIK: BytesLike],
    [DataSharing.RequestStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "registerDataOwner"
  ): TypedContractMethod<
    [hashedNIK: BytesLike, owner: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "submitRequest"
  ): TypedContractMethod<[hashedNIK: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "ApprovalLogged"
  ): TypedContractEvent<
    ApprovalLoggedEvent.InputTuple,
    ApprovalLoggedEvent.OutputTuple,
    ApprovalLoggedEvent.OutputObject
  >;
  getEvent(
    key: "DataAccessed"
  ): TypedContractEvent<
    DataAccessedEvent.InputTuple,
    DataAccessedEvent.OutputTuple,
    DataAccessedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "RequestSubmitted"
  ): TypedContractEvent<
    RequestSubmittedEvent.InputTuple,
    RequestSubmittedEvent.OutputTuple,
    RequestSubmittedEvent.OutputObject
  >;

  filters: {
    "ApprovalLogged(bytes32,address,uint256)": TypedContractEvent<
      ApprovalLoggedEvent.InputTuple,
      ApprovalLoggedEvent.OutputTuple,
      ApprovalLoggedEvent.OutputObject
    >;
    ApprovalLogged: TypedContractEvent<
      ApprovalLoggedEvent.InputTuple,
      ApprovalLoggedEvent.OutputTuple,
      ApprovalLoggedEvent.OutputObject
    >;

    "DataAccessed(bytes32,address,uint256)": TypedContractEvent<
      DataAccessedEvent.InputTuple,
      DataAccessedEvent.OutputTuple,
      DataAccessedEvent.OutputObject
    >;
    DataAccessed: TypedContractEvent<
      DataAccessedEvent.InputTuple,
      DataAccessedEvent.OutputTuple,
      DataAccessedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "RequestSubmitted(address,bytes32,uint256)": TypedContractEvent<
      RequestSubmittedEvent.InputTuple,
      RequestSubmittedEvent.OutputTuple,
      RequestSubmittedEvent.OutputObject
    >;
    RequestSubmitted: TypedContractEvent<
      RequestSubmittedEvent.InputTuple,
      RequestSubmittedEvent.OutputTuple,
      RequestSubmittedEvent.OutputObject
    >;
  };
}