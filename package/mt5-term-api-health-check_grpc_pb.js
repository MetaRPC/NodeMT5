// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var mt5$term$api$health$check_pb = require('./mt5-term-api-health-check_pb.js');
var mt5$term$api$connection_pb = require('./mt5-term-api-connection_pb.js');

function serialize_mt5_term_api_HealthCheckReply(arg) {
  if (!(arg instanceof mt5$term$api$health$check_pb.HealthCheckReply)) {
    throw new Error('Expected argument of type mt5_term_api.HealthCheckReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_HealthCheckReply(buffer_arg) {
  return mt5$term$api$health$check_pb.HealthCheckReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_HealthCheckRequest(arg) {
  if (!(arg instanceof mt5$term$api$health$check_pb.HealthCheckRequest)) {
    throw new Error('Expected argument of type mt5_term_api.HealthCheckRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_HealthCheckRequest(buffer_arg) {
  return mt5$term$api$health$check_pb.HealthCheckRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_StopListeningReply(arg) {
  if (!(arg instanceof mt5$term$api$health$check_pb.StopListeningReply)) {
    throw new Error('Expected argument of type mt5_term_api.StopListeningReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_StopListeningReply(buffer_arg) {
  return mt5$term$api$health$check_pb.StopListeningReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_StopListeningRequest(arg) {
  if (!(arg instanceof mt5$term$api$health$check_pb.StopListeningRequest)) {
    throw new Error('Expected argument of type mt5_term_api.StopListeningRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_StopListeningRequest(buffer_arg) {
  return mt5$term$api$health$check_pb.StopListeningRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var HealthService = exports.HealthService = {
  check: {
    path: '/mt5_term_api.Health/Check',
    requestStream: false,
    responseStream: false,
    requestType: mt5$term$api$health$check_pb.HealthCheckRequest,
    responseType: mt5$term$api$health$check_pb.HealthCheckReply,
    requestSerialize: serialize_mt5_term_api_HealthCheckRequest,
    requestDeserialize: deserialize_mt5_term_api_HealthCheckRequest,
    responseSerialize: serialize_mt5_term_api_HealthCheckReply,
    responseDeserialize: deserialize_mt5_term_api_HealthCheckReply,
  },
  stopListening: {
    path: '/mt5_term_api.Health/StopListening',
    requestStream: false,
    responseStream: false,
    requestType: mt5$term$api$health$check_pb.StopListeningRequest,
    responseType: mt5$term$api$health$check_pb.StopListeningReply,
    requestSerialize: serialize_mt5_term_api_StopListeningRequest,
    requestDeserialize: deserialize_mt5_term_api_StopListeningRequest,
    responseSerialize: serialize_mt5_term_api_StopListeningReply,
    responseDeserialize: deserialize_mt5_term_api_StopListeningReply,
  },
};

exports.HealthClient = grpc.makeGenericClientConstructor(HealthService);
