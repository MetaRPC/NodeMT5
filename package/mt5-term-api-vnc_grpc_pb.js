// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var mt5$term$api$vnc_pb = require('./mt5-term-api-vnc_pb.js');

function serialize_mt5_term_api_VncData(arg) {
  if (!(arg instanceof mt5$term$api$vnc_pb.VncData)) {
    throw new Error('Expected argument of type mt5_term_api.VncData');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_VncData(buffer_arg) {
  return mt5$term$api$vnc_pb.VncData.deserializeBinary(new Uint8Array(buffer_arg));
}


var VncServiceService = exports.VncServiceService = {
  // Bidirectional stream: raw VNC (RFB) binary data flows in both directions
vncStream: {
    path: '/mt5_term_api.VncService/VncStream',
    requestStream: true,
    responseStream: true,
    requestType: mt5$term$api$vnc_pb.VncData,
    responseType: mt5$term$api$vnc_pb.VncData,
    requestSerialize: serialize_mt5_term_api_VncData,
    requestDeserialize: deserialize_mt5_term_api_VncData,
    responseSerialize: serialize_mt5_term_api_VncData,
    responseDeserialize: deserialize_mt5_term_api_VncData,
  },
};

exports.VncServiceClient = grpc.makeGenericClientConstructor(VncServiceService);
