// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var mt5$term$api$market$info_pb = require('./mt5-term-api-market-info_pb.js');
var google_api_annotations_pb = require('./google/api/annotations_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var mrpc$mt5$error_pb = require('./mrpc-mt5-error_pb.js');

function serialize_mt5_term_api_MarketBookAddReply(arg) {
  if (!(arg instanceof mt5$term$api$market$info_pb.MarketBookAddReply)) {
    throw new Error('Expected argument of type mt5_term_api.MarketBookAddReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_MarketBookAddReply(buffer_arg) {
  return mt5$term$api$market$info_pb.MarketBookAddReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_MarketBookAddRequest(arg) {
  if (!(arg instanceof mt5$term$api$market$info_pb.MarketBookAddRequest)) {
    throw new Error('Expected argument of type mt5_term_api.MarketBookAddRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_MarketBookAddRequest(buffer_arg) {
  return mt5$term$api$market$info_pb.MarketBookAddRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_MarketBookGetReply(arg) {
  if (!(arg instanceof mt5$term$api$market$info_pb.MarketBookGetReply)) {
    throw new Error('Expected argument of type mt5_term_api.MarketBookGetReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_MarketBookGetReply(buffer_arg) {
  return mt5$term$api$market$info_pb.MarketBookGetReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_MarketBookGetRequest(arg) {
  if (!(arg instanceof mt5$term$api$market$info_pb.MarketBookGetRequest)) {
    throw new Error('Expected argument of type mt5_term_api.MarketBookGetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_MarketBookGetRequest(buffer_arg) {
  return mt5$term$api$market$info_pb.MarketBookGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_MarketBookReleaseReply(arg) {
  if (!(arg instanceof mt5$term$api$market$info_pb.MarketBookReleaseReply)) {
    throw new Error('Expected argument of type mt5_term_api.MarketBookReleaseReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_MarketBookReleaseReply(buffer_arg) {
  return mt5$term$api$market$info_pb.MarketBookReleaseReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_MarketBookReleaseRequest(arg) {
  if (!(arg instanceof mt5$term$api$market$info_pb.MarketBookReleaseRequest)) {
    throw new Error('Expected argument of type mt5_term_api.MarketBookReleaseRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_MarketBookReleaseRequest(buffer_arg) {
  return mt5$term$api$market$info_pb.MarketBookReleaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_PriceHistoryReply(arg) {
  if (!(arg instanceof mt5$term$api$market$info_pb.PriceHistoryReply)) {
    throw new Error('Expected argument of type mt5_term_api.PriceHistoryReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_PriceHistoryReply(buffer_arg) {
  return mt5$term$api$market$info_pb.PriceHistoryReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_PriceHistoryRequest(arg) {
  if (!(arg instanceof mt5$term$api$market$info_pb.PriceHistoryRequest)) {
    throw new Error('Expected argument of type mt5_term_api.PriceHistoryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_PriceHistoryRequest(buffer_arg) {
  return mt5$term$api$market$info_pb.PriceHistoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_SymbolExistReply(arg) {
  if (!(arg instanceof mt5$term$api$market$info_pb.SymbolExistReply)) {
    throw new Error('Expected argument of type mt5_term_api.SymbolExistReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_SymbolExistReply(buffer_arg) {
  return mt5$term$api$market$info_pb.SymbolExistReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_SymbolExistRequest(arg) {
  if (!(arg instanceof mt5$term$api$market$info_pb.SymbolExistRequest)) {
    throw new Error('Expected argument of type mt5_term_api.SymbolExistRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_SymbolExistRequest(buffer_arg) {
  return mt5$term$api$market$info_pb.SymbolExistRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_SymbolInfoDoubleReply(arg) {
  if (!(arg instanceof mt5$term$api$market$info_pb.SymbolInfoDoubleReply)) {
    throw new Error('Expected argument of type mt5_term_api.SymbolInfoDoubleReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_SymbolInfoDoubleReply(buffer_arg) {
  return mt5$term$api$market$info_pb.SymbolInfoDoubleReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_SymbolInfoDoubleRequest(arg) {
  if (!(arg instanceof mt5$term$api$market$info_pb.SymbolInfoDoubleRequest)) {
    throw new Error('Expected argument of type mt5_term_api.SymbolInfoDoubleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_SymbolInfoDoubleRequest(buffer_arg) {
  return mt5$term$api$market$info_pb.SymbolInfoDoubleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_SymbolInfoIntegerReply(arg) {
  if (!(arg instanceof mt5$term$api$market$info_pb.SymbolInfoIntegerReply)) {
    throw new Error('Expected argument of type mt5_term_api.SymbolInfoIntegerReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_SymbolInfoIntegerReply(buffer_arg) {
  return mt5$term$api$market$info_pb.SymbolInfoIntegerReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_SymbolInfoIntegerRequest(arg) {
  if (!(arg instanceof mt5$term$api$market$info_pb.SymbolInfoIntegerRequest)) {
    throw new Error('Expected argument of type mt5_term_api.SymbolInfoIntegerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_SymbolInfoIntegerRequest(buffer_arg) {
  return mt5$term$api$market$info_pb.SymbolInfoIntegerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_SymbolInfoMarginRateReply(arg) {
  if (!(arg instanceof mt5$term$api$market$info_pb.SymbolInfoMarginRateReply)) {
    throw new Error('Expected argument of type mt5_term_api.SymbolInfoMarginRateReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_SymbolInfoMarginRateReply(buffer_arg) {
  return mt5$term$api$market$info_pb.SymbolInfoMarginRateReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_SymbolInfoMarginRateRequest(arg) {
  if (!(arg instanceof mt5$term$api$market$info_pb.SymbolInfoMarginRateRequest)) {
    throw new Error('Expected argument of type mt5_term_api.SymbolInfoMarginRateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_SymbolInfoMarginRateRequest(buffer_arg) {
  return mt5$term$api$market$info_pb.SymbolInfoMarginRateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_SymbolInfoSessionQuoteReply(arg) {
  if (!(arg instanceof mt5$term$api$market$info_pb.SymbolInfoSessionQuoteReply)) {
    throw new Error('Expected argument of type mt5_term_api.SymbolInfoSessionQuoteReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_SymbolInfoSessionQuoteReply(buffer_arg) {
  return mt5$term$api$market$info_pb.SymbolInfoSessionQuoteReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_SymbolInfoSessionQuoteRequest(arg) {
  if (!(arg instanceof mt5$term$api$market$info_pb.SymbolInfoSessionQuoteRequest)) {
    throw new Error('Expected argument of type mt5_term_api.SymbolInfoSessionQuoteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_SymbolInfoSessionQuoteRequest(buffer_arg) {
  return mt5$term$api$market$info_pb.SymbolInfoSessionQuoteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_SymbolInfoSessionTradeReply(arg) {
  if (!(arg instanceof mt5$term$api$market$info_pb.SymbolInfoSessionTradeReply)) {
    throw new Error('Expected argument of type mt5_term_api.SymbolInfoSessionTradeReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_SymbolInfoSessionTradeReply(buffer_arg) {
  return mt5$term$api$market$info_pb.SymbolInfoSessionTradeReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_SymbolInfoSessionTradeRequest(arg) {
  if (!(arg instanceof mt5$term$api$market$info_pb.SymbolInfoSessionTradeRequest)) {
    throw new Error('Expected argument of type mt5_term_api.SymbolInfoSessionTradeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_SymbolInfoSessionTradeRequest(buffer_arg) {
  return mt5$term$api$market$info_pb.SymbolInfoSessionTradeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_SymbolInfoStringReply(arg) {
  if (!(arg instanceof mt5$term$api$market$info_pb.SymbolInfoStringReply)) {
    throw new Error('Expected argument of type mt5_term_api.SymbolInfoStringReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_SymbolInfoStringReply(buffer_arg) {
  return mt5$term$api$market$info_pb.SymbolInfoStringReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_SymbolInfoStringRequest(arg) {
  if (!(arg instanceof mt5$term$api$market$info_pb.SymbolInfoStringRequest)) {
    throw new Error('Expected argument of type mt5_term_api.SymbolInfoStringRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_SymbolInfoStringRequest(buffer_arg) {
  return mt5$term$api$market$info_pb.SymbolInfoStringRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_SymbolInfoTickRequest(arg) {
  if (!(arg instanceof mt5$term$api$market$info_pb.SymbolInfoTickRequest)) {
    throw new Error('Expected argument of type mt5_term_api.SymbolInfoTickRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_SymbolInfoTickRequest(buffer_arg) {
  return mt5$term$api$market$info_pb.SymbolInfoTickRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_SymbolInfoTickRequestReply(arg) {
  if (!(arg instanceof mt5$term$api$market$info_pb.SymbolInfoTickRequestReply)) {
    throw new Error('Expected argument of type mt5_term_api.SymbolInfoTickRequestReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_SymbolInfoTickRequestReply(buffer_arg) {
  return mt5$term$api$market$info_pb.SymbolInfoTickRequestReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_SymbolIsSynchronizedReply(arg) {
  if (!(arg instanceof mt5$term$api$market$info_pb.SymbolIsSynchronizedReply)) {
    throw new Error('Expected argument of type mt5_term_api.SymbolIsSynchronizedReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_SymbolIsSynchronizedReply(buffer_arg) {
  return mt5$term$api$market$info_pb.SymbolIsSynchronizedReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_SymbolIsSynchronizedRequest(arg) {
  if (!(arg instanceof mt5$term$api$market$info_pb.SymbolIsSynchronizedRequest)) {
    throw new Error('Expected argument of type mt5_term_api.SymbolIsSynchronizedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_SymbolIsSynchronizedRequest(buffer_arg) {
  return mt5$term$api$market$info_pb.SymbolIsSynchronizedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_SymbolListReply(arg) {
  if (!(arg instanceof mt5$term$api$market$info_pb.SymbolListReply)) {
    throw new Error('Expected argument of type mt5_term_api.SymbolListReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_SymbolListReply(buffer_arg) {
  return mt5$term$api$market$info_pb.SymbolListReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_SymbolListRequest(arg) {
  if (!(arg instanceof mt5$term$api$market$info_pb.SymbolListRequest)) {
    throw new Error('Expected argument of type mt5_term_api.SymbolListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_SymbolListRequest(buffer_arg) {
  return mt5$term$api$market$info_pb.SymbolListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_SymbolNameReply(arg) {
  if (!(arg instanceof mt5$term$api$market$info_pb.SymbolNameReply)) {
    throw new Error('Expected argument of type mt5_term_api.SymbolNameReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_SymbolNameReply(buffer_arg) {
  return mt5$term$api$market$info_pb.SymbolNameReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_SymbolNameRequest(arg) {
  if (!(arg instanceof mt5$term$api$market$info_pb.SymbolNameRequest)) {
    throw new Error('Expected argument of type mt5_term_api.SymbolNameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_SymbolNameRequest(buffer_arg) {
  return mt5$term$api$market$info_pb.SymbolNameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_SymbolSelectReply(arg) {
  if (!(arg instanceof mt5$term$api$market$info_pb.SymbolSelectReply)) {
    throw new Error('Expected argument of type mt5_term_api.SymbolSelectReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_SymbolSelectReply(buffer_arg) {
  return mt5$term$api$market$info_pb.SymbolSelectReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_SymbolSelectRequest(arg) {
  if (!(arg instanceof mt5$term$api$market$info_pb.SymbolSelectRequest)) {
    throw new Error('Expected argument of type mt5_term_api.SymbolSelectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_SymbolSelectRequest(buffer_arg) {
  return mt5$term$api$market$info_pb.SymbolSelectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_SymbolsTotalReply(arg) {
  if (!(arg instanceof mt5$term$api$market$info_pb.SymbolsTotalReply)) {
    throw new Error('Expected argument of type mt5_term_api.SymbolsTotalReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_SymbolsTotalReply(buffer_arg) {
  return mt5$term$api$market$info_pb.SymbolsTotalReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mt5_term_api_SymbolsTotalRequest(arg) {
  if (!(arg instanceof mt5$term$api$market$info_pb.SymbolsTotalRequest)) {
    throw new Error('Expected argument of type mt5_term_api.SymbolsTotalRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mt5_term_api_SymbolsTotalRequest(buffer_arg) {
  return mt5$term$api$market$info_pb.SymbolsTotalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// The MarketInfo service provides information about the current state of the market
var MarketInfoService = exports.MarketInfoService = {
  // Returns the number of available (selected in Market Watch or all) symbols
// https://www.mql5.com/en/docs/marketinformation/symbolstotal
symbolsTotal: {
    path: '/mt5_term_api.MarketInfo/SymbolsTotal',
    requestStream: false,
    responseStream: false,
    requestType: mt5$term$api$market$info_pb.SymbolsTotalRequest,
    responseType: mt5$term$api$market$info_pb.SymbolsTotalReply,
    requestSerialize: serialize_mt5_term_api_SymbolsTotalRequest,
    requestDeserialize: deserialize_mt5_term_api_SymbolsTotalRequest,
    responseSerialize: serialize_mt5_term_api_SymbolsTotalReply,
    responseDeserialize: deserialize_mt5_term_api_SymbolsTotalReply,
  },
  // Checks if a symbol with a specified name exists
// https://www.mql5.com/en/docs/marketinformation/symbolexist
symbolExist: {
    path: '/mt5_term_api.MarketInfo/SymbolExist',
    requestStream: false,
    responseStream: false,
    requestType: mt5$term$api$market$info_pb.SymbolExistRequest,
    responseType: mt5$term$api$market$info_pb.SymbolExistReply,
    requestSerialize: serialize_mt5_term_api_SymbolExistRequest,
    requestDeserialize: deserialize_mt5_term_api_SymbolExistRequest,
    responseSerialize: serialize_mt5_term_api_SymbolExistReply,
    responseDeserialize: deserialize_mt5_term_api_SymbolExistReply,
  },
  // Returns the name of a symbol
// https://www.mql5.com/en/docs/marketinformation/symbolname 
symbolName: {
    path: '/mt5_term_api.MarketInfo/SymbolName',
    requestStream: false,
    responseStream: false,
    requestType: mt5$term$api$market$info_pb.SymbolNameRequest,
    responseType: mt5$term$api$market$info_pb.SymbolNameReply,
    requestSerialize: serialize_mt5_term_api_SymbolNameRequest,
    requestDeserialize: deserialize_mt5_term_api_SymbolNameRequest,
    responseSerialize: serialize_mt5_term_api_SymbolNameReply,
    responseDeserialize: deserialize_mt5_term_api_SymbolNameReply,
  },
  // Selects a symbol in the Market Watch window or removes a symbol from the window
// https://www.mql5.com/en/docs/marketinformation/symbolselect
symbolSelect: {
    path: '/mt5_term_api.MarketInfo/SymbolSelect',
    requestStream: false,
    responseStream: false,
    requestType: mt5$term$api$market$info_pb.SymbolSelectRequest,
    responseType: mt5$term$api$market$info_pb.SymbolSelectReply,
    requestSerialize: serialize_mt5_term_api_SymbolSelectRequest,
    requestDeserialize: deserialize_mt5_term_api_SymbolSelectRequest,
    responseSerialize: serialize_mt5_term_api_SymbolSelectReply,
    responseDeserialize: deserialize_mt5_term_api_SymbolSelectReply,
  },
  // The function checks whether data of a selected symbol in the terminal are synchronized with data on the trade server.
// https://www.mql5.com/en/docs/marketinformation/symbolissynchronized
symbolIsSynchronized: {
    path: '/mt5_term_api.MarketInfo/SymbolIsSynchronized',
    requestStream: false,
    responseStream: false,
    requestType: mt5$term$api$market$info_pb.SymbolIsSynchronizedRequest,
    responseType: mt5$term$api$market$info_pb.SymbolIsSynchronizedReply,
    requestSerialize: serialize_mt5_term_api_SymbolIsSynchronizedRequest,
    requestDeserialize: deserialize_mt5_term_api_SymbolIsSynchronizedRequest,
    responseSerialize: serialize_mt5_term_api_SymbolIsSynchronizedReply,
    responseDeserialize: deserialize_mt5_term_api_SymbolIsSynchronizedReply,
  },
  // Returns the corresponding property of a specified symbol. Immediately returns the property value.
// https://www.mql5.com/en/docs/marketinformation/symbolinfodouble
symbolInfoDouble: {
    path: '/mt5_term_api.MarketInfo/SymbolInfoDouble',
    requestStream: false,
    responseStream: false,
    requestType: mt5$term$api$market$info_pb.SymbolInfoDoubleRequest,
    responseType: mt5$term$api$market$info_pb.SymbolInfoDoubleReply,
    requestSerialize: serialize_mt5_term_api_SymbolInfoDoubleRequest,
    requestDeserialize: deserialize_mt5_term_api_SymbolInfoDoubleRequest,
    responseSerialize: serialize_mt5_term_api_SymbolInfoDoubleReply,
    responseDeserialize: deserialize_mt5_term_api_SymbolInfoDoubleReply,
  },
  // Returns the corresponding property of a specified symbol. 
// https://www.mql5.com/en/docs/marketinformation/symbolinfointeger
symbolInfoInteger: {
    path: '/mt5_term_api.MarketInfo/SymbolInfoInteger',
    requestStream: false,
    responseStream: false,
    requestType: mt5$term$api$market$info_pb.SymbolInfoIntegerRequest,
    responseType: mt5$term$api$market$info_pb.SymbolInfoIntegerReply,
    requestSerialize: serialize_mt5_term_api_SymbolInfoIntegerRequest,
    requestDeserialize: deserialize_mt5_term_api_SymbolInfoIntegerRequest,
    responseSerialize: serialize_mt5_term_api_SymbolInfoIntegerReply,
    responseDeserialize: deserialize_mt5_term_api_SymbolInfoIntegerReply,
  },
  // Returns the corresponding property of a specified symbol. Immediately returns the property value
// https://www.mql5.com/en/docs/marketinformation/symbolinfostring  
symbolInfoString: {
    path: '/mt5_term_api.MarketInfo/SymbolInfoString',
    requestStream: false,
    responseStream: false,
    requestType: mt5$term$api$market$info_pb.SymbolInfoStringRequest,
    responseType: mt5$term$api$market$info_pb.SymbolInfoStringReply,
    requestSerialize: serialize_mt5_term_api_SymbolInfoStringRequest,
    requestDeserialize: deserialize_mt5_term_api_SymbolInfoStringRequest,
    responseSerialize: serialize_mt5_term_api_SymbolInfoStringReply,
    responseDeserialize: deserialize_mt5_term_api_SymbolInfoStringReply,
  },
  // Returns the margin rates depending on the order type and direction
// https://www.mql5.com/en/docs/marketinformation/symbolinfomarginrate
symbolInfoMarginRate: {
    path: '/mt5_term_api.MarketInfo/SymbolInfoMarginRate',
    requestStream: false,
    responseStream: false,
    requestType: mt5$term$api$market$info_pb.SymbolInfoMarginRateRequest,
    responseType: mt5$term$api$market$info_pb.SymbolInfoMarginRateReply,
    requestSerialize: serialize_mt5_term_api_SymbolInfoMarginRateRequest,
    requestDeserialize: deserialize_mt5_term_api_SymbolInfoMarginRateRequest,
    responseSerialize: serialize_mt5_term_api_SymbolInfoMarginRateReply,
    responseDeserialize: deserialize_mt5_term_api_SymbolInfoMarginRateReply,
  },
  // The function returns current prices of a specified symbol in a variable of the MqlTick type
// https://www.mql5.com/en/docs/marketinformation/symbolinfotick
symbolInfoTick: {
    path: '/mt5_term_api.MarketInfo/SymbolInfoTick',
    requestStream: false,
    responseStream: false,
    requestType: mt5$term$api$market$info_pb.SymbolInfoTickRequest,
    responseType: mt5$term$api$market$info_pb.SymbolInfoTickRequestReply,
    requestSerialize: serialize_mt5_term_api_SymbolInfoTickRequest,
    requestDeserialize: deserialize_mt5_term_api_SymbolInfoTickRequest,
    responseSerialize: serialize_mt5_term_api_SymbolInfoTickRequestReply,
    responseDeserialize: deserialize_mt5_term_api_SymbolInfoTickRequestReply,
  },
  // Allows receiving time of beginning and end of the specified quoting sessions for a specified symbol and day of week
// https://www.mql5.com/en/docs/marketinformation/symbolinfosessionquote
symbolInfoSessionQuote: {
    path: '/mt5_term_api.MarketInfo/SymbolInfoSessionQuote',
    requestStream: false,
    responseStream: false,
    requestType: mt5$term$api$market$info_pb.SymbolInfoSessionQuoteRequest,
    responseType: mt5$term$api$market$info_pb.SymbolInfoSessionQuoteReply,
    requestSerialize: serialize_mt5_term_api_SymbolInfoSessionQuoteRequest,
    requestDeserialize: deserialize_mt5_term_api_SymbolInfoSessionQuoteRequest,
    responseSerialize: serialize_mt5_term_api_SymbolInfoSessionQuoteReply,
    responseDeserialize: deserialize_mt5_term_api_SymbolInfoSessionQuoteReply,
  },
  // Allows receiving time of beginning and end of the specified trading sessions for a specified symbol and day of week
// https://www.mql5.com/en/docs/marketinformation/symbolinfosessiontrade
symbolInfoSessionTrade: {
    path: '/mt5_term_api.MarketInfo/SymbolInfoSessionTrade',
    requestStream: false,
    responseStream: false,
    requestType: mt5$term$api$market$info_pb.SymbolInfoSessionTradeRequest,
    responseType: mt5$term$api$market$info_pb.SymbolInfoSessionTradeReply,
    requestSerialize: serialize_mt5_term_api_SymbolInfoSessionTradeRequest,
    requestDeserialize: deserialize_mt5_term_api_SymbolInfoSessionTradeRequest,
    responseSerialize: serialize_mt5_term_api_SymbolInfoSessionTradeReply,
    responseDeserialize: deserialize_mt5_term_api_SymbolInfoSessionTradeReply,
  },
  // Provides opening of Depth of Market for a selected symbol, and subscribes for receiving notifications of the DOM changes
// https://www.mql5.com/en/docs/marketinformation/marketbookadd
marketBookAdd: {
    path: '/mt5_term_api.MarketInfo/MarketBookAdd',
    requestStream: false,
    responseStream: false,
    requestType: mt5$term$api$market$info_pb.MarketBookAddRequest,
    responseType: mt5$term$api$market$info_pb.MarketBookAddReply,
    requestSerialize: serialize_mt5_term_api_MarketBookAddRequest,
    requestDeserialize: deserialize_mt5_term_api_MarketBookAddRequest,
    responseSerialize: serialize_mt5_term_api_MarketBookAddReply,
    responseDeserialize: deserialize_mt5_term_api_MarketBookAddReply,
  },
  // Provides closing of Depth of Market for a selected symbol, and cancels the subscription for receiving notifications of the DOM changes
// https://www.mql5.com/en/docs/marketinformation/marketbookrelease
marketBookRelease: {
    path: '/mt5_term_api.MarketInfo/MarketBookRelease',
    requestStream: false,
    responseStream: false,
    requestType: mt5$term$api$market$info_pb.MarketBookReleaseRequest,
    responseType: mt5$term$api$market$info_pb.MarketBookReleaseReply,
    requestSerialize: serialize_mt5_term_api_MarketBookReleaseRequest,
    requestDeserialize: deserialize_mt5_term_api_MarketBookReleaseRequest,
    responseSerialize: serialize_mt5_term_api_MarketBookReleaseReply,
    responseDeserialize: deserialize_mt5_term_api_MarketBookReleaseReply,
  },
  // Returns a structure array MqlBookInfo containing records of the Depth of Market of a specified symbol
// https://www.mql5.com/en/docs/marketinformation/marketbookget
marketBookGet: {
    path: '/mt5_term_api.MarketInfo/MarketBookGet',
    requestStream: false,
    responseStream: false,
    requestType: mt5$term$api$market$info_pb.MarketBookGetRequest,
    responseType: mt5$term$api$market$info_pb.MarketBookGetReply,
    requestSerialize: serialize_mt5_term_api_MarketBookGetRequest,
    requestDeserialize: deserialize_mt5_term_api_MarketBookGetRequest,
    responseSerialize: serialize_mt5_term_api_MarketBookGetReply,
    responseDeserialize: deserialize_mt5_term_api_MarketBookGetReply,
  },
  // Returns a collection of a broker symbols
symbolList: {
    path: '/mt5_term_api.MarketInfo/SymbolList',
    requestStream: false,
    responseStream: false,
    requestType: mt5$term$api$market$info_pb.SymbolListRequest,
    responseType: mt5$term$api$market$info_pb.SymbolListReply,
    requestSerialize: serialize_mt5_term_api_SymbolListRequest,
    requestDeserialize: deserialize_mt5_term_api_SymbolListRequest,
    responseSerialize: serialize_mt5_term_api_SymbolListReply,
    responseDeserialize: deserialize_mt5_term_api_SymbolListReply,
  },
  // Historical bars for a symbol - what a chart is drawn from.
//
// This API had no such call, so a client holding a terminal id could list symbols, read a live
// price and trade, and still not draw a chart. Ticks are not candles.
priceHistory: {
    path: '/mt5_term_api.MarketInfo/PriceHistory',
    requestStream: false,
    responseStream: false,
    requestType: mt5$term$api$market$info_pb.PriceHistoryRequest,
    responseType: mt5$term$api$market$info_pb.PriceHistoryReply,
    requestSerialize: serialize_mt5_term_api_PriceHistoryRequest,
    requestDeserialize: deserialize_mt5_term_api_PriceHistoryRequest,
    responseSerialize: serialize_mt5_term_api_PriceHistoryReply,
    responseDeserialize: deserialize_mt5_term_api_PriceHistoryReply,
  },
};

exports.MarketInfoClient = grpc.makeGenericClientConstructor(MarketInfoService);
