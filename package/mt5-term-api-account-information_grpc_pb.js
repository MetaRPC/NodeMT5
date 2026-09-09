// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var mt5$term$api$account$information_pb = require('./mt5-term-api-account-information_pb.js');
var google_api_annotations_pb = require('./google/api/annotations_pb.js');
var mrpc$mt5$error_pb = require('./mrpc-mt5-error_pb.js');

function serialize_mt5_term_api_AccountInfoDoubleReply(arg) {
  if (!(arg instanceof mt5$term$api$account$information_pb.AccountInfoDoubleReply)) {
    throw new Error('Expected argument of type mt5_term_api.AccountInfoDoubleReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_AccountInfoDoubleReply(buffer_arg) {
  return mt5$term$api$account$information_pb.AccountInfoDoubleReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_AccountInfoDoubleRequest(arg) {
  if (!(arg instanceof mt5$term$api$account$information_pb.AccountInfoDoubleRequest)) {
    throw new Error('Expected argument of type mt5_term_api.AccountInfoDoubleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_AccountInfoDoubleRequest(buffer_arg) {
  return mt5$term$api$account$information_pb.AccountInfoDoubleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_AccountInfoIntegerReply(arg) {
  if (!(arg instanceof mt5$term$api$account$information_pb.AccountInfoIntegerReply)) {
    throw new Error('Expected argument of type mt5_term_api.AccountInfoIntegerReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_AccountInfoIntegerReply(buffer_arg) {
  return mt5$term$api$account$information_pb.AccountInfoIntegerReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_AccountInfoIntegerRequest(arg) {
  if (!(arg instanceof mt5$term$api$account$information_pb.AccountInfoIntegerRequest)) {
    throw new Error('Expected argument of type mt5_term_api.AccountInfoIntegerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_AccountInfoIntegerRequest(buffer_arg) {
  return mt5$term$api$account$information_pb.AccountInfoIntegerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_AccountInfoStringReply(arg) {
  if (!(arg instanceof mt5$term$api$account$information_pb.AccountInfoStringReply)) {
    throw new Error('Expected argument of type mt5_term_api.AccountInfoStringReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_AccountInfoStringReply(buffer_arg) {
  return mt5$term$api$account$information_pb.AccountInfoStringReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_AccountInfoStringRequest(arg) {
  if (!(arg instanceof mt5$term$api$account$information_pb.AccountInfoStringRequest)) {
    throw new Error('Expected argument of type mt5_term_api.AccountInfoStringRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_AccountInfoStringRequest(buffer_arg) {
  return mt5$term$api$account$information_pb.AccountInfoStringRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var AccountInformationService = exports.AccountInformationService = {
  // Returns the double value of the corresponding account property
// https://www.mql5.com/en/docs/account/accountinfodouble
accountInfoDouble: {
    path: '/mt5_term_api.AccountInformation/AccountInfoDouble',
    requestStream: false,
    responseStream: false,
    requestType: mt5$term$api$account$information_pb.AccountInfoDoubleRequest,
    responseType: mt5$term$api$account$information_pb.AccountInfoDoubleReply,
    requestSerialize: serialize_mt5_term_api_AccountInfoDoubleRequest,
    requestDeserialize: deserialize_mt5_term_api_AccountInfoDoubleRequest,
    responseSerialize: serialize_mt5_term_api_AccountInfoDoubleReply,
    responseDeserialize: deserialize_mt5_term_api_AccountInfoDoubleReply,
  },
  // Returns the value of the properties of the account
// https://www.mql5.com/en/docs/account/accountinfointeger
accountInfoInteger: {
    path: '/mt5_term_api.AccountInformation/AccountInfoInteger',
    requestStream: false,
    responseStream: false,
    requestType: mt5$term$api$account$information_pb.AccountInfoIntegerRequest,
    responseType: mt5$term$api$account$information_pb.AccountInfoIntegerReply,
    requestSerialize: serialize_mt5_term_api_AccountInfoIntegerRequest,
    requestDeserialize: deserialize_mt5_term_api_AccountInfoIntegerRequest,
    responseSerialize: serialize_mt5_term_api_AccountInfoIntegerReply,
    responseDeserialize: deserialize_mt5_term_api_AccountInfoIntegerReply,
  },
  // Returns the value of the appropriate account property
// https://www.mql5.com/en/docs/account/accountinfostring
accountInfoString: {
    path: '/mt5_term_api.AccountInformation/AccountInfoString',
    requestStream: false,
    responseStream: false,
    requestType: mt5$term$api$account$information_pb.AccountInfoStringRequest,
    responseType: mt5$term$api$account$information_pb.AccountInfoStringReply,
    requestSerialize: serialize_mt5_term_api_AccountInfoStringRequest,
    requestDeserialize: deserialize_mt5_term_api_AccountInfoStringRequest,
    responseSerialize: serialize_mt5_term_api_AccountInfoStringReply,
    responseDeserialize: deserialize_mt5_term_api_AccountInfoStringReply,
  },
};

exports.AccountInformationClient = grpc.makeGenericClientConstructor(AccountInformationService);
