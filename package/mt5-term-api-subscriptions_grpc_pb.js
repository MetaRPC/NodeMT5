// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var mt5$term$api$subscriptions_pb = require('./mt5-term-api-subscriptions_pb.js');
var google_api_annotations_pb = require('./google/api/annotations_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var mrpc$mt5$error_pb = require('./mrpc-mt5-error_pb.js');

function serialize_mt5_term_api_OnPositionProfitReply(arg) {
  if (!(arg instanceof mt5$term$api$subscriptions_pb.OnPositionProfitReply)) {
    throw new Error('Expected argument of type mt5_term_api.OnPositionProfitReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_OnPositionProfitReply(buffer_arg) {
  return mt5$term$api$subscriptions_pb.OnPositionProfitReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_OnPositionProfitRequest(arg) {
  if (!(arg instanceof mt5$term$api$subscriptions_pb.OnPositionProfitRequest)) {
    throw new Error('Expected argument of type mt5_term_api.OnPositionProfitRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_OnPositionProfitRequest(buffer_arg) {
  return mt5$term$api$subscriptions_pb.OnPositionProfitRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_OnPositionsAndPendingOrdersTicketsReply(arg) {
  if (!(arg instanceof mt5$term$api$subscriptions_pb.OnPositionsAndPendingOrdersTicketsReply)) {
    throw new Error('Expected argument of type mt5_term_api.OnPositionsAndPendingOrdersTicketsReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_OnPositionsAndPendingOrdersTicketsReply(buffer_arg) {
  return mt5$term$api$subscriptions_pb.OnPositionsAndPendingOrdersTicketsReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_OnPositionsAndPendingOrdersTicketsRequest(arg) {
  if (!(arg instanceof mt5$term$api$subscriptions_pb.OnPositionsAndPendingOrdersTicketsRequest)) {
    throw new Error('Expected argument of type mt5_term_api.OnPositionsAndPendingOrdersTicketsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_OnPositionsAndPendingOrdersTicketsRequest(buffer_arg) {
  return mt5$term$api$subscriptions_pb.OnPositionsAndPendingOrdersTicketsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_OnSymbolTickReply(arg) {
  if (!(arg instanceof mt5$term$api$subscriptions_pb.OnSymbolTickReply)) {
    throw new Error('Expected argument of type mt5_term_api.OnSymbolTickReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_OnSymbolTickReply(buffer_arg) {
  return mt5$term$api$subscriptions_pb.OnSymbolTickReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_OnSymbolTickRequest(arg) {
  if (!(arg instanceof mt5$term$api$subscriptions_pb.OnSymbolTickRequest)) {
    throw new Error('Expected argument of type mt5_term_api.OnSymbolTickRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_OnSymbolTickRequest(buffer_arg) {
  return mt5$term$api$subscriptions_pb.OnSymbolTickRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_OnTradeReply(arg) {
  if (!(arg instanceof mt5$term$api$subscriptions_pb.OnTradeReply)) {
    throw new Error('Expected argument of type mt5_term_api.OnTradeReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_OnTradeReply(buffer_arg) {
  return mt5$term$api$subscriptions_pb.OnTradeReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_OnTradeRequest(arg) {
  if (!(arg instanceof mt5$term$api$subscriptions_pb.OnTradeRequest)) {
    throw new Error('Expected argument of type mt5_term_api.OnTradeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_OnTradeRequest(buffer_arg) {
  return mt5$term$api$subscriptions_pb.OnTradeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_OnTradeTransactionReply(arg) {
  if (!(arg instanceof mt5$term$api$subscriptions_pb.OnTradeTransactionReply)) {
    throw new Error('Expected argument of type mt5_term_api.OnTradeTransactionReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_OnTradeTransactionReply(buffer_arg) {
  return mt5$term$api$subscriptions_pb.OnTradeTransactionReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_OnTradeTransactionRequest(arg) {
  if (!(arg instanceof mt5$term$api$subscriptions_pb.OnTradeTransactionRequest)) {
    throw new Error('Expected argument of type mt5_term_api.OnTradeTransactionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_OnTradeTransactionRequest(buffer_arg) {
  return mt5$term$api$subscriptions_pb.OnTradeTransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var SubscriptionServiceService = exports.SubscriptionServiceService = {
  // Streams real-time symbol tick data for the specified symbols.
// Requires 'id' header with the terminal connection GUID returned by Connect.
// Swagger does not support streaming — use /subscription-stream interactive viewer.
// [DefaultValues]
// {
//   "symbolNames": "EURUSD,BTCUSD"
// }
onSymbolTick: {
    path: '/mt5_term_api.SubscriptionService/OnSymbolTick',
    requestStream: false,
    responseStream: true,
    requestType: mt5$term$api$subscriptions_pb.OnSymbolTickRequest,
    responseType: mt5$term$api$subscriptions_pb.OnSymbolTickReply,
    requestSerialize: serialize_mt5_term_api_OnSymbolTickRequest,
    requestDeserialize: deserialize_mt5_term_api_OnSymbolTickRequest,
    responseSerialize: serialize_mt5_term_api_OnSymbolTickReply,
    responseDeserialize: deserialize_mt5_term_api_OnSymbolTickReply,
  },
  // Streams real-time trade events (orders, positions, deals changes).
// Requires 'id' header with the terminal connection GUID returned by Connect.
// Swagger does not support streaming — use /subscription-stream interactive viewer.
onTrade: {
    path: '/mt5_term_api.SubscriptionService/OnTrade',
    requestStream: false,
    responseStream: true,
    requestType: mt5$term$api$subscriptions_pb.OnTradeRequest,
    responseType: mt5$term$api$subscriptions_pb.OnTradeReply,
    requestSerialize: serialize_mt5_term_api_OnTradeRequest,
    requestDeserialize: deserialize_mt5_term_api_OnTradeRequest,
    responseSerialize: serialize_mt5_term_api_OnTradeReply,
    responseDeserialize: deserialize_mt5_term_api_OnTradeReply,
  },
  // Streams real-time position profit updates at the specified timer interval.
// Requires 'id' header with the terminal connection GUID returned by Connect.
// Swagger does not support streaming — use /subscription-stream interactive viewer.
onPositionProfit: {
    path: '/mt5_term_api.SubscriptionService/OnPositionProfit',
    requestStream: false,
    responseStream: true,
    requestType: mt5$term$api$subscriptions_pb.OnPositionProfitRequest,
    responseType: mt5$term$api$subscriptions_pb.OnPositionProfitReply,
    requestSerialize: serialize_mt5_term_api_OnPositionProfitRequest,
    requestDeserialize: deserialize_mt5_term_api_OnPositionProfitRequest,
    responseSerialize: serialize_mt5_term_api_OnPositionProfitReply,
    responseDeserialize: deserialize_mt5_term_api_OnPositionProfitReply,
  },
  // Streams real-time position and pending order ticket changes.
// Requires 'id' header with the terminal connection GUID returned by Connect.
// Swagger does not support streaming — use /subscription-stream interactive viewer.
onPositionsAndPendingOrdersTickets: {
    path: '/mt5_term_api.SubscriptionService/OnPositionsAndPendingOrdersTickets',
    requestStream: false,
    responseStream: true,
    requestType: mt5$term$api$subscriptions_pb.OnPositionsAndPendingOrdersTicketsRequest,
    responseType: mt5$term$api$subscriptions_pb.OnPositionsAndPendingOrdersTicketsReply,
    requestSerialize: serialize_mt5_term_api_OnPositionsAndPendingOrdersTicketsRequest,
    requestDeserialize: deserialize_mt5_term_api_OnPositionsAndPendingOrdersTicketsRequest,
    responseSerialize: serialize_mt5_term_api_OnPositionsAndPendingOrdersTicketsReply,
    responseDeserialize: deserialize_mt5_term_api_OnPositionsAndPendingOrdersTicketsReply,
  },
  // Streams real-time trade transaction events (order add/update/delete, deal add, position changes).
// Requires 'id' header with the terminal connection GUID returned by Connect.
// Swagger does not support streaming — use /subscription-stream interactive viewer.
onTradeTransaction: {
    path: '/mt5_term_api.SubscriptionService/OnTradeTransaction',
    requestStream: false,
    responseStream: true,
    requestType: mt5$term$api$subscriptions_pb.OnTradeTransactionRequest,
    responseType: mt5$term$api$subscriptions_pb.OnTradeTransactionReply,
    requestSerialize: serialize_mt5_term_api_OnTradeTransactionRequest,
    requestDeserialize: deserialize_mt5_term_api_OnTradeTransactionRequest,
    responseSerialize: serialize_mt5_term_api_OnTradeTransactionReply,
    responseDeserialize: deserialize_mt5_term_api_OnTradeTransactionReply,
  },
};

exports.SubscriptionServiceClient = grpc.makeGenericClientConstructor(SubscriptionServiceService);
