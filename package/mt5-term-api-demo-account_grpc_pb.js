// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var google_api_annotations_pb = require('./google/api/annotations_pb.js');
var mt5$term$api$gui_pb = require('./mt5-term-api-gui_pb.js');

function serialize_mt5_term_api_GuiDemoInteractiveClientMessage(arg) {
  if (!(arg instanceof mt5$term$api$gui_pb.GuiDemoInteractiveClientMessage)) {
    throw new Error('Expected argument of type mt5_term_api.GuiDemoInteractiveClientMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_GuiDemoInteractiveClientMessage(buffer_arg) {
  return mt5$term$api$gui_pb.GuiDemoInteractiveClientMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_GuiDemoInteractiveServerMessage(arg) {
  if (!(arg instanceof mt5$term$api$gui_pb.GuiDemoInteractiveServerMessage)) {
    throw new Error('Expected argument of type mt5_term_api.GuiDemoInteractiveServerMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_GuiDemoInteractiveServerMessage(buffer_arg) {
  return mt5$term$api$gui_pb.GuiDemoInteractiveServerMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_GuiDemoOpenAccountReply(arg) {
  if (!(arg instanceof mt5$term$api$gui_pb.GuiDemoOpenAccountReply)) {
    throw new Error('Expected argument of type mt5_term_api.GuiDemoOpenAccountReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_GuiDemoOpenAccountReply(buffer_arg) {
  return mt5$term$api$gui_pb.GuiDemoOpenAccountReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_GuiDemoOpenAccountRequest(arg) {
  if (!(arg instanceof mt5$term$api$gui_pb.GuiDemoOpenAccountRequest)) {
    throw new Error('Expected argument of type mt5_term_api.GuiDemoOpenAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_GuiDemoOpenAccountRequest(buffer_arg) {
  return mt5$term$api$gui_pb.GuiDemoOpenAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Demo account creation service.
// Automates the MT5 "Open an Account" wizard via Win32 GUI automation.
// Does NOT require 'id' header — auto-picks any available terminal.
var DemoAccountService = exports.DemoAccountService = {
  // Open a demo account. Full wizard flow: search → select → fill form → register.
// Returns login, password, and investor password for the new demo account.
// [DefaultValues]
// {
//   "company": "MetaQuotes Ltd.",
//   "firstName": "Test",
//   "lastName": "User",
//   "email": "test@test.com",
//   "phone": "+1234567890",
//   "timeoutSeconds": "60"
// }
openDemoAccount: {
    path: '/mt5_term_api.DemoAccount/OpenDemoAccount',
    requestStream: false,
    responseStream: false,
    requestType: mt5$term$api$gui_pb.GuiDemoOpenAccountRequest,
    responseType: mt5$term$api$gui_pb.GuiDemoOpenAccountReply,
    requestSerialize: serialize_mt5_term_api_GuiDemoOpenAccountRequest,
    requestDeserialize: deserialize_mt5_term_api_GuiDemoOpenAccountRequest,
    responseSerialize: serialize_mt5_term_api_GuiDemoOpenAccountReply,
    responseDeserialize: deserialize_mt5_term_api_GuiDemoOpenAccountReply,
  },
  // Interactive step-by-step demo account opening wizard.
// Bidirectional streaming session: search company -> select -> form schema -> submit -> 2FA (if any) -> completed.
demoOpenAccountInteractive: {
    path: '/mt5_term_api.DemoAccount/DemoOpenAccountInteractive',
    requestStream: true,
    responseStream: true,
    requestType: mt5$term$api$gui_pb.GuiDemoInteractiveClientMessage,
    responseType: mt5$term$api$gui_pb.GuiDemoInteractiveServerMessage,
    requestSerialize: serialize_mt5_term_api_GuiDemoInteractiveClientMessage,
    requestDeserialize: deserialize_mt5_term_api_GuiDemoInteractiveClientMessage,
    responseSerialize: serialize_mt5_term_api_GuiDemoInteractiveServerMessage,
    responseDeserialize: deserialize_mt5_term_api_GuiDemoInteractiveServerMessage,
  },
};

exports.DemoAccountClient = grpc.makeGenericClientConstructor(DemoAccountService);
