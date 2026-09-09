// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var mt5$term$api$trading$helper_pb = require('./mt5-term-api-trading-helper_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_api_annotations_pb = require('./google/api/annotations_pb.js');
var mrpc$mt5$error_pb = require('./mrpc-mt5-error_pb.js');

function serialize_mt5_term_api_OrderCloseReply(arg) {
  if (!(arg instanceof mt5$term$api$trading$helper_pb.OrderCloseReply)) {
    throw new Error('Expected argument of type mt5_term_api.OrderCloseReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_OrderCloseReply(buffer_arg) {
  return mt5$term$api$trading$helper_pb.OrderCloseReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_OrderCloseRequest(arg) {
  if (!(arg instanceof mt5$term$api$trading$helper_pb.OrderCloseRequest)) {
    throw new Error('Expected argument of type mt5_term_api.OrderCloseRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_OrderCloseRequest(buffer_arg) {
  return mt5$term$api$trading$helper_pb.OrderCloseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_OrderModifyReply(arg) {
  if (!(arg instanceof mt5$term$api$trading$helper_pb.OrderModifyReply)) {
    throw new Error('Expected argument of type mt5_term_api.OrderModifyReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_OrderModifyReply(buffer_arg) {
  return mt5$term$api$trading$helper_pb.OrderModifyReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_OrderModifyRequest(arg) {
  if (!(arg instanceof mt5$term$api$trading$helper_pb.OrderModifyRequest)) {
    throw new Error('Expected argument of type mt5_term_api.OrderModifyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_OrderModifyRequest(buffer_arg) {
  return mt5$term$api$trading$helper_pb.OrderModifyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_OrderSendReply(arg) {
  if (!(arg instanceof mt5$term$api$trading$helper_pb.OrderSendReply)) {
    throw new Error('Expected argument of type mt5_term_api.OrderSendReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_OrderSendReply(buffer_arg) {
  return mt5$term$api$trading$helper_pb.OrderSendReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_OrderSendRequest(arg) {
  if (!(arg instanceof mt5$term$api$trading$helper_pb.OrderSendRequest)) {
    throw new Error('Expected argument of type mt5_term_api.OrderSendRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_OrderSendRequest(buffer_arg) {
  return mt5$term$api$trading$helper_pb.OrderSendRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var TradingHelperService = exports.TradingHelperService = {
  // Send market or pending order
// [DefaultValues]
// {
//   "symbol": "EURUSD",
//   "operation": "TMT5_ORDER_TYPE_BUY",
//   "volume": "0.1"
// }
orderSend: {
    path: '/mt5_term_api.TradingHelper/OrderSend',
    requestStream: false,
    responseStream: false,
    requestType: mt5$term$api$trading$helper_pb.OrderSendRequest,
    responseType: mt5$term$api$trading$helper_pb.OrderSendReply,
    requestSerialize: serialize_mt5_term_api_OrderSendRequest,
    requestDeserialize: deserialize_mt5_term_api_OrderSendRequest,
    responseSerialize: serialize_mt5_term_api_OrderSendReply,
    responseDeserialize: deserialize_mt5_term_api_OrderSendReply,
  },
  // Send market or pending order immediately, with no Market Watch or quotes preparation.
// Same request and reply as OrderSend, but nothing is checked first and quotes_wait_ms is
// ignored. Use only for a symbol already known to be streaming; otherwise the trade server
// rejects the order (ErrMarketLasttimeUnknown 4304 "no ticks" and friends).
// [DefaultValues]
// {
//   "symbol": "EURUSD",
//   "operation": "TMT5_ORDER_TYPE_BUY",
//   "volume": "0.1"
// }
orderSendWithoutChecks: {
    path: '/mt5_term_api.TradingHelper/OrderSendWithoutChecks',
    requestStream: false,
    responseStream: false,
    requestType: mt5$term$api$trading$helper_pb.OrderSendRequest,
    responseType: mt5$term$api$trading$helper_pb.OrderSendReply,
    requestSerialize: serialize_mt5_term_api_OrderSendRequest,
    requestDeserialize: deserialize_mt5_term_api_OrderSendRequest,
    responseSerialize: serialize_mt5_term_api_OrderSendReply,
    responseDeserialize: deserialize_mt5_term_api_OrderSendReply,
  },
  // Modify market or pending order
orderModify: {
    path: '/mt5_term_api.TradingHelper/OrderModify',
    requestStream: false,
    responseStream: false,
    requestType: mt5$term$api$trading$helper_pb.OrderModifyRequest,
    responseType: mt5$term$api$trading$helper_pb.OrderModifyReply,
    requestSerialize: serialize_mt5_term_api_OrderModifyRequest,
    requestDeserialize: deserialize_mt5_term_api_OrderModifyRequest,
    responseSerialize: serialize_mt5_term_api_OrderModifyReply,
    responseDeserialize: deserialize_mt5_term_api_OrderModifyReply,
  },
  // Close market or pending order
orderClose: {
    path: '/mt5_term_api.TradingHelper/OrderClose',
    requestStream: false,
    responseStream: false,
    requestType: mt5$term$api$trading$helper_pb.OrderCloseRequest,
    responseType: mt5$term$api$trading$helper_pb.OrderCloseReply,
    requestSerialize: serialize_mt5_term_api_OrderCloseRequest,
    requestDeserialize: deserialize_mt5_term_api_OrderCloseRequest,
    responseSerialize: serialize_mt5_term_api_OrderCloseReply,
    responseDeserialize: deserialize_mt5_term_api_OrderCloseReply,
  },
};

exports.TradingHelperClient = grpc.makeGenericClientConstructor(TradingHelperService);
