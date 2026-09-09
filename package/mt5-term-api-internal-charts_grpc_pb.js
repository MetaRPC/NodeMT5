// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var mt5$term$api$internal$charts_pb = require('./mt5-term-api-internal-charts_pb.js');

function serialize_mt5_term_api_CloseChartForSymbolReply(arg) {
  if (!(arg instanceof mt5$term$api$internal$charts_pb.CloseChartForSymbolReply)) {
    throw new Error('Expected argument of type mt5_term_api.CloseChartForSymbolReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_CloseChartForSymbolReply(buffer_arg) {
  return mt5$term$api$internal$charts_pb.CloseChartForSymbolReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_CloseChartForSymbolRequest(arg) {
  if (!(arg instanceof mt5$term$api$internal$charts_pb.CloseChartForSymbolRequest)) {
    throw new Error('Expected argument of type mt5_term_api.CloseChartForSymbolRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_CloseChartForSymbolRequest(buffer_arg) {
  return mt5$term$api$internal$charts_pb.CloseChartForSymbolRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_OpenChartForSymbolReply(arg) {
  if (!(arg instanceof mt5$term$api$internal$charts_pb.OpenChartForSymbolReply)) {
    throw new Error('Expected argument of type mt5_term_api.OpenChartForSymbolReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_OpenChartForSymbolReply(buffer_arg) {
  return mt5$term$api$internal$charts_pb.OpenChartForSymbolReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_OpenChartForSymbolRequest(arg) {
  if (!(arg instanceof mt5$term$api$internal$charts_pb.OpenChartForSymbolRequest)) {
    throw new Error('Expected argument of type mt5_term_api.OpenChartForSymbolRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_OpenChartForSymbolRequest(buffer_arg) {
  return mt5$term$api$internal$charts_pb.OpenChartForSymbolRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_OpenChartWithEaReply(arg) {
  if (!(arg instanceof mt5$term$api$internal$charts_pb.OpenChartWithEaReply)) {
    throw new Error('Expected argument of type mt5_term_api.OpenChartWithEaReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_OpenChartWithEaReply(buffer_arg) {
  return mt5$term$api$internal$charts_pb.OpenChartWithEaReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_OpenChartWithEaRequest(arg) {
  if (!(arg instanceof mt5$term$api$internal$charts_pb.OpenChartWithEaRequest)) {
    throw new Error('Expected argument of type mt5_term_api.OpenChartWithEaRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_OpenChartWithEaRequest(buffer_arg) {
  return mt5$term$api$internal$charts_pb.OpenChartWithEaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_SaveChartTemplateReply(arg) {
  if (!(arg instanceof mt5$term$api$internal$charts_pb.SaveChartTemplateReply)) {
    throw new Error('Expected argument of type mt5_term_api.SaveChartTemplateReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_SaveChartTemplateReply(buffer_arg) {
  return mt5$term$api$internal$charts_pb.SaveChartTemplateReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_SaveChartTemplateRequest(arg) {
  if (!(arg instanceof mt5$term$api$internal$charts_pb.SaveChartTemplateRequest)) {
    throw new Error('Expected argument of type mt5_term_api.SaveChartTemplateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_SaveChartTemplateRequest(buffer_arg) {
  return mt5$term$api$internal$charts_pb.SaveChartTemplateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var InternalChartsService = exports.InternalChartsService = {
  openChartForSymbol: {
    path: '/mt5_term_api.InternalCharts/OpenChartForSymbol',
    requestStream: false,
    responseStream: false,
    requestType: mt5$term$api$internal$charts_pb.OpenChartForSymbolRequest,
    responseType: mt5$term$api$internal$charts_pb.OpenChartForSymbolReply,
    requestSerialize: serialize_mt5_term_api_OpenChartForSymbolRequest,
    requestDeserialize: deserialize_mt5_term_api_OpenChartForSymbolRequest,
    responseSerialize: serialize_mt5_term_api_OpenChartForSymbolReply,
    responseDeserialize: deserialize_mt5_term_api_OpenChartForSymbolReply,
  },
  closeChartForSymbol: {
    path: '/mt5_term_api.InternalCharts/CloseChartForSymbol',
    requestStream: false,
    responseStream: false,
    requestType: mt5$term$api$internal$charts_pb.CloseChartForSymbolRequest,
    responseType: mt5$term$api$internal$charts_pb.CloseChartForSymbolReply,
    requestSerialize: serialize_mt5_term_api_CloseChartForSymbolRequest,
    requestDeserialize: deserialize_mt5_term_api_CloseChartForSymbolRequest,
    responseSerialize: serialize_mt5_term_api_CloseChartForSymbolReply,
    responseDeserialize: deserialize_mt5_term_api_CloseChartForSymbolReply,
  },
  openChartWithEa: {
    path: '/mt5_term_api.InternalCharts/OpenChartWithEa',
    requestStream: false,
    responseStream: false,
    requestType: mt5$term$api$internal$charts_pb.OpenChartWithEaRequest,
    responseType: mt5$term$api$internal$charts_pb.OpenChartWithEaReply,
    requestSerialize: serialize_mt5_term_api_OpenChartWithEaRequest,
    requestDeserialize: deserialize_mt5_term_api_OpenChartWithEaRequest,
    responseSerialize: serialize_mt5_term_api_OpenChartWithEaReply,
    responseDeserialize: deserialize_mt5_term_api_OpenChartWithEaReply,
  },
  saveChartTemplate: {
    path: '/mt5_term_api.InternalCharts/SaveChartTemplate',
    requestStream: false,
    responseStream: false,
    requestType: mt5$term$api$internal$charts_pb.SaveChartTemplateRequest,
    responseType: mt5$term$api$internal$charts_pb.SaveChartTemplateReply,
    requestSerialize: serialize_mt5_term_api_SaveChartTemplateRequest,
    requestDeserialize: deserialize_mt5_term_api_SaveChartTemplateRequest,
    responseSerialize: serialize_mt5_term_api_SaveChartTemplateReply,
    responseDeserialize: deserialize_mt5_term_api_SaveChartTemplateReply,
  },
};

exports.InternalChartsClient = grpc.makeGenericClientConstructor(InternalChartsService);
