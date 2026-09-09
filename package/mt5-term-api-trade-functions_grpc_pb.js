// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var mt5$term$api$trade$functions_pb = require('./mt5-term-api-trade-functions_pb.js');
var google_api_annotations_pb = require('./google/api/annotations_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var mrpc$mt5$error_pb = require('./mrpc-mt5-error_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_OrderCalcMarginReply(arg) {
  if (!(arg instanceof mt5$term$api$trade$functions_pb.OrderCalcMarginReply)) {
    throw new Error('Expected argument of type mt5_term_api.OrderCalcMarginReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_OrderCalcMarginReply(buffer_arg) {
  return mt5$term$api$trade$functions_pb.OrderCalcMarginReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_OrderCalcMarginRequest(arg) {
  if (!(arg instanceof mt5$term$api$trade$functions_pb.OrderCalcMarginRequest)) {
    throw new Error('Expected argument of type mt5_term_api.OrderCalcMarginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_OrderCalcMarginRequest(buffer_arg) {
  return mt5$term$api$trade$functions_pb.OrderCalcMarginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_OrderCalcProfitReply(arg) {
  if (!(arg instanceof mt5$term$api$trade$functions_pb.OrderCalcProfitReply)) {
    throw new Error('Expected argument of type mt5_term_api.OrderCalcProfitReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_OrderCalcProfitReply(buffer_arg) {
  return mt5$term$api$trade$functions_pb.OrderCalcProfitReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_OrderCalcProfitRequest(arg) {
  if (!(arg instanceof mt5$term$api$trade$functions_pb.OrderCalcProfitRequest)) {
    throw new Error('Expected argument of type mt5_term_api.OrderCalcProfitRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_OrderCalcProfitRequest(buffer_arg) {
  return mt5$term$api$trade$functions_pb.OrderCalcProfitRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_OrderCheckReply(arg) {
  if (!(arg instanceof mt5$term$api$trade$functions_pb.OrderCheckReply)) {
    throw new Error('Expected argument of type mt5_term_api.OrderCheckReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_OrderCheckReply(buffer_arg) {
  return mt5$term$api$trade$functions_pb.OrderCheckReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_OrderCheckRequest(arg) {
  if (!(arg instanceof mt5$term$api$trade$functions_pb.OrderCheckRequest)) {
    throw new Error('Expected argument of type mt5_term_api.OrderCheckRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_OrderCheckRequest(buffer_arg) {
  return mt5$term$api$trade$functions_pb.OrderCheckRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_PositionsTotalReply(arg) {
  if (!(arg instanceof mt5$term$api$trade$functions_pb.PositionsTotalReply)) {
    throw new Error('Expected argument of type mt5_term_api.PositionsTotalReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_PositionsTotalReply(buffer_arg) {
  return mt5$term$api$trade$functions_pb.PositionsTotalReply.deserializeBinary(new Uint8Array(buffer_arg));
}


var TradeFunctionsService = exports.TradeFunctionsService = {
  // The function calculates the margin required for the specified order type, on the current account, in the current market environment not taking into account current pending orders and open positions. It allows the evaluation of margin for the trade operation planned. The value is returned in the account currency +
// https://www.mql5.com/en/docs/trading/ordercalcmargin
orderCalcMargin: {
    path: '/mt5_term_api.TradeFunctions/OrderCalcMargin',
    requestStream: false,
    responseStream: false,
    requestType: mt5$term$api$trade$functions_pb.OrderCalcMarginRequest,
    responseType: mt5$term$api$trade$functions_pb.OrderCalcMarginReply,
    requestSerialize: serialize_mt5_term_api_OrderCalcMarginRequest,
    requestDeserialize: deserialize_mt5_term_api_OrderCalcMarginRequest,
    responseSerialize: serialize_mt5_term_api_OrderCalcMarginReply,
    responseDeserialize: deserialize_mt5_term_api_OrderCalcMarginReply,
  },
  // The function calculates the profit for the current account, in the current market conditions, based on the parameters passed. The function is used for pre-evaluation of the result of a trade operation. The value is returned in the account currency. + 
// https://www.mql5.com/en/docs/trading/ordercalcprofit
orderCalcProfit: {
    path: '/mt5_term_api.TradeFunctions/OrderCalcProfit',
    requestStream: false,
    responseStream: false,
    requestType: mt5$term$api$trade$functions_pb.OrderCalcProfitRequest,
    responseType: mt5$term$api$trade$functions_pb.OrderCalcProfitReply,
    requestSerialize: serialize_mt5_term_api_OrderCalcProfitRequest,
    requestDeserialize: deserialize_mt5_term_api_OrderCalcProfitRequest,
    responseSerialize: serialize_mt5_term_api_OrderCalcProfitReply,
    responseDeserialize: deserialize_mt5_term_api_OrderCalcProfitReply,
  },
  // Checks if there are enough money to execute a required Trade Operation Type +
// https://www.mql5.com/en/docs/trading/ordercheck
orderCheck: {
    path: '/mt5_term_api.TradeFunctions/OrderCheck',
    requestStream: false,
    responseStream: false,
    requestType: mt5$term$api$trade$functions_pb.OrderCheckRequest,
    responseType: mt5$term$api$trade$functions_pb.OrderCheckReply,
    requestSerialize: serialize_mt5_term_api_OrderCheckRequest,
    requestDeserialize: deserialize_mt5_term_api_OrderCheckRequest,
    responseSerialize: serialize_mt5_term_api_OrderCheckReply,
    responseDeserialize: deserialize_mt5_term_api_OrderCheckReply,
  },
  // Returns the number of open positions +
// https://www.mql5.com/en/docs/trading/positionstotal
positionsTotal: {
    path: '/mt5_term_api.TradeFunctions/PositionsTotal',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: mt5$term$api$trade$functions_pb.PositionsTotalReply,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_mt5_term_api_PositionsTotalReply,
    responseDeserialize: deserialize_mt5_term_api_PositionsTotalReply,
  },
};

exports.TradeFunctionsClient = grpc.makeGenericClientConstructor(TradeFunctionsService);
