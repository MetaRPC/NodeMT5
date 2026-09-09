// source: mt5-term-api-market-info.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var google_api_annotations_pb = require('./google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var mrpc$mt5$error_pb = require('./mrpc-mt5-error_pb.js');
goog.object.extend(proto, mrpc$mt5$error_pb);
goog.exportSymbol('proto.mt5_term_api.BookType', null, global);
goog.exportSymbol('proto.mt5_term_api.DayOfWeek', null, global);
goog.exportSymbol('proto.mt5_term_api.ENUM_ORDER_TYPE', null, global);
goog.exportSymbol('proto.mt5_term_api.MarketBookAddData', null, global);
goog.exportSymbol('proto.mt5_term_api.MarketBookAddReply', null, global);
goog.exportSymbol('proto.mt5_term_api.MarketBookAddReply.ResponseCase', null, global);
goog.exportSymbol('proto.mt5_term_api.MarketBookAddRequest', null, global);
goog.exportSymbol('proto.mt5_term_api.MarketBookGetData', null, global);
goog.exportSymbol('proto.mt5_term_api.MarketBookGetReply', null, global);
goog.exportSymbol('proto.mt5_term_api.MarketBookGetReply.ResponseCase', null, global);
goog.exportSymbol('proto.mt5_term_api.MarketBookGetRequest', null, global);
goog.exportSymbol('proto.mt5_term_api.MarketBookReleaseData', null, global);
goog.exportSymbol('proto.mt5_term_api.MarketBookReleaseReply', null, global);
goog.exportSymbol('proto.mt5_term_api.MarketBookReleaseReply.ResponseCase', null, global);
goog.exportSymbol('proto.mt5_term_api.MarketBookReleaseRequest', null, global);
goog.exportSymbol('proto.mt5_term_api.MrpcMqlBookInfo', null, global);
goog.exportSymbol('proto.mt5_term_api.MrpcMqlTick', null, global);
goog.exportSymbol('proto.mt5_term_api.PriceBar', null, global);
goog.exportSymbol('proto.mt5_term_api.PriceHistoryData', null, global);
goog.exportSymbol('proto.mt5_term_api.PriceHistoryReply', null, global);
goog.exportSymbol('proto.mt5_term_api.PriceHistoryReply.ResponseCase', null, global);
goog.exportSymbol('proto.mt5_term_api.PriceHistoryRequest', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolExistData', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolExistReply', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolExistReply.ResponseCase', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolExistRequest', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolInfoDoubleData', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolInfoDoubleProperty', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolInfoDoubleReply', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolInfoDoubleReply.ResponseCase', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolInfoDoubleRequest', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolInfoIntegerData', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolInfoIntegerProperty', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolInfoIntegerReply', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolInfoIntegerReply.ResponseCase', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolInfoIntegerRequest', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolInfoMarginRateData', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolInfoMarginRateReply', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolInfoMarginRateReply.ResponseCase', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolInfoMarginRateRequest', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolInfoSessionQuoteData', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolInfoSessionQuoteReply', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolInfoSessionQuoteReply.ResponseCase', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolInfoSessionQuoteRequest', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolInfoSessionTradeData', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolInfoSessionTradeReply', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolInfoSessionTradeReply.ResponseCase', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolInfoSessionTradeRequest', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolInfoStringData', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolInfoStringProperty', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolInfoStringReply', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolInfoStringReply.ResponseCase', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolInfoStringRequest', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolInfoTickRequest', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolInfoTickRequestReply', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolInfoTickRequestReply.ResponseCase', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolIsSynchronizedData', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolIsSynchronizedReply', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolIsSynchronizedReply.ResponseCase', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolIsSynchronizedRequest', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolListData', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolListReply', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolListReply.ResponseCase', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolListRequest', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolNameData', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolNameReply', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolNameReply.ResponseCase', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolNameRequest', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolSelectData', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolSelectReply', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolSelectReply.ResponseCase', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolSelectRequest', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolsTotalData', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolsTotalReply', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolsTotalReply.ResponseCase', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolsTotalRequest', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.SymbolListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mt5_term_api.SymbolListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.SymbolListRequest.displayName = 'proto.mt5_term_api.SymbolListRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.SymbolListReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.mt5_term_api.SymbolListReply.oneofGroups_);
};
goog.inherits(proto.mt5_term_api.SymbolListReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.SymbolListReply.displayName = 'proto.mt5_term_api.SymbolListReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.SymbolListData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mt5_term_api.SymbolListData.repeatedFields_, null);
};
goog.inherits(proto.mt5_term_api.SymbolListData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.SymbolListData.displayName = 'proto.mt5_term_api.SymbolListData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.SymbolsTotalRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mt5_term_api.SymbolsTotalRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.SymbolsTotalRequest.displayName = 'proto.mt5_term_api.SymbolsTotalRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.SymbolsTotalReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.mt5_term_api.SymbolsTotalReply.oneofGroups_);
};
goog.inherits(proto.mt5_term_api.SymbolsTotalReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.SymbolsTotalReply.displayName = 'proto.mt5_term_api.SymbolsTotalReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.SymbolsTotalData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mt5_term_api.SymbolsTotalData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.SymbolsTotalData.displayName = 'proto.mt5_term_api.SymbolsTotalData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.SymbolExistRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mt5_term_api.SymbolExistRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.SymbolExistRequest.displayName = 'proto.mt5_term_api.SymbolExistRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.SymbolExistReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.mt5_term_api.SymbolExistReply.oneofGroups_);
};
goog.inherits(proto.mt5_term_api.SymbolExistReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.SymbolExistReply.displayName = 'proto.mt5_term_api.SymbolExistReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.SymbolExistData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mt5_term_api.SymbolExistData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.SymbolExistData.displayName = 'proto.mt5_term_api.SymbolExistData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.SymbolNameRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mt5_term_api.SymbolNameRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.SymbolNameRequest.displayName = 'proto.mt5_term_api.SymbolNameRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.SymbolNameReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.mt5_term_api.SymbolNameReply.oneofGroups_);
};
goog.inherits(proto.mt5_term_api.SymbolNameReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.SymbolNameReply.displayName = 'proto.mt5_term_api.SymbolNameReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.SymbolNameData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mt5_term_api.SymbolNameData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.SymbolNameData.displayName = 'proto.mt5_term_api.SymbolNameData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.SymbolSelectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mt5_term_api.SymbolSelectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.SymbolSelectRequest.displayName = 'proto.mt5_term_api.SymbolSelectRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.SymbolSelectReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.mt5_term_api.SymbolSelectReply.oneofGroups_);
};
goog.inherits(proto.mt5_term_api.SymbolSelectReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.SymbolSelectReply.displayName = 'proto.mt5_term_api.SymbolSelectReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.SymbolSelectData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mt5_term_api.SymbolSelectData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.SymbolSelectData.displayName = 'proto.mt5_term_api.SymbolSelectData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.SymbolIsSynchronizedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mt5_term_api.SymbolIsSynchronizedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.SymbolIsSynchronizedRequest.displayName = 'proto.mt5_term_api.SymbolIsSynchronizedRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.SymbolIsSynchronizedReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.mt5_term_api.SymbolIsSynchronizedReply.oneofGroups_);
};
goog.inherits(proto.mt5_term_api.SymbolIsSynchronizedReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.SymbolIsSynchronizedReply.displayName = 'proto.mt5_term_api.SymbolIsSynchronizedReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.SymbolIsSynchronizedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mt5_term_api.SymbolIsSynchronizedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.SymbolIsSynchronizedData.displayName = 'proto.mt5_term_api.SymbolIsSynchronizedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.SymbolInfoDoubleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mt5_term_api.SymbolInfoDoubleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.SymbolInfoDoubleRequest.displayName = 'proto.mt5_term_api.SymbolInfoDoubleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.SymbolInfoDoubleReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.mt5_term_api.SymbolInfoDoubleReply.oneofGroups_);
};
goog.inherits(proto.mt5_term_api.SymbolInfoDoubleReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.SymbolInfoDoubleReply.displayName = 'proto.mt5_term_api.SymbolInfoDoubleReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.SymbolInfoDoubleData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mt5_term_api.SymbolInfoDoubleData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.SymbolInfoDoubleData.displayName = 'proto.mt5_term_api.SymbolInfoDoubleData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.SymbolInfoIntegerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mt5_term_api.SymbolInfoIntegerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.SymbolInfoIntegerRequest.displayName = 'proto.mt5_term_api.SymbolInfoIntegerRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.SymbolInfoIntegerReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.mt5_term_api.SymbolInfoIntegerReply.oneofGroups_);
};
goog.inherits(proto.mt5_term_api.SymbolInfoIntegerReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.SymbolInfoIntegerReply.displayName = 'proto.mt5_term_api.SymbolInfoIntegerReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.SymbolInfoIntegerData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mt5_term_api.SymbolInfoIntegerData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.SymbolInfoIntegerData.displayName = 'proto.mt5_term_api.SymbolInfoIntegerData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.SymbolInfoStringRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mt5_term_api.SymbolInfoStringRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.SymbolInfoStringRequest.displayName = 'proto.mt5_term_api.SymbolInfoStringRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.SymbolInfoStringReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.mt5_term_api.SymbolInfoStringReply.oneofGroups_);
};
goog.inherits(proto.mt5_term_api.SymbolInfoStringReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.SymbolInfoStringReply.displayName = 'proto.mt5_term_api.SymbolInfoStringReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.SymbolInfoStringData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mt5_term_api.SymbolInfoStringData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.SymbolInfoStringData.displayName = 'proto.mt5_term_api.SymbolInfoStringData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.SymbolInfoMarginRateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mt5_term_api.SymbolInfoMarginRateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.SymbolInfoMarginRateRequest.displayName = 'proto.mt5_term_api.SymbolInfoMarginRateRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.SymbolInfoMarginRateReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.mt5_term_api.SymbolInfoMarginRateReply.oneofGroups_);
};
goog.inherits(proto.mt5_term_api.SymbolInfoMarginRateReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.SymbolInfoMarginRateReply.displayName = 'proto.mt5_term_api.SymbolInfoMarginRateReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.SymbolInfoMarginRateData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mt5_term_api.SymbolInfoMarginRateData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.SymbolInfoMarginRateData.displayName = 'proto.mt5_term_api.SymbolInfoMarginRateData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.SymbolInfoTickRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mt5_term_api.SymbolInfoTickRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.SymbolInfoTickRequest.displayName = 'proto.mt5_term_api.SymbolInfoTickRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.SymbolInfoTickRequestReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.mt5_term_api.SymbolInfoTickRequestReply.oneofGroups_);
};
goog.inherits(proto.mt5_term_api.SymbolInfoTickRequestReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.SymbolInfoTickRequestReply.displayName = 'proto.mt5_term_api.SymbolInfoTickRequestReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.MrpcMqlTick = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mt5_term_api.MrpcMqlTick, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.MrpcMqlTick.displayName = 'proto.mt5_term_api.MrpcMqlTick';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.SymbolInfoSessionQuoteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mt5_term_api.SymbolInfoSessionQuoteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.SymbolInfoSessionQuoteRequest.displayName = 'proto.mt5_term_api.SymbolInfoSessionQuoteRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.SymbolInfoSessionQuoteReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.mt5_term_api.SymbolInfoSessionQuoteReply.oneofGroups_);
};
goog.inherits(proto.mt5_term_api.SymbolInfoSessionQuoteReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.SymbolInfoSessionQuoteReply.displayName = 'proto.mt5_term_api.SymbolInfoSessionQuoteReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.SymbolInfoSessionQuoteData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mt5_term_api.SymbolInfoSessionQuoteData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.SymbolInfoSessionQuoteData.displayName = 'proto.mt5_term_api.SymbolInfoSessionQuoteData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.SymbolInfoSessionTradeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mt5_term_api.SymbolInfoSessionTradeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.SymbolInfoSessionTradeRequest.displayName = 'proto.mt5_term_api.SymbolInfoSessionTradeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.SymbolInfoSessionTradeReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.mt5_term_api.SymbolInfoSessionTradeReply.oneofGroups_);
};
goog.inherits(proto.mt5_term_api.SymbolInfoSessionTradeReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.SymbolInfoSessionTradeReply.displayName = 'proto.mt5_term_api.SymbolInfoSessionTradeReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.SymbolInfoSessionTradeData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mt5_term_api.SymbolInfoSessionTradeData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.SymbolInfoSessionTradeData.displayName = 'proto.mt5_term_api.SymbolInfoSessionTradeData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.MarketBookAddRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mt5_term_api.MarketBookAddRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.MarketBookAddRequest.displayName = 'proto.mt5_term_api.MarketBookAddRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.MarketBookAddReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.mt5_term_api.MarketBookAddReply.oneofGroups_);
};
goog.inherits(proto.mt5_term_api.MarketBookAddReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.MarketBookAddReply.displayName = 'proto.mt5_term_api.MarketBookAddReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.MarketBookAddData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mt5_term_api.MarketBookAddData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.MarketBookAddData.displayName = 'proto.mt5_term_api.MarketBookAddData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.MarketBookReleaseRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mt5_term_api.MarketBookReleaseRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.MarketBookReleaseRequest.displayName = 'proto.mt5_term_api.MarketBookReleaseRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.MarketBookReleaseReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.mt5_term_api.MarketBookReleaseReply.oneofGroups_);
};
goog.inherits(proto.mt5_term_api.MarketBookReleaseReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.MarketBookReleaseReply.displayName = 'proto.mt5_term_api.MarketBookReleaseReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.MarketBookReleaseData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mt5_term_api.MarketBookReleaseData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.MarketBookReleaseData.displayName = 'proto.mt5_term_api.MarketBookReleaseData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.MarketBookGetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mt5_term_api.MarketBookGetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.MarketBookGetRequest.displayName = 'proto.mt5_term_api.MarketBookGetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.MarketBookGetReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.mt5_term_api.MarketBookGetReply.oneofGroups_);
};
goog.inherits(proto.mt5_term_api.MarketBookGetReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.MarketBookGetReply.displayName = 'proto.mt5_term_api.MarketBookGetReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.MarketBookGetData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mt5_term_api.MarketBookGetData.repeatedFields_, null);
};
goog.inherits(proto.mt5_term_api.MarketBookGetData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.MarketBookGetData.displayName = 'proto.mt5_term_api.MarketBookGetData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.MrpcMqlBookInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mt5_term_api.MrpcMqlBookInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.MrpcMqlBookInfo.displayName = 'proto.mt5_term_api.MrpcMqlBookInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.PriceHistoryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mt5_term_api.PriceHistoryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.PriceHistoryRequest.displayName = 'proto.mt5_term_api.PriceHistoryRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.PriceHistoryReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.mt5_term_api.PriceHistoryReply.oneofGroups_);
};
goog.inherits(proto.mt5_term_api.PriceHistoryReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.PriceHistoryReply.displayName = 'proto.mt5_term_api.PriceHistoryReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.PriceHistoryData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mt5_term_api.PriceHistoryData.repeatedFields_, null);
};
goog.inherits(proto.mt5_term_api.PriceHistoryData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.PriceHistoryData.displayName = 'proto.mt5_term_api.PriceHistoryData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mt5_term_api.PriceBar = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mt5_term_api.PriceBar, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.PriceBar.displayName = 'proto.mt5_term_api.PriceBar';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.SymbolListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.SymbolListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.SymbolListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.SymbolListRequest}
 */
proto.mt5_term_api.SymbolListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.SymbolListRequest;
  return proto.mt5_term_api.SymbolListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.SymbolListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.SymbolListRequest}
 */
proto.mt5_term_api.SymbolListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.SymbolListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.SymbolListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.SymbolListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.mt5_term_api.SymbolListReply.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.mt5_term_api.SymbolListReply.ResponseCase = {
  RESPONSE_NOT_SET: 0,
  DATA: 1,
  ERROR: 2
};

/**
 * @return {proto.mt5_term_api.SymbolListReply.ResponseCase}
 */
proto.mt5_term_api.SymbolListReply.prototype.getResponseCase = function() {
  return /** @type {proto.mt5_term_api.SymbolListReply.ResponseCase} */(jspb.Message.computeOneofCase(this, proto.mt5_term_api.SymbolListReply.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.SymbolListReply.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.SymbolListReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.SymbolListReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolListReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && proto.mt5_term_api.SymbolListData.toObject(includeInstance, f),
    error: (f = msg.getError()) && mrpc$mt5$error_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.SymbolListReply}
 */
proto.mt5_term_api.SymbolListReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.SymbolListReply;
  return proto.mt5_term_api.SymbolListReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.SymbolListReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.SymbolListReply}
 */
proto.mt5_term_api.SymbolListReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mt5_term_api.SymbolListData;
      reader.readMessage(value,proto.mt5_term_api.SymbolListData.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 2:
      var value = new mrpc$mt5$error_pb.Error;
      reader.readMessage(value,mrpc$mt5$error_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.SymbolListReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.SymbolListReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.SymbolListReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolListReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mt5_term_api.SymbolListData.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      mrpc$mt5$error_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional SymbolListData data = 1;
 * @return {?proto.mt5_term_api.SymbolListData}
 */
proto.mt5_term_api.SymbolListReply.prototype.getData = function() {
  return /** @type{?proto.mt5_term_api.SymbolListData} */ (
    jspb.Message.getWrapperField(this, proto.mt5_term_api.SymbolListData, 1));
};


/**
 * @param {?proto.mt5_term_api.SymbolListData|undefined} value
 * @return {!proto.mt5_term_api.SymbolListReply} returns this
*/
proto.mt5_term_api.SymbolListReply.prototype.setData = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.mt5_term_api.SymbolListReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.SymbolListReply} returns this
 */
proto.mt5_term_api.SymbolListReply.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.SymbolListReply.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Error error = 2;
 * @return {?proto.mt5_term_api.Error}
 */
proto.mt5_term_api.SymbolListReply.prototype.getError = function() {
  return /** @type{?proto.mt5_term_api.Error} */ (
    jspb.Message.getWrapperField(this, mrpc$mt5$error_pb.Error, 2));
};


/**
 * @param {?proto.mt5_term_api.Error|undefined} value
 * @return {!proto.mt5_term_api.SymbolListReply} returns this
*/
proto.mt5_term_api.SymbolListReply.prototype.setError = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.mt5_term_api.SymbolListReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.SymbolListReply} returns this
 */
proto.mt5_term_api.SymbolListReply.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.SymbolListReply.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mt5_term_api.SymbolListData.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.SymbolListData.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.SymbolListData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.SymbolListData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolListData.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbolsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.SymbolListData}
 */
proto.mt5_term_api.SymbolListData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.SymbolListData;
  return proto.mt5_term_api.SymbolListData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.SymbolListData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.SymbolListData}
 */
proto.mt5_term_api.SymbolListData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addSymbols(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.SymbolListData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.SymbolListData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.SymbolListData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolListData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSymbolsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string Symbols = 1;
 * @return {!Array<string>}
 */
proto.mt5_term_api.SymbolListData.prototype.getSymbolsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.mt5_term_api.SymbolListData} returns this
 */
proto.mt5_term_api.SymbolListData.prototype.setSymbolsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.mt5_term_api.SymbolListData} returns this
 */
proto.mt5_term_api.SymbolListData.prototype.addSymbols = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mt5_term_api.SymbolListData} returns this
 */
proto.mt5_term_api.SymbolListData.prototype.clearSymbolsList = function() {
  return this.setSymbolsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.SymbolsTotalRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.SymbolsTotalRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.SymbolsTotalRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolsTotalRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    mode: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.SymbolsTotalRequest}
 */
proto.mt5_term_api.SymbolsTotalRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.SymbolsTotalRequest;
  return proto.mt5_term_api.SymbolsTotalRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.SymbolsTotalRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.SymbolsTotalRequest}
 */
proto.mt5_term_api.SymbolsTotalRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.SymbolsTotalRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.SymbolsTotalRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.SymbolsTotalRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolsTotalRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMode();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool mode = 1;
 * @return {boolean}
 */
proto.mt5_term_api.SymbolsTotalRequest.prototype.getMode = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mt5_term_api.SymbolsTotalRequest} returns this
 */
proto.mt5_term_api.SymbolsTotalRequest.prototype.setMode = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.mt5_term_api.SymbolsTotalReply.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.mt5_term_api.SymbolsTotalReply.ResponseCase = {
  RESPONSE_NOT_SET: 0,
  DATA: 1,
  ERROR: 2
};

/**
 * @return {proto.mt5_term_api.SymbolsTotalReply.ResponseCase}
 */
proto.mt5_term_api.SymbolsTotalReply.prototype.getResponseCase = function() {
  return /** @type {proto.mt5_term_api.SymbolsTotalReply.ResponseCase} */(jspb.Message.computeOneofCase(this, proto.mt5_term_api.SymbolsTotalReply.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.SymbolsTotalReply.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.SymbolsTotalReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.SymbolsTotalReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolsTotalReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && proto.mt5_term_api.SymbolsTotalData.toObject(includeInstance, f),
    error: (f = msg.getError()) && mrpc$mt5$error_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.SymbolsTotalReply}
 */
proto.mt5_term_api.SymbolsTotalReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.SymbolsTotalReply;
  return proto.mt5_term_api.SymbolsTotalReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.SymbolsTotalReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.SymbolsTotalReply}
 */
proto.mt5_term_api.SymbolsTotalReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mt5_term_api.SymbolsTotalData;
      reader.readMessage(value,proto.mt5_term_api.SymbolsTotalData.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 2:
      var value = new mrpc$mt5$error_pb.Error;
      reader.readMessage(value,mrpc$mt5$error_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.SymbolsTotalReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.SymbolsTotalReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.SymbolsTotalReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolsTotalReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mt5_term_api.SymbolsTotalData.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      mrpc$mt5$error_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional SymbolsTotalData data = 1;
 * @return {?proto.mt5_term_api.SymbolsTotalData}
 */
proto.mt5_term_api.SymbolsTotalReply.prototype.getData = function() {
  return /** @type{?proto.mt5_term_api.SymbolsTotalData} */ (
    jspb.Message.getWrapperField(this, proto.mt5_term_api.SymbolsTotalData, 1));
};


/**
 * @param {?proto.mt5_term_api.SymbolsTotalData|undefined} value
 * @return {!proto.mt5_term_api.SymbolsTotalReply} returns this
*/
proto.mt5_term_api.SymbolsTotalReply.prototype.setData = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.mt5_term_api.SymbolsTotalReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.SymbolsTotalReply} returns this
 */
proto.mt5_term_api.SymbolsTotalReply.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.SymbolsTotalReply.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Error error = 2;
 * @return {?proto.mt5_term_api.Error}
 */
proto.mt5_term_api.SymbolsTotalReply.prototype.getError = function() {
  return /** @type{?proto.mt5_term_api.Error} */ (
    jspb.Message.getWrapperField(this, mrpc$mt5$error_pb.Error, 2));
};


/**
 * @param {?proto.mt5_term_api.Error|undefined} value
 * @return {!proto.mt5_term_api.SymbolsTotalReply} returns this
*/
proto.mt5_term_api.SymbolsTotalReply.prototype.setError = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.mt5_term_api.SymbolsTotalReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.SymbolsTotalReply} returns this
 */
proto.mt5_term_api.SymbolsTotalReply.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.SymbolsTotalReply.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.SymbolsTotalData.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.SymbolsTotalData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.SymbolsTotalData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolsTotalData.toObject = function(includeInstance, msg) {
  var f, obj = {
    total: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.SymbolsTotalData}
 */
proto.mt5_term_api.SymbolsTotalData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.SymbolsTotalData;
  return proto.mt5_term_api.SymbolsTotalData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.SymbolsTotalData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.SymbolsTotalData}
 */
proto.mt5_term_api.SymbolsTotalData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotal(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.SymbolsTotalData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.SymbolsTotalData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.SymbolsTotalData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolsTotalData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 total = 1;
 * @return {number}
 */
proto.mt5_term_api.SymbolsTotalData.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolsTotalData} returns this
 */
proto.mt5_term_api.SymbolsTotalData.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.SymbolExistRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.SymbolExistRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.SymbolExistRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolExistRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.SymbolExistRequest}
 */
proto.mt5_term_api.SymbolExistRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.SymbolExistRequest;
  return proto.mt5_term_api.SymbolExistRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.SymbolExistRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.SymbolExistRequest}
 */
proto.mt5_term_api.SymbolExistRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.SymbolExistRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.SymbolExistRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.SymbolExistRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolExistRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.mt5_term_api.SymbolExistRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.SymbolExistRequest} returns this
 */
proto.mt5_term_api.SymbolExistRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.mt5_term_api.SymbolExistReply.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.mt5_term_api.SymbolExistReply.ResponseCase = {
  RESPONSE_NOT_SET: 0,
  DATA: 1,
  ERROR: 2
};

/**
 * @return {proto.mt5_term_api.SymbolExistReply.ResponseCase}
 */
proto.mt5_term_api.SymbolExistReply.prototype.getResponseCase = function() {
  return /** @type {proto.mt5_term_api.SymbolExistReply.ResponseCase} */(jspb.Message.computeOneofCase(this, proto.mt5_term_api.SymbolExistReply.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.SymbolExistReply.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.SymbolExistReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.SymbolExistReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolExistReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && proto.mt5_term_api.SymbolExistData.toObject(includeInstance, f),
    error: (f = msg.getError()) && mrpc$mt5$error_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.SymbolExistReply}
 */
proto.mt5_term_api.SymbolExistReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.SymbolExistReply;
  return proto.mt5_term_api.SymbolExistReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.SymbolExistReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.SymbolExistReply}
 */
proto.mt5_term_api.SymbolExistReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mt5_term_api.SymbolExistData;
      reader.readMessage(value,proto.mt5_term_api.SymbolExistData.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 2:
      var value = new mrpc$mt5$error_pb.Error;
      reader.readMessage(value,mrpc$mt5$error_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.SymbolExistReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.SymbolExistReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.SymbolExistReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolExistReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mt5_term_api.SymbolExistData.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      mrpc$mt5$error_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional SymbolExistData data = 1;
 * @return {?proto.mt5_term_api.SymbolExistData}
 */
proto.mt5_term_api.SymbolExistReply.prototype.getData = function() {
  return /** @type{?proto.mt5_term_api.SymbolExistData} */ (
    jspb.Message.getWrapperField(this, proto.mt5_term_api.SymbolExistData, 1));
};


/**
 * @param {?proto.mt5_term_api.SymbolExistData|undefined} value
 * @return {!proto.mt5_term_api.SymbolExistReply} returns this
*/
proto.mt5_term_api.SymbolExistReply.prototype.setData = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.mt5_term_api.SymbolExistReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.SymbolExistReply} returns this
 */
proto.mt5_term_api.SymbolExistReply.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.SymbolExistReply.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Error error = 2;
 * @return {?proto.mt5_term_api.Error}
 */
proto.mt5_term_api.SymbolExistReply.prototype.getError = function() {
  return /** @type{?proto.mt5_term_api.Error} */ (
    jspb.Message.getWrapperField(this, mrpc$mt5$error_pb.Error, 2));
};


/**
 * @param {?proto.mt5_term_api.Error|undefined} value
 * @return {!proto.mt5_term_api.SymbolExistReply} returns this
*/
proto.mt5_term_api.SymbolExistReply.prototype.setError = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.mt5_term_api.SymbolExistReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.SymbolExistReply} returns this
 */
proto.mt5_term_api.SymbolExistReply.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.SymbolExistReply.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.SymbolExistData.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.SymbolExistData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.SymbolExistData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolExistData.toObject = function(includeInstance, msg) {
  var f, obj = {
    exists: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    isCustom: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.SymbolExistData}
 */
proto.mt5_term_api.SymbolExistData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.SymbolExistData;
  return proto.mt5_term_api.SymbolExistData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.SymbolExistData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.SymbolExistData}
 */
proto.mt5_term_api.SymbolExistData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExists(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsCustom(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.SymbolExistData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.SymbolExistData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.SymbolExistData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolExistData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExists();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getIsCustom();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional bool exists = 1;
 * @return {boolean}
 */
proto.mt5_term_api.SymbolExistData.prototype.getExists = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mt5_term_api.SymbolExistData} returns this
 */
proto.mt5_term_api.SymbolExistData.prototype.setExists = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool is_custom = 2;
 * @return {boolean}
 */
proto.mt5_term_api.SymbolExistData.prototype.getIsCustom = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mt5_term_api.SymbolExistData} returns this
 */
proto.mt5_term_api.SymbolExistData.prototype.setIsCustom = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.SymbolNameRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.SymbolNameRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.SymbolNameRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolNameRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    index: jspb.Message.getFieldWithDefault(msg, 1, 0),
    selected: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.SymbolNameRequest}
 */
proto.mt5_term_api.SymbolNameRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.SymbolNameRequest;
  return proto.mt5_term_api.SymbolNameRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.SymbolNameRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.SymbolNameRequest}
 */
proto.mt5_term_api.SymbolNameRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIndex(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSelected(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.SymbolNameRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.SymbolNameRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.SymbolNameRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolNameRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndex();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSelected();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional int32 index = 1;
 * @return {number}
 */
proto.mt5_term_api.SymbolNameRequest.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolNameRequest} returns this
 */
proto.mt5_term_api.SymbolNameRequest.prototype.setIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool selected = 2;
 * @return {boolean}
 */
proto.mt5_term_api.SymbolNameRequest.prototype.getSelected = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mt5_term_api.SymbolNameRequest} returns this
 */
proto.mt5_term_api.SymbolNameRequest.prototype.setSelected = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.mt5_term_api.SymbolNameReply.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.mt5_term_api.SymbolNameReply.ResponseCase = {
  RESPONSE_NOT_SET: 0,
  DATA: 1,
  ERROR: 2
};

/**
 * @return {proto.mt5_term_api.SymbolNameReply.ResponseCase}
 */
proto.mt5_term_api.SymbolNameReply.prototype.getResponseCase = function() {
  return /** @type {proto.mt5_term_api.SymbolNameReply.ResponseCase} */(jspb.Message.computeOneofCase(this, proto.mt5_term_api.SymbolNameReply.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.SymbolNameReply.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.SymbolNameReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.SymbolNameReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolNameReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && proto.mt5_term_api.SymbolNameData.toObject(includeInstance, f),
    error: (f = msg.getError()) && mrpc$mt5$error_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.SymbolNameReply}
 */
proto.mt5_term_api.SymbolNameReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.SymbolNameReply;
  return proto.mt5_term_api.SymbolNameReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.SymbolNameReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.SymbolNameReply}
 */
proto.mt5_term_api.SymbolNameReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mt5_term_api.SymbolNameData;
      reader.readMessage(value,proto.mt5_term_api.SymbolNameData.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 2:
      var value = new mrpc$mt5$error_pb.Error;
      reader.readMessage(value,mrpc$mt5$error_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.SymbolNameReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.SymbolNameReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.SymbolNameReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolNameReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mt5_term_api.SymbolNameData.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      mrpc$mt5$error_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional SymbolNameData data = 1;
 * @return {?proto.mt5_term_api.SymbolNameData}
 */
proto.mt5_term_api.SymbolNameReply.prototype.getData = function() {
  return /** @type{?proto.mt5_term_api.SymbolNameData} */ (
    jspb.Message.getWrapperField(this, proto.mt5_term_api.SymbolNameData, 1));
};


/**
 * @param {?proto.mt5_term_api.SymbolNameData|undefined} value
 * @return {!proto.mt5_term_api.SymbolNameReply} returns this
*/
proto.mt5_term_api.SymbolNameReply.prototype.setData = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.mt5_term_api.SymbolNameReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.SymbolNameReply} returns this
 */
proto.mt5_term_api.SymbolNameReply.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.SymbolNameReply.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Error error = 2;
 * @return {?proto.mt5_term_api.Error}
 */
proto.mt5_term_api.SymbolNameReply.prototype.getError = function() {
  return /** @type{?proto.mt5_term_api.Error} */ (
    jspb.Message.getWrapperField(this, mrpc$mt5$error_pb.Error, 2));
};


/**
 * @param {?proto.mt5_term_api.Error|undefined} value
 * @return {!proto.mt5_term_api.SymbolNameReply} returns this
*/
proto.mt5_term_api.SymbolNameReply.prototype.setError = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.mt5_term_api.SymbolNameReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.SymbolNameReply} returns this
 */
proto.mt5_term_api.SymbolNameReply.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.SymbolNameReply.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.SymbolNameData.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.SymbolNameData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.SymbolNameData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolNameData.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.SymbolNameData}
 */
proto.mt5_term_api.SymbolNameData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.SymbolNameData;
  return proto.mt5_term_api.SymbolNameData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.SymbolNameData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.SymbolNameData}
 */
proto.mt5_term_api.SymbolNameData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.SymbolNameData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.SymbolNameData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.SymbolNameData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolNameData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.mt5_term_api.SymbolNameData.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.SymbolNameData} returns this
 */
proto.mt5_term_api.SymbolNameData.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.SymbolSelectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.SymbolSelectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.SymbolSelectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolSelectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbol: jspb.Message.getFieldWithDefault(msg, 1, ""),
    select: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.SymbolSelectRequest}
 */
proto.mt5_term_api.SymbolSelectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.SymbolSelectRequest;
  return proto.mt5_term_api.SymbolSelectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.SymbolSelectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.SymbolSelectRequest}
 */
proto.mt5_term_api.SymbolSelectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbol(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSelect(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.SymbolSelectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.SymbolSelectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.SymbolSelectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolSelectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSymbol();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSelect();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string symbol = 1;
 * @return {string}
 */
proto.mt5_term_api.SymbolSelectRequest.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.SymbolSelectRequest} returns this
 */
proto.mt5_term_api.SymbolSelectRequest.prototype.setSymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool select = 2;
 * @return {boolean}
 */
proto.mt5_term_api.SymbolSelectRequest.prototype.getSelect = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mt5_term_api.SymbolSelectRequest} returns this
 */
proto.mt5_term_api.SymbolSelectRequest.prototype.setSelect = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.mt5_term_api.SymbolSelectReply.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.mt5_term_api.SymbolSelectReply.ResponseCase = {
  RESPONSE_NOT_SET: 0,
  DATA: 1,
  ERROR: 2
};

/**
 * @return {proto.mt5_term_api.SymbolSelectReply.ResponseCase}
 */
proto.mt5_term_api.SymbolSelectReply.prototype.getResponseCase = function() {
  return /** @type {proto.mt5_term_api.SymbolSelectReply.ResponseCase} */(jspb.Message.computeOneofCase(this, proto.mt5_term_api.SymbolSelectReply.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.SymbolSelectReply.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.SymbolSelectReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.SymbolSelectReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolSelectReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && proto.mt5_term_api.SymbolSelectData.toObject(includeInstance, f),
    error: (f = msg.getError()) && mrpc$mt5$error_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.SymbolSelectReply}
 */
proto.mt5_term_api.SymbolSelectReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.SymbolSelectReply;
  return proto.mt5_term_api.SymbolSelectReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.SymbolSelectReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.SymbolSelectReply}
 */
proto.mt5_term_api.SymbolSelectReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mt5_term_api.SymbolSelectData;
      reader.readMessage(value,proto.mt5_term_api.SymbolSelectData.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 2:
      var value = new mrpc$mt5$error_pb.Error;
      reader.readMessage(value,mrpc$mt5$error_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.SymbolSelectReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.SymbolSelectReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.SymbolSelectReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolSelectReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mt5_term_api.SymbolSelectData.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      mrpc$mt5$error_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional SymbolSelectData data = 1;
 * @return {?proto.mt5_term_api.SymbolSelectData}
 */
proto.mt5_term_api.SymbolSelectReply.prototype.getData = function() {
  return /** @type{?proto.mt5_term_api.SymbolSelectData} */ (
    jspb.Message.getWrapperField(this, proto.mt5_term_api.SymbolSelectData, 1));
};


/**
 * @param {?proto.mt5_term_api.SymbolSelectData|undefined} value
 * @return {!proto.mt5_term_api.SymbolSelectReply} returns this
*/
proto.mt5_term_api.SymbolSelectReply.prototype.setData = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.mt5_term_api.SymbolSelectReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.SymbolSelectReply} returns this
 */
proto.mt5_term_api.SymbolSelectReply.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.SymbolSelectReply.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Error error = 2;
 * @return {?proto.mt5_term_api.Error}
 */
proto.mt5_term_api.SymbolSelectReply.prototype.getError = function() {
  return /** @type{?proto.mt5_term_api.Error} */ (
    jspb.Message.getWrapperField(this, mrpc$mt5$error_pb.Error, 2));
};


/**
 * @param {?proto.mt5_term_api.Error|undefined} value
 * @return {!proto.mt5_term_api.SymbolSelectReply} returns this
*/
proto.mt5_term_api.SymbolSelectReply.prototype.setError = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.mt5_term_api.SymbolSelectReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.SymbolSelectReply} returns this
 */
proto.mt5_term_api.SymbolSelectReply.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.SymbolSelectReply.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.SymbolSelectData.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.SymbolSelectData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.SymbolSelectData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolSelectData.toObject = function(includeInstance, msg) {
  var f, obj = {
    success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.SymbolSelectData}
 */
proto.mt5_term_api.SymbolSelectData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.SymbolSelectData;
  return proto.mt5_term_api.SymbolSelectData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.SymbolSelectData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.SymbolSelectData}
 */
proto.mt5_term_api.SymbolSelectData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.SymbolSelectData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.SymbolSelectData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.SymbolSelectData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolSelectData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool success = 1;
 * @return {boolean}
 */
proto.mt5_term_api.SymbolSelectData.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mt5_term_api.SymbolSelectData} returns this
 */
proto.mt5_term_api.SymbolSelectData.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.SymbolIsSynchronizedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.SymbolIsSynchronizedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.SymbolIsSynchronizedRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolIsSynchronizedRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbol: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.SymbolIsSynchronizedRequest}
 */
proto.mt5_term_api.SymbolIsSynchronizedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.SymbolIsSynchronizedRequest;
  return proto.mt5_term_api.SymbolIsSynchronizedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.SymbolIsSynchronizedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.SymbolIsSynchronizedRequest}
 */
proto.mt5_term_api.SymbolIsSynchronizedRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbol(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.SymbolIsSynchronizedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.SymbolIsSynchronizedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.SymbolIsSynchronizedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolIsSynchronizedRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSymbol();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string symbol = 1;
 * @return {string}
 */
proto.mt5_term_api.SymbolIsSynchronizedRequest.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.SymbolIsSynchronizedRequest} returns this
 */
proto.mt5_term_api.SymbolIsSynchronizedRequest.prototype.setSymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.mt5_term_api.SymbolIsSynchronizedReply.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.mt5_term_api.SymbolIsSynchronizedReply.ResponseCase = {
  RESPONSE_NOT_SET: 0,
  DATA: 1,
  ERROR: 2
};

/**
 * @return {proto.mt5_term_api.SymbolIsSynchronizedReply.ResponseCase}
 */
proto.mt5_term_api.SymbolIsSynchronizedReply.prototype.getResponseCase = function() {
  return /** @type {proto.mt5_term_api.SymbolIsSynchronizedReply.ResponseCase} */(jspb.Message.computeOneofCase(this, proto.mt5_term_api.SymbolIsSynchronizedReply.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.SymbolIsSynchronizedReply.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.SymbolIsSynchronizedReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.SymbolIsSynchronizedReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolIsSynchronizedReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && proto.mt5_term_api.SymbolIsSynchronizedData.toObject(includeInstance, f),
    error: (f = msg.getError()) && mrpc$mt5$error_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.SymbolIsSynchronizedReply}
 */
proto.mt5_term_api.SymbolIsSynchronizedReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.SymbolIsSynchronizedReply;
  return proto.mt5_term_api.SymbolIsSynchronizedReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.SymbolIsSynchronizedReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.SymbolIsSynchronizedReply}
 */
proto.mt5_term_api.SymbolIsSynchronizedReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mt5_term_api.SymbolIsSynchronizedData;
      reader.readMessage(value,proto.mt5_term_api.SymbolIsSynchronizedData.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 2:
      var value = new mrpc$mt5$error_pb.Error;
      reader.readMessage(value,mrpc$mt5$error_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.SymbolIsSynchronizedReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.SymbolIsSynchronizedReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.SymbolIsSynchronizedReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolIsSynchronizedReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mt5_term_api.SymbolIsSynchronizedData.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      mrpc$mt5$error_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional SymbolIsSynchronizedData data = 1;
 * @return {?proto.mt5_term_api.SymbolIsSynchronizedData}
 */
proto.mt5_term_api.SymbolIsSynchronizedReply.prototype.getData = function() {
  return /** @type{?proto.mt5_term_api.SymbolIsSynchronizedData} */ (
    jspb.Message.getWrapperField(this, proto.mt5_term_api.SymbolIsSynchronizedData, 1));
};


/**
 * @param {?proto.mt5_term_api.SymbolIsSynchronizedData|undefined} value
 * @return {!proto.mt5_term_api.SymbolIsSynchronizedReply} returns this
*/
proto.mt5_term_api.SymbolIsSynchronizedReply.prototype.setData = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.mt5_term_api.SymbolIsSynchronizedReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.SymbolIsSynchronizedReply} returns this
 */
proto.mt5_term_api.SymbolIsSynchronizedReply.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.SymbolIsSynchronizedReply.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Error error = 2;
 * @return {?proto.mt5_term_api.Error}
 */
proto.mt5_term_api.SymbolIsSynchronizedReply.prototype.getError = function() {
  return /** @type{?proto.mt5_term_api.Error} */ (
    jspb.Message.getWrapperField(this, mrpc$mt5$error_pb.Error, 2));
};


/**
 * @param {?proto.mt5_term_api.Error|undefined} value
 * @return {!proto.mt5_term_api.SymbolIsSynchronizedReply} returns this
*/
proto.mt5_term_api.SymbolIsSynchronizedReply.prototype.setError = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.mt5_term_api.SymbolIsSynchronizedReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.SymbolIsSynchronizedReply} returns this
 */
proto.mt5_term_api.SymbolIsSynchronizedReply.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.SymbolIsSynchronizedReply.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.SymbolIsSynchronizedData.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.SymbolIsSynchronizedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.SymbolIsSynchronizedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolIsSynchronizedData.toObject = function(includeInstance, msg) {
  var f, obj = {
    pb_synchronized: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.SymbolIsSynchronizedData}
 */
proto.mt5_term_api.SymbolIsSynchronizedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.SymbolIsSynchronizedData;
  return proto.mt5_term_api.SymbolIsSynchronizedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.SymbolIsSynchronizedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.SymbolIsSynchronizedData}
 */
proto.mt5_term_api.SymbolIsSynchronizedData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSynchronized(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.SymbolIsSynchronizedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.SymbolIsSynchronizedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.SymbolIsSynchronizedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolIsSynchronizedData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSynchronized();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool synchronized = 1;
 * @return {boolean}
 */
proto.mt5_term_api.SymbolIsSynchronizedData.prototype.getSynchronized = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mt5_term_api.SymbolIsSynchronizedData} returns this
 */
proto.mt5_term_api.SymbolIsSynchronizedData.prototype.setSynchronized = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.SymbolInfoDoubleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.SymbolInfoDoubleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.SymbolInfoDoubleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolInfoDoubleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbol: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.SymbolInfoDoubleRequest}
 */
proto.mt5_term_api.SymbolInfoDoubleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.SymbolInfoDoubleRequest;
  return proto.mt5_term_api.SymbolInfoDoubleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.SymbolInfoDoubleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.SymbolInfoDoubleRequest}
 */
proto.mt5_term_api.SymbolInfoDoubleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbol(value);
      break;
    case 2:
      var value = /** @type {!proto.mt5_term_api.SymbolInfoDoubleProperty} */ (reader.readEnum());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.SymbolInfoDoubleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.SymbolInfoDoubleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.SymbolInfoDoubleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolInfoDoubleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSymbol();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string symbol = 1;
 * @return {string}
 */
proto.mt5_term_api.SymbolInfoDoubleRequest.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.SymbolInfoDoubleRequest} returns this
 */
proto.mt5_term_api.SymbolInfoDoubleRequest.prototype.setSymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SymbolInfoDoubleProperty type = 2;
 * @return {!proto.mt5_term_api.SymbolInfoDoubleProperty}
 */
proto.mt5_term_api.SymbolInfoDoubleRequest.prototype.getType = function() {
  return /** @type {!proto.mt5_term_api.SymbolInfoDoubleProperty} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.mt5_term_api.SymbolInfoDoubleProperty} value
 * @return {!proto.mt5_term_api.SymbolInfoDoubleRequest} returns this
 */
proto.mt5_term_api.SymbolInfoDoubleRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.mt5_term_api.SymbolInfoDoubleReply.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.mt5_term_api.SymbolInfoDoubleReply.ResponseCase = {
  RESPONSE_NOT_SET: 0,
  DATA: 1,
  ERROR: 2
};

/**
 * @return {proto.mt5_term_api.SymbolInfoDoubleReply.ResponseCase}
 */
proto.mt5_term_api.SymbolInfoDoubleReply.prototype.getResponseCase = function() {
  return /** @type {proto.mt5_term_api.SymbolInfoDoubleReply.ResponseCase} */(jspb.Message.computeOneofCase(this, proto.mt5_term_api.SymbolInfoDoubleReply.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.SymbolInfoDoubleReply.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.SymbolInfoDoubleReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.SymbolInfoDoubleReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolInfoDoubleReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && proto.mt5_term_api.SymbolInfoDoubleData.toObject(includeInstance, f),
    error: (f = msg.getError()) && mrpc$mt5$error_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.SymbolInfoDoubleReply}
 */
proto.mt5_term_api.SymbolInfoDoubleReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.SymbolInfoDoubleReply;
  return proto.mt5_term_api.SymbolInfoDoubleReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.SymbolInfoDoubleReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.SymbolInfoDoubleReply}
 */
proto.mt5_term_api.SymbolInfoDoubleReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mt5_term_api.SymbolInfoDoubleData;
      reader.readMessage(value,proto.mt5_term_api.SymbolInfoDoubleData.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 2:
      var value = new mrpc$mt5$error_pb.Error;
      reader.readMessage(value,mrpc$mt5$error_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.SymbolInfoDoubleReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.SymbolInfoDoubleReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.SymbolInfoDoubleReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolInfoDoubleReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mt5_term_api.SymbolInfoDoubleData.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      mrpc$mt5$error_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional SymbolInfoDoubleData data = 1;
 * @return {?proto.mt5_term_api.SymbolInfoDoubleData}
 */
proto.mt5_term_api.SymbolInfoDoubleReply.prototype.getData = function() {
  return /** @type{?proto.mt5_term_api.SymbolInfoDoubleData} */ (
    jspb.Message.getWrapperField(this, proto.mt5_term_api.SymbolInfoDoubleData, 1));
};


/**
 * @param {?proto.mt5_term_api.SymbolInfoDoubleData|undefined} value
 * @return {!proto.mt5_term_api.SymbolInfoDoubleReply} returns this
*/
proto.mt5_term_api.SymbolInfoDoubleReply.prototype.setData = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.mt5_term_api.SymbolInfoDoubleReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.SymbolInfoDoubleReply} returns this
 */
proto.mt5_term_api.SymbolInfoDoubleReply.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.SymbolInfoDoubleReply.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Error error = 2;
 * @return {?proto.mt5_term_api.Error}
 */
proto.mt5_term_api.SymbolInfoDoubleReply.prototype.getError = function() {
  return /** @type{?proto.mt5_term_api.Error} */ (
    jspb.Message.getWrapperField(this, mrpc$mt5$error_pb.Error, 2));
};


/**
 * @param {?proto.mt5_term_api.Error|undefined} value
 * @return {!proto.mt5_term_api.SymbolInfoDoubleReply} returns this
*/
proto.mt5_term_api.SymbolInfoDoubleReply.prototype.setError = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.mt5_term_api.SymbolInfoDoubleReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.SymbolInfoDoubleReply} returns this
 */
proto.mt5_term_api.SymbolInfoDoubleReply.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.SymbolInfoDoubleReply.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.SymbolInfoDoubleData.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.SymbolInfoDoubleData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.SymbolInfoDoubleData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolInfoDoubleData.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.SymbolInfoDoubleData}
 */
proto.mt5_term_api.SymbolInfoDoubleData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.SymbolInfoDoubleData;
  return proto.mt5_term_api.SymbolInfoDoubleData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.SymbolInfoDoubleData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.SymbolInfoDoubleData}
 */
proto.mt5_term_api.SymbolInfoDoubleData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.SymbolInfoDoubleData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.SymbolInfoDoubleData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.SymbolInfoDoubleData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolInfoDoubleData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double value = 1;
 * @return {number}
 */
proto.mt5_term_api.SymbolInfoDoubleData.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolInfoDoubleData} returns this
 */
proto.mt5_term_api.SymbolInfoDoubleData.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.SymbolInfoIntegerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.SymbolInfoIntegerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.SymbolInfoIntegerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolInfoIntegerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbol: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.SymbolInfoIntegerRequest}
 */
proto.mt5_term_api.SymbolInfoIntegerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.SymbolInfoIntegerRequest;
  return proto.mt5_term_api.SymbolInfoIntegerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.SymbolInfoIntegerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.SymbolInfoIntegerRequest}
 */
proto.mt5_term_api.SymbolInfoIntegerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbol(value);
      break;
    case 2:
      var value = /** @type {!proto.mt5_term_api.SymbolInfoIntegerProperty} */ (reader.readEnum());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.SymbolInfoIntegerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.SymbolInfoIntegerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.SymbolInfoIntegerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolInfoIntegerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSymbol();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string symbol = 1;
 * @return {string}
 */
proto.mt5_term_api.SymbolInfoIntegerRequest.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.SymbolInfoIntegerRequest} returns this
 */
proto.mt5_term_api.SymbolInfoIntegerRequest.prototype.setSymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SymbolInfoIntegerProperty type = 2;
 * @return {!proto.mt5_term_api.SymbolInfoIntegerProperty}
 */
proto.mt5_term_api.SymbolInfoIntegerRequest.prototype.getType = function() {
  return /** @type {!proto.mt5_term_api.SymbolInfoIntegerProperty} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.mt5_term_api.SymbolInfoIntegerProperty} value
 * @return {!proto.mt5_term_api.SymbolInfoIntegerRequest} returns this
 */
proto.mt5_term_api.SymbolInfoIntegerRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.mt5_term_api.SymbolInfoIntegerReply.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.mt5_term_api.SymbolInfoIntegerReply.ResponseCase = {
  RESPONSE_NOT_SET: 0,
  DATA: 1,
  ERROR: 2
};

/**
 * @return {proto.mt5_term_api.SymbolInfoIntegerReply.ResponseCase}
 */
proto.mt5_term_api.SymbolInfoIntegerReply.prototype.getResponseCase = function() {
  return /** @type {proto.mt5_term_api.SymbolInfoIntegerReply.ResponseCase} */(jspb.Message.computeOneofCase(this, proto.mt5_term_api.SymbolInfoIntegerReply.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.SymbolInfoIntegerReply.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.SymbolInfoIntegerReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.SymbolInfoIntegerReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolInfoIntegerReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && proto.mt5_term_api.SymbolInfoIntegerData.toObject(includeInstance, f),
    error: (f = msg.getError()) && mrpc$mt5$error_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.SymbolInfoIntegerReply}
 */
proto.mt5_term_api.SymbolInfoIntegerReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.SymbolInfoIntegerReply;
  return proto.mt5_term_api.SymbolInfoIntegerReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.SymbolInfoIntegerReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.SymbolInfoIntegerReply}
 */
proto.mt5_term_api.SymbolInfoIntegerReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mt5_term_api.SymbolInfoIntegerData;
      reader.readMessage(value,proto.mt5_term_api.SymbolInfoIntegerData.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 2:
      var value = new mrpc$mt5$error_pb.Error;
      reader.readMessage(value,mrpc$mt5$error_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.SymbolInfoIntegerReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.SymbolInfoIntegerReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.SymbolInfoIntegerReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolInfoIntegerReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mt5_term_api.SymbolInfoIntegerData.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      mrpc$mt5$error_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional SymbolInfoIntegerData data = 1;
 * @return {?proto.mt5_term_api.SymbolInfoIntegerData}
 */
proto.mt5_term_api.SymbolInfoIntegerReply.prototype.getData = function() {
  return /** @type{?proto.mt5_term_api.SymbolInfoIntegerData} */ (
    jspb.Message.getWrapperField(this, proto.mt5_term_api.SymbolInfoIntegerData, 1));
};


/**
 * @param {?proto.mt5_term_api.SymbolInfoIntegerData|undefined} value
 * @return {!proto.mt5_term_api.SymbolInfoIntegerReply} returns this
*/
proto.mt5_term_api.SymbolInfoIntegerReply.prototype.setData = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.mt5_term_api.SymbolInfoIntegerReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.SymbolInfoIntegerReply} returns this
 */
proto.mt5_term_api.SymbolInfoIntegerReply.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.SymbolInfoIntegerReply.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Error error = 2;
 * @return {?proto.mt5_term_api.Error}
 */
proto.mt5_term_api.SymbolInfoIntegerReply.prototype.getError = function() {
  return /** @type{?proto.mt5_term_api.Error} */ (
    jspb.Message.getWrapperField(this, mrpc$mt5$error_pb.Error, 2));
};


/**
 * @param {?proto.mt5_term_api.Error|undefined} value
 * @return {!proto.mt5_term_api.SymbolInfoIntegerReply} returns this
*/
proto.mt5_term_api.SymbolInfoIntegerReply.prototype.setError = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.mt5_term_api.SymbolInfoIntegerReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.SymbolInfoIntegerReply} returns this
 */
proto.mt5_term_api.SymbolInfoIntegerReply.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.SymbolInfoIntegerReply.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.SymbolInfoIntegerData.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.SymbolInfoIntegerData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.SymbolInfoIntegerData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolInfoIntegerData.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.SymbolInfoIntegerData}
 */
proto.mt5_term_api.SymbolInfoIntegerData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.SymbolInfoIntegerData;
  return proto.mt5_term_api.SymbolInfoIntegerData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.SymbolInfoIntegerData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.SymbolInfoIntegerData}
 */
proto.mt5_term_api.SymbolInfoIntegerData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.SymbolInfoIntegerData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.SymbolInfoIntegerData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.SymbolInfoIntegerData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolInfoIntegerData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 value = 1;
 * @return {number}
 */
proto.mt5_term_api.SymbolInfoIntegerData.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolInfoIntegerData} returns this
 */
proto.mt5_term_api.SymbolInfoIntegerData.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.SymbolInfoStringRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.SymbolInfoStringRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.SymbolInfoStringRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolInfoStringRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbol: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.SymbolInfoStringRequest}
 */
proto.mt5_term_api.SymbolInfoStringRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.SymbolInfoStringRequest;
  return proto.mt5_term_api.SymbolInfoStringRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.SymbolInfoStringRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.SymbolInfoStringRequest}
 */
proto.mt5_term_api.SymbolInfoStringRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbol(value);
      break;
    case 2:
      var value = /** @type {!proto.mt5_term_api.SymbolInfoStringProperty} */ (reader.readEnum());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.SymbolInfoStringRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.SymbolInfoStringRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.SymbolInfoStringRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolInfoStringRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSymbol();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string symbol = 1;
 * @return {string}
 */
proto.mt5_term_api.SymbolInfoStringRequest.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.SymbolInfoStringRequest} returns this
 */
proto.mt5_term_api.SymbolInfoStringRequest.prototype.setSymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SymbolInfoStringProperty type = 2;
 * @return {!proto.mt5_term_api.SymbolInfoStringProperty}
 */
proto.mt5_term_api.SymbolInfoStringRequest.prototype.getType = function() {
  return /** @type {!proto.mt5_term_api.SymbolInfoStringProperty} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.mt5_term_api.SymbolInfoStringProperty} value
 * @return {!proto.mt5_term_api.SymbolInfoStringRequest} returns this
 */
proto.mt5_term_api.SymbolInfoStringRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.mt5_term_api.SymbolInfoStringReply.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.mt5_term_api.SymbolInfoStringReply.ResponseCase = {
  RESPONSE_NOT_SET: 0,
  DATA: 1,
  ERROR: 2
};

/**
 * @return {proto.mt5_term_api.SymbolInfoStringReply.ResponseCase}
 */
proto.mt5_term_api.SymbolInfoStringReply.prototype.getResponseCase = function() {
  return /** @type {proto.mt5_term_api.SymbolInfoStringReply.ResponseCase} */(jspb.Message.computeOneofCase(this, proto.mt5_term_api.SymbolInfoStringReply.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.SymbolInfoStringReply.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.SymbolInfoStringReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.SymbolInfoStringReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolInfoStringReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && proto.mt5_term_api.SymbolInfoStringData.toObject(includeInstance, f),
    error: (f = msg.getError()) && mrpc$mt5$error_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.SymbolInfoStringReply}
 */
proto.mt5_term_api.SymbolInfoStringReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.SymbolInfoStringReply;
  return proto.mt5_term_api.SymbolInfoStringReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.SymbolInfoStringReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.SymbolInfoStringReply}
 */
proto.mt5_term_api.SymbolInfoStringReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mt5_term_api.SymbolInfoStringData;
      reader.readMessage(value,proto.mt5_term_api.SymbolInfoStringData.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 2:
      var value = new mrpc$mt5$error_pb.Error;
      reader.readMessage(value,mrpc$mt5$error_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.SymbolInfoStringReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.SymbolInfoStringReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.SymbolInfoStringReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolInfoStringReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mt5_term_api.SymbolInfoStringData.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      mrpc$mt5$error_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional SymbolInfoStringData data = 1;
 * @return {?proto.mt5_term_api.SymbolInfoStringData}
 */
proto.mt5_term_api.SymbolInfoStringReply.prototype.getData = function() {
  return /** @type{?proto.mt5_term_api.SymbolInfoStringData} */ (
    jspb.Message.getWrapperField(this, proto.mt5_term_api.SymbolInfoStringData, 1));
};


/**
 * @param {?proto.mt5_term_api.SymbolInfoStringData|undefined} value
 * @return {!proto.mt5_term_api.SymbolInfoStringReply} returns this
*/
proto.mt5_term_api.SymbolInfoStringReply.prototype.setData = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.mt5_term_api.SymbolInfoStringReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.SymbolInfoStringReply} returns this
 */
proto.mt5_term_api.SymbolInfoStringReply.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.SymbolInfoStringReply.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Error error = 2;
 * @return {?proto.mt5_term_api.Error}
 */
proto.mt5_term_api.SymbolInfoStringReply.prototype.getError = function() {
  return /** @type{?proto.mt5_term_api.Error} */ (
    jspb.Message.getWrapperField(this, mrpc$mt5$error_pb.Error, 2));
};


/**
 * @param {?proto.mt5_term_api.Error|undefined} value
 * @return {!proto.mt5_term_api.SymbolInfoStringReply} returns this
*/
proto.mt5_term_api.SymbolInfoStringReply.prototype.setError = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.mt5_term_api.SymbolInfoStringReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.SymbolInfoStringReply} returns this
 */
proto.mt5_term_api.SymbolInfoStringReply.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.SymbolInfoStringReply.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.SymbolInfoStringData.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.SymbolInfoStringData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.SymbolInfoStringData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolInfoStringData.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.SymbolInfoStringData}
 */
proto.mt5_term_api.SymbolInfoStringData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.SymbolInfoStringData;
  return proto.mt5_term_api.SymbolInfoStringData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.SymbolInfoStringData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.SymbolInfoStringData}
 */
proto.mt5_term_api.SymbolInfoStringData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.SymbolInfoStringData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.SymbolInfoStringData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.SymbolInfoStringData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolInfoStringData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string value = 1;
 * @return {string}
 */
proto.mt5_term_api.SymbolInfoStringData.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.SymbolInfoStringData} returns this
 */
proto.mt5_term_api.SymbolInfoStringData.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.SymbolInfoMarginRateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.SymbolInfoMarginRateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.SymbolInfoMarginRateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolInfoMarginRateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbol: jspb.Message.getFieldWithDefault(msg, 1, ""),
    orderType: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.SymbolInfoMarginRateRequest}
 */
proto.mt5_term_api.SymbolInfoMarginRateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.SymbolInfoMarginRateRequest;
  return proto.mt5_term_api.SymbolInfoMarginRateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.SymbolInfoMarginRateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.SymbolInfoMarginRateRequest}
 */
proto.mt5_term_api.SymbolInfoMarginRateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbol(value);
      break;
    case 2:
      var value = /** @type {!proto.mt5_term_api.ENUM_ORDER_TYPE} */ (reader.readEnum());
      msg.setOrderType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.SymbolInfoMarginRateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.SymbolInfoMarginRateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.SymbolInfoMarginRateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolInfoMarginRateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSymbol();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrderType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string symbol = 1;
 * @return {string}
 */
proto.mt5_term_api.SymbolInfoMarginRateRequest.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.SymbolInfoMarginRateRequest} returns this
 */
proto.mt5_term_api.SymbolInfoMarginRateRequest.prototype.setSymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ENUM_ORDER_TYPE order_type = 2;
 * @return {!proto.mt5_term_api.ENUM_ORDER_TYPE}
 */
proto.mt5_term_api.SymbolInfoMarginRateRequest.prototype.getOrderType = function() {
  return /** @type {!proto.mt5_term_api.ENUM_ORDER_TYPE} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.mt5_term_api.ENUM_ORDER_TYPE} value
 * @return {!proto.mt5_term_api.SymbolInfoMarginRateRequest} returns this
 */
proto.mt5_term_api.SymbolInfoMarginRateRequest.prototype.setOrderType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.mt5_term_api.SymbolInfoMarginRateReply.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.mt5_term_api.SymbolInfoMarginRateReply.ResponseCase = {
  RESPONSE_NOT_SET: 0,
  DATA: 1,
  ERROR: 2
};

/**
 * @return {proto.mt5_term_api.SymbolInfoMarginRateReply.ResponseCase}
 */
proto.mt5_term_api.SymbolInfoMarginRateReply.prototype.getResponseCase = function() {
  return /** @type {proto.mt5_term_api.SymbolInfoMarginRateReply.ResponseCase} */(jspb.Message.computeOneofCase(this, proto.mt5_term_api.SymbolInfoMarginRateReply.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.SymbolInfoMarginRateReply.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.SymbolInfoMarginRateReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.SymbolInfoMarginRateReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolInfoMarginRateReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && proto.mt5_term_api.SymbolInfoMarginRateData.toObject(includeInstance, f),
    error: (f = msg.getError()) && mrpc$mt5$error_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.SymbolInfoMarginRateReply}
 */
proto.mt5_term_api.SymbolInfoMarginRateReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.SymbolInfoMarginRateReply;
  return proto.mt5_term_api.SymbolInfoMarginRateReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.SymbolInfoMarginRateReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.SymbolInfoMarginRateReply}
 */
proto.mt5_term_api.SymbolInfoMarginRateReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mt5_term_api.SymbolInfoMarginRateData;
      reader.readMessage(value,proto.mt5_term_api.SymbolInfoMarginRateData.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 2:
      var value = new mrpc$mt5$error_pb.Error;
      reader.readMessage(value,mrpc$mt5$error_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.SymbolInfoMarginRateReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.SymbolInfoMarginRateReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.SymbolInfoMarginRateReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolInfoMarginRateReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mt5_term_api.SymbolInfoMarginRateData.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      mrpc$mt5$error_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional SymbolInfoMarginRateData data = 1;
 * @return {?proto.mt5_term_api.SymbolInfoMarginRateData}
 */
proto.mt5_term_api.SymbolInfoMarginRateReply.prototype.getData = function() {
  return /** @type{?proto.mt5_term_api.SymbolInfoMarginRateData} */ (
    jspb.Message.getWrapperField(this, proto.mt5_term_api.SymbolInfoMarginRateData, 1));
};


/**
 * @param {?proto.mt5_term_api.SymbolInfoMarginRateData|undefined} value
 * @return {!proto.mt5_term_api.SymbolInfoMarginRateReply} returns this
*/
proto.mt5_term_api.SymbolInfoMarginRateReply.prototype.setData = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.mt5_term_api.SymbolInfoMarginRateReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.SymbolInfoMarginRateReply} returns this
 */
proto.mt5_term_api.SymbolInfoMarginRateReply.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.SymbolInfoMarginRateReply.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Error error = 2;
 * @return {?proto.mt5_term_api.Error}
 */
proto.mt5_term_api.SymbolInfoMarginRateReply.prototype.getError = function() {
  return /** @type{?proto.mt5_term_api.Error} */ (
    jspb.Message.getWrapperField(this, mrpc$mt5$error_pb.Error, 2));
};


/**
 * @param {?proto.mt5_term_api.Error|undefined} value
 * @return {!proto.mt5_term_api.SymbolInfoMarginRateReply} returns this
*/
proto.mt5_term_api.SymbolInfoMarginRateReply.prototype.setError = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.mt5_term_api.SymbolInfoMarginRateReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.SymbolInfoMarginRateReply} returns this
 */
proto.mt5_term_api.SymbolInfoMarginRateReply.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.SymbolInfoMarginRateReply.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.SymbolInfoMarginRateData.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.SymbolInfoMarginRateData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.SymbolInfoMarginRateData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolInfoMarginRateData.toObject = function(includeInstance, msg) {
  var f, obj = {
    maintenanceMarginRate: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    initialMarginRate: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.SymbolInfoMarginRateData}
 */
proto.mt5_term_api.SymbolInfoMarginRateData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.SymbolInfoMarginRateData;
  return proto.mt5_term_api.SymbolInfoMarginRateData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.SymbolInfoMarginRateData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.SymbolInfoMarginRateData}
 */
proto.mt5_term_api.SymbolInfoMarginRateData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMaintenanceMarginRate(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setInitialMarginRate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.SymbolInfoMarginRateData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.SymbolInfoMarginRateData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.SymbolInfoMarginRateData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolInfoMarginRateData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMaintenanceMarginRate();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getInitialMarginRate();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * optional double maintenance_margin_rate = 1;
 * @return {number}
 */
proto.mt5_term_api.SymbolInfoMarginRateData.prototype.getMaintenanceMarginRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolInfoMarginRateData} returns this
 */
proto.mt5_term_api.SymbolInfoMarginRateData.prototype.setMaintenanceMarginRate = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double initial_margin_rate = 2;
 * @return {number}
 */
proto.mt5_term_api.SymbolInfoMarginRateData.prototype.getInitialMarginRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolInfoMarginRateData} returns this
 */
proto.mt5_term_api.SymbolInfoMarginRateData.prototype.setInitialMarginRate = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.SymbolInfoTickRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.SymbolInfoTickRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.SymbolInfoTickRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolInfoTickRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbol: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.SymbolInfoTickRequest}
 */
proto.mt5_term_api.SymbolInfoTickRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.SymbolInfoTickRequest;
  return proto.mt5_term_api.SymbolInfoTickRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.SymbolInfoTickRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.SymbolInfoTickRequest}
 */
proto.mt5_term_api.SymbolInfoTickRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbol(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.SymbolInfoTickRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.SymbolInfoTickRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.SymbolInfoTickRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolInfoTickRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSymbol();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string symbol = 1;
 * @return {string}
 */
proto.mt5_term_api.SymbolInfoTickRequest.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.SymbolInfoTickRequest} returns this
 */
proto.mt5_term_api.SymbolInfoTickRequest.prototype.setSymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.mt5_term_api.SymbolInfoTickRequestReply.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.mt5_term_api.SymbolInfoTickRequestReply.ResponseCase = {
  RESPONSE_NOT_SET: 0,
  DATA: 1,
  ERROR: 2
};

/**
 * @return {proto.mt5_term_api.SymbolInfoTickRequestReply.ResponseCase}
 */
proto.mt5_term_api.SymbolInfoTickRequestReply.prototype.getResponseCase = function() {
  return /** @type {proto.mt5_term_api.SymbolInfoTickRequestReply.ResponseCase} */(jspb.Message.computeOneofCase(this, proto.mt5_term_api.SymbolInfoTickRequestReply.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.SymbolInfoTickRequestReply.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.SymbolInfoTickRequestReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.SymbolInfoTickRequestReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolInfoTickRequestReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && proto.mt5_term_api.MrpcMqlTick.toObject(includeInstance, f),
    error: (f = msg.getError()) && mrpc$mt5$error_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.SymbolInfoTickRequestReply}
 */
proto.mt5_term_api.SymbolInfoTickRequestReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.SymbolInfoTickRequestReply;
  return proto.mt5_term_api.SymbolInfoTickRequestReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.SymbolInfoTickRequestReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.SymbolInfoTickRequestReply}
 */
proto.mt5_term_api.SymbolInfoTickRequestReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mt5_term_api.MrpcMqlTick;
      reader.readMessage(value,proto.mt5_term_api.MrpcMqlTick.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 2:
      var value = new mrpc$mt5$error_pb.Error;
      reader.readMessage(value,mrpc$mt5$error_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.SymbolInfoTickRequestReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.SymbolInfoTickRequestReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.SymbolInfoTickRequestReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolInfoTickRequestReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mt5_term_api.MrpcMqlTick.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      mrpc$mt5$error_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional MrpcMqlTick data = 1;
 * @return {?proto.mt5_term_api.MrpcMqlTick}
 */
proto.mt5_term_api.SymbolInfoTickRequestReply.prototype.getData = function() {
  return /** @type{?proto.mt5_term_api.MrpcMqlTick} */ (
    jspb.Message.getWrapperField(this, proto.mt5_term_api.MrpcMqlTick, 1));
};


/**
 * @param {?proto.mt5_term_api.MrpcMqlTick|undefined} value
 * @return {!proto.mt5_term_api.SymbolInfoTickRequestReply} returns this
*/
proto.mt5_term_api.SymbolInfoTickRequestReply.prototype.setData = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.mt5_term_api.SymbolInfoTickRequestReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.SymbolInfoTickRequestReply} returns this
 */
proto.mt5_term_api.SymbolInfoTickRequestReply.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.SymbolInfoTickRequestReply.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Error error = 2;
 * @return {?proto.mt5_term_api.Error}
 */
proto.mt5_term_api.SymbolInfoTickRequestReply.prototype.getError = function() {
  return /** @type{?proto.mt5_term_api.Error} */ (
    jspb.Message.getWrapperField(this, mrpc$mt5$error_pb.Error, 2));
};


/**
 * @param {?proto.mt5_term_api.Error|undefined} value
 * @return {!proto.mt5_term_api.SymbolInfoTickRequestReply} returns this
*/
proto.mt5_term_api.SymbolInfoTickRequestReply.prototype.setError = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.mt5_term_api.SymbolInfoTickRequestReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.SymbolInfoTickRequestReply} returns this
 */
proto.mt5_term_api.SymbolInfoTickRequestReply.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.SymbolInfoTickRequestReply.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.MrpcMqlTick.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.MrpcMqlTick.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.MrpcMqlTick} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.MrpcMqlTick.toObject = function(includeInstance, msg) {
  var f, obj = {
    time: jspb.Message.getFieldWithDefault(msg, 1, 0),
    bid: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    ask: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    last: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    volume: jspb.Message.getFieldWithDefault(msg, 5, 0),
    timeMsc: jspb.Message.getFieldWithDefault(msg, 6, 0),
    flags: jspb.Message.getFieldWithDefault(msg, 7, 0),
    volumeReal: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.MrpcMqlTick}
 */
proto.mt5_term_api.MrpcMqlTick.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.MrpcMqlTick;
  return proto.mt5_term_api.MrpcMqlTick.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.MrpcMqlTick} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.MrpcMqlTick}
 */
proto.mt5_term_api.MrpcMqlTick.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTime(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAsk(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLast(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setVolume(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimeMsc(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFlags(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVolumeReal(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.MrpcMqlTick.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.MrpcMqlTick.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.MrpcMqlTick} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.MrpcMqlTick.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTime();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getBid();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getAsk();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getLast();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getVolume();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getTimeMsc();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getFlags();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getVolumeReal();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
};


/**
 * optional int64 time = 1;
 * @return {number}
 */
proto.mt5_term_api.MrpcMqlTick.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.MrpcMqlTick} returns this
 */
proto.mt5_term_api.MrpcMqlTick.prototype.setTime = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional double bid = 2;
 * @return {number}
 */
proto.mt5_term_api.MrpcMqlTick.prototype.getBid = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.MrpcMqlTick} returns this
 */
proto.mt5_term_api.MrpcMqlTick.prototype.setBid = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double ask = 3;
 * @return {number}
 */
proto.mt5_term_api.MrpcMqlTick.prototype.getAsk = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.MrpcMqlTick} returns this
 */
proto.mt5_term_api.MrpcMqlTick.prototype.setAsk = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double last = 4;
 * @return {number}
 */
proto.mt5_term_api.MrpcMqlTick.prototype.getLast = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.MrpcMqlTick} returns this
 */
proto.mt5_term_api.MrpcMqlTick.prototype.setLast = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional uint64 volume = 5;
 * @return {number}
 */
proto.mt5_term_api.MrpcMqlTick.prototype.getVolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.MrpcMqlTick} returns this
 */
proto.mt5_term_api.MrpcMqlTick.prototype.setVolume = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 time_msc = 6;
 * @return {number}
 */
proto.mt5_term_api.MrpcMqlTick.prototype.getTimeMsc = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.MrpcMqlTick} returns this
 */
proto.mt5_term_api.MrpcMqlTick.prototype.setTimeMsc = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint32 flags = 7;
 * @return {number}
 */
proto.mt5_term_api.MrpcMqlTick.prototype.getFlags = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.MrpcMqlTick} returns this
 */
proto.mt5_term_api.MrpcMqlTick.prototype.setFlags = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional double volume_real = 8;
 * @return {number}
 */
proto.mt5_term_api.MrpcMqlTick.prototype.getVolumeReal = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.MrpcMqlTick} returns this
 */
proto.mt5_term_api.MrpcMqlTick.prototype.setVolumeReal = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.SymbolInfoSessionQuoteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.SymbolInfoSessionQuoteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.SymbolInfoSessionQuoteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolInfoSessionQuoteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbol: jspb.Message.getFieldWithDefault(msg, 1, ""),
    dayOfWeek: jspb.Message.getFieldWithDefault(msg, 2, 0),
    sessionIndex: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.SymbolInfoSessionQuoteRequest}
 */
proto.mt5_term_api.SymbolInfoSessionQuoteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.SymbolInfoSessionQuoteRequest;
  return proto.mt5_term_api.SymbolInfoSessionQuoteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.SymbolInfoSessionQuoteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.SymbolInfoSessionQuoteRequest}
 */
proto.mt5_term_api.SymbolInfoSessionQuoteRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbol(value);
      break;
    case 2:
      var value = /** @type {!proto.mt5_term_api.DayOfWeek} */ (reader.readEnum());
      msg.setDayOfWeek(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSessionIndex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.SymbolInfoSessionQuoteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.SymbolInfoSessionQuoteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.SymbolInfoSessionQuoteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolInfoSessionQuoteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSymbol();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDayOfWeek();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getSessionIndex();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional string symbol = 1;
 * @return {string}
 */
proto.mt5_term_api.SymbolInfoSessionQuoteRequest.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.SymbolInfoSessionQuoteRequest} returns this
 */
proto.mt5_term_api.SymbolInfoSessionQuoteRequest.prototype.setSymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional DayOfWeek day_of_week = 2;
 * @return {!proto.mt5_term_api.DayOfWeek}
 */
proto.mt5_term_api.SymbolInfoSessionQuoteRequest.prototype.getDayOfWeek = function() {
  return /** @type {!proto.mt5_term_api.DayOfWeek} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.mt5_term_api.DayOfWeek} value
 * @return {!proto.mt5_term_api.SymbolInfoSessionQuoteRequest} returns this
 */
proto.mt5_term_api.SymbolInfoSessionQuoteRequest.prototype.setDayOfWeek = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional uint32 session_index = 3;
 * @return {number}
 */
proto.mt5_term_api.SymbolInfoSessionQuoteRequest.prototype.getSessionIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolInfoSessionQuoteRequest} returns this
 */
proto.mt5_term_api.SymbolInfoSessionQuoteRequest.prototype.setSessionIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.mt5_term_api.SymbolInfoSessionQuoteReply.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.mt5_term_api.SymbolInfoSessionQuoteReply.ResponseCase = {
  RESPONSE_NOT_SET: 0,
  DATA: 1,
  ERROR: 2
};

/**
 * @return {proto.mt5_term_api.SymbolInfoSessionQuoteReply.ResponseCase}
 */
proto.mt5_term_api.SymbolInfoSessionQuoteReply.prototype.getResponseCase = function() {
  return /** @type {proto.mt5_term_api.SymbolInfoSessionQuoteReply.ResponseCase} */(jspb.Message.computeOneofCase(this, proto.mt5_term_api.SymbolInfoSessionQuoteReply.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.SymbolInfoSessionQuoteReply.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.SymbolInfoSessionQuoteReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.SymbolInfoSessionQuoteReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolInfoSessionQuoteReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && proto.mt5_term_api.SymbolInfoSessionQuoteData.toObject(includeInstance, f),
    error: (f = msg.getError()) && mrpc$mt5$error_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.SymbolInfoSessionQuoteReply}
 */
proto.mt5_term_api.SymbolInfoSessionQuoteReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.SymbolInfoSessionQuoteReply;
  return proto.mt5_term_api.SymbolInfoSessionQuoteReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.SymbolInfoSessionQuoteReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.SymbolInfoSessionQuoteReply}
 */
proto.mt5_term_api.SymbolInfoSessionQuoteReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mt5_term_api.SymbolInfoSessionQuoteData;
      reader.readMessage(value,proto.mt5_term_api.SymbolInfoSessionQuoteData.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 2:
      var value = new mrpc$mt5$error_pb.Error;
      reader.readMessage(value,mrpc$mt5$error_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.SymbolInfoSessionQuoteReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.SymbolInfoSessionQuoteReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.SymbolInfoSessionQuoteReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolInfoSessionQuoteReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mt5_term_api.SymbolInfoSessionQuoteData.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      mrpc$mt5$error_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional SymbolInfoSessionQuoteData data = 1;
 * @return {?proto.mt5_term_api.SymbolInfoSessionQuoteData}
 */
proto.mt5_term_api.SymbolInfoSessionQuoteReply.prototype.getData = function() {
  return /** @type{?proto.mt5_term_api.SymbolInfoSessionQuoteData} */ (
    jspb.Message.getWrapperField(this, proto.mt5_term_api.SymbolInfoSessionQuoteData, 1));
};


/**
 * @param {?proto.mt5_term_api.SymbolInfoSessionQuoteData|undefined} value
 * @return {!proto.mt5_term_api.SymbolInfoSessionQuoteReply} returns this
*/
proto.mt5_term_api.SymbolInfoSessionQuoteReply.prototype.setData = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.mt5_term_api.SymbolInfoSessionQuoteReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.SymbolInfoSessionQuoteReply} returns this
 */
proto.mt5_term_api.SymbolInfoSessionQuoteReply.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.SymbolInfoSessionQuoteReply.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Error error = 2;
 * @return {?proto.mt5_term_api.Error}
 */
proto.mt5_term_api.SymbolInfoSessionQuoteReply.prototype.getError = function() {
  return /** @type{?proto.mt5_term_api.Error} */ (
    jspb.Message.getWrapperField(this, mrpc$mt5$error_pb.Error, 2));
};


/**
 * @param {?proto.mt5_term_api.Error|undefined} value
 * @return {!proto.mt5_term_api.SymbolInfoSessionQuoteReply} returns this
*/
proto.mt5_term_api.SymbolInfoSessionQuoteReply.prototype.setError = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.mt5_term_api.SymbolInfoSessionQuoteReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.SymbolInfoSessionQuoteReply} returns this
 */
proto.mt5_term_api.SymbolInfoSessionQuoteReply.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.SymbolInfoSessionQuoteReply.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.SymbolInfoSessionQuoteData.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.SymbolInfoSessionQuoteData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.SymbolInfoSessionQuoteData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolInfoSessionQuoteData.toObject = function(includeInstance, msg) {
  var f, obj = {
    from: (f = msg.getFrom()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    to: (f = msg.getTo()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.SymbolInfoSessionQuoteData}
 */
proto.mt5_term_api.SymbolInfoSessionQuoteData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.SymbolInfoSessionQuoteData;
  return proto.mt5_term_api.SymbolInfoSessionQuoteData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.SymbolInfoSessionQuoteData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.SymbolInfoSessionQuoteData}
 */
proto.mt5_term_api.SymbolInfoSessionQuoteData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFrom(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.SymbolInfoSessionQuoteData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.SymbolInfoSessionQuoteData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.SymbolInfoSessionQuoteData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolInfoSessionQuoteData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFrom();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp from = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.mt5_term_api.SymbolInfoSessionQuoteData.prototype.getFrom = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.mt5_term_api.SymbolInfoSessionQuoteData} returns this
*/
proto.mt5_term_api.SymbolInfoSessionQuoteData.prototype.setFrom = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.SymbolInfoSessionQuoteData} returns this
 */
proto.mt5_term_api.SymbolInfoSessionQuoteData.prototype.clearFrom = function() {
  return this.setFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.SymbolInfoSessionQuoteData.prototype.hasFrom = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp to = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.mt5_term_api.SymbolInfoSessionQuoteData.prototype.getTo = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.mt5_term_api.SymbolInfoSessionQuoteData} returns this
*/
proto.mt5_term_api.SymbolInfoSessionQuoteData.prototype.setTo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.SymbolInfoSessionQuoteData} returns this
 */
proto.mt5_term_api.SymbolInfoSessionQuoteData.prototype.clearTo = function() {
  return this.setTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.SymbolInfoSessionQuoteData.prototype.hasTo = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.SymbolInfoSessionTradeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.SymbolInfoSessionTradeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.SymbolInfoSessionTradeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolInfoSessionTradeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbol: jspb.Message.getFieldWithDefault(msg, 1, ""),
    dayOfWeek: jspb.Message.getFieldWithDefault(msg, 2, 0),
    sessionIndex: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.SymbolInfoSessionTradeRequest}
 */
proto.mt5_term_api.SymbolInfoSessionTradeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.SymbolInfoSessionTradeRequest;
  return proto.mt5_term_api.SymbolInfoSessionTradeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.SymbolInfoSessionTradeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.SymbolInfoSessionTradeRequest}
 */
proto.mt5_term_api.SymbolInfoSessionTradeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbol(value);
      break;
    case 2:
      var value = /** @type {!proto.mt5_term_api.DayOfWeek} */ (reader.readEnum());
      msg.setDayOfWeek(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSessionIndex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.SymbolInfoSessionTradeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.SymbolInfoSessionTradeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.SymbolInfoSessionTradeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolInfoSessionTradeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSymbol();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDayOfWeek();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getSessionIndex();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional string symbol = 1;
 * @return {string}
 */
proto.mt5_term_api.SymbolInfoSessionTradeRequest.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.SymbolInfoSessionTradeRequest} returns this
 */
proto.mt5_term_api.SymbolInfoSessionTradeRequest.prototype.setSymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional DayOfWeek day_of_week = 2;
 * @return {!proto.mt5_term_api.DayOfWeek}
 */
proto.mt5_term_api.SymbolInfoSessionTradeRequest.prototype.getDayOfWeek = function() {
  return /** @type {!proto.mt5_term_api.DayOfWeek} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.mt5_term_api.DayOfWeek} value
 * @return {!proto.mt5_term_api.SymbolInfoSessionTradeRequest} returns this
 */
proto.mt5_term_api.SymbolInfoSessionTradeRequest.prototype.setDayOfWeek = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional uint32 session_index = 3;
 * @return {number}
 */
proto.mt5_term_api.SymbolInfoSessionTradeRequest.prototype.getSessionIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolInfoSessionTradeRequest} returns this
 */
proto.mt5_term_api.SymbolInfoSessionTradeRequest.prototype.setSessionIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.mt5_term_api.SymbolInfoSessionTradeReply.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.mt5_term_api.SymbolInfoSessionTradeReply.ResponseCase = {
  RESPONSE_NOT_SET: 0,
  DATA: 1,
  ERROR: 2
};

/**
 * @return {proto.mt5_term_api.SymbolInfoSessionTradeReply.ResponseCase}
 */
proto.mt5_term_api.SymbolInfoSessionTradeReply.prototype.getResponseCase = function() {
  return /** @type {proto.mt5_term_api.SymbolInfoSessionTradeReply.ResponseCase} */(jspb.Message.computeOneofCase(this, proto.mt5_term_api.SymbolInfoSessionTradeReply.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.SymbolInfoSessionTradeReply.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.SymbolInfoSessionTradeReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.SymbolInfoSessionTradeReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolInfoSessionTradeReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && proto.mt5_term_api.SymbolInfoSessionTradeData.toObject(includeInstance, f),
    error: (f = msg.getError()) && mrpc$mt5$error_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.SymbolInfoSessionTradeReply}
 */
proto.mt5_term_api.SymbolInfoSessionTradeReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.SymbolInfoSessionTradeReply;
  return proto.mt5_term_api.SymbolInfoSessionTradeReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.SymbolInfoSessionTradeReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.SymbolInfoSessionTradeReply}
 */
proto.mt5_term_api.SymbolInfoSessionTradeReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mt5_term_api.SymbolInfoSessionTradeData;
      reader.readMessage(value,proto.mt5_term_api.SymbolInfoSessionTradeData.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 2:
      var value = new mrpc$mt5$error_pb.Error;
      reader.readMessage(value,mrpc$mt5$error_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.SymbolInfoSessionTradeReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.SymbolInfoSessionTradeReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.SymbolInfoSessionTradeReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolInfoSessionTradeReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mt5_term_api.SymbolInfoSessionTradeData.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      mrpc$mt5$error_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional SymbolInfoSessionTradeData data = 1;
 * @return {?proto.mt5_term_api.SymbolInfoSessionTradeData}
 */
proto.mt5_term_api.SymbolInfoSessionTradeReply.prototype.getData = function() {
  return /** @type{?proto.mt5_term_api.SymbolInfoSessionTradeData} */ (
    jspb.Message.getWrapperField(this, proto.mt5_term_api.SymbolInfoSessionTradeData, 1));
};


/**
 * @param {?proto.mt5_term_api.SymbolInfoSessionTradeData|undefined} value
 * @return {!proto.mt5_term_api.SymbolInfoSessionTradeReply} returns this
*/
proto.mt5_term_api.SymbolInfoSessionTradeReply.prototype.setData = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.mt5_term_api.SymbolInfoSessionTradeReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.SymbolInfoSessionTradeReply} returns this
 */
proto.mt5_term_api.SymbolInfoSessionTradeReply.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.SymbolInfoSessionTradeReply.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Error error = 2;
 * @return {?proto.mt5_term_api.Error}
 */
proto.mt5_term_api.SymbolInfoSessionTradeReply.prototype.getError = function() {
  return /** @type{?proto.mt5_term_api.Error} */ (
    jspb.Message.getWrapperField(this, mrpc$mt5$error_pb.Error, 2));
};


/**
 * @param {?proto.mt5_term_api.Error|undefined} value
 * @return {!proto.mt5_term_api.SymbolInfoSessionTradeReply} returns this
*/
proto.mt5_term_api.SymbolInfoSessionTradeReply.prototype.setError = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.mt5_term_api.SymbolInfoSessionTradeReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.SymbolInfoSessionTradeReply} returns this
 */
proto.mt5_term_api.SymbolInfoSessionTradeReply.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.SymbolInfoSessionTradeReply.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.SymbolInfoSessionTradeData.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.SymbolInfoSessionTradeData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.SymbolInfoSessionTradeData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolInfoSessionTradeData.toObject = function(includeInstance, msg) {
  var f, obj = {
    from: (f = msg.getFrom()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    to: (f = msg.getTo()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.SymbolInfoSessionTradeData}
 */
proto.mt5_term_api.SymbolInfoSessionTradeData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.SymbolInfoSessionTradeData;
  return proto.mt5_term_api.SymbolInfoSessionTradeData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.SymbolInfoSessionTradeData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.SymbolInfoSessionTradeData}
 */
proto.mt5_term_api.SymbolInfoSessionTradeData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFrom(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.SymbolInfoSessionTradeData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.SymbolInfoSessionTradeData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.SymbolInfoSessionTradeData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolInfoSessionTradeData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFrom();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp from = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.mt5_term_api.SymbolInfoSessionTradeData.prototype.getFrom = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.mt5_term_api.SymbolInfoSessionTradeData} returns this
*/
proto.mt5_term_api.SymbolInfoSessionTradeData.prototype.setFrom = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.SymbolInfoSessionTradeData} returns this
 */
proto.mt5_term_api.SymbolInfoSessionTradeData.prototype.clearFrom = function() {
  return this.setFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.SymbolInfoSessionTradeData.prototype.hasFrom = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp to = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.mt5_term_api.SymbolInfoSessionTradeData.prototype.getTo = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.mt5_term_api.SymbolInfoSessionTradeData} returns this
*/
proto.mt5_term_api.SymbolInfoSessionTradeData.prototype.setTo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.SymbolInfoSessionTradeData} returns this
 */
proto.mt5_term_api.SymbolInfoSessionTradeData.prototype.clearTo = function() {
  return this.setTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.SymbolInfoSessionTradeData.prototype.hasTo = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.MarketBookAddRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.MarketBookAddRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.MarketBookAddRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.MarketBookAddRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbol: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.MarketBookAddRequest}
 */
proto.mt5_term_api.MarketBookAddRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.MarketBookAddRequest;
  return proto.mt5_term_api.MarketBookAddRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.MarketBookAddRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.MarketBookAddRequest}
 */
proto.mt5_term_api.MarketBookAddRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbol(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.MarketBookAddRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.MarketBookAddRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.MarketBookAddRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.MarketBookAddRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSymbol();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string symbol = 1;
 * @return {string}
 */
proto.mt5_term_api.MarketBookAddRequest.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.MarketBookAddRequest} returns this
 */
proto.mt5_term_api.MarketBookAddRequest.prototype.setSymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.mt5_term_api.MarketBookAddReply.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.mt5_term_api.MarketBookAddReply.ResponseCase = {
  RESPONSE_NOT_SET: 0,
  DATA: 1,
  ERROR: 2
};

/**
 * @return {proto.mt5_term_api.MarketBookAddReply.ResponseCase}
 */
proto.mt5_term_api.MarketBookAddReply.prototype.getResponseCase = function() {
  return /** @type {proto.mt5_term_api.MarketBookAddReply.ResponseCase} */(jspb.Message.computeOneofCase(this, proto.mt5_term_api.MarketBookAddReply.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.MarketBookAddReply.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.MarketBookAddReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.MarketBookAddReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.MarketBookAddReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && proto.mt5_term_api.MarketBookAddData.toObject(includeInstance, f),
    error: (f = msg.getError()) && mrpc$mt5$error_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.MarketBookAddReply}
 */
proto.mt5_term_api.MarketBookAddReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.MarketBookAddReply;
  return proto.mt5_term_api.MarketBookAddReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.MarketBookAddReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.MarketBookAddReply}
 */
proto.mt5_term_api.MarketBookAddReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mt5_term_api.MarketBookAddData;
      reader.readMessage(value,proto.mt5_term_api.MarketBookAddData.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 2:
      var value = new mrpc$mt5$error_pb.Error;
      reader.readMessage(value,mrpc$mt5$error_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.MarketBookAddReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.MarketBookAddReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.MarketBookAddReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.MarketBookAddReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mt5_term_api.MarketBookAddData.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      mrpc$mt5$error_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional MarketBookAddData data = 1;
 * @return {?proto.mt5_term_api.MarketBookAddData}
 */
proto.mt5_term_api.MarketBookAddReply.prototype.getData = function() {
  return /** @type{?proto.mt5_term_api.MarketBookAddData} */ (
    jspb.Message.getWrapperField(this, proto.mt5_term_api.MarketBookAddData, 1));
};


/**
 * @param {?proto.mt5_term_api.MarketBookAddData|undefined} value
 * @return {!proto.mt5_term_api.MarketBookAddReply} returns this
*/
proto.mt5_term_api.MarketBookAddReply.prototype.setData = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.mt5_term_api.MarketBookAddReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.MarketBookAddReply} returns this
 */
proto.mt5_term_api.MarketBookAddReply.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.MarketBookAddReply.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Error error = 2;
 * @return {?proto.mt5_term_api.Error}
 */
proto.mt5_term_api.MarketBookAddReply.prototype.getError = function() {
  return /** @type{?proto.mt5_term_api.Error} */ (
    jspb.Message.getWrapperField(this, mrpc$mt5$error_pb.Error, 2));
};


/**
 * @param {?proto.mt5_term_api.Error|undefined} value
 * @return {!proto.mt5_term_api.MarketBookAddReply} returns this
*/
proto.mt5_term_api.MarketBookAddReply.prototype.setError = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.mt5_term_api.MarketBookAddReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.MarketBookAddReply} returns this
 */
proto.mt5_term_api.MarketBookAddReply.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.MarketBookAddReply.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.MarketBookAddData.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.MarketBookAddData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.MarketBookAddData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.MarketBookAddData.toObject = function(includeInstance, msg) {
  var f, obj = {
    openedSuccessfully: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.MarketBookAddData}
 */
proto.mt5_term_api.MarketBookAddData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.MarketBookAddData;
  return proto.mt5_term_api.MarketBookAddData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.MarketBookAddData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.MarketBookAddData}
 */
proto.mt5_term_api.MarketBookAddData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOpenedSuccessfully(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.MarketBookAddData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.MarketBookAddData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.MarketBookAddData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.MarketBookAddData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpenedSuccessfully();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool opened_successfully = 1;
 * @return {boolean}
 */
proto.mt5_term_api.MarketBookAddData.prototype.getOpenedSuccessfully = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mt5_term_api.MarketBookAddData} returns this
 */
proto.mt5_term_api.MarketBookAddData.prototype.setOpenedSuccessfully = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.MarketBookReleaseRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.MarketBookReleaseRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.MarketBookReleaseRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.MarketBookReleaseRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbol: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.MarketBookReleaseRequest}
 */
proto.mt5_term_api.MarketBookReleaseRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.MarketBookReleaseRequest;
  return proto.mt5_term_api.MarketBookReleaseRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.MarketBookReleaseRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.MarketBookReleaseRequest}
 */
proto.mt5_term_api.MarketBookReleaseRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbol(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.MarketBookReleaseRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.MarketBookReleaseRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.MarketBookReleaseRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.MarketBookReleaseRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSymbol();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string symbol = 1;
 * @return {string}
 */
proto.mt5_term_api.MarketBookReleaseRequest.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.MarketBookReleaseRequest} returns this
 */
proto.mt5_term_api.MarketBookReleaseRequest.prototype.setSymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.mt5_term_api.MarketBookReleaseReply.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.mt5_term_api.MarketBookReleaseReply.ResponseCase = {
  RESPONSE_NOT_SET: 0,
  DATA: 1,
  ERROR: 2
};

/**
 * @return {proto.mt5_term_api.MarketBookReleaseReply.ResponseCase}
 */
proto.mt5_term_api.MarketBookReleaseReply.prototype.getResponseCase = function() {
  return /** @type {proto.mt5_term_api.MarketBookReleaseReply.ResponseCase} */(jspb.Message.computeOneofCase(this, proto.mt5_term_api.MarketBookReleaseReply.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.MarketBookReleaseReply.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.MarketBookReleaseReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.MarketBookReleaseReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.MarketBookReleaseReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && proto.mt5_term_api.MarketBookReleaseData.toObject(includeInstance, f),
    error: (f = msg.getError()) && mrpc$mt5$error_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.MarketBookReleaseReply}
 */
proto.mt5_term_api.MarketBookReleaseReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.MarketBookReleaseReply;
  return proto.mt5_term_api.MarketBookReleaseReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.MarketBookReleaseReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.MarketBookReleaseReply}
 */
proto.mt5_term_api.MarketBookReleaseReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mt5_term_api.MarketBookReleaseData;
      reader.readMessage(value,proto.mt5_term_api.MarketBookReleaseData.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 2:
      var value = new mrpc$mt5$error_pb.Error;
      reader.readMessage(value,mrpc$mt5$error_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.MarketBookReleaseReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.MarketBookReleaseReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.MarketBookReleaseReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.MarketBookReleaseReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mt5_term_api.MarketBookReleaseData.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      mrpc$mt5$error_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional MarketBookReleaseData data = 1;
 * @return {?proto.mt5_term_api.MarketBookReleaseData}
 */
proto.mt5_term_api.MarketBookReleaseReply.prototype.getData = function() {
  return /** @type{?proto.mt5_term_api.MarketBookReleaseData} */ (
    jspb.Message.getWrapperField(this, proto.mt5_term_api.MarketBookReleaseData, 1));
};


/**
 * @param {?proto.mt5_term_api.MarketBookReleaseData|undefined} value
 * @return {!proto.mt5_term_api.MarketBookReleaseReply} returns this
*/
proto.mt5_term_api.MarketBookReleaseReply.prototype.setData = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.mt5_term_api.MarketBookReleaseReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.MarketBookReleaseReply} returns this
 */
proto.mt5_term_api.MarketBookReleaseReply.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.MarketBookReleaseReply.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Error error = 2;
 * @return {?proto.mt5_term_api.Error}
 */
proto.mt5_term_api.MarketBookReleaseReply.prototype.getError = function() {
  return /** @type{?proto.mt5_term_api.Error} */ (
    jspb.Message.getWrapperField(this, mrpc$mt5$error_pb.Error, 2));
};


/**
 * @param {?proto.mt5_term_api.Error|undefined} value
 * @return {!proto.mt5_term_api.MarketBookReleaseReply} returns this
*/
proto.mt5_term_api.MarketBookReleaseReply.prototype.setError = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.mt5_term_api.MarketBookReleaseReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.MarketBookReleaseReply} returns this
 */
proto.mt5_term_api.MarketBookReleaseReply.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.MarketBookReleaseReply.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.MarketBookReleaseData.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.MarketBookReleaseData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.MarketBookReleaseData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.MarketBookReleaseData.toObject = function(includeInstance, msg) {
  var f, obj = {
    closedSuccessfully: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.MarketBookReleaseData}
 */
proto.mt5_term_api.MarketBookReleaseData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.MarketBookReleaseData;
  return proto.mt5_term_api.MarketBookReleaseData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.MarketBookReleaseData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.MarketBookReleaseData}
 */
proto.mt5_term_api.MarketBookReleaseData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setClosedSuccessfully(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.MarketBookReleaseData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.MarketBookReleaseData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.MarketBookReleaseData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.MarketBookReleaseData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClosedSuccessfully();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool closed_successfully = 1;
 * @return {boolean}
 */
proto.mt5_term_api.MarketBookReleaseData.prototype.getClosedSuccessfully = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mt5_term_api.MarketBookReleaseData} returns this
 */
proto.mt5_term_api.MarketBookReleaseData.prototype.setClosedSuccessfully = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.MarketBookGetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.MarketBookGetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.MarketBookGetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.MarketBookGetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbol: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.MarketBookGetRequest}
 */
proto.mt5_term_api.MarketBookGetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.MarketBookGetRequest;
  return proto.mt5_term_api.MarketBookGetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.MarketBookGetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.MarketBookGetRequest}
 */
proto.mt5_term_api.MarketBookGetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbol(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.MarketBookGetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.MarketBookGetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.MarketBookGetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.MarketBookGetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSymbol();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string symbol = 1;
 * @return {string}
 */
proto.mt5_term_api.MarketBookGetRequest.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.MarketBookGetRequest} returns this
 */
proto.mt5_term_api.MarketBookGetRequest.prototype.setSymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.mt5_term_api.MarketBookGetReply.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.mt5_term_api.MarketBookGetReply.ResponseCase = {
  RESPONSE_NOT_SET: 0,
  DATA: 1,
  ERROR: 2
};

/**
 * @return {proto.mt5_term_api.MarketBookGetReply.ResponseCase}
 */
proto.mt5_term_api.MarketBookGetReply.prototype.getResponseCase = function() {
  return /** @type {proto.mt5_term_api.MarketBookGetReply.ResponseCase} */(jspb.Message.computeOneofCase(this, proto.mt5_term_api.MarketBookGetReply.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.MarketBookGetReply.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.MarketBookGetReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.MarketBookGetReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.MarketBookGetReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && proto.mt5_term_api.MarketBookGetData.toObject(includeInstance, f),
    error: (f = msg.getError()) && mrpc$mt5$error_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.MarketBookGetReply}
 */
proto.mt5_term_api.MarketBookGetReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.MarketBookGetReply;
  return proto.mt5_term_api.MarketBookGetReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.MarketBookGetReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.MarketBookGetReply}
 */
proto.mt5_term_api.MarketBookGetReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mt5_term_api.MarketBookGetData;
      reader.readMessage(value,proto.mt5_term_api.MarketBookGetData.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 2:
      var value = new mrpc$mt5$error_pb.Error;
      reader.readMessage(value,mrpc$mt5$error_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.MarketBookGetReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.MarketBookGetReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.MarketBookGetReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.MarketBookGetReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mt5_term_api.MarketBookGetData.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      mrpc$mt5$error_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional MarketBookGetData data = 1;
 * @return {?proto.mt5_term_api.MarketBookGetData}
 */
proto.mt5_term_api.MarketBookGetReply.prototype.getData = function() {
  return /** @type{?proto.mt5_term_api.MarketBookGetData} */ (
    jspb.Message.getWrapperField(this, proto.mt5_term_api.MarketBookGetData, 1));
};


/**
 * @param {?proto.mt5_term_api.MarketBookGetData|undefined} value
 * @return {!proto.mt5_term_api.MarketBookGetReply} returns this
*/
proto.mt5_term_api.MarketBookGetReply.prototype.setData = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.mt5_term_api.MarketBookGetReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.MarketBookGetReply} returns this
 */
proto.mt5_term_api.MarketBookGetReply.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.MarketBookGetReply.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Error error = 2;
 * @return {?proto.mt5_term_api.Error}
 */
proto.mt5_term_api.MarketBookGetReply.prototype.getError = function() {
  return /** @type{?proto.mt5_term_api.Error} */ (
    jspb.Message.getWrapperField(this, mrpc$mt5$error_pb.Error, 2));
};


/**
 * @param {?proto.mt5_term_api.Error|undefined} value
 * @return {!proto.mt5_term_api.MarketBookGetReply} returns this
*/
proto.mt5_term_api.MarketBookGetReply.prototype.setError = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.mt5_term_api.MarketBookGetReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.MarketBookGetReply} returns this
 */
proto.mt5_term_api.MarketBookGetReply.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.MarketBookGetReply.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mt5_term_api.MarketBookGetData.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.MarketBookGetData.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.MarketBookGetData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.MarketBookGetData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.MarketBookGetData.toObject = function(includeInstance, msg) {
  var f, obj = {
    mqlBookInfosList: jspb.Message.toObjectList(msg.getMqlBookInfosList(),
    proto.mt5_term_api.MrpcMqlBookInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.MarketBookGetData}
 */
proto.mt5_term_api.MarketBookGetData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.MarketBookGetData;
  return proto.mt5_term_api.MarketBookGetData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.MarketBookGetData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.MarketBookGetData}
 */
proto.mt5_term_api.MarketBookGetData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mt5_term_api.MrpcMqlBookInfo;
      reader.readMessage(value,proto.mt5_term_api.MrpcMqlBookInfo.deserializeBinaryFromReader);
      msg.addMqlBookInfos(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.MarketBookGetData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.MarketBookGetData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.MarketBookGetData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.MarketBookGetData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMqlBookInfosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.mt5_term_api.MrpcMqlBookInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated MrpcMqlBookInfo mql_book_infos = 1;
 * @return {!Array<!proto.mt5_term_api.MrpcMqlBookInfo>}
 */
proto.mt5_term_api.MarketBookGetData.prototype.getMqlBookInfosList = function() {
  return /** @type{!Array<!proto.mt5_term_api.MrpcMqlBookInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.mt5_term_api.MrpcMqlBookInfo, 1));
};


/**
 * @param {!Array<!proto.mt5_term_api.MrpcMqlBookInfo>} value
 * @return {!proto.mt5_term_api.MarketBookGetData} returns this
*/
proto.mt5_term_api.MarketBookGetData.prototype.setMqlBookInfosList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.mt5_term_api.MrpcMqlBookInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mt5_term_api.MrpcMqlBookInfo}
 */
proto.mt5_term_api.MarketBookGetData.prototype.addMqlBookInfos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.mt5_term_api.MrpcMqlBookInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mt5_term_api.MarketBookGetData} returns this
 */
proto.mt5_term_api.MarketBookGetData.prototype.clearMqlBookInfosList = function() {
  return this.setMqlBookInfosList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.MrpcMqlBookInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.MrpcMqlBookInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.MrpcMqlBookInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.MrpcMqlBookInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    price: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    volume: jspb.Message.getFieldWithDefault(msg, 3, 0),
    volumeReal: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.MrpcMqlBookInfo}
 */
proto.mt5_term_api.MrpcMqlBookInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.MrpcMqlBookInfo;
  return proto.mt5_term_api.MrpcMqlBookInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.MrpcMqlBookInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.MrpcMqlBookInfo}
 */
proto.mt5_term_api.MrpcMqlBookInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mt5_term_api.BookType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVolume(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVolumeReal(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.MrpcMqlBookInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.MrpcMqlBookInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.MrpcMqlBookInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.MrpcMqlBookInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getVolume();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getVolumeReal();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
};


/**
 * optional BookType type = 1;
 * @return {!proto.mt5_term_api.BookType}
 */
proto.mt5_term_api.MrpcMqlBookInfo.prototype.getType = function() {
  return /** @type {!proto.mt5_term_api.BookType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.mt5_term_api.BookType} value
 * @return {!proto.mt5_term_api.MrpcMqlBookInfo} returns this
 */
proto.mt5_term_api.MrpcMqlBookInfo.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional double price = 2;
 * @return {number}
 */
proto.mt5_term_api.MrpcMqlBookInfo.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.MrpcMqlBookInfo} returns this
 */
proto.mt5_term_api.MrpcMqlBookInfo.prototype.setPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional int64 volume = 3;
 * @return {number}
 */
proto.mt5_term_api.MrpcMqlBookInfo.prototype.getVolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.MrpcMqlBookInfo} returns this
 */
proto.mt5_term_api.MrpcMqlBookInfo.prototype.setVolume = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional double volume_real = 4;
 * @return {number}
 */
proto.mt5_term_api.MrpcMqlBookInfo.prototype.getVolumeReal = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.MrpcMqlBookInfo} returns this
 */
proto.mt5_term_api.MrpcMqlBookInfo.prototype.setVolumeReal = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.PriceHistoryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.PriceHistoryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.PriceHistoryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.PriceHistoryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbol: jspb.Message.getFieldWithDefault(msg, 1, ""),
    timeframe: jspb.Message.getFieldWithDefault(msg, 2, 0),
    fromTime: jspb.Message.getFieldWithDefault(msg, 3, 0),
    toTime: jspb.Message.getFieldWithDefault(msg, 4, 0),
    maxBars: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.PriceHistoryRequest}
 */
proto.mt5_term_api.PriceHistoryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.PriceHistoryRequest;
  return proto.mt5_term_api.PriceHistoryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.PriceHistoryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.PriceHistoryRequest}
 */
proto.mt5_term_api.PriceHistoryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbol(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTimeframe(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFromTime(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setToTime(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxBars(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.PriceHistoryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.PriceHistoryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.PriceHistoryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.PriceHistoryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSymbol();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTimeframe();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getFromTime();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getToTime();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getMaxBars();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional string symbol = 1;
 * @return {string}
 */
proto.mt5_term_api.PriceHistoryRequest.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.PriceHistoryRequest} returns this
 */
proto.mt5_term_api.PriceHistoryRequest.prototype.setSymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 timeframe = 2;
 * @return {number}
 */
proto.mt5_term_api.PriceHistoryRequest.prototype.getTimeframe = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.PriceHistoryRequest} returns this
 */
proto.mt5_term_api.PriceHistoryRequest.prototype.setTimeframe = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 from_time = 3;
 * @return {number}
 */
proto.mt5_term_api.PriceHistoryRequest.prototype.getFromTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.PriceHistoryRequest} returns this
 */
proto.mt5_term_api.PriceHistoryRequest.prototype.setFromTime = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 to_time = 4;
 * @return {number}
 */
proto.mt5_term_api.PriceHistoryRequest.prototype.getToTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.PriceHistoryRequest} returns this
 */
proto.mt5_term_api.PriceHistoryRequest.prototype.setToTime = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 max_bars = 5;
 * @return {number}
 */
proto.mt5_term_api.PriceHistoryRequest.prototype.getMaxBars = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.PriceHistoryRequest} returns this
 */
proto.mt5_term_api.PriceHistoryRequest.prototype.setMaxBars = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.mt5_term_api.PriceHistoryReply.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.mt5_term_api.PriceHistoryReply.ResponseCase = {
  RESPONSE_NOT_SET: 0,
  DATA: 1,
  ERROR: 2
};

/**
 * @return {proto.mt5_term_api.PriceHistoryReply.ResponseCase}
 */
proto.mt5_term_api.PriceHistoryReply.prototype.getResponseCase = function() {
  return /** @type {proto.mt5_term_api.PriceHistoryReply.ResponseCase} */(jspb.Message.computeOneofCase(this, proto.mt5_term_api.PriceHistoryReply.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.PriceHistoryReply.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.PriceHistoryReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.PriceHistoryReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.PriceHistoryReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && proto.mt5_term_api.PriceHistoryData.toObject(includeInstance, f),
    error: (f = msg.getError()) && mrpc$mt5$error_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.PriceHistoryReply}
 */
proto.mt5_term_api.PriceHistoryReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.PriceHistoryReply;
  return proto.mt5_term_api.PriceHistoryReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.PriceHistoryReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.PriceHistoryReply}
 */
proto.mt5_term_api.PriceHistoryReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mt5_term_api.PriceHistoryData;
      reader.readMessage(value,proto.mt5_term_api.PriceHistoryData.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 2:
      var value = new mrpc$mt5$error_pb.Error;
      reader.readMessage(value,mrpc$mt5$error_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.PriceHistoryReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.PriceHistoryReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.PriceHistoryReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.PriceHistoryReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mt5_term_api.PriceHistoryData.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      mrpc$mt5$error_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional PriceHistoryData data = 1;
 * @return {?proto.mt5_term_api.PriceHistoryData}
 */
proto.mt5_term_api.PriceHistoryReply.prototype.getData = function() {
  return /** @type{?proto.mt5_term_api.PriceHistoryData} */ (
    jspb.Message.getWrapperField(this, proto.mt5_term_api.PriceHistoryData, 1));
};


/**
 * @param {?proto.mt5_term_api.PriceHistoryData|undefined} value
 * @return {!proto.mt5_term_api.PriceHistoryReply} returns this
*/
proto.mt5_term_api.PriceHistoryReply.prototype.setData = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.mt5_term_api.PriceHistoryReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.PriceHistoryReply} returns this
 */
proto.mt5_term_api.PriceHistoryReply.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.PriceHistoryReply.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Error error = 2;
 * @return {?proto.mt5_term_api.Error}
 */
proto.mt5_term_api.PriceHistoryReply.prototype.getError = function() {
  return /** @type{?proto.mt5_term_api.Error} */ (
    jspb.Message.getWrapperField(this, mrpc$mt5$error_pb.Error, 2));
};


/**
 * @param {?proto.mt5_term_api.Error|undefined} value
 * @return {!proto.mt5_term_api.PriceHistoryReply} returns this
*/
proto.mt5_term_api.PriceHistoryReply.prototype.setError = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.mt5_term_api.PriceHistoryReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.PriceHistoryReply} returns this
 */
proto.mt5_term_api.PriceHistoryReply.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.PriceHistoryReply.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mt5_term_api.PriceHistoryData.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.PriceHistoryData.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.PriceHistoryData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.PriceHistoryData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.PriceHistoryData.toObject = function(includeInstance, msg) {
  var f, obj = {
    barsList: jspb.Message.toObjectList(msg.getBarsList(),
    proto.mt5_term_api.PriceBar.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.PriceHistoryData}
 */
proto.mt5_term_api.PriceHistoryData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.PriceHistoryData;
  return proto.mt5_term_api.PriceHistoryData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.PriceHistoryData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.PriceHistoryData}
 */
proto.mt5_term_api.PriceHistoryData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mt5_term_api.PriceBar;
      reader.readMessage(value,proto.mt5_term_api.PriceBar.deserializeBinaryFromReader);
      msg.addBars(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.PriceHistoryData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.PriceHistoryData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.PriceHistoryData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.PriceHistoryData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBarsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.mt5_term_api.PriceBar.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PriceBar bars = 1;
 * @return {!Array<!proto.mt5_term_api.PriceBar>}
 */
proto.mt5_term_api.PriceHistoryData.prototype.getBarsList = function() {
  return /** @type{!Array<!proto.mt5_term_api.PriceBar>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.mt5_term_api.PriceBar, 1));
};


/**
 * @param {!Array<!proto.mt5_term_api.PriceBar>} value
 * @return {!proto.mt5_term_api.PriceHistoryData} returns this
*/
proto.mt5_term_api.PriceHistoryData.prototype.setBarsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.mt5_term_api.PriceBar=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mt5_term_api.PriceBar}
 */
proto.mt5_term_api.PriceHistoryData.prototype.addBars = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.mt5_term_api.PriceBar, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mt5_term_api.PriceHistoryData} returns this
 */
proto.mt5_term_api.PriceHistoryData.prototype.clearBarsList = function() {
  return this.setBarsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mt5_term_api.PriceBar.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.PriceBar.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.PriceBar} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.PriceBar.toObject = function(includeInstance, msg) {
  var f, obj = {
    time: jspb.Message.getFieldWithDefault(msg, 1, 0),
    open: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    high: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    low: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    close: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    tickVolume: jspb.Message.getFieldWithDefault(msg, 6, 0),
    spread: jspb.Message.getFieldWithDefault(msg, 7, 0),
    realVolume: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mt5_term_api.PriceBar}
 */
proto.mt5_term_api.PriceBar.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.PriceBar;
  return proto.mt5_term_api.PriceBar.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.PriceBar} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.PriceBar}
 */
proto.mt5_term_api.PriceBar.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTime(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOpen(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setHigh(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLow(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setClose(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTickVolume(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSpread(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRealVolume(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mt5_term_api.PriceBar.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.PriceBar.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.PriceBar} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.PriceBar.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTime();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getOpen();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getHigh();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getLow();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getClose();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getTickVolume();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getSpread();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getRealVolume();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
};


/**
 * optional int64 time = 1;
 * @return {number}
 */
proto.mt5_term_api.PriceBar.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.PriceBar} returns this
 */
proto.mt5_term_api.PriceBar.prototype.setTime = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional double open = 2;
 * @return {number}
 */
proto.mt5_term_api.PriceBar.prototype.getOpen = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.PriceBar} returns this
 */
proto.mt5_term_api.PriceBar.prototype.setOpen = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double high = 3;
 * @return {number}
 */
proto.mt5_term_api.PriceBar.prototype.getHigh = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.PriceBar} returns this
 */
proto.mt5_term_api.PriceBar.prototype.setHigh = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double low = 4;
 * @return {number}
 */
proto.mt5_term_api.PriceBar.prototype.getLow = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.PriceBar} returns this
 */
proto.mt5_term_api.PriceBar.prototype.setLow = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double close = 5;
 * @return {number}
 */
proto.mt5_term_api.PriceBar.prototype.getClose = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.PriceBar} returns this
 */
proto.mt5_term_api.PriceBar.prototype.setClose = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional int64 tick_volume = 6;
 * @return {number}
 */
proto.mt5_term_api.PriceBar.prototype.getTickVolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.PriceBar} returns this
 */
proto.mt5_term_api.PriceBar.prototype.setTickVolume = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 spread = 7;
 * @return {number}
 */
proto.mt5_term_api.PriceBar.prototype.getSpread = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.PriceBar} returns this
 */
proto.mt5_term_api.PriceBar.prototype.setSpread = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int64 real_volume = 8;
 * @return {number}
 */
proto.mt5_term_api.PriceBar.prototype.getRealVolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.PriceBar} returns this
 */
proto.mt5_term_api.PriceBar.prototype.setRealVolume = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * @enum {number}
 */
proto.mt5_term_api.SymbolInfoDoubleProperty = {
  SYMBOL_BID: 0,
  SYMBOL_BIDHIGH: 1,
  SYMBOL_BIDLOW: 2,
  SYMBOL_ASK: 3,
  SYMBOL_ASKHIGH: 4,
  SYMBOL_ASKLOW: 5,
  SYMBOL_LAST: 6,
  SYMBOL_LASTHIGH: 7,
  SYMBOL_LASTLOW: 8,
  SYMBOL_VOLUME_REAL: 9,
  SYMBOL_VOLUMEHIGH_REAL: 10,
  SYMBOL_VOLUMELOW_REAL: 11,
  SYMBOL_OPTION_STRIKE: 12,
  SYMBOL_POINT: 13,
  SYMBOL_TRADE_TICK_VALUE: 14,
  SYMBOL_TRADE_TICK_VALUE_PROFIT: 15,
  SYMBOL_TRADE_TICK_VALUE_LOSS: 16,
  SYMBOL_TRADE_TICK_SIZE: 17,
  SYMBOL_TRADE_CONTRACT_SIZE: 18,
  SYMBOL_TRADE_ACCRUED_INTEREST: 19,
  SYMBOL_TRADE_FACE_VALUE: 20,
  SYMBOL_TRADE_LIQUIDITY_RATE: 21,
  SYMBOL_VOLUME_MIN: 22,
  SYMBOL_VOLUME_MAX: 23,
  SYMBOL_VOLUME_STEP: 24,
  SYMBOL_VOLUME_LIMIT: 25,
  SYMBOL_SWAP_LONG: 26,
  SYMBOL_SWAP_SHORT: 27,
  SYMBOL_SWAP_SUNDAY: 28,
  SYMBOL_SWAP_MONDAY: 29,
  SYMBOL_SWAP_TUESDAY: 30,
  SYMBOL_SWAP_WEDNESDAY: 31,
  SYMBOL_SWAP_THURSDAY: 32,
  SYMBOL_SWAP_FRIDAY: 33,
  SYMBOL_SWAP_SATURDAY: 34,
  SYMBOL_MARGIN_INITIAL: 35,
  SYMBOL_MARGIN_MAINTENANCE: 36,
  SYMBOL_SESSION_VOLUME: 37,
  SYMBOL_SESSION_TURNOVER: 38,
  SYMBOL_SESSION_INTEREST: 39,
  SYMBOL_SESSION_BUY_ORDERS_VOLUME: 40,
  SYMBOL_SESSION_SELL_ORDERS_VOLUME: 41,
  SYMBOL_SESSION_OPEN: 42,
  SYMBOL_SESSION_CLOSE: 43,
  SYMBOL_SESSION_AW: 44,
  SYMBOL_SESSION_PRICE_SETTLEMENT: 45,
  SYMBOL_SESSION_PRICE_LIMIT_MIN: 46,
  SYMBOL_SESSION_PRICE_LIMIT_MAX: 47,
  SYMBOL_MARGIN_HEDGED: 48,
  SYMBOL_PRICE_CHANGE: 49,
  SYMBOL_PRICE_VOLATILITY: 50,
  SYMBOL_PRICE_THEORETICAL: 51,
  SYMBOL_PRICE_DELTA: 52,
  SYMBOL_PRICE_THETA: 53,
  SYMBOL_PRICE_GAMMA: 54,
  SYMBOL_PRICE_VEGA: 55,
  SYMBOL_PRICE_RHO: 56,
  SYMBOL_PRICE_OMEGA: 57,
  SYMBOL_PRICE_SENSITIVITY: 58,
  SYMBOL_COUNT: 59
};

/**
 * @enum {number}
 */
proto.mt5_term_api.SymbolInfoIntegerProperty = {
  SYMBOL_SUBSCRIPTION_DELAY: 0,
  SYMBOL_SECTOR: 1,
  SYMBOL_INDUSTRY: 2,
  SYMBOL_CUSTOM: 3,
  SYMBOL_BACKGROUND_COLOR: 4,
  SYMBOL_CHART_MODE: 5,
  SYMBOL_EXIST: 6,
  SYMBOL_SELECT: 7,
  SYMBOL_VISIBLE: 8,
  SYMBOL_SESSION_DEALS: 9,
  SYMBOL_SESSION_BUY_ORDERS: 10,
  SYMBOL_SESSION_SELL_ORDERS: 11,
  SYMBOL_VOLUME: 12,
  SYMBOL_VOLUMEHIGH: 13,
  SYMBOL_VOLUMELOW: 14,
  SYMBOL_TIME: 15,
  SYMBOL_TIME_MSC: 16,
  SYMBOL_DIGITS: 17,
  SYMBOL_SPREAD_FLOAT: 18,
  SYMBOL_SPREAD: 19,
  SYMBOL_TICKS_BOOKDEPTH: 20,
  SYMBOL_TRADE_CALC_MODE: 21,
  SYMBOL_TRADE_MODE: 22,
  SYMBOL_START_TIME: 23,
  SYMBOL_EXPIRATION_TIME: 24,
  SYMBOL_TRADE_STOPS_LEVEL: 25,
  SYMBOL_TRADE_FREEZE_LEVEL: 26,
  SYMBOL_TRADE_EXEMODE: 27,
  SYMBOL_SWAP_MODE: 28,
  SYMBOL_SWAP_ROLLOVER3DAYS: 29,
  SYMBOL_MARGIN_HEDGED_USE_LEG: 30,
  SYMBOL_EXPIRATION_MODE: 31,
  SYMBOL_FILLING_MODE: 32,
  SYMBOL_ORDER_MODE: 33,
  SYMBOL_ORDER_GTC_MODE: 34,
  SYMBOL_OPTION_MODE: 35,
  SYMBOL_OPTION_RIGHT: 36
};

/**
 * @enum {number}
 */
proto.mt5_term_api.SymbolInfoStringProperty = {
  SYMBOL_BASIS: 0,
  SYMBOL_CATEGORY: 1,
  SYMBOL_COUNTRY: 2,
  SYMBOL_SECTOR_NAME: 3,
  SYMBOL_INDUSTRY_NAME: 4,
  SYMBOL_CURRENCY_BASE: 5,
  SYMBOL_CURRENCY_PROFIT: 6,
  SYMBOL_CURRENCY_MARGIN: 7,
  SYMBOL_BANK: 8,
  SYMBOL_DESCRIPTION: 9,
  SYMBOL_EXCHANGE: 10,
  SYMBOL_FORMULA: 11,
  SYMBOL_ISIN: 12,
  SYMBOL_PAGE: 13,
  SYMBOL_PATH: 14
};

/**
 * @enum {number}
 */
proto.mt5_term_api.ENUM_ORDER_TYPE = {
  ORDER_TYPE_BUY: 0,
  ORDER_TYPE_SELL: 1,
  ORDER_TYPE_BUY_LIMIT: 2,
  ORDER_TYPE_SELL_LIMIT: 3,
  ORDER_TYPE_BUY_STOP: 4,
  ORDER_TYPE_SELL_STOP: 5,
  ORDER_TYPE_BUY_STOP_LIMIT: 6,
  ORDER_TYPE_SELL_STOP_LIMIT: 7,
  ORDER_TYPE_CLOSE_BY: 8
};

/**
 * @enum {number}
 */
proto.mt5_term_api.DayOfWeek = {
  SUNDAY: 0,
  MONDAY: 1,
  TUESDAY: 2,
  WEDNESDAY: 3,
  THURSDAY: 4,
  FRIDAY: 5,
  SATURDAY: 6
};

/**
 * @enum {number}
 */
proto.mt5_term_api.BookType = {
  BOOK_TYPE_SELL: 0,
  BOOK_TYPE_BUY: 1,
  BOOK_TYPE_SELL_MARKET: 2,
  BOOK_TYPE_BUY_MARKET: 3
};

goog.object.extend(exports, proto.mt5_term_api);
