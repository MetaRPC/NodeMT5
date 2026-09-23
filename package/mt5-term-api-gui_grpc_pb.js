// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var mt5$term$api$gui_pb = require('./mt5-term-api-gui_pb.js');

function serialize_mt5_term_api_GuiBrokerSearchReply(arg) {
  if (!(arg instanceof mt5$term$api$gui_pb.GuiBrokerSearchReply)) {
    throw new Error('Expected argument of type mt5_term_api.GuiBrokerSearchReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_GuiBrokerSearchReply(buffer_arg) {
  return mt5$term$api$gui_pb.GuiBrokerSearchReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_GuiBrokerSearchRequest(arg) {
  if (!(arg instanceof mt5$term$api$gui_pb.GuiBrokerSearchRequest)) {
    throw new Error('Expected argument of type mt5_term_api.GuiBrokerSearchRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_GuiBrokerSearchRequest(buffer_arg) {
  return mt5$term$api$gui_pb.GuiBrokerSearchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_GuiCloseDialogsReply(arg) {
  if (!(arg instanceof mt5$term$api$gui_pb.GuiCloseDialogsReply)) {
    throw new Error('Expected argument of type mt5_term_api.GuiCloseDialogsReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_GuiCloseDialogsReply(buffer_arg) {
  return mt5$term$api$gui_pb.GuiCloseDialogsReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_GuiCloseDialogsRequest(arg) {
  if (!(arg instanceof mt5$term$api$gui_pb.GuiCloseDialogsRequest)) {
    throw new Error('Expected argument of type mt5_term_api.GuiCloseDialogsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_GuiCloseDialogsRequest(buffer_arg) {
  return mt5$term$api$gui_pb.GuiCloseDialogsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

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

function serialize_mt5_term_api_GuiLoginExReply(arg) {
  if (!(arg instanceof mt5$term$api$gui_pb.GuiLoginExReply)) {
    throw new Error('Expected argument of type mt5_term_api.GuiLoginExReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_GuiLoginExReply(buffer_arg) {
  return mt5$term$api$gui_pb.GuiLoginExReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_GuiLoginExRequest(arg) {
  if (!(arg instanceof mt5$term$api$gui_pb.GuiLoginExRequest)) {
    throw new Error('Expected argument of type mt5_term_api.GuiLoginExRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_GuiLoginExRequest(buffer_arg) {
  return mt5$term$api$gui_pb.GuiLoginExRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_GuiLoginReply(arg) {
  if (!(arg instanceof mt5$term$api$gui_pb.GuiLoginReply)) {
    throw new Error('Expected argument of type mt5_term_api.GuiLoginReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_GuiLoginReply(buffer_arg) {
  return mt5$term$api$gui_pb.GuiLoginReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_GuiLoginRequest(arg) {
  if (!(arg instanceof mt5$term$api$gui_pb.GuiLoginRequest)) {
    throw new Error('Expected argument of type mt5_term_api.GuiLoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_GuiLoginRequest(buffer_arg) {
  return mt5$term$api$gui_pb.GuiLoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var GuiService = exports.GuiService = {
  login: {
    path: '/mt5_term_api.Gui/Login',
    requestStream: false,
    responseStream: false,
    requestType: mt5$term$api$gui_pb.GuiLoginRequest,
    responseType: mt5$term$api$gui_pb.GuiLoginReply,
    requestSerialize: serialize_mt5_term_api_GuiLoginRequest,
    requestDeserialize: deserialize_mt5_term_api_GuiLoginRequest,
    responseSerialize: serialize_mt5_term_api_GuiLoginReply,
    responseDeserialize: deserialize_mt5_term_api_GuiLoginReply,
  },
  brokerSearch: {
    path: '/mt5_term_api.Gui/BrokerSearch',
    requestStream: false,
    responseStream: false,
    requestType: mt5$term$api$gui_pb.GuiBrokerSearchRequest,
    responseType: mt5$term$api$gui_pb.GuiBrokerSearchReply,
    requestSerialize: serialize_mt5_term_api_GuiBrokerSearchRequest,
    requestDeserialize: deserialize_mt5_term_api_GuiBrokerSearchRequest,
    responseSerialize: serialize_mt5_term_api_GuiBrokerSearchReply,
    responseDeserialize: deserialize_mt5_term_api_GuiBrokerSearchReply,
  },
  loginEx: {
    path: '/mt5_term_api.Gui/LoginEx',
    requestStream: false,
    responseStream: false,
    requestType: mt5$term$api$gui_pb.GuiLoginExRequest,
    responseType: mt5$term$api$gui_pb.GuiLoginExReply,
    requestSerialize: serialize_mt5_term_api_GuiLoginExRequest,
    requestDeserialize: deserialize_mt5_term_api_GuiLoginExRequest,
    responseSerialize: serialize_mt5_term_api_GuiLoginExReply,
    responseDeserialize: deserialize_mt5_term_api_GuiLoginExReply,
  },
  closeDialogs: {
    path: '/mt5_term_api.Gui/CloseDialogs',
    requestStream: false,
    responseStream: false,
    requestType: mt5$term$api$gui_pb.GuiCloseDialogsRequest,
    responseType: mt5$term$api$gui_pb.GuiCloseDialogsReply,
    requestSerialize: serialize_mt5_term_api_GuiCloseDialogsRequest,
    requestDeserialize: deserialize_mt5_term_api_GuiCloseDialogsRequest,
    responseSerialize: serialize_mt5_term_api_GuiCloseDialogsReply,
    responseDeserialize: deserialize_mt5_term_api_GuiCloseDialogsReply,
  },
  demoOpenAccount: {
    path: '/mt5_term_api.Gui/DemoOpenAccount',
    requestStream: false,
    responseStream: false,
    requestType: mt5$term$api$gui_pb.GuiDemoOpenAccountRequest,
    responseType: mt5$term$api$gui_pb.GuiDemoOpenAccountReply,
    requestSerialize: serialize_mt5_term_api_GuiDemoOpenAccountRequest,
    requestDeserialize: deserialize_mt5_term_api_GuiDemoOpenAccountRequest,
    responseSerialize: serialize_mt5_term_api_GuiDemoOpenAccountReply,
    responseDeserialize: deserialize_mt5_term_api_GuiDemoOpenAccountReply,
  },
  demoOpenAccountInteractive: {
    path: '/mt5_term_api.Gui/DemoOpenAccountInteractive',
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

exports.GuiClient = grpc.makeGenericClientConstructor(GuiService);
