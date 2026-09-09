// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var mt5$term$api$account$helper_pb = require('./mt5-term-api-account-helper_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_api_annotations_pb = require('./google/api/annotations_pb.js');
var mrpc$mt5$error_pb = require('./mrpc-mt5-error_pb.js');

function serialize_mt5_term_api_AccountSummaryReply(arg) {
  if (!(arg instanceof mt5$term$api$account$helper_pb.AccountSummaryReply)) {
    throw new Error('Expected argument of type mt5_term_api.AccountSummaryReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_AccountSummaryReply(buffer_arg) {
  return mt5$term$api$account$helper_pb.AccountSummaryReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_AccountSummaryRequest(arg) {
  if (!(arg instanceof mt5$term$api$account$helper_pb.AccountSummaryRequest)) {
    throw new Error('Expected argument of type mt5_term_api.AccountSummaryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_AccountSummaryRequest(buffer_arg) {
  return mt5$term$api$account$helper_pb.AccountSummaryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_AllHistoryOrdersReply(arg) {
  if (!(arg instanceof mt5$term$api$account$helper_pb.AllHistoryOrdersReply)) {
    throw new Error('Expected argument of type mt5_term_api.AllHistoryOrdersReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_AllHistoryOrdersReply(buffer_arg) {
  return mt5$term$api$account$helper_pb.AllHistoryOrdersReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_AllHistoryOrdersRequest(arg) {
  if (!(arg instanceof mt5$term$api$account$helper_pb.AllHistoryOrdersRequest)) {
    throw new Error('Expected argument of type mt5_term_api.AllHistoryOrdersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_AllHistoryOrdersRequest(buffer_arg) {
  return mt5$term$api$account$helper_pb.AllHistoryOrdersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_OpenedOrdersReply(arg) {
  if (!(arg instanceof mt5$term$api$account$helper_pb.OpenedOrdersReply)) {
    throw new Error('Expected argument of type mt5_term_api.OpenedOrdersReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_OpenedOrdersReply(buffer_arg) {
  return mt5$term$api$account$helper_pb.OpenedOrdersReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_OpenedOrdersRequest(arg) {
  if (!(arg instanceof mt5$term$api$account$helper_pb.OpenedOrdersRequest)) {
    throw new Error('Expected argument of type mt5_term_api.OpenedOrdersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_OpenedOrdersRequest(buffer_arg) {
  return mt5$term$api$account$helper_pb.OpenedOrdersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_OpenedOrdersTicketsReply(arg) {
  if (!(arg instanceof mt5$term$api$account$helper_pb.OpenedOrdersTicketsReply)) {
    throw new Error('Expected argument of type mt5_term_api.OpenedOrdersTicketsReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_OpenedOrdersTicketsReply(buffer_arg) {
  return mt5$term$api$account$helper_pb.OpenedOrdersTicketsReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_OpenedOrdersTicketsRequest(arg) {
  if (!(arg instanceof mt5$term$api$account$helper_pb.OpenedOrdersTicketsRequest)) {
    throw new Error('Expected argument of type mt5_term_api.OpenedOrdersTicketsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_OpenedOrdersTicketsRequest(buffer_arg) {
  return mt5$term$api$account$helper_pb.OpenedOrdersTicketsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_OrderHistoryReply(arg) {
  if (!(arg instanceof mt5$term$api$account$helper_pb.OrderHistoryReply)) {
    throw new Error('Expected argument of type mt5_term_api.OrderHistoryReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_OrderHistoryReply(buffer_arg) {
  return mt5$term$api$account$helper_pb.OrderHistoryReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_OrderHistoryRequest(arg) {
  if (!(arg instanceof mt5$term$api$account$helper_pb.OrderHistoryRequest)) {
    throw new Error('Expected argument of type mt5_term_api.OrderHistoryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_OrderHistoryRequest(buffer_arg) {
  return mt5$term$api$account$helper_pb.OrderHistoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_PositionsHistoryReply(arg) {
  if (!(arg instanceof mt5$term$api$account$helper_pb.PositionsHistoryReply)) {
    throw new Error('Expected argument of type mt5_term_api.PositionsHistoryReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_PositionsHistoryReply(buffer_arg) {
  return mt5$term$api$account$helper_pb.PositionsHistoryReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_PositionsHistoryRequest(arg) {
  if (!(arg instanceof mt5$term$api$account$helper_pb.PositionsHistoryRequest)) {
    throw new Error('Expected argument of type mt5_term_api.PositionsHistoryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_PositionsHistoryRequest(buffer_arg) {
  return mt5$term$api$account$helper_pb.PositionsHistoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_SymbolParamsManyReply(arg) {
  if (!(arg instanceof mt5$term$api$account$helper_pb.SymbolParamsManyReply)) {
    throw new Error('Expected argument of type mt5_term_api.SymbolParamsManyReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_SymbolParamsManyReply(buffer_arg) {
  return mt5$term$api$account$helper_pb.SymbolParamsManyReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_SymbolParamsManyRequest(arg) {
  if (!(arg instanceof mt5$term$api$account$helper_pb.SymbolParamsManyRequest)) {
    throw new Error('Expected argument of type mt5_term_api.SymbolParamsManyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_SymbolParamsManyRequest(buffer_arg) {
  return mt5$term$api$account$helper_pb.SymbolParamsManyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_TickValueWithSizeReply(arg) {
  if (!(arg instanceof mt5$term$api$account$helper_pb.TickValueWithSizeReply)) {
    throw new Error('Expected argument of type mt5_term_api.TickValueWithSizeReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_TickValueWithSizeReply(buffer_arg) {
  return mt5$term$api$account$helper_pb.TickValueWithSizeReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_TickValueWithSizeRequest(arg) {
  if (!(arg instanceof mt5$term$api$account$helper_pb.TickValueWithSizeRequest)) {
    throw new Error('Expected argument of type mt5_term_api.TickValueWithSizeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_TickValueWithSizeRequest(buffer_arg) {
  return mt5$term$api$account$helper_pb.TickValueWithSizeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var AccountHelperService = exports.AccountHelperService = {
  // Some information about account
accountSummary: {
    path: '/mt5_term_api.AccountHelper/AccountSummary',
    requestStream: false,
    responseStream: false,
    requestType: mt5$term$api$account$helper_pb.AccountSummaryRequest,
    responseType: mt5$term$api$account$helper_pb.AccountSummaryReply,
    requestSerialize: serialize_mt5_term_api_AccountSummaryRequest,
    requestDeserialize: deserialize_mt5_term_api_AccountSummaryRequest,
    responseSerialize: serialize_mt5_term_api_AccountSummaryReply,
    responseDeserialize: deserialize_mt5_term_api_AccountSummaryReply,
  },
  // Orders History
// [DefaultValues]
// {
//   "pageNumber": "0",
//   "itemsPerPage": "0",
// }  
orderHistory: {
    path: '/mt5_term_api.AccountHelper/OrderHistory',
    requestStream: false,
    responseStream: false,
    requestType: mt5$term$api$account$helper_pb.OrderHistoryRequest,
    responseType: mt5$term$api$account$helper_pb.OrderHistoryReply,
    requestSerialize: serialize_mt5_term_api_OrderHistoryRequest,
    requestDeserialize: deserialize_mt5_term_api_OrderHistoryRequest,
    responseSerialize: serialize_mt5_term_api_OrderHistoryReply,
    responseDeserialize: deserialize_mt5_term_api_OrderHistoryReply,
  },
  // Pending orders and opened positions
openedOrders: {
    path: '/mt5_term_api.AccountHelper/OpenedOrders',
    requestStream: false,
    responseStream: false,
    requestType: mt5$term$api$account$helper_pb.OpenedOrdersRequest,
    responseType: mt5$term$api$account$helper_pb.OpenedOrdersReply,
    requestSerialize: serialize_mt5_term_api_OpenedOrdersRequest,
    requestDeserialize: deserialize_mt5_term_api_OpenedOrdersRequest,
    responseSerialize: serialize_mt5_term_api_OpenedOrdersReply,
    responseDeserialize: deserialize_mt5_term_api_OpenedOrdersReply,
  },
  // Just opened order tickets
openedOrdersTickets: {
    path: '/mt5_term_api.AccountHelper/OpenedOrdersTickets',
    requestStream: false,
    responseStream: false,
    requestType: mt5$term$api$account$helper_pb.OpenedOrdersTicketsRequest,
    responseType: mt5$term$api$account$helper_pb.OpenedOrdersTicketsReply,
    requestSerialize: serialize_mt5_term_api_OpenedOrdersTicketsRequest,
    requestDeserialize: deserialize_mt5_term_api_OpenedOrdersTicketsRequest,
    responseSerialize: serialize_mt5_term_api_OpenedOrdersTicketsReply,
    responseDeserialize: deserialize_mt5_term_api_OpenedOrdersTicketsReply,
  },
  // Full information about symbol and his group for several symbols
symbolParamsMany: {
    path: '/mt5_term_api.AccountHelper/SymbolParamsMany',
    requestStream: false,
    responseStream: false,
    requestType: mt5$term$api$account$helper_pb.SymbolParamsManyRequest,
    responseType: mt5$term$api$account$helper_pb.SymbolParamsManyReply,
    requestSerialize: serialize_mt5_term_api_SymbolParamsManyRequest,
    requestDeserialize: deserialize_mt5_term_api_SymbolParamsManyRequest,
    responseSerialize: serialize_mt5_term_api_SymbolParamsManyReply,
    responseDeserialize: deserialize_mt5_term_api_SymbolParamsManyReply,
  },
  // Tick value as array
tickValueWithSize: {
    path: '/mt5_term_api.AccountHelper/TickValueWithSize',
    requestStream: false,
    responseStream: false,
    requestType: mt5$term$api$account$helper_pb.TickValueWithSizeRequest,
    responseType: mt5$term$api$account$helper_pb.TickValueWithSizeReply,
    requestSerialize: serialize_mt5_term_api_TickValueWithSizeRequest,
    requestDeserialize: deserialize_mt5_term_api_TickValueWithSizeRequest,
    responseSerialize: serialize_mt5_term_api_TickValueWithSizeReply,
    responseDeserialize: deserialize_mt5_term_api_TickValueWithSizeReply,
  },
  // History positions
positionsHistory: {
    path: '/mt5_term_api.AccountHelper/PositionsHistory',
    requestStream: false,
    responseStream: false,
    requestType: mt5$term$api$account$helper_pb.PositionsHistoryRequest,
    responseType: mt5$term$api$account$helper_pb.PositionsHistoryReply,
    requestSerialize: serialize_mt5_term_api_PositionsHistoryRequest,
    requestDeserialize: deserialize_mt5_term_api_PositionsHistoryRequest,
    responseSerialize: serialize_mt5_term_api_PositionsHistoryReply,
    responseDeserialize: deserialize_mt5_term_api_PositionsHistoryReply,
  },
  allHistoryOrders: {
    path: '/mt5_term_api.AccountHelper/AllHistoryOrders',
    requestStream: false,
    responseStream: false,
    requestType: mt5$term$api$account$helper_pb.AllHistoryOrdersRequest,
    responseType: mt5$term$api$account$helper_pb.AllHistoryOrdersReply,
    requestSerialize: serialize_mt5_term_api_AllHistoryOrdersRequest,
    requestDeserialize: deserialize_mt5_term_api_AllHistoryOrdersRequest,
    responseSerialize: serialize_mt5_term_api_AllHistoryOrdersReply,
    responseDeserialize: deserialize_mt5_term_api_AllHistoryOrdersReply,
  },
};

exports.AccountHelperClient = grpc.makeGenericClientConstructor(AccountHelperService);
