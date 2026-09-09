// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var mt5$term$api$charts_pb = require('./mt5-term-api-charts_pb.js');
var google_api_annotations_pb = require('./google/api/annotations_pb.js');
var mrpc$mt5$error_pb = require('./mrpc-mt5-error_pb.js');

function serialize_mt5_term_api_GetEaParamsReply(arg) {
  if (!(arg instanceof mt5$term$api$charts_pb.GetEaParamsReply)) {
    throw new Error('Expected argument of type mt5_term_api.GetEaParamsReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_GetEaParamsReply(buffer_arg) {
  return mt5$term$api$charts_pb.GetEaParamsReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_GetEaParamsRequest(arg) {
  if (!(arg instanceof mt5$term$api$charts_pb.GetEaParamsRequest)) {
    throw new Error('Expected argument of type mt5_term_api.GetEaParamsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_GetEaParamsRequest(buffer_arg) {
  return mt5$term$api$charts_pb.GetEaParamsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_OpenTerminalChartWithEaReply(arg) {
  if (!(arg instanceof mt5$term$api$charts_pb.OpenTerminalChartWithEaReply)) {
    throw new Error('Expected argument of type mt5_term_api.OpenTerminalChartWithEaReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_OpenTerminalChartWithEaReply(buffer_arg) {
  return mt5$term$api$charts_pb.OpenTerminalChartWithEaReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_OpenTerminalChartWithEaRequest(arg) {
  if (!(arg instanceof mt5$term$api$charts_pb.OpenTerminalChartWithEaRequest)) {
    throw new Error('Expected argument of type mt5_term_api.OpenTerminalChartWithEaRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_OpenTerminalChartWithEaRequest(buffer_arg) {
  return mt5$term$api$charts_pb.OpenTerminalChartWithEaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var ChartsService = exports.ChartsService = {
  openTerminalChartWithEa: {
    path: '/mt5_term_api.Charts/OpenTerminalChartWithEa',
    requestStream: false,
    responseStream: false,
    requestType: mt5$term$api$charts_pb.OpenTerminalChartWithEaRequest,
    responseType: mt5$term$api$charts_pb.OpenTerminalChartWithEaReply,
    requestSerialize: serialize_mt5_term_api_OpenTerminalChartWithEaRequest,
    requestDeserialize: deserialize_mt5_term_api_OpenTerminalChartWithEaRequest,
    responseSerialize: serialize_mt5_term_api_OpenTerminalChartWithEaReply,
    responseDeserialize: deserialize_mt5_term_api_OpenTerminalChartWithEaReply,
  },
  getEaParams: {
    path: '/mt5_term_api.Charts/GetEaParams',
    requestStream: false,
    responseStream: false,
    requestType: mt5$term$api$charts_pb.GetEaParamsRequest,
    responseType: mt5$term$api$charts_pb.GetEaParamsReply,
    requestSerialize: serialize_mt5_term_api_GetEaParamsRequest,
    requestDeserialize: deserialize_mt5_term_api_GetEaParamsRequest,
    responseSerialize: serialize_mt5_term_api_GetEaParamsReply,
    responseDeserialize: deserialize_mt5_term_api_GetEaParamsReply,
  },
};

exports.ChartsClient = grpc.makeGenericClientConstructor(ChartsService);
