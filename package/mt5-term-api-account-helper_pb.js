// source: mt5-term-api-account-helper.proto
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

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_api_annotations_pb = require('./google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var mrpc$mt5$error_pb = require('./mrpc-mt5-error_pb.js');
goog.object.extend(proto, mrpc$mt5$error_pb);
goog.exportSymbol('proto.mt5_term_api.AH_ENUM_POSITIONS_HISTORY_ORDER_TYPE', null, global);
goog.exportSymbol('proto.mt5_term_api.AH_ENUM_POSITIONS_HISTORY_SORT_TYPE', null, global);
goog.exportSymbol('proto.mt5_term_api.AH_SYMBOL_PARAMS_MANY_SORT_TYPE', null, global);
goog.exportSymbol('proto.mt5_term_api.AccountSummaryData', null, global);
goog.exportSymbol('proto.mt5_term_api.AccountSummaryReply', null, global);
goog.exportSymbol('proto.mt5_term_api.AccountSummaryReply.ResponseCase', null, global);
goog.exportSymbol('proto.mt5_term_api.AccountSummaryRequest', null, global);
goog.exportSymbol('proto.mt5_term_api.AllHistoryOrdersData', null, global);
goog.exportSymbol('proto.mt5_term_api.AllHistoryOrdersReply', null, global);
goog.exportSymbol('proto.mt5_term_api.AllHistoryOrdersReply.ResponseCase', null, global);
goog.exportSymbol('proto.mt5_term_api.AllHistoryOrdersRequest', null, global);
goog.exportSymbol('proto.mt5_term_api.BMT5_ENUM_DAY_OF_WEEK', null, global);
goog.exportSymbol('proto.mt5_term_api.BMT5_ENUM_DEAL_ENTRY_TYPE', null, global);
goog.exportSymbol('proto.mt5_term_api.BMT5_ENUM_DEAL_REASON', null, global);
goog.exportSymbol('proto.mt5_term_api.BMT5_ENUM_DEAL_TYPE', null, global);
goog.exportSymbol('proto.mt5_term_api.BMT5_ENUM_OPENED_ORDER_SORT_TYPE', null, global);
goog.exportSymbol('proto.mt5_term_api.BMT5_ENUM_ORDER_HISTORY_SORT_TYPE', null, global);
goog.exportSymbol('proto.mt5_term_api.BMT5_ENUM_ORDER_STATE', null, global);
goog.exportSymbol('proto.mt5_term_api.BMT5_ENUM_ORDER_TYPE', null, global);
goog.exportSymbol('proto.mt5_term_api.BMT5_ENUM_ORDER_TYPE_FILLING', null, global);
goog.exportSymbol('proto.mt5_term_api.BMT5_ENUM_ORDER_TYPE_TIME', null, global);
goog.exportSymbol('proto.mt5_term_api.BMT5_ENUM_POSITION_REASON', null, global);
goog.exportSymbol('proto.mt5_term_api.BMT5_ENUM_POSITION_TYPE', null, global);
goog.exportSymbol('proto.mt5_term_api.BMT5_ENUM_SYMBOL_CALC_MODE', null, global);
goog.exportSymbol('proto.mt5_term_api.BMT5_ENUM_SYMBOL_CHART_MODE', null, global);
goog.exportSymbol('proto.mt5_term_api.BMT5_ENUM_SYMBOL_INDUSTRY', null, global);
goog.exportSymbol('proto.mt5_term_api.BMT5_ENUM_SYMBOL_OPTION_MODE', null, global);
goog.exportSymbol('proto.mt5_term_api.BMT5_ENUM_SYMBOL_OPTION_RIGHT', null, global);
goog.exportSymbol('proto.mt5_term_api.BMT5_ENUM_SYMBOL_ORDER_GTC_MODE', null, global);
goog.exportSymbol('proto.mt5_term_api.BMT5_ENUM_SYMBOL_SECTOR', null, global);
goog.exportSymbol('proto.mt5_term_api.BMT5_ENUM_SYMBOL_SWAP_MODE', null, global);
goog.exportSymbol('proto.mt5_term_api.BMT5_ENUM_SYMBOL_TRADE_EXECUTION', null, global);
goog.exportSymbol('proto.mt5_term_api.BMT5_ENUM_SYMBOL_TRADE_MODE', null, global);
goog.exportSymbol('proto.mt5_term_api.DealHistoryData', null, global);
goog.exportSymbol('proto.mt5_term_api.HistoryData', null, global);
goog.exportSymbol('proto.mt5_term_api.HistoryOrderInfo', null, global);
goog.exportSymbol('proto.mt5_term_api.MrpcEnumAccountTradeMode', null, global);
goog.exportSymbol('proto.mt5_term_api.OpenedOrderInfo', null, global);
goog.exportSymbol('proto.mt5_term_api.OpenedOrdersData', null, global);
goog.exportSymbol('proto.mt5_term_api.OpenedOrdersReply', null, global);
goog.exportSymbol('proto.mt5_term_api.OpenedOrdersReply.ResponseCase', null, global);
goog.exportSymbol('proto.mt5_term_api.OpenedOrdersRequest', null, global);
goog.exportSymbol('proto.mt5_term_api.OpenedOrdersTicketsData', null, global);
goog.exportSymbol('proto.mt5_term_api.OpenedOrdersTicketsReply', null, global);
goog.exportSymbol('proto.mt5_term_api.OpenedOrdersTicketsReply.ResponseCase', null, global);
goog.exportSymbol('proto.mt5_term_api.OpenedOrdersTicketsRequest', null, global);
goog.exportSymbol('proto.mt5_term_api.OrderHistoryData', null, global);
goog.exportSymbol('proto.mt5_term_api.OrderHistoryReply', null, global);
goog.exportSymbol('proto.mt5_term_api.OrderHistoryReply.ResponseCase', null, global);
goog.exportSymbol('proto.mt5_term_api.OrderHistoryRequest', null, global);
goog.exportSymbol('proto.mt5_term_api.OrdersHistoryData', null, global);
goog.exportSymbol('proto.mt5_term_api.PositionHistoryInfo', null, global);
goog.exportSymbol('proto.mt5_term_api.PositionInfo', null, global);
goog.exportSymbol('proto.mt5_term_api.PositionsHistoryData', null, global);
goog.exportSymbol('proto.mt5_term_api.PositionsHistoryReply', null, global);
goog.exportSymbol('proto.mt5_term_api.PositionsHistoryReply.ResponseCase', null, global);
goog.exportSymbol('proto.mt5_term_api.PositionsHistoryRequest', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolParameters', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolParamsManyData', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolParamsManyReply', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolParamsManyReply.ResponseCase', null, global);
goog.exportSymbol('proto.mt5_term_api.SymbolParamsManyRequest', null, global);
goog.exportSymbol('proto.mt5_term_api.TickSizeSymbol', null, global);
goog.exportSymbol('proto.mt5_term_api.TickValueWithSizeData', null, global);
goog.exportSymbol('proto.mt5_term_api.TickValueWithSizeReply', null, global);
goog.exportSymbol('proto.mt5_term_api.TickValueWithSizeRequest', null, global);
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
proto.mt5_term_api.AllHistoryOrdersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mt5_term_api.AllHistoryOrdersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.AllHistoryOrdersRequest.displayName = 'proto.mt5_term_api.AllHistoryOrdersRequest';
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
proto.mt5_term_api.AllHistoryOrdersReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.mt5_term_api.AllHistoryOrdersReply.oneofGroups_);
};
goog.inherits(proto.mt5_term_api.AllHistoryOrdersReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.AllHistoryOrdersReply.displayName = 'proto.mt5_term_api.AllHistoryOrdersReply';
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
proto.mt5_term_api.AllHistoryOrdersData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mt5_term_api.AllHistoryOrdersData.repeatedFields_, null);
};
goog.inherits(proto.mt5_term_api.AllHistoryOrdersData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.AllHistoryOrdersData.displayName = 'proto.mt5_term_api.AllHistoryOrdersData';
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
proto.mt5_term_api.HistoryOrderInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mt5_term_api.HistoryOrderInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.HistoryOrderInfo.displayName = 'proto.mt5_term_api.HistoryOrderInfo';
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
proto.mt5_term_api.PositionsHistoryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mt5_term_api.PositionsHistoryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.PositionsHistoryRequest.displayName = 'proto.mt5_term_api.PositionsHistoryRequest';
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
proto.mt5_term_api.PositionsHistoryReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.mt5_term_api.PositionsHistoryReply.oneofGroups_);
};
goog.inherits(proto.mt5_term_api.PositionsHistoryReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.PositionsHistoryReply.displayName = 'proto.mt5_term_api.PositionsHistoryReply';
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
proto.mt5_term_api.PositionsHistoryData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mt5_term_api.PositionsHistoryData.repeatedFields_, null);
};
goog.inherits(proto.mt5_term_api.PositionsHistoryData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.PositionsHistoryData.displayName = 'proto.mt5_term_api.PositionsHistoryData';
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
proto.mt5_term_api.PositionHistoryInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mt5_term_api.PositionHistoryInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.PositionHistoryInfo.displayName = 'proto.mt5_term_api.PositionHistoryInfo';
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
proto.mt5_term_api.TickValueWithSizeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mt5_term_api.TickValueWithSizeRequest.repeatedFields_, null);
};
goog.inherits(proto.mt5_term_api.TickValueWithSizeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.TickValueWithSizeRequest.displayName = 'proto.mt5_term_api.TickValueWithSizeRequest';
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
proto.mt5_term_api.TickValueWithSizeReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mt5_term_api.TickValueWithSizeReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.TickValueWithSizeReply.displayName = 'proto.mt5_term_api.TickValueWithSizeReply';
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
proto.mt5_term_api.TickValueWithSizeData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mt5_term_api.TickValueWithSizeData.repeatedFields_, null);
};
goog.inherits(proto.mt5_term_api.TickValueWithSizeData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.TickValueWithSizeData.displayName = 'proto.mt5_term_api.TickValueWithSizeData';
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
proto.mt5_term_api.TickSizeSymbol = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mt5_term_api.TickSizeSymbol, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.TickSizeSymbol.displayName = 'proto.mt5_term_api.TickSizeSymbol';
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
proto.mt5_term_api.OpenedOrdersTicketsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mt5_term_api.OpenedOrdersTicketsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.OpenedOrdersTicketsRequest.displayName = 'proto.mt5_term_api.OpenedOrdersTicketsRequest';
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
proto.mt5_term_api.OpenedOrdersTicketsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.mt5_term_api.OpenedOrdersTicketsReply.oneofGroups_);
};
goog.inherits(proto.mt5_term_api.OpenedOrdersTicketsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.OpenedOrdersTicketsReply.displayName = 'proto.mt5_term_api.OpenedOrdersTicketsReply';
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
proto.mt5_term_api.OpenedOrdersTicketsData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mt5_term_api.OpenedOrdersTicketsData.repeatedFields_, null);
};
goog.inherits(proto.mt5_term_api.OpenedOrdersTicketsData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.OpenedOrdersTicketsData.displayName = 'proto.mt5_term_api.OpenedOrdersTicketsData';
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
proto.mt5_term_api.OpenedOrdersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mt5_term_api.OpenedOrdersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.OpenedOrdersRequest.displayName = 'proto.mt5_term_api.OpenedOrdersRequest';
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
proto.mt5_term_api.OpenedOrdersReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.mt5_term_api.OpenedOrdersReply.oneofGroups_);
};
goog.inherits(proto.mt5_term_api.OpenedOrdersReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.OpenedOrdersReply.displayName = 'proto.mt5_term_api.OpenedOrdersReply';
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
proto.mt5_term_api.OpenedOrdersData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mt5_term_api.OpenedOrdersData.repeatedFields_, null);
};
goog.inherits(proto.mt5_term_api.OpenedOrdersData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.OpenedOrdersData.displayName = 'proto.mt5_term_api.OpenedOrdersData';
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
proto.mt5_term_api.PositionInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mt5_term_api.PositionInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.PositionInfo.displayName = 'proto.mt5_term_api.PositionInfo';
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
proto.mt5_term_api.OpenedOrderInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mt5_term_api.OpenedOrderInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.OpenedOrderInfo.displayName = 'proto.mt5_term_api.OpenedOrderInfo';
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
proto.mt5_term_api.OrderHistoryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mt5_term_api.OrderHistoryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.OrderHistoryRequest.displayName = 'proto.mt5_term_api.OrderHistoryRequest';
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
proto.mt5_term_api.OrderHistoryReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.mt5_term_api.OrderHistoryReply.oneofGroups_);
};
goog.inherits(proto.mt5_term_api.OrderHistoryReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.OrderHistoryReply.displayName = 'proto.mt5_term_api.OrderHistoryReply';
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
proto.mt5_term_api.OrdersHistoryData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mt5_term_api.OrdersHistoryData.repeatedFields_, null);
};
goog.inherits(proto.mt5_term_api.OrdersHistoryData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.OrdersHistoryData.displayName = 'proto.mt5_term_api.OrdersHistoryData';
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
proto.mt5_term_api.HistoryData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mt5_term_api.HistoryData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.HistoryData.displayName = 'proto.mt5_term_api.HistoryData';
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
proto.mt5_term_api.DealHistoryData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mt5_term_api.DealHistoryData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.DealHistoryData.displayName = 'proto.mt5_term_api.DealHistoryData';
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
proto.mt5_term_api.OrderHistoryData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mt5_term_api.OrderHistoryData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.OrderHistoryData.displayName = 'proto.mt5_term_api.OrderHistoryData';
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
proto.mt5_term_api.AccountSummaryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mt5_term_api.AccountSummaryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.AccountSummaryRequest.displayName = 'proto.mt5_term_api.AccountSummaryRequest';
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
proto.mt5_term_api.AccountSummaryReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.mt5_term_api.AccountSummaryReply.oneofGroups_);
};
goog.inherits(proto.mt5_term_api.AccountSummaryReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.AccountSummaryReply.displayName = 'proto.mt5_term_api.AccountSummaryReply';
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
proto.mt5_term_api.AccountSummaryData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mt5_term_api.AccountSummaryData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.AccountSummaryData.displayName = 'proto.mt5_term_api.AccountSummaryData';
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
proto.mt5_term_api.SymbolParamsManyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mt5_term_api.SymbolParamsManyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.SymbolParamsManyRequest.displayName = 'proto.mt5_term_api.SymbolParamsManyRequest';
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
proto.mt5_term_api.SymbolParamsManyReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.mt5_term_api.SymbolParamsManyReply.oneofGroups_);
};
goog.inherits(proto.mt5_term_api.SymbolParamsManyReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.SymbolParamsManyReply.displayName = 'proto.mt5_term_api.SymbolParamsManyReply';
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
proto.mt5_term_api.SymbolParamsManyData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mt5_term_api.SymbolParamsManyData.repeatedFields_, null);
};
goog.inherits(proto.mt5_term_api.SymbolParamsManyData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.SymbolParamsManyData.displayName = 'proto.mt5_term_api.SymbolParamsManyData';
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
proto.mt5_term_api.SymbolParameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mt5_term_api.SymbolParameters.repeatedFields_, null);
};
goog.inherits(proto.mt5_term_api.SymbolParameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mt5_term_api.SymbolParameters.displayName = 'proto.mt5_term_api.SymbolParameters';
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
proto.mt5_term_api.AllHistoryOrdersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.AllHistoryOrdersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.AllHistoryOrdersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.AllHistoryOrdersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    inputsortmode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    inputfrom: (f = msg.getInputfrom()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    inputto: (f = msg.getInputto()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    pagenumber: jspb.Message.getFieldWithDefault(msg, 4, 0),
    itemsperpage: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.mt5_term_api.AllHistoryOrdersRequest}
 */
proto.mt5_term_api.AllHistoryOrdersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.AllHistoryOrdersRequest;
  return proto.mt5_term_api.AllHistoryOrdersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.AllHistoryOrdersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.AllHistoryOrdersRequest}
 */
proto.mt5_term_api.AllHistoryOrdersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mt5_term_api.BMT5_ENUM_ORDER_HISTORY_SORT_TYPE} */ (reader.readEnum());
      msg.setInputsortmode(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setInputfrom(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setInputto(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPagenumber(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setItemsperpage(value);
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
proto.mt5_term_api.AllHistoryOrdersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.AllHistoryOrdersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.AllHistoryOrdersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.AllHistoryOrdersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInputsortmode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getInputfrom();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getInputto();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional BMT5_ENUM_ORDER_HISTORY_SORT_TYPE inputSortMode = 1;
 * @return {!proto.mt5_term_api.BMT5_ENUM_ORDER_HISTORY_SORT_TYPE}
 */
proto.mt5_term_api.AllHistoryOrdersRequest.prototype.getInputsortmode = function() {
  return /** @type {!proto.mt5_term_api.BMT5_ENUM_ORDER_HISTORY_SORT_TYPE} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.mt5_term_api.BMT5_ENUM_ORDER_HISTORY_SORT_TYPE} value
 * @return {!proto.mt5_term_api.AllHistoryOrdersRequest} returns this
 */
proto.mt5_term_api.AllHistoryOrdersRequest.prototype.setInputsortmode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp inputFrom = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.mt5_term_api.AllHistoryOrdersRequest.prototype.getInputfrom = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.mt5_term_api.AllHistoryOrdersRequest} returns this
*/
proto.mt5_term_api.AllHistoryOrdersRequest.prototype.setInputfrom = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.AllHistoryOrdersRequest} returns this
 */
proto.mt5_term_api.AllHistoryOrdersRequest.prototype.clearInputfrom = function() {
  return this.setInputfrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.AllHistoryOrdersRequest.prototype.hasInputfrom = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp inputTo = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.mt5_term_api.AllHistoryOrdersRequest.prototype.getInputto = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.mt5_term_api.AllHistoryOrdersRequest} returns this
*/
proto.mt5_term_api.AllHistoryOrdersRequest.prototype.setInputto = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.AllHistoryOrdersRequest} returns this
 */
proto.mt5_term_api.AllHistoryOrdersRequest.prototype.clearInputto = function() {
  return this.setInputto(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.AllHistoryOrdersRequest.prototype.hasInputto = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 pageNumber = 4;
 * @return {number}
 */
proto.mt5_term_api.AllHistoryOrdersRequest.prototype.getPagenumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.AllHistoryOrdersRequest} returns this
 */
proto.mt5_term_api.AllHistoryOrdersRequest.prototype.setPagenumber = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mt5_term_api.AllHistoryOrdersRequest} returns this
 */
proto.mt5_term_api.AllHistoryOrdersRequest.prototype.clearPagenumber = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.AllHistoryOrdersRequest.prototype.hasPagenumber = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 itemsPerPage = 5;
 * @return {number}
 */
proto.mt5_term_api.AllHistoryOrdersRequest.prototype.getItemsperpage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.AllHistoryOrdersRequest} returns this
 */
proto.mt5_term_api.AllHistoryOrdersRequest.prototype.setItemsperpage = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mt5_term_api.AllHistoryOrdersRequest} returns this
 */
proto.mt5_term_api.AllHistoryOrdersRequest.prototype.clearItemsperpage = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.AllHistoryOrdersRequest.prototype.hasItemsperpage = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.mt5_term_api.AllHistoryOrdersReply.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.mt5_term_api.AllHistoryOrdersReply.ResponseCase = {
  RESPONSE_NOT_SET: 0,
  DATA: 1,
  ERROR: 2
};

/**
 * @return {proto.mt5_term_api.AllHistoryOrdersReply.ResponseCase}
 */
proto.mt5_term_api.AllHistoryOrdersReply.prototype.getResponseCase = function() {
  return /** @type {proto.mt5_term_api.AllHistoryOrdersReply.ResponseCase} */(jspb.Message.computeOneofCase(this, proto.mt5_term_api.AllHistoryOrdersReply.oneofGroups_[0]));
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
proto.mt5_term_api.AllHistoryOrdersReply.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.AllHistoryOrdersReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.AllHistoryOrdersReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.AllHistoryOrdersReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && proto.mt5_term_api.AllHistoryOrdersData.toObject(includeInstance, f),
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
 * @return {!proto.mt5_term_api.AllHistoryOrdersReply}
 */
proto.mt5_term_api.AllHistoryOrdersReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.AllHistoryOrdersReply;
  return proto.mt5_term_api.AllHistoryOrdersReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.AllHistoryOrdersReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.AllHistoryOrdersReply}
 */
proto.mt5_term_api.AllHistoryOrdersReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mt5_term_api.AllHistoryOrdersData;
      reader.readMessage(value,proto.mt5_term_api.AllHistoryOrdersData.deserializeBinaryFromReader);
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
proto.mt5_term_api.AllHistoryOrdersReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.AllHistoryOrdersReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.AllHistoryOrdersReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.AllHistoryOrdersReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mt5_term_api.AllHistoryOrdersData.serializeBinaryToWriter
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
 * optional AllHistoryOrdersData data = 1;
 * @return {?proto.mt5_term_api.AllHistoryOrdersData}
 */
proto.mt5_term_api.AllHistoryOrdersReply.prototype.getData = function() {
  return /** @type{?proto.mt5_term_api.AllHistoryOrdersData} */ (
    jspb.Message.getWrapperField(this, proto.mt5_term_api.AllHistoryOrdersData, 1));
};


/**
 * @param {?proto.mt5_term_api.AllHistoryOrdersData|undefined} value
 * @return {!proto.mt5_term_api.AllHistoryOrdersReply} returns this
*/
proto.mt5_term_api.AllHistoryOrdersReply.prototype.setData = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.mt5_term_api.AllHistoryOrdersReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.AllHistoryOrdersReply} returns this
 */
proto.mt5_term_api.AllHistoryOrdersReply.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.AllHistoryOrdersReply.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Error error = 2;
 * @return {?proto.mt5_term_api.Error}
 */
proto.mt5_term_api.AllHistoryOrdersReply.prototype.getError = function() {
  return /** @type{?proto.mt5_term_api.Error} */ (
    jspb.Message.getWrapperField(this, mrpc$mt5$error_pb.Error, 2));
};


/**
 * @param {?proto.mt5_term_api.Error|undefined} value
 * @return {!proto.mt5_term_api.AllHistoryOrdersReply} returns this
*/
proto.mt5_term_api.AllHistoryOrdersReply.prototype.setError = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.mt5_term_api.AllHistoryOrdersReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.AllHistoryOrdersReply} returns this
 */
proto.mt5_term_api.AllHistoryOrdersReply.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.AllHistoryOrdersReply.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mt5_term_api.AllHistoryOrdersData.repeatedFields_ = [4];



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
proto.mt5_term_api.AllHistoryOrdersData.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.AllHistoryOrdersData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.AllHistoryOrdersData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.AllHistoryOrdersData.toObject = function(includeInstance, msg) {
  var f, obj = {
    arraytotal: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pagenumber: jspb.Message.getFieldWithDefault(msg, 2, 0),
    itemsperpage: jspb.Message.getFieldWithDefault(msg, 3, 0),
    historyOrdersList: jspb.Message.toObjectList(msg.getHistoryOrdersList(),
    proto.mt5_term_api.HistoryOrderInfo.toObject, includeInstance)
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
 * @return {!proto.mt5_term_api.AllHistoryOrdersData}
 */
proto.mt5_term_api.AllHistoryOrdersData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.AllHistoryOrdersData;
  return proto.mt5_term_api.AllHistoryOrdersData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.AllHistoryOrdersData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.AllHistoryOrdersData}
 */
proto.mt5_term_api.AllHistoryOrdersData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setArraytotal(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPagenumber(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setItemsperpage(value);
      break;
    case 4:
      var value = new proto.mt5_term_api.HistoryOrderInfo;
      reader.readMessage(value,proto.mt5_term_api.HistoryOrderInfo.deserializeBinaryFromReader);
      msg.addHistoryOrders(value);
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
proto.mt5_term_api.AllHistoryOrdersData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.AllHistoryOrdersData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.AllHistoryOrdersData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.AllHistoryOrdersData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArraytotal();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPagenumber();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getItemsperpage();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getHistoryOrdersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.mt5_term_api.HistoryOrderInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 arrayTotal = 1;
 * @return {number}
 */
proto.mt5_term_api.AllHistoryOrdersData.prototype.getArraytotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.AllHistoryOrdersData} returns this
 */
proto.mt5_term_api.AllHistoryOrdersData.prototype.setArraytotal = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 pageNumber = 2;
 * @return {number}
 */
proto.mt5_term_api.AllHistoryOrdersData.prototype.getPagenumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.AllHistoryOrdersData} returns this
 */
proto.mt5_term_api.AllHistoryOrdersData.prototype.setPagenumber = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 itemsPerPage = 3;
 * @return {number}
 */
proto.mt5_term_api.AllHistoryOrdersData.prototype.getItemsperpage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.AllHistoryOrdersData} returns this
 */
proto.mt5_term_api.AllHistoryOrdersData.prototype.setItemsperpage = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated HistoryOrderInfo history_orders = 4;
 * @return {!Array<!proto.mt5_term_api.HistoryOrderInfo>}
 */
proto.mt5_term_api.AllHistoryOrdersData.prototype.getHistoryOrdersList = function() {
  return /** @type{!Array<!proto.mt5_term_api.HistoryOrderInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.mt5_term_api.HistoryOrderInfo, 4));
};


/**
 * @param {!Array<!proto.mt5_term_api.HistoryOrderInfo>} value
 * @return {!proto.mt5_term_api.AllHistoryOrdersData} returns this
*/
proto.mt5_term_api.AllHistoryOrdersData.prototype.setHistoryOrdersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.mt5_term_api.HistoryOrderInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mt5_term_api.HistoryOrderInfo}
 */
proto.mt5_term_api.AllHistoryOrdersData.prototype.addHistoryOrders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.mt5_term_api.HistoryOrderInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mt5_term_api.AllHistoryOrdersData} returns this
 */
proto.mt5_term_api.AllHistoryOrdersData.prototype.clearHistoryOrdersList = function() {
  return this.setHistoryOrdersList([]);
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
proto.mt5_term_api.HistoryOrderInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.HistoryOrderInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.HistoryOrderInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.HistoryOrderInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordIndex: jspb.Message.getFieldWithDefault(msg, 1, 0),
    ticket: jspb.Message.getFieldWithDefault(msg, 2, 0),
    timeSetup: (f = msg.getTimeSetup()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    type: jspb.Message.getFieldWithDefault(msg, 4, 0),
    state: jspb.Message.getFieldWithDefault(msg, 5, 0),
    timeDone: (f = msg.getTimeDone()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    expirationTimeType: jspb.Message.getFieldWithDefault(msg, 7, 0),
    expirationTime: (f = msg.getExpirationTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    fillingType: jspb.Message.getFieldWithDefault(msg, 9, 0),
    magic: jspb.Message.getFieldWithDefault(msg, 10, 0),
    positionId: jspb.Message.getFieldWithDefault(msg, 11, 0),
    positionById: jspb.Message.getFieldWithDefault(msg, 12, 0),
    volumeInitial: jspb.Message.getFloatingPointFieldWithDefault(msg, 13, 0.0),
    volumeCurrent: jspb.Message.getFloatingPointFieldWithDefault(msg, 14, 0.0),
    priceOpen: jspb.Message.getFloatingPointFieldWithDefault(msg, 15, 0.0),
    sl: jspb.Message.getFloatingPointFieldWithDefault(msg, 16, 0.0),
    tp: jspb.Message.getFloatingPointFieldWithDefault(msg, 17, 0.0),
    priceCurrent: jspb.Message.getFloatingPointFieldWithDefault(msg, 18, 0.0),
    stopLimit: jspb.Message.getFloatingPointFieldWithDefault(msg, 19, 0.0),
    symbol: jspb.Message.getFieldWithDefault(msg, 20, ""),
    comment: jspb.Message.getFieldWithDefault(msg, 21, ""),
    orderExternalIdName: jspb.Message.getFieldWithDefault(msg, 22, "")
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
 * @return {!proto.mt5_term_api.HistoryOrderInfo}
 */
proto.mt5_term_api.HistoryOrderInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.HistoryOrderInfo;
  return proto.mt5_term_api.HistoryOrderInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.HistoryOrderInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.HistoryOrderInfo}
 */
proto.mt5_term_api.HistoryOrderInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRecordIndex(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTicket(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimeSetup(value);
      break;
    case 4:
      var value = /** @type {!proto.mt5_term_api.BMT5_ENUM_ORDER_TYPE} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 5:
      var value = /** @type {!proto.mt5_term_api.BMT5_ENUM_ORDER_STATE} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimeDone(value);
      break;
    case 7:
      var value = /** @type {!proto.mt5_term_api.BMT5_ENUM_ORDER_TYPE_TIME} */ (reader.readEnum());
      msg.setExpirationTimeType(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpirationTime(value);
      break;
    case 9:
      var value = /** @type {!proto.mt5_term_api.BMT5_ENUM_ORDER_TYPE_FILLING} */ (reader.readEnum());
      msg.setFillingType(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMagic(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPositionId(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPositionById(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVolumeInitial(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVolumeCurrent(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPriceOpen(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSl(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTp(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPriceCurrent(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setStopLimit(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbol(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setComment(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderExternalIdName(value);
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
proto.mt5_term_api.HistoryOrderInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.HistoryOrderInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.HistoryOrderInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.HistoryOrderInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordIndex();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTicket();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getTimeSetup();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getTimeDone();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getExpirationTimeType();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getExpirationTime();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getFillingType();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getMagic();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getPositionId();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getPositionById();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = message.getVolumeInitial();
  if (f !== 0.0) {
    writer.writeDouble(
      13,
      f
    );
  }
  f = message.getVolumeCurrent();
  if (f !== 0.0) {
    writer.writeDouble(
      14,
      f
    );
  }
  f = message.getPriceOpen();
  if (f !== 0.0) {
    writer.writeDouble(
      15,
      f
    );
  }
  f = message.getSl();
  if (f !== 0.0) {
    writer.writeDouble(
      16,
      f
    );
  }
  f = message.getTp();
  if (f !== 0.0) {
    writer.writeDouble(
      17,
      f
    );
  }
  f = message.getPriceCurrent();
  if (f !== 0.0) {
    writer.writeDouble(
      18,
      f
    );
  }
  f = message.getStopLimit();
  if (f !== 0.0) {
    writer.writeDouble(
      19,
      f
    );
  }
  f = message.getSymbol();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getComment();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
  f = message.getOrderExternalIdName();
  if (f.length > 0) {
    writer.writeString(
      22,
      f
    );
  }
};


/**
 * optional int32 record_index = 1;
 * @return {number}
 */
proto.mt5_term_api.HistoryOrderInfo.prototype.getRecordIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.HistoryOrderInfo} returns this
 */
proto.mt5_term_api.HistoryOrderInfo.prototype.setRecordIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 ticket = 2;
 * @return {number}
 */
proto.mt5_term_api.HistoryOrderInfo.prototype.getTicket = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.HistoryOrderInfo} returns this
 */
proto.mt5_term_api.HistoryOrderInfo.prototype.setTicket = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp time_setup = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.mt5_term_api.HistoryOrderInfo.prototype.getTimeSetup = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.mt5_term_api.HistoryOrderInfo} returns this
*/
proto.mt5_term_api.HistoryOrderInfo.prototype.setTimeSetup = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.HistoryOrderInfo} returns this
 */
proto.mt5_term_api.HistoryOrderInfo.prototype.clearTimeSetup = function() {
  return this.setTimeSetup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.HistoryOrderInfo.prototype.hasTimeSetup = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional BMT5_ENUM_ORDER_TYPE type = 4;
 * @return {!proto.mt5_term_api.BMT5_ENUM_ORDER_TYPE}
 */
proto.mt5_term_api.HistoryOrderInfo.prototype.getType = function() {
  return /** @type {!proto.mt5_term_api.BMT5_ENUM_ORDER_TYPE} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.mt5_term_api.BMT5_ENUM_ORDER_TYPE} value
 * @return {!proto.mt5_term_api.HistoryOrderInfo} returns this
 */
proto.mt5_term_api.HistoryOrderInfo.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional BMT5_ENUM_ORDER_STATE state = 5;
 * @return {!proto.mt5_term_api.BMT5_ENUM_ORDER_STATE}
 */
proto.mt5_term_api.HistoryOrderInfo.prototype.getState = function() {
  return /** @type {!proto.mt5_term_api.BMT5_ENUM_ORDER_STATE} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.mt5_term_api.BMT5_ENUM_ORDER_STATE} value
 * @return {!proto.mt5_term_api.HistoryOrderInfo} returns this
 */
proto.mt5_term_api.HistoryOrderInfo.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp time_done = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.mt5_term_api.HistoryOrderInfo.prototype.getTimeDone = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.mt5_term_api.HistoryOrderInfo} returns this
*/
proto.mt5_term_api.HistoryOrderInfo.prototype.setTimeDone = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.HistoryOrderInfo} returns this
 */
proto.mt5_term_api.HistoryOrderInfo.prototype.clearTimeDone = function() {
  return this.setTimeDone(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.HistoryOrderInfo.prototype.hasTimeDone = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional BMT5_ENUM_ORDER_TYPE_TIME expiration_time_type = 7;
 * @return {!proto.mt5_term_api.BMT5_ENUM_ORDER_TYPE_TIME}
 */
proto.mt5_term_api.HistoryOrderInfo.prototype.getExpirationTimeType = function() {
  return /** @type {!proto.mt5_term_api.BMT5_ENUM_ORDER_TYPE_TIME} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.mt5_term_api.BMT5_ENUM_ORDER_TYPE_TIME} value
 * @return {!proto.mt5_term_api.HistoryOrderInfo} returns this
 */
proto.mt5_term_api.HistoryOrderInfo.prototype.setExpirationTimeType = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional google.protobuf.Timestamp expiration_time = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.mt5_term_api.HistoryOrderInfo.prototype.getExpirationTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.mt5_term_api.HistoryOrderInfo} returns this
*/
proto.mt5_term_api.HistoryOrderInfo.prototype.setExpirationTime = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.HistoryOrderInfo} returns this
 */
proto.mt5_term_api.HistoryOrderInfo.prototype.clearExpirationTime = function() {
  return this.setExpirationTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.HistoryOrderInfo.prototype.hasExpirationTime = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional BMT5_ENUM_ORDER_TYPE_FILLING filling_type = 9;
 * @return {!proto.mt5_term_api.BMT5_ENUM_ORDER_TYPE_FILLING}
 */
proto.mt5_term_api.HistoryOrderInfo.prototype.getFillingType = function() {
  return /** @type {!proto.mt5_term_api.BMT5_ENUM_ORDER_TYPE_FILLING} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.mt5_term_api.BMT5_ENUM_ORDER_TYPE_FILLING} value
 * @return {!proto.mt5_term_api.HistoryOrderInfo} returns this
 */
proto.mt5_term_api.HistoryOrderInfo.prototype.setFillingType = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional int64 magic = 10;
 * @return {number}
 */
proto.mt5_term_api.HistoryOrderInfo.prototype.getMagic = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.HistoryOrderInfo} returns this
 */
proto.mt5_term_api.HistoryOrderInfo.prototype.setMagic = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int64 position_id = 11;
 * @return {number}
 */
proto.mt5_term_api.HistoryOrderInfo.prototype.getPositionId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.HistoryOrderInfo} returns this
 */
proto.mt5_term_api.HistoryOrderInfo.prototype.setPositionId = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int64 position_by_id = 12;
 * @return {number}
 */
proto.mt5_term_api.HistoryOrderInfo.prototype.getPositionById = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.HistoryOrderInfo} returns this
 */
proto.mt5_term_api.HistoryOrderInfo.prototype.setPositionById = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional double volume_initial = 13;
 * @return {number}
 */
proto.mt5_term_api.HistoryOrderInfo.prototype.getVolumeInitial = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 13, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.HistoryOrderInfo} returns this
 */
proto.mt5_term_api.HistoryOrderInfo.prototype.setVolumeInitial = function(value) {
  return jspb.Message.setProto3FloatField(this, 13, value);
};


/**
 * optional double volume_current = 14;
 * @return {number}
 */
proto.mt5_term_api.HistoryOrderInfo.prototype.getVolumeCurrent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 14, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.HistoryOrderInfo} returns this
 */
proto.mt5_term_api.HistoryOrderInfo.prototype.setVolumeCurrent = function(value) {
  return jspb.Message.setProto3FloatField(this, 14, value);
};


/**
 * optional double price_open = 15;
 * @return {number}
 */
proto.mt5_term_api.HistoryOrderInfo.prototype.getPriceOpen = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 15, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.HistoryOrderInfo} returns this
 */
proto.mt5_term_api.HistoryOrderInfo.prototype.setPriceOpen = function(value) {
  return jspb.Message.setProto3FloatField(this, 15, value);
};


/**
 * optional double sl = 16;
 * @return {number}
 */
proto.mt5_term_api.HistoryOrderInfo.prototype.getSl = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 16, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.HistoryOrderInfo} returns this
 */
proto.mt5_term_api.HistoryOrderInfo.prototype.setSl = function(value) {
  return jspb.Message.setProto3FloatField(this, 16, value);
};


/**
 * optional double tp = 17;
 * @return {number}
 */
proto.mt5_term_api.HistoryOrderInfo.prototype.getTp = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 17, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.HistoryOrderInfo} returns this
 */
proto.mt5_term_api.HistoryOrderInfo.prototype.setTp = function(value) {
  return jspb.Message.setProto3FloatField(this, 17, value);
};


/**
 * optional double price_current = 18;
 * @return {number}
 */
proto.mt5_term_api.HistoryOrderInfo.prototype.getPriceCurrent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 18, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.HistoryOrderInfo} returns this
 */
proto.mt5_term_api.HistoryOrderInfo.prototype.setPriceCurrent = function(value) {
  return jspb.Message.setProto3FloatField(this, 18, value);
};


/**
 * optional double stop_limit = 19;
 * @return {number}
 */
proto.mt5_term_api.HistoryOrderInfo.prototype.getStopLimit = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 19, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.HistoryOrderInfo} returns this
 */
proto.mt5_term_api.HistoryOrderInfo.prototype.setStopLimit = function(value) {
  return jspb.Message.setProto3FloatField(this, 19, value);
};


/**
 * optional string symbol = 20;
 * @return {string}
 */
proto.mt5_term_api.HistoryOrderInfo.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.HistoryOrderInfo} returns this
 */
proto.mt5_term_api.HistoryOrderInfo.prototype.setSymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional string comment = 21;
 * @return {string}
 */
proto.mt5_term_api.HistoryOrderInfo.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.HistoryOrderInfo} returns this
 */
proto.mt5_term_api.HistoryOrderInfo.prototype.setComment = function(value) {
  return jspb.Message.setProto3StringField(this, 21, value);
};


/**
 * optional string order_external_id_name = 22;
 * @return {string}
 */
proto.mt5_term_api.HistoryOrderInfo.prototype.getOrderExternalIdName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.HistoryOrderInfo} returns this
 */
proto.mt5_term_api.HistoryOrderInfo.prototype.setOrderExternalIdName = function(value) {
  return jspb.Message.setProto3StringField(this, 22, value);
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
proto.mt5_term_api.PositionsHistoryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.PositionsHistoryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.PositionsHistoryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.PositionsHistoryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    sortType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    positionOpenTimeFrom: (f = msg.getPositionOpenTimeFrom()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    positionOpenTimeTo: (f = msg.getPositionOpenTimeTo()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    pageNumber: jspb.Message.getFieldWithDefault(msg, 4, 0),
    itemsPerPage: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.mt5_term_api.PositionsHistoryRequest}
 */
proto.mt5_term_api.PositionsHistoryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.PositionsHistoryRequest;
  return proto.mt5_term_api.PositionsHistoryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.PositionsHistoryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.PositionsHistoryRequest}
 */
proto.mt5_term_api.PositionsHistoryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mt5_term_api.AH_ENUM_POSITIONS_HISTORY_SORT_TYPE} */ (reader.readEnum());
      msg.setSortType(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setPositionOpenTimeFrom(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setPositionOpenTimeTo(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageNumber(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setItemsPerPage(value);
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
proto.mt5_term_api.PositionsHistoryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.PositionsHistoryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.PositionsHistoryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.PositionsHistoryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSortType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getPositionOpenTimeFrom();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getPositionOpenTimeTo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional AH_ENUM_POSITIONS_HISTORY_SORT_TYPE sort_type = 1;
 * @return {!proto.mt5_term_api.AH_ENUM_POSITIONS_HISTORY_SORT_TYPE}
 */
proto.mt5_term_api.PositionsHistoryRequest.prototype.getSortType = function() {
  return /** @type {!proto.mt5_term_api.AH_ENUM_POSITIONS_HISTORY_SORT_TYPE} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.mt5_term_api.AH_ENUM_POSITIONS_HISTORY_SORT_TYPE} value
 * @return {!proto.mt5_term_api.PositionsHistoryRequest} returns this
 */
proto.mt5_term_api.PositionsHistoryRequest.prototype.setSortType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp position_open_time_from = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.mt5_term_api.PositionsHistoryRequest.prototype.getPositionOpenTimeFrom = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.mt5_term_api.PositionsHistoryRequest} returns this
*/
proto.mt5_term_api.PositionsHistoryRequest.prototype.setPositionOpenTimeFrom = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.PositionsHistoryRequest} returns this
 */
proto.mt5_term_api.PositionsHistoryRequest.prototype.clearPositionOpenTimeFrom = function() {
  return this.setPositionOpenTimeFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.PositionsHistoryRequest.prototype.hasPositionOpenTimeFrom = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp position_open_time_to = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.mt5_term_api.PositionsHistoryRequest.prototype.getPositionOpenTimeTo = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.mt5_term_api.PositionsHistoryRequest} returns this
*/
proto.mt5_term_api.PositionsHistoryRequest.prototype.setPositionOpenTimeTo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.PositionsHistoryRequest} returns this
 */
proto.mt5_term_api.PositionsHistoryRequest.prototype.clearPositionOpenTimeTo = function() {
  return this.setPositionOpenTimeTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.PositionsHistoryRequest.prototype.hasPositionOpenTimeTo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 page_number = 4;
 * @return {number}
 */
proto.mt5_term_api.PositionsHistoryRequest.prototype.getPageNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.PositionsHistoryRequest} returns this
 */
proto.mt5_term_api.PositionsHistoryRequest.prototype.setPageNumber = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mt5_term_api.PositionsHistoryRequest} returns this
 */
proto.mt5_term_api.PositionsHistoryRequest.prototype.clearPageNumber = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.PositionsHistoryRequest.prototype.hasPageNumber = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 items_per_page = 5;
 * @return {number}
 */
proto.mt5_term_api.PositionsHistoryRequest.prototype.getItemsPerPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.PositionsHistoryRequest} returns this
 */
proto.mt5_term_api.PositionsHistoryRequest.prototype.setItemsPerPage = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mt5_term_api.PositionsHistoryRequest} returns this
 */
proto.mt5_term_api.PositionsHistoryRequest.prototype.clearItemsPerPage = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.PositionsHistoryRequest.prototype.hasItemsPerPage = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.mt5_term_api.PositionsHistoryReply.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.mt5_term_api.PositionsHistoryReply.ResponseCase = {
  RESPONSE_NOT_SET: 0,
  DATA: 1,
  ERROR: 2
};

/**
 * @return {proto.mt5_term_api.PositionsHistoryReply.ResponseCase}
 */
proto.mt5_term_api.PositionsHistoryReply.prototype.getResponseCase = function() {
  return /** @type {proto.mt5_term_api.PositionsHistoryReply.ResponseCase} */(jspb.Message.computeOneofCase(this, proto.mt5_term_api.PositionsHistoryReply.oneofGroups_[0]));
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
proto.mt5_term_api.PositionsHistoryReply.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.PositionsHistoryReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.PositionsHistoryReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.PositionsHistoryReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && proto.mt5_term_api.PositionsHistoryData.toObject(includeInstance, f),
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
 * @return {!proto.mt5_term_api.PositionsHistoryReply}
 */
proto.mt5_term_api.PositionsHistoryReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.PositionsHistoryReply;
  return proto.mt5_term_api.PositionsHistoryReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.PositionsHistoryReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.PositionsHistoryReply}
 */
proto.mt5_term_api.PositionsHistoryReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mt5_term_api.PositionsHistoryData;
      reader.readMessage(value,proto.mt5_term_api.PositionsHistoryData.deserializeBinaryFromReader);
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
proto.mt5_term_api.PositionsHistoryReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.PositionsHistoryReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.PositionsHistoryReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.PositionsHistoryReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mt5_term_api.PositionsHistoryData.serializeBinaryToWriter
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
 * optional PositionsHistoryData data = 1;
 * @return {?proto.mt5_term_api.PositionsHistoryData}
 */
proto.mt5_term_api.PositionsHistoryReply.prototype.getData = function() {
  return /** @type{?proto.mt5_term_api.PositionsHistoryData} */ (
    jspb.Message.getWrapperField(this, proto.mt5_term_api.PositionsHistoryData, 1));
};


/**
 * @param {?proto.mt5_term_api.PositionsHistoryData|undefined} value
 * @return {!proto.mt5_term_api.PositionsHistoryReply} returns this
*/
proto.mt5_term_api.PositionsHistoryReply.prototype.setData = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.mt5_term_api.PositionsHistoryReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.PositionsHistoryReply} returns this
 */
proto.mt5_term_api.PositionsHistoryReply.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.PositionsHistoryReply.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Error error = 2;
 * @return {?proto.mt5_term_api.Error}
 */
proto.mt5_term_api.PositionsHistoryReply.prototype.getError = function() {
  return /** @type{?proto.mt5_term_api.Error} */ (
    jspb.Message.getWrapperField(this, mrpc$mt5$error_pb.Error, 2));
};


/**
 * @param {?proto.mt5_term_api.Error|undefined} value
 * @return {!proto.mt5_term_api.PositionsHistoryReply} returns this
*/
proto.mt5_term_api.PositionsHistoryReply.prototype.setError = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.mt5_term_api.PositionsHistoryReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.PositionsHistoryReply} returns this
 */
proto.mt5_term_api.PositionsHistoryReply.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.PositionsHistoryReply.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mt5_term_api.PositionsHistoryData.repeatedFields_ = [1];



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
proto.mt5_term_api.PositionsHistoryData.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.PositionsHistoryData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.PositionsHistoryData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.PositionsHistoryData.toObject = function(includeInstance, msg) {
  var f, obj = {
    historyPositionsList: jspb.Message.toObjectList(msg.getHistoryPositionsList(),
    proto.mt5_term_api.PositionHistoryInfo.toObject, includeInstance)
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
 * @return {!proto.mt5_term_api.PositionsHistoryData}
 */
proto.mt5_term_api.PositionsHistoryData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.PositionsHistoryData;
  return proto.mt5_term_api.PositionsHistoryData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.PositionsHistoryData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.PositionsHistoryData}
 */
proto.mt5_term_api.PositionsHistoryData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mt5_term_api.PositionHistoryInfo;
      reader.readMessage(value,proto.mt5_term_api.PositionHistoryInfo.deserializeBinaryFromReader);
      msg.addHistoryPositions(value);
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
proto.mt5_term_api.PositionsHistoryData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.PositionsHistoryData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.PositionsHistoryData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.PositionsHistoryData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHistoryPositionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.mt5_term_api.PositionHistoryInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PositionHistoryInfo history_positions = 1;
 * @return {!Array<!proto.mt5_term_api.PositionHistoryInfo>}
 */
proto.mt5_term_api.PositionsHistoryData.prototype.getHistoryPositionsList = function() {
  return /** @type{!Array<!proto.mt5_term_api.PositionHistoryInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.mt5_term_api.PositionHistoryInfo, 1));
};


/**
 * @param {!Array<!proto.mt5_term_api.PositionHistoryInfo>} value
 * @return {!proto.mt5_term_api.PositionsHistoryData} returns this
*/
proto.mt5_term_api.PositionsHistoryData.prototype.setHistoryPositionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.mt5_term_api.PositionHistoryInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mt5_term_api.PositionHistoryInfo}
 */
proto.mt5_term_api.PositionsHistoryData.prototype.addHistoryPositions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.mt5_term_api.PositionHistoryInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mt5_term_api.PositionsHistoryData} returns this
 */
proto.mt5_term_api.PositionsHistoryData.prototype.clearHistoryPositionsList = function() {
  return this.setHistoryPositionsList([]);
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
proto.mt5_term_api.PositionHistoryInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.PositionHistoryInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.PositionHistoryInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.PositionHistoryInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    index: jspb.Message.getFieldWithDefault(msg, 1, 0),
    positionTicket: jspb.Message.getFieldWithDefault(msg, 2, 0),
    orderType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    openTime: (f = msg.getOpenTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    closeTime: (f = msg.getCloseTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    volume: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    openPrice: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    closePrice: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    stopLoss: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0),
    takeProfit: jspb.Message.getFloatingPointFieldWithDefault(msg, 10, 0.0),
    marketValue: jspb.Message.getFloatingPointFieldWithDefault(msg, 11, 0.0),
    commission: jspb.Message.getFloatingPointFieldWithDefault(msg, 12, 0.0),
    fee: jspb.Message.getFloatingPointFieldWithDefault(msg, 13, 0.0),
    profit: jspb.Message.getFloatingPointFieldWithDefault(msg, 14, 0.0),
    swap: jspb.Message.getFloatingPointFieldWithDefault(msg, 15, 0.0),
    comment: jspb.Message.getFieldWithDefault(msg, 16, ""),
    symbol: jspb.Message.getFieldWithDefault(msg, 17, ""),
    magic: jspb.Message.getFieldWithDefault(msg, 18, 0)
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
 * @return {!proto.mt5_term_api.PositionHistoryInfo}
 */
proto.mt5_term_api.PositionHistoryInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.PositionHistoryInfo;
  return proto.mt5_term_api.PositionHistoryInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.PositionHistoryInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.PositionHistoryInfo}
 */
proto.mt5_term_api.PositionHistoryInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPositionTicket(value);
      break;
    case 3:
      var value = /** @type {!proto.mt5_term_api.AH_ENUM_POSITIONS_HISTORY_ORDER_TYPE} */ (reader.readEnum());
      msg.setOrderType(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setOpenTime(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCloseTime(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVolume(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOpenPrice(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setClosePrice(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setStopLoss(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTakeProfit(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMarketValue(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCommission(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFee(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setProfit(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSwap(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setComment(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbol(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMagic(value);
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
proto.mt5_term_api.PositionHistoryInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.PositionHistoryInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.PositionHistoryInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.PositionHistoryInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndex();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPositionTicket();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getOrderType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getOpenTime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCloseTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getVolume();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getOpenPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getClosePrice();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = message.getStopLoss();
  if (f !== 0.0) {
    writer.writeDouble(
      9,
      f
    );
  }
  f = message.getTakeProfit();
  if (f !== 0.0) {
    writer.writeDouble(
      10,
      f
    );
  }
  f = message.getMarketValue();
  if (f !== 0.0) {
    writer.writeDouble(
      11,
      f
    );
  }
  f = message.getCommission();
  if (f !== 0.0) {
    writer.writeDouble(
      12,
      f
    );
  }
  f = message.getFee();
  if (f !== 0.0) {
    writer.writeDouble(
      13,
      f
    );
  }
  f = message.getProfit();
  if (f !== 0.0) {
    writer.writeDouble(
      14,
      f
    );
  }
  f = message.getSwap();
  if (f !== 0.0) {
    writer.writeDouble(
      15,
      f
    );
  }
  f = message.getComment();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getSymbol();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getMagic();
  if (f !== 0) {
    writer.writeInt64(
      18,
      f
    );
  }
};


/**
 * optional int32 index = 1;
 * @return {number}
 */
proto.mt5_term_api.PositionHistoryInfo.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.PositionHistoryInfo} returns this
 */
proto.mt5_term_api.PositionHistoryInfo.prototype.setIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 position_ticket = 2;
 * @return {number}
 */
proto.mt5_term_api.PositionHistoryInfo.prototype.getPositionTicket = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.PositionHistoryInfo} returns this
 */
proto.mt5_term_api.PositionHistoryInfo.prototype.setPositionTicket = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional AH_ENUM_POSITIONS_HISTORY_ORDER_TYPE order_type = 3;
 * @return {!proto.mt5_term_api.AH_ENUM_POSITIONS_HISTORY_ORDER_TYPE}
 */
proto.mt5_term_api.PositionHistoryInfo.prototype.getOrderType = function() {
  return /** @type {!proto.mt5_term_api.AH_ENUM_POSITIONS_HISTORY_ORDER_TYPE} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.mt5_term_api.AH_ENUM_POSITIONS_HISTORY_ORDER_TYPE} value
 * @return {!proto.mt5_term_api.PositionHistoryInfo} returns this
 */
proto.mt5_term_api.PositionHistoryInfo.prototype.setOrderType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp open_time = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.mt5_term_api.PositionHistoryInfo.prototype.getOpenTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.mt5_term_api.PositionHistoryInfo} returns this
*/
proto.mt5_term_api.PositionHistoryInfo.prototype.setOpenTime = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.PositionHistoryInfo} returns this
 */
proto.mt5_term_api.PositionHistoryInfo.prototype.clearOpenTime = function() {
  return this.setOpenTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.PositionHistoryInfo.prototype.hasOpenTime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp close_time = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.mt5_term_api.PositionHistoryInfo.prototype.getCloseTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.mt5_term_api.PositionHistoryInfo} returns this
*/
proto.mt5_term_api.PositionHistoryInfo.prototype.setCloseTime = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.PositionHistoryInfo} returns this
 */
proto.mt5_term_api.PositionHistoryInfo.prototype.clearCloseTime = function() {
  return this.setCloseTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.PositionHistoryInfo.prototype.hasCloseTime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double volume = 6;
 * @return {number}
 */
proto.mt5_term_api.PositionHistoryInfo.prototype.getVolume = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.PositionHistoryInfo} returns this
 */
proto.mt5_term_api.PositionHistoryInfo.prototype.setVolume = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional double open_price = 7;
 * @return {number}
 */
proto.mt5_term_api.PositionHistoryInfo.prototype.getOpenPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.PositionHistoryInfo} returns this
 */
proto.mt5_term_api.PositionHistoryInfo.prototype.setOpenPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional double close_price = 8;
 * @return {number}
 */
proto.mt5_term_api.PositionHistoryInfo.prototype.getClosePrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.PositionHistoryInfo} returns this
 */
proto.mt5_term_api.PositionHistoryInfo.prototype.setClosePrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional double stop_loss = 9;
 * @return {number}
 */
proto.mt5_term_api.PositionHistoryInfo.prototype.getStopLoss = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.PositionHistoryInfo} returns this
 */
proto.mt5_term_api.PositionHistoryInfo.prototype.setStopLoss = function(value) {
  return jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * optional double take_profit = 10;
 * @return {number}
 */
proto.mt5_term_api.PositionHistoryInfo.prototype.getTakeProfit = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.PositionHistoryInfo} returns this
 */
proto.mt5_term_api.PositionHistoryInfo.prototype.setTakeProfit = function(value) {
  return jspb.Message.setProto3FloatField(this, 10, value);
};


/**
 * optional double market_value = 11;
 * @return {number}
 */
proto.mt5_term_api.PositionHistoryInfo.prototype.getMarketValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.PositionHistoryInfo} returns this
 */
proto.mt5_term_api.PositionHistoryInfo.prototype.setMarketValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 11, value);
};


/**
 * optional double commission = 12;
 * @return {number}
 */
proto.mt5_term_api.PositionHistoryInfo.prototype.getCommission = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 12, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.PositionHistoryInfo} returns this
 */
proto.mt5_term_api.PositionHistoryInfo.prototype.setCommission = function(value) {
  return jspb.Message.setProto3FloatField(this, 12, value);
};


/**
 * optional double fee = 13;
 * @return {number}
 */
proto.mt5_term_api.PositionHistoryInfo.prototype.getFee = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 13, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.PositionHistoryInfo} returns this
 */
proto.mt5_term_api.PositionHistoryInfo.prototype.setFee = function(value) {
  return jspb.Message.setProto3FloatField(this, 13, value);
};


/**
 * optional double profit = 14;
 * @return {number}
 */
proto.mt5_term_api.PositionHistoryInfo.prototype.getProfit = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 14, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.PositionHistoryInfo} returns this
 */
proto.mt5_term_api.PositionHistoryInfo.prototype.setProfit = function(value) {
  return jspb.Message.setProto3FloatField(this, 14, value);
};


/**
 * optional double swap = 15;
 * @return {number}
 */
proto.mt5_term_api.PositionHistoryInfo.prototype.getSwap = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 15, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.PositionHistoryInfo} returns this
 */
proto.mt5_term_api.PositionHistoryInfo.prototype.setSwap = function(value) {
  return jspb.Message.setProto3FloatField(this, 15, value);
};


/**
 * optional string comment = 16;
 * @return {string}
 */
proto.mt5_term_api.PositionHistoryInfo.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.PositionHistoryInfo} returns this
 */
proto.mt5_term_api.PositionHistoryInfo.prototype.setComment = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string symbol = 17;
 * @return {string}
 */
proto.mt5_term_api.PositionHistoryInfo.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.PositionHistoryInfo} returns this
 */
proto.mt5_term_api.PositionHistoryInfo.prototype.setSymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional int64 magic = 18;
 * @return {number}
 */
proto.mt5_term_api.PositionHistoryInfo.prototype.getMagic = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.PositionHistoryInfo} returns this
 */
proto.mt5_term_api.PositionHistoryInfo.prototype.setMagic = function(value) {
  return jspb.Message.setProto3IntField(this, 18, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mt5_term_api.TickValueWithSizeRequest.repeatedFields_ = [1];



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
proto.mt5_term_api.TickValueWithSizeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.TickValueWithSizeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.TickValueWithSizeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.TickValueWithSizeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbolNamesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.mt5_term_api.TickValueWithSizeRequest}
 */
proto.mt5_term_api.TickValueWithSizeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.TickValueWithSizeRequest;
  return proto.mt5_term_api.TickValueWithSizeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.TickValueWithSizeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.TickValueWithSizeRequest}
 */
proto.mt5_term_api.TickValueWithSizeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addSymbolNames(value);
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
proto.mt5_term_api.TickValueWithSizeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.TickValueWithSizeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.TickValueWithSizeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.TickValueWithSizeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSymbolNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string symbol_names = 1;
 * @return {!Array<string>}
 */
proto.mt5_term_api.TickValueWithSizeRequest.prototype.getSymbolNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.mt5_term_api.TickValueWithSizeRequest} returns this
 */
proto.mt5_term_api.TickValueWithSizeRequest.prototype.setSymbolNamesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.mt5_term_api.TickValueWithSizeRequest} returns this
 */
proto.mt5_term_api.TickValueWithSizeRequest.prototype.addSymbolNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mt5_term_api.TickValueWithSizeRequest} returns this
 */
proto.mt5_term_api.TickValueWithSizeRequest.prototype.clearSymbolNamesList = function() {
  return this.setSymbolNamesList([]);
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
proto.mt5_term_api.TickValueWithSizeReply.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.TickValueWithSizeReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.TickValueWithSizeReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.TickValueWithSizeReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && proto.mt5_term_api.TickValueWithSizeData.toObject(includeInstance, f),
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
 * @return {!proto.mt5_term_api.TickValueWithSizeReply}
 */
proto.mt5_term_api.TickValueWithSizeReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.TickValueWithSizeReply;
  return proto.mt5_term_api.TickValueWithSizeReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.TickValueWithSizeReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.TickValueWithSizeReply}
 */
proto.mt5_term_api.TickValueWithSizeReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mt5_term_api.TickValueWithSizeData;
      reader.readMessage(value,proto.mt5_term_api.TickValueWithSizeData.deserializeBinaryFromReader);
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
proto.mt5_term_api.TickValueWithSizeReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.TickValueWithSizeReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.TickValueWithSizeReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.TickValueWithSizeReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mt5_term_api.TickValueWithSizeData.serializeBinaryToWriter
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
 * optional TickValueWithSizeData data = 1;
 * @return {?proto.mt5_term_api.TickValueWithSizeData}
 */
proto.mt5_term_api.TickValueWithSizeReply.prototype.getData = function() {
  return /** @type{?proto.mt5_term_api.TickValueWithSizeData} */ (
    jspb.Message.getWrapperField(this, proto.mt5_term_api.TickValueWithSizeData, 1));
};


/**
 * @param {?proto.mt5_term_api.TickValueWithSizeData|undefined} value
 * @return {!proto.mt5_term_api.TickValueWithSizeReply} returns this
*/
proto.mt5_term_api.TickValueWithSizeReply.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.TickValueWithSizeReply} returns this
 */
proto.mt5_term_api.TickValueWithSizeReply.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.TickValueWithSizeReply.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Error error = 2;
 * @return {?proto.mt5_term_api.Error}
 */
proto.mt5_term_api.TickValueWithSizeReply.prototype.getError = function() {
  return /** @type{?proto.mt5_term_api.Error} */ (
    jspb.Message.getWrapperField(this, mrpc$mt5$error_pb.Error, 2));
};


/**
 * @param {?proto.mt5_term_api.Error|undefined} value
 * @return {!proto.mt5_term_api.TickValueWithSizeReply} returns this
*/
proto.mt5_term_api.TickValueWithSizeReply.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.TickValueWithSizeReply} returns this
 */
proto.mt5_term_api.TickValueWithSizeReply.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.TickValueWithSizeReply.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mt5_term_api.TickValueWithSizeData.repeatedFields_ = [1];



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
proto.mt5_term_api.TickValueWithSizeData.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.TickValueWithSizeData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.TickValueWithSizeData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.TickValueWithSizeData.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbolTickSizeInfosList: jspb.Message.toObjectList(msg.getSymbolTickSizeInfosList(),
    proto.mt5_term_api.TickSizeSymbol.toObject, includeInstance)
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
 * @return {!proto.mt5_term_api.TickValueWithSizeData}
 */
proto.mt5_term_api.TickValueWithSizeData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.TickValueWithSizeData;
  return proto.mt5_term_api.TickValueWithSizeData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.TickValueWithSizeData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.TickValueWithSizeData}
 */
proto.mt5_term_api.TickValueWithSizeData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mt5_term_api.TickSizeSymbol;
      reader.readMessage(value,proto.mt5_term_api.TickSizeSymbol.deserializeBinaryFromReader);
      msg.addSymbolTickSizeInfos(value);
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
proto.mt5_term_api.TickValueWithSizeData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.TickValueWithSizeData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.TickValueWithSizeData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.TickValueWithSizeData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSymbolTickSizeInfosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.mt5_term_api.TickSizeSymbol.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TickSizeSymbol symbol_tick_size_infos = 1;
 * @return {!Array<!proto.mt5_term_api.TickSizeSymbol>}
 */
proto.mt5_term_api.TickValueWithSizeData.prototype.getSymbolTickSizeInfosList = function() {
  return /** @type{!Array<!proto.mt5_term_api.TickSizeSymbol>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.mt5_term_api.TickSizeSymbol, 1));
};


/**
 * @param {!Array<!proto.mt5_term_api.TickSizeSymbol>} value
 * @return {!proto.mt5_term_api.TickValueWithSizeData} returns this
*/
proto.mt5_term_api.TickValueWithSizeData.prototype.setSymbolTickSizeInfosList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.mt5_term_api.TickSizeSymbol=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mt5_term_api.TickSizeSymbol}
 */
proto.mt5_term_api.TickValueWithSizeData.prototype.addSymbolTickSizeInfos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.mt5_term_api.TickSizeSymbol, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mt5_term_api.TickValueWithSizeData} returns this
 */
proto.mt5_term_api.TickValueWithSizeData.prototype.clearSymbolTickSizeInfosList = function() {
  return this.setSymbolTickSizeInfosList([]);
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
proto.mt5_term_api.TickSizeSymbol.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.TickSizeSymbol.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.TickSizeSymbol} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.TickSizeSymbol.toObject = function(includeInstance, msg) {
  var f, obj = {
    index: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    tradetickvalue: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    tradetickvalueprofit: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    tradetickvalueloss: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    tradeticksize: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    tradecontractsize: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0)
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
 * @return {!proto.mt5_term_api.TickSizeSymbol}
 */
proto.mt5_term_api.TickSizeSymbol.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.TickSizeSymbol;
  return proto.mt5_term_api.TickSizeSymbol.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.TickSizeSymbol} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.TickSizeSymbol}
 */
proto.mt5_term_api.TickSizeSymbol.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTradetickvalue(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTradetickvalueprofit(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTradetickvalueloss(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTradeticksize(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTradecontractsize(value);
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
proto.mt5_term_api.TickSizeSymbol.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.TickSizeSymbol.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.TickSizeSymbol} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.TickSizeSymbol.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndex();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTradetickvalue();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getTradetickvalueprofit();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getTradetickvalueloss();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getTradeticksize();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getTradecontractsize();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
};


/**
 * optional int32 Index = 1;
 * @return {number}
 */
proto.mt5_term_api.TickSizeSymbol.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.TickSizeSymbol} returns this
 */
proto.mt5_term_api.TickSizeSymbol.prototype.setIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string Name = 2;
 * @return {string}
 */
proto.mt5_term_api.TickSizeSymbol.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.TickSizeSymbol} returns this
 */
proto.mt5_term_api.TickSizeSymbol.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional double TradeTickValue = 3;
 * @return {number}
 */
proto.mt5_term_api.TickSizeSymbol.prototype.getTradetickvalue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.TickSizeSymbol} returns this
 */
proto.mt5_term_api.TickSizeSymbol.prototype.setTradetickvalue = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double TradeTickValueProfit = 4;
 * @return {number}
 */
proto.mt5_term_api.TickSizeSymbol.prototype.getTradetickvalueprofit = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.TickSizeSymbol} returns this
 */
proto.mt5_term_api.TickSizeSymbol.prototype.setTradetickvalueprofit = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double TradeTickValueLoss = 5;
 * @return {number}
 */
proto.mt5_term_api.TickSizeSymbol.prototype.getTradetickvalueloss = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.TickSizeSymbol} returns this
 */
proto.mt5_term_api.TickSizeSymbol.prototype.setTradetickvalueloss = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double TradeTickSize = 6;
 * @return {number}
 */
proto.mt5_term_api.TickSizeSymbol.prototype.getTradeticksize = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.TickSizeSymbol} returns this
 */
proto.mt5_term_api.TickSizeSymbol.prototype.setTradeticksize = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional double TradeContractSize = 7;
 * @return {number}
 */
proto.mt5_term_api.TickSizeSymbol.prototype.getTradecontractsize = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.TickSizeSymbol} returns this
 */
proto.mt5_term_api.TickSizeSymbol.prototype.setTradecontractsize = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
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
proto.mt5_term_api.OpenedOrdersTicketsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.OpenedOrdersTicketsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.OpenedOrdersTicketsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.OpenedOrdersTicketsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mt5_term_api.OpenedOrdersTicketsRequest}
 */
proto.mt5_term_api.OpenedOrdersTicketsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.OpenedOrdersTicketsRequest;
  return proto.mt5_term_api.OpenedOrdersTicketsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.OpenedOrdersTicketsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.OpenedOrdersTicketsRequest}
 */
proto.mt5_term_api.OpenedOrdersTicketsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mt5_term_api.OpenedOrdersTicketsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.OpenedOrdersTicketsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.OpenedOrdersTicketsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.OpenedOrdersTicketsRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mt5_term_api.OpenedOrdersTicketsReply.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.mt5_term_api.OpenedOrdersTicketsReply.ResponseCase = {
  RESPONSE_NOT_SET: 0,
  DATA: 1,
  ERROR: 2
};

/**
 * @return {proto.mt5_term_api.OpenedOrdersTicketsReply.ResponseCase}
 */
proto.mt5_term_api.OpenedOrdersTicketsReply.prototype.getResponseCase = function() {
  return /** @type {proto.mt5_term_api.OpenedOrdersTicketsReply.ResponseCase} */(jspb.Message.computeOneofCase(this, proto.mt5_term_api.OpenedOrdersTicketsReply.oneofGroups_[0]));
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
proto.mt5_term_api.OpenedOrdersTicketsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.OpenedOrdersTicketsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.OpenedOrdersTicketsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.OpenedOrdersTicketsReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && proto.mt5_term_api.OpenedOrdersTicketsData.toObject(includeInstance, f),
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
 * @return {!proto.mt5_term_api.OpenedOrdersTicketsReply}
 */
proto.mt5_term_api.OpenedOrdersTicketsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.OpenedOrdersTicketsReply;
  return proto.mt5_term_api.OpenedOrdersTicketsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.OpenedOrdersTicketsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.OpenedOrdersTicketsReply}
 */
proto.mt5_term_api.OpenedOrdersTicketsReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mt5_term_api.OpenedOrdersTicketsData;
      reader.readMessage(value,proto.mt5_term_api.OpenedOrdersTicketsData.deserializeBinaryFromReader);
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
proto.mt5_term_api.OpenedOrdersTicketsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.OpenedOrdersTicketsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.OpenedOrdersTicketsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.OpenedOrdersTicketsReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mt5_term_api.OpenedOrdersTicketsData.serializeBinaryToWriter
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
 * optional OpenedOrdersTicketsData data = 1;
 * @return {?proto.mt5_term_api.OpenedOrdersTicketsData}
 */
proto.mt5_term_api.OpenedOrdersTicketsReply.prototype.getData = function() {
  return /** @type{?proto.mt5_term_api.OpenedOrdersTicketsData} */ (
    jspb.Message.getWrapperField(this, proto.mt5_term_api.OpenedOrdersTicketsData, 1));
};


/**
 * @param {?proto.mt5_term_api.OpenedOrdersTicketsData|undefined} value
 * @return {!proto.mt5_term_api.OpenedOrdersTicketsReply} returns this
*/
proto.mt5_term_api.OpenedOrdersTicketsReply.prototype.setData = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.mt5_term_api.OpenedOrdersTicketsReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.OpenedOrdersTicketsReply} returns this
 */
proto.mt5_term_api.OpenedOrdersTicketsReply.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.OpenedOrdersTicketsReply.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Error error = 2;
 * @return {?proto.mt5_term_api.Error}
 */
proto.mt5_term_api.OpenedOrdersTicketsReply.prototype.getError = function() {
  return /** @type{?proto.mt5_term_api.Error} */ (
    jspb.Message.getWrapperField(this, mrpc$mt5$error_pb.Error, 2));
};


/**
 * @param {?proto.mt5_term_api.Error|undefined} value
 * @return {!proto.mt5_term_api.OpenedOrdersTicketsReply} returns this
*/
proto.mt5_term_api.OpenedOrdersTicketsReply.prototype.setError = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.mt5_term_api.OpenedOrdersTicketsReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.OpenedOrdersTicketsReply} returns this
 */
proto.mt5_term_api.OpenedOrdersTicketsReply.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.OpenedOrdersTicketsReply.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mt5_term_api.OpenedOrdersTicketsData.repeatedFields_ = [1,2];



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
proto.mt5_term_api.OpenedOrdersTicketsData.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.OpenedOrdersTicketsData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.OpenedOrdersTicketsData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.OpenedOrdersTicketsData.toObject = function(includeInstance, msg) {
  var f, obj = {
    openedOrdersTicketsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    openedPositionTicketsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.mt5_term_api.OpenedOrdersTicketsData}
 */
proto.mt5_term_api.OpenedOrdersTicketsData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.OpenedOrdersTicketsData;
  return proto.mt5_term_api.OpenedOrdersTicketsData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.OpenedOrdersTicketsData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.OpenedOrdersTicketsData}
 */
proto.mt5_term_api.OpenedOrdersTicketsData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addOpenedOrdersTickets(values[i]);
      }
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addOpenedPositionTickets(values[i]);
      }
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
proto.mt5_term_api.OpenedOrdersTicketsData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.OpenedOrdersTicketsData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.OpenedOrdersTicketsData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.OpenedOrdersTicketsData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpenedOrdersTicketsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      1,
      f
    );
  }
  f = message.getOpenedPositionTicketsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      2,
      f
    );
  }
};


/**
 * repeated int64 opened_orders_tickets = 1;
 * @return {!Array<number>}
 */
proto.mt5_term_api.OpenedOrdersTicketsData.prototype.getOpenedOrdersTicketsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.mt5_term_api.OpenedOrdersTicketsData} returns this
 */
proto.mt5_term_api.OpenedOrdersTicketsData.prototype.setOpenedOrdersTicketsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.mt5_term_api.OpenedOrdersTicketsData} returns this
 */
proto.mt5_term_api.OpenedOrdersTicketsData.prototype.addOpenedOrdersTickets = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mt5_term_api.OpenedOrdersTicketsData} returns this
 */
proto.mt5_term_api.OpenedOrdersTicketsData.prototype.clearOpenedOrdersTicketsList = function() {
  return this.setOpenedOrdersTicketsList([]);
};


/**
 * repeated int64 opened_position_tickets = 2;
 * @return {!Array<number>}
 */
proto.mt5_term_api.OpenedOrdersTicketsData.prototype.getOpenedPositionTicketsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.mt5_term_api.OpenedOrdersTicketsData} returns this
 */
proto.mt5_term_api.OpenedOrdersTicketsData.prototype.setOpenedPositionTicketsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.mt5_term_api.OpenedOrdersTicketsData} returns this
 */
proto.mt5_term_api.OpenedOrdersTicketsData.prototype.addOpenedPositionTickets = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mt5_term_api.OpenedOrdersTicketsData} returns this
 */
proto.mt5_term_api.OpenedOrdersTicketsData.prototype.clearOpenedPositionTicketsList = function() {
  return this.setOpenedPositionTicketsList([]);
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
proto.mt5_term_api.OpenedOrdersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.OpenedOrdersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.OpenedOrdersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.OpenedOrdersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    inputsortmode: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.mt5_term_api.OpenedOrdersRequest}
 */
proto.mt5_term_api.OpenedOrdersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.OpenedOrdersRequest;
  return proto.mt5_term_api.OpenedOrdersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.OpenedOrdersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.OpenedOrdersRequest}
 */
proto.mt5_term_api.OpenedOrdersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mt5_term_api.BMT5_ENUM_OPENED_ORDER_SORT_TYPE} */ (reader.readEnum());
      msg.setInputsortmode(value);
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
proto.mt5_term_api.OpenedOrdersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.OpenedOrdersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.OpenedOrdersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.OpenedOrdersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInputsortmode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional BMT5_ENUM_OPENED_ORDER_SORT_TYPE inputSortMode = 1;
 * @return {!proto.mt5_term_api.BMT5_ENUM_OPENED_ORDER_SORT_TYPE}
 */
proto.mt5_term_api.OpenedOrdersRequest.prototype.getInputsortmode = function() {
  return /** @type {!proto.mt5_term_api.BMT5_ENUM_OPENED_ORDER_SORT_TYPE} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.mt5_term_api.BMT5_ENUM_OPENED_ORDER_SORT_TYPE} value
 * @return {!proto.mt5_term_api.OpenedOrdersRequest} returns this
 */
proto.mt5_term_api.OpenedOrdersRequest.prototype.setInputsortmode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.mt5_term_api.OpenedOrdersReply.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.mt5_term_api.OpenedOrdersReply.ResponseCase = {
  RESPONSE_NOT_SET: 0,
  DATA: 1,
  ERROR: 2
};

/**
 * @return {proto.mt5_term_api.OpenedOrdersReply.ResponseCase}
 */
proto.mt5_term_api.OpenedOrdersReply.prototype.getResponseCase = function() {
  return /** @type {proto.mt5_term_api.OpenedOrdersReply.ResponseCase} */(jspb.Message.computeOneofCase(this, proto.mt5_term_api.OpenedOrdersReply.oneofGroups_[0]));
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
proto.mt5_term_api.OpenedOrdersReply.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.OpenedOrdersReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.OpenedOrdersReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.OpenedOrdersReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && proto.mt5_term_api.OpenedOrdersData.toObject(includeInstance, f),
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
 * @return {!proto.mt5_term_api.OpenedOrdersReply}
 */
proto.mt5_term_api.OpenedOrdersReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.OpenedOrdersReply;
  return proto.mt5_term_api.OpenedOrdersReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.OpenedOrdersReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.OpenedOrdersReply}
 */
proto.mt5_term_api.OpenedOrdersReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mt5_term_api.OpenedOrdersData;
      reader.readMessage(value,proto.mt5_term_api.OpenedOrdersData.deserializeBinaryFromReader);
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
proto.mt5_term_api.OpenedOrdersReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.OpenedOrdersReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.OpenedOrdersReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.OpenedOrdersReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mt5_term_api.OpenedOrdersData.serializeBinaryToWriter
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
 * optional OpenedOrdersData data = 1;
 * @return {?proto.mt5_term_api.OpenedOrdersData}
 */
proto.mt5_term_api.OpenedOrdersReply.prototype.getData = function() {
  return /** @type{?proto.mt5_term_api.OpenedOrdersData} */ (
    jspb.Message.getWrapperField(this, proto.mt5_term_api.OpenedOrdersData, 1));
};


/**
 * @param {?proto.mt5_term_api.OpenedOrdersData|undefined} value
 * @return {!proto.mt5_term_api.OpenedOrdersReply} returns this
*/
proto.mt5_term_api.OpenedOrdersReply.prototype.setData = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.mt5_term_api.OpenedOrdersReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.OpenedOrdersReply} returns this
 */
proto.mt5_term_api.OpenedOrdersReply.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.OpenedOrdersReply.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Error error = 2;
 * @return {?proto.mt5_term_api.Error}
 */
proto.mt5_term_api.OpenedOrdersReply.prototype.getError = function() {
  return /** @type{?proto.mt5_term_api.Error} */ (
    jspb.Message.getWrapperField(this, mrpc$mt5$error_pb.Error, 2));
};


/**
 * @param {?proto.mt5_term_api.Error|undefined} value
 * @return {!proto.mt5_term_api.OpenedOrdersReply} returns this
*/
proto.mt5_term_api.OpenedOrdersReply.prototype.setError = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.mt5_term_api.OpenedOrdersReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.OpenedOrdersReply} returns this
 */
proto.mt5_term_api.OpenedOrdersReply.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.OpenedOrdersReply.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mt5_term_api.OpenedOrdersData.repeatedFields_ = [1,2];



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
proto.mt5_term_api.OpenedOrdersData.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.OpenedOrdersData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.OpenedOrdersData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.OpenedOrdersData.toObject = function(includeInstance, msg) {
  var f, obj = {
    openedOrdersList: jspb.Message.toObjectList(msg.getOpenedOrdersList(),
    proto.mt5_term_api.OpenedOrderInfo.toObject, includeInstance),
    positionInfosList: jspb.Message.toObjectList(msg.getPositionInfosList(),
    proto.mt5_term_api.PositionInfo.toObject, includeInstance)
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
 * @return {!proto.mt5_term_api.OpenedOrdersData}
 */
proto.mt5_term_api.OpenedOrdersData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.OpenedOrdersData;
  return proto.mt5_term_api.OpenedOrdersData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.OpenedOrdersData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.OpenedOrdersData}
 */
proto.mt5_term_api.OpenedOrdersData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mt5_term_api.OpenedOrderInfo;
      reader.readMessage(value,proto.mt5_term_api.OpenedOrderInfo.deserializeBinaryFromReader);
      msg.addOpenedOrders(value);
      break;
    case 2:
      var value = new proto.mt5_term_api.PositionInfo;
      reader.readMessage(value,proto.mt5_term_api.PositionInfo.deserializeBinaryFromReader);
      msg.addPositionInfos(value);
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
proto.mt5_term_api.OpenedOrdersData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.OpenedOrdersData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.OpenedOrdersData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.OpenedOrdersData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpenedOrdersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.mt5_term_api.OpenedOrderInfo.serializeBinaryToWriter
    );
  }
  f = message.getPositionInfosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.mt5_term_api.PositionInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated OpenedOrderInfo opened_orders = 1;
 * @return {!Array<!proto.mt5_term_api.OpenedOrderInfo>}
 */
proto.mt5_term_api.OpenedOrdersData.prototype.getOpenedOrdersList = function() {
  return /** @type{!Array<!proto.mt5_term_api.OpenedOrderInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.mt5_term_api.OpenedOrderInfo, 1));
};


/**
 * @param {!Array<!proto.mt5_term_api.OpenedOrderInfo>} value
 * @return {!proto.mt5_term_api.OpenedOrdersData} returns this
*/
proto.mt5_term_api.OpenedOrdersData.prototype.setOpenedOrdersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.mt5_term_api.OpenedOrderInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mt5_term_api.OpenedOrderInfo}
 */
proto.mt5_term_api.OpenedOrdersData.prototype.addOpenedOrders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.mt5_term_api.OpenedOrderInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mt5_term_api.OpenedOrdersData} returns this
 */
proto.mt5_term_api.OpenedOrdersData.prototype.clearOpenedOrdersList = function() {
  return this.setOpenedOrdersList([]);
};


/**
 * repeated PositionInfo position_infos = 2;
 * @return {!Array<!proto.mt5_term_api.PositionInfo>}
 */
proto.mt5_term_api.OpenedOrdersData.prototype.getPositionInfosList = function() {
  return /** @type{!Array<!proto.mt5_term_api.PositionInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.mt5_term_api.PositionInfo, 2));
};


/**
 * @param {!Array<!proto.mt5_term_api.PositionInfo>} value
 * @return {!proto.mt5_term_api.OpenedOrdersData} returns this
*/
proto.mt5_term_api.OpenedOrdersData.prototype.setPositionInfosList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.mt5_term_api.PositionInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mt5_term_api.PositionInfo}
 */
proto.mt5_term_api.OpenedOrdersData.prototype.addPositionInfos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.mt5_term_api.PositionInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mt5_term_api.OpenedOrdersData} returns this
 */
proto.mt5_term_api.OpenedOrdersData.prototype.clearPositionInfosList = function() {
  return this.setPositionInfosList([]);
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
proto.mt5_term_api.PositionInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.PositionInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.PositionInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.PositionInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    index: jspb.Message.getFieldWithDefault(msg, 1, 0),
    ticket: jspb.Message.getFieldWithDefault(msg, 2, 0),
    openTime: (f = msg.getOpenTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    volume: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    priceOpen: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    stopLoss: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    takeProfit: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    priceCurrent: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    swap: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0),
    profit: jspb.Message.getFloatingPointFieldWithDefault(msg, 10, 0.0),
    lastUpdateTime: (f = msg.getLastUpdateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    type: jspb.Message.getFieldWithDefault(msg, 12, 0),
    magicNumber: jspb.Message.getFieldWithDefault(msg, 13, 0),
    identifier: jspb.Message.getFieldWithDefault(msg, 14, 0),
    reason: jspb.Message.getFieldWithDefault(msg, 15, 0),
    symbol: jspb.Message.getFieldWithDefault(msg, 16, ""),
    comment: jspb.Message.getFieldWithDefault(msg, 17, ""),
    externalId: jspb.Message.getFieldWithDefault(msg, 18, ""),
    positionCommission: jspb.Message.getFloatingPointFieldWithDefault(msg, 19, 0.0),
    accountLogin: jspb.Message.getFieldWithDefault(msg, 20, 0)
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
 * @return {!proto.mt5_term_api.PositionInfo}
 */
proto.mt5_term_api.PositionInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.PositionInfo;
  return proto.mt5_term_api.PositionInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.PositionInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.PositionInfo}
 */
proto.mt5_term_api.PositionInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIndex(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTicket(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setOpenTime(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVolume(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPriceOpen(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setStopLoss(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTakeProfit(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPriceCurrent(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSwap(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setProfit(value);
      break;
    case 11:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastUpdateTime(value);
      break;
    case 12:
      var value = /** @type {!proto.mt5_term_api.BMT5_ENUM_POSITION_TYPE} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMagicNumber(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setIdentifier(value);
      break;
    case 15:
      var value = /** @type {!proto.mt5_term_api.BMT5_ENUM_POSITION_REASON} */ (reader.readEnum());
      msg.setReason(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbol(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setComment(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setExternalId(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPositionCommission(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAccountLogin(value);
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
proto.mt5_term_api.PositionInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.PositionInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.PositionInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.PositionInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndex();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getTicket();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getOpenTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getVolume();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getPriceOpen();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getStopLoss();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getTakeProfit();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getPriceCurrent();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = message.getSwap();
  if (f !== 0.0) {
    writer.writeDouble(
      9,
      f
    );
  }
  f = message.getProfit();
  if (f !== 0.0) {
    writer.writeDouble(
      10,
      f
    );
  }
  f = message.getLastUpdateTime();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = message.getMagicNumber();
  if (f !== 0) {
    writer.writeInt64(
      13,
      f
    );
  }
  f = message.getIdentifier();
  if (f !== 0) {
    writer.writeInt64(
      14,
      f
    );
  }
  f = message.getReason();
  if (f !== 0.0) {
    writer.writeEnum(
      15,
      f
    );
  }
  f = message.getSymbol();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getComment();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getExternalId();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getPositionCommission();
  if (f !== 0.0) {
    writer.writeDouble(
      19,
      f
    );
  }
  f = message.getAccountLogin();
  if (f !== 0) {
    writer.writeInt64(
      20,
      f
    );
  }
};


/**
 * optional uint32 index = 1;
 * @return {number}
 */
proto.mt5_term_api.PositionInfo.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.PositionInfo} returns this
 */
proto.mt5_term_api.PositionInfo.prototype.setIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 ticket = 2;
 * @return {number}
 */
proto.mt5_term_api.PositionInfo.prototype.getTicket = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.PositionInfo} returns this
 */
proto.mt5_term_api.PositionInfo.prototype.setTicket = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp open_time = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.mt5_term_api.PositionInfo.prototype.getOpenTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.mt5_term_api.PositionInfo} returns this
*/
proto.mt5_term_api.PositionInfo.prototype.setOpenTime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.PositionInfo} returns this
 */
proto.mt5_term_api.PositionInfo.prototype.clearOpenTime = function() {
  return this.setOpenTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.PositionInfo.prototype.hasOpenTime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double volume = 4;
 * @return {number}
 */
proto.mt5_term_api.PositionInfo.prototype.getVolume = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.PositionInfo} returns this
 */
proto.mt5_term_api.PositionInfo.prototype.setVolume = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double price_open = 5;
 * @return {number}
 */
proto.mt5_term_api.PositionInfo.prototype.getPriceOpen = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.PositionInfo} returns this
 */
proto.mt5_term_api.PositionInfo.prototype.setPriceOpen = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double stop_loss = 6;
 * @return {number}
 */
proto.mt5_term_api.PositionInfo.prototype.getStopLoss = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.PositionInfo} returns this
 */
proto.mt5_term_api.PositionInfo.prototype.setStopLoss = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional double take_profit = 7;
 * @return {number}
 */
proto.mt5_term_api.PositionInfo.prototype.getTakeProfit = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.PositionInfo} returns this
 */
proto.mt5_term_api.PositionInfo.prototype.setTakeProfit = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional double price_current = 8;
 * @return {number}
 */
proto.mt5_term_api.PositionInfo.prototype.getPriceCurrent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.PositionInfo} returns this
 */
proto.mt5_term_api.PositionInfo.prototype.setPriceCurrent = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional double swap = 9;
 * @return {number}
 */
proto.mt5_term_api.PositionInfo.prototype.getSwap = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.PositionInfo} returns this
 */
proto.mt5_term_api.PositionInfo.prototype.setSwap = function(value) {
  return jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * optional double profit = 10;
 * @return {number}
 */
proto.mt5_term_api.PositionInfo.prototype.getProfit = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.PositionInfo} returns this
 */
proto.mt5_term_api.PositionInfo.prototype.setProfit = function(value) {
  return jspb.Message.setProto3FloatField(this, 10, value);
};


/**
 * optional google.protobuf.Timestamp last_update_time = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.mt5_term_api.PositionInfo.prototype.getLastUpdateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.mt5_term_api.PositionInfo} returns this
*/
proto.mt5_term_api.PositionInfo.prototype.setLastUpdateTime = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.PositionInfo} returns this
 */
proto.mt5_term_api.PositionInfo.prototype.clearLastUpdateTime = function() {
  return this.setLastUpdateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.PositionInfo.prototype.hasLastUpdateTime = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional BMT5_ENUM_POSITION_TYPE type = 12;
 * @return {!proto.mt5_term_api.BMT5_ENUM_POSITION_TYPE}
 */
proto.mt5_term_api.PositionInfo.prototype.getType = function() {
  return /** @type {!proto.mt5_term_api.BMT5_ENUM_POSITION_TYPE} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.mt5_term_api.BMT5_ENUM_POSITION_TYPE} value
 * @return {!proto.mt5_term_api.PositionInfo} returns this
 */
proto.mt5_term_api.PositionInfo.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 12, value);
};


/**
 * optional int64 magic_number = 13;
 * @return {number}
 */
proto.mt5_term_api.PositionInfo.prototype.getMagicNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.PositionInfo} returns this
 */
proto.mt5_term_api.PositionInfo.prototype.setMagicNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional int64 identifier = 14;
 * @return {number}
 */
proto.mt5_term_api.PositionInfo.prototype.getIdentifier = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.PositionInfo} returns this
 */
proto.mt5_term_api.PositionInfo.prototype.setIdentifier = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional BMT5_ENUM_POSITION_REASON reason = 15;
 * @return {!proto.mt5_term_api.BMT5_ENUM_POSITION_REASON}
 */
proto.mt5_term_api.PositionInfo.prototype.getReason = function() {
  return /** @type {!proto.mt5_term_api.BMT5_ENUM_POSITION_REASON} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {!proto.mt5_term_api.BMT5_ENUM_POSITION_REASON} value
 * @return {!proto.mt5_term_api.PositionInfo} returns this
 */
proto.mt5_term_api.PositionInfo.prototype.setReason = function(value) {
  return jspb.Message.setProto3EnumField(this, 15, value);
};


/**
 * optional string symbol = 16;
 * @return {string}
 */
proto.mt5_term_api.PositionInfo.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.PositionInfo} returns this
 */
proto.mt5_term_api.PositionInfo.prototype.setSymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string comment = 17;
 * @return {string}
 */
proto.mt5_term_api.PositionInfo.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.PositionInfo} returns this
 */
proto.mt5_term_api.PositionInfo.prototype.setComment = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional string external_id = 18;
 * @return {string}
 */
proto.mt5_term_api.PositionInfo.prototype.getExternalId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.PositionInfo} returns this
 */
proto.mt5_term_api.PositionInfo.prototype.setExternalId = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional double position_commission = 19;
 * @return {number}
 */
proto.mt5_term_api.PositionInfo.prototype.getPositionCommission = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 19, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.PositionInfo} returns this
 */
proto.mt5_term_api.PositionInfo.prototype.setPositionCommission = function(value) {
  return jspb.Message.setProto3FloatField(this, 19, value);
};


/**
 * optional int64 account_login = 20;
 * @return {number}
 */
proto.mt5_term_api.PositionInfo.prototype.getAccountLogin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.PositionInfo} returns this
 */
proto.mt5_term_api.PositionInfo.prototype.setAccountLogin = function(value) {
  return jspb.Message.setProto3IntField(this, 20, value);
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
proto.mt5_term_api.OpenedOrderInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.OpenedOrderInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.OpenedOrderInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.OpenedOrderInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    index: jspb.Message.getFieldWithDefault(msg, 1, 0),
    ticket: jspb.Message.getFieldWithDefault(msg, 2, 0),
    priceCurrent: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    priceOpen: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    stopLimit: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    stopLoss: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    takeProfit: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    volumeCurrent: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    volumeInitial: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0),
    magicNumber: jspb.Message.getFieldWithDefault(msg, 10, 0),
    reason: jspb.Message.getFieldWithDefault(msg, 11, 0),
    type: jspb.Message.getFieldWithDefault(msg, 12, 0),
    state: jspb.Message.getFieldWithDefault(msg, 13, 0),
    timeExpiration: (f = msg.getTimeExpiration()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    timeSetup: (f = msg.getTimeSetup()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    timeDone: (f = msg.getTimeDone()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    typeFilling: jspb.Message.getFieldWithDefault(msg, 17, 0),
    typeTime: jspb.Message.getFieldWithDefault(msg, 18, 0),
    positionId: jspb.Message.getFieldWithDefault(msg, 19, 0),
    positionById: jspb.Message.getFieldWithDefault(msg, 20, 0),
    symbol: jspb.Message.getFieldWithDefault(msg, 21, ""),
    externalId: jspb.Message.getFieldWithDefault(msg, 22, ""),
    comment: jspb.Message.getFieldWithDefault(msg, 23, ""),
    accountLogin: jspb.Message.getFieldWithDefault(msg, 24, 0)
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
 * @return {!proto.mt5_term_api.OpenedOrderInfo}
 */
proto.mt5_term_api.OpenedOrderInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.OpenedOrderInfo;
  return proto.mt5_term_api.OpenedOrderInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.OpenedOrderInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.OpenedOrderInfo}
 */
proto.mt5_term_api.OpenedOrderInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIndex(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTicket(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPriceCurrent(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPriceOpen(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setStopLimit(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setStopLoss(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTakeProfit(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVolumeCurrent(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVolumeInitial(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMagicNumber(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setReason(value);
      break;
    case 12:
      var value = /** @type {!proto.mt5_term_api.BMT5_ENUM_ORDER_TYPE} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 13:
      var value = /** @type {!proto.mt5_term_api.BMT5_ENUM_ORDER_STATE} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 14:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimeExpiration(value);
      break;
    case 15:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimeSetup(value);
      break;
    case 16:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimeDone(value);
      break;
    case 17:
      var value = /** @type {!proto.mt5_term_api.BMT5_ENUM_ORDER_TYPE_FILLING} */ (reader.readEnum());
      msg.setTypeFilling(value);
      break;
    case 18:
      var value = /** @type {!proto.mt5_term_api.BMT5_ENUM_ORDER_TYPE_TIME} */ (reader.readEnum());
      msg.setTypeTime(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPositionId(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPositionById(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbol(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.setExternalId(value);
      break;
    case 23:
      var value = /** @type {string} */ (reader.readString());
      msg.setComment(value);
      break;
    case 24:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAccountLogin(value);
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
proto.mt5_term_api.OpenedOrderInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.OpenedOrderInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.OpenedOrderInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.OpenedOrderInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndex();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getTicket();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getPriceCurrent();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getPriceOpen();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getStopLimit();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getStopLoss();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getTakeProfit();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getVolumeCurrent();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = message.getVolumeInitial();
  if (f !== 0.0) {
    writer.writeDouble(
      9,
      f
    );
  }
  f = message.getMagicNumber();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getReason();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      13,
      f
    );
  }
  f = message.getTimeExpiration();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTimeSetup();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTimeDone();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTypeFilling();
  if (f !== 0.0) {
    writer.writeEnum(
      17,
      f
    );
  }
  f = message.getTypeTime();
  if (f !== 0.0) {
    writer.writeEnum(
      18,
      f
    );
  }
  f = message.getPositionId();
  if (f !== 0) {
    writer.writeInt64(
      19,
      f
    );
  }
  f = message.getPositionById();
  if (f !== 0) {
    writer.writeInt64(
      20,
      f
    );
  }
  f = message.getSymbol();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
  f = message.getExternalId();
  if (f.length > 0) {
    writer.writeString(
      22,
      f
    );
  }
  f = message.getComment();
  if (f.length > 0) {
    writer.writeString(
      23,
      f
    );
  }
  f = message.getAccountLogin();
  if (f !== 0) {
    writer.writeInt64(
      24,
      f
    );
  }
};


/**
 * optional uint32 index = 1;
 * @return {number}
 */
proto.mt5_term_api.OpenedOrderInfo.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.OpenedOrderInfo} returns this
 */
proto.mt5_term_api.OpenedOrderInfo.prototype.setIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 ticket = 2;
 * @return {number}
 */
proto.mt5_term_api.OpenedOrderInfo.prototype.getTicket = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.OpenedOrderInfo} returns this
 */
proto.mt5_term_api.OpenedOrderInfo.prototype.setTicket = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional double price_current = 3;
 * @return {number}
 */
proto.mt5_term_api.OpenedOrderInfo.prototype.getPriceCurrent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.OpenedOrderInfo} returns this
 */
proto.mt5_term_api.OpenedOrderInfo.prototype.setPriceCurrent = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double price_open = 4;
 * @return {number}
 */
proto.mt5_term_api.OpenedOrderInfo.prototype.getPriceOpen = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.OpenedOrderInfo} returns this
 */
proto.mt5_term_api.OpenedOrderInfo.prototype.setPriceOpen = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double stop_limit = 5;
 * @return {number}
 */
proto.mt5_term_api.OpenedOrderInfo.prototype.getStopLimit = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.OpenedOrderInfo} returns this
 */
proto.mt5_term_api.OpenedOrderInfo.prototype.setStopLimit = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double stop_loss = 6;
 * @return {number}
 */
proto.mt5_term_api.OpenedOrderInfo.prototype.getStopLoss = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.OpenedOrderInfo} returns this
 */
proto.mt5_term_api.OpenedOrderInfo.prototype.setStopLoss = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional double take_profit = 7;
 * @return {number}
 */
proto.mt5_term_api.OpenedOrderInfo.prototype.getTakeProfit = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.OpenedOrderInfo} returns this
 */
proto.mt5_term_api.OpenedOrderInfo.prototype.setTakeProfit = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional double volume_current = 8;
 * @return {number}
 */
proto.mt5_term_api.OpenedOrderInfo.prototype.getVolumeCurrent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.OpenedOrderInfo} returns this
 */
proto.mt5_term_api.OpenedOrderInfo.prototype.setVolumeCurrent = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional double volume_initial = 9;
 * @return {number}
 */
proto.mt5_term_api.OpenedOrderInfo.prototype.getVolumeInitial = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.OpenedOrderInfo} returns this
 */
proto.mt5_term_api.OpenedOrderInfo.prototype.setVolumeInitial = function(value) {
  return jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * optional int64 magic_number = 10;
 * @return {number}
 */
proto.mt5_term_api.OpenedOrderInfo.prototype.getMagicNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.OpenedOrderInfo} returns this
 */
proto.mt5_term_api.OpenedOrderInfo.prototype.setMagicNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int32 reason = 11;
 * @return {number}
 */
proto.mt5_term_api.OpenedOrderInfo.prototype.getReason = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.OpenedOrderInfo} returns this
 */
proto.mt5_term_api.OpenedOrderInfo.prototype.setReason = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional BMT5_ENUM_ORDER_TYPE type = 12;
 * @return {!proto.mt5_term_api.BMT5_ENUM_ORDER_TYPE}
 */
proto.mt5_term_api.OpenedOrderInfo.prototype.getType = function() {
  return /** @type {!proto.mt5_term_api.BMT5_ENUM_ORDER_TYPE} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.mt5_term_api.BMT5_ENUM_ORDER_TYPE} value
 * @return {!proto.mt5_term_api.OpenedOrderInfo} returns this
 */
proto.mt5_term_api.OpenedOrderInfo.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 12, value);
};


/**
 * optional BMT5_ENUM_ORDER_STATE state = 13;
 * @return {!proto.mt5_term_api.BMT5_ENUM_ORDER_STATE}
 */
proto.mt5_term_api.OpenedOrderInfo.prototype.getState = function() {
  return /** @type {!proto.mt5_term_api.BMT5_ENUM_ORDER_STATE} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {!proto.mt5_term_api.BMT5_ENUM_ORDER_STATE} value
 * @return {!proto.mt5_term_api.OpenedOrderInfo} returns this
 */
proto.mt5_term_api.OpenedOrderInfo.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 13, value);
};


/**
 * optional google.protobuf.Timestamp time_expiration = 14;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.mt5_term_api.OpenedOrderInfo.prototype.getTimeExpiration = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 14));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.mt5_term_api.OpenedOrderInfo} returns this
*/
proto.mt5_term_api.OpenedOrderInfo.prototype.setTimeExpiration = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.OpenedOrderInfo} returns this
 */
proto.mt5_term_api.OpenedOrderInfo.prototype.clearTimeExpiration = function() {
  return this.setTimeExpiration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.OpenedOrderInfo.prototype.hasTimeExpiration = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional google.protobuf.Timestamp time_setup = 15;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.mt5_term_api.OpenedOrderInfo.prototype.getTimeSetup = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 15));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.mt5_term_api.OpenedOrderInfo} returns this
*/
proto.mt5_term_api.OpenedOrderInfo.prototype.setTimeSetup = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.OpenedOrderInfo} returns this
 */
proto.mt5_term_api.OpenedOrderInfo.prototype.clearTimeSetup = function() {
  return this.setTimeSetup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.OpenedOrderInfo.prototype.hasTimeSetup = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional google.protobuf.Timestamp time_done = 16;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.mt5_term_api.OpenedOrderInfo.prototype.getTimeDone = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 16));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.mt5_term_api.OpenedOrderInfo} returns this
*/
proto.mt5_term_api.OpenedOrderInfo.prototype.setTimeDone = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.OpenedOrderInfo} returns this
 */
proto.mt5_term_api.OpenedOrderInfo.prototype.clearTimeDone = function() {
  return this.setTimeDone(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.OpenedOrderInfo.prototype.hasTimeDone = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional BMT5_ENUM_ORDER_TYPE_FILLING type_filling = 17;
 * @return {!proto.mt5_term_api.BMT5_ENUM_ORDER_TYPE_FILLING}
 */
proto.mt5_term_api.OpenedOrderInfo.prototype.getTypeFilling = function() {
  return /** @type {!proto.mt5_term_api.BMT5_ENUM_ORDER_TYPE_FILLING} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {!proto.mt5_term_api.BMT5_ENUM_ORDER_TYPE_FILLING} value
 * @return {!proto.mt5_term_api.OpenedOrderInfo} returns this
 */
proto.mt5_term_api.OpenedOrderInfo.prototype.setTypeFilling = function(value) {
  return jspb.Message.setProto3EnumField(this, 17, value);
};


/**
 * optional BMT5_ENUM_ORDER_TYPE_TIME type_time = 18;
 * @return {!proto.mt5_term_api.BMT5_ENUM_ORDER_TYPE_TIME}
 */
proto.mt5_term_api.OpenedOrderInfo.prototype.getTypeTime = function() {
  return /** @type {!proto.mt5_term_api.BMT5_ENUM_ORDER_TYPE_TIME} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {!proto.mt5_term_api.BMT5_ENUM_ORDER_TYPE_TIME} value
 * @return {!proto.mt5_term_api.OpenedOrderInfo} returns this
 */
proto.mt5_term_api.OpenedOrderInfo.prototype.setTypeTime = function(value) {
  return jspb.Message.setProto3EnumField(this, 18, value);
};


/**
 * optional int64 position_id = 19;
 * @return {number}
 */
proto.mt5_term_api.OpenedOrderInfo.prototype.getPositionId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.OpenedOrderInfo} returns this
 */
proto.mt5_term_api.OpenedOrderInfo.prototype.setPositionId = function(value) {
  return jspb.Message.setProto3IntField(this, 19, value);
};


/**
 * optional int64 position_by_id = 20;
 * @return {number}
 */
proto.mt5_term_api.OpenedOrderInfo.prototype.getPositionById = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.OpenedOrderInfo} returns this
 */
proto.mt5_term_api.OpenedOrderInfo.prototype.setPositionById = function(value) {
  return jspb.Message.setProto3IntField(this, 20, value);
};


/**
 * optional string symbol = 21;
 * @return {string}
 */
proto.mt5_term_api.OpenedOrderInfo.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.OpenedOrderInfo} returns this
 */
proto.mt5_term_api.OpenedOrderInfo.prototype.setSymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 21, value);
};


/**
 * optional string external_id = 22;
 * @return {string}
 */
proto.mt5_term_api.OpenedOrderInfo.prototype.getExternalId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.OpenedOrderInfo} returns this
 */
proto.mt5_term_api.OpenedOrderInfo.prototype.setExternalId = function(value) {
  return jspb.Message.setProto3StringField(this, 22, value);
};


/**
 * optional string comment = 23;
 * @return {string}
 */
proto.mt5_term_api.OpenedOrderInfo.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 23, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.OpenedOrderInfo} returns this
 */
proto.mt5_term_api.OpenedOrderInfo.prototype.setComment = function(value) {
  return jspb.Message.setProto3StringField(this, 23, value);
};


/**
 * optional int64 account_login = 24;
 * @return {number}
 */
proto.mt5_term_api.OpenedOrderInfo.prototype.getAccountLogin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 24, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.OpenedOrderInfo} returns this
 */
proto.mt5_term_api.OpenedOrderInfo.prototype.setAccountLogin = function(value) {
  return jspb.Message.setProto3IntField(this, 24, value);
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
proto.mt5_term_api.OrderHistoryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.OrderHistoryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.OrderHistoryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.OrderHistoryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    inputfrom: (f = msg.getInputfrom()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    inputto: (f = msg.getInputto()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    inputsortmode: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pagenumber: jspb.Message.getFieldWithDefault(msg, 4, 0),
    itemsperpage: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.mt5_term_api.OrderHistoryRequest}
 */
proto.mt5_term_api.OrderHistoryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.OrderHistoryRequest;
  return proto.mt5_term_api.OrderHistoryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.OrderHistoryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.OrderHistoryRequest}
 */
proto.mt5_term_api.OrderHistoryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setInputfrom(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setInputto(value);
      break;
    case 3:
      var value = /** @type {!proto.mt5_term_api.BMT5_ENUM_ORDER_HISTORY_SORT_TYPE} */ (reader.readEnum());
      msg.setInputsortmode(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPagenumber(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setItemsperpage(value);
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
proto.mt5_term_api.OrderHistoryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.OrderHistoryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.OrderHistoryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.OrderHistoryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInputfrom();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getInputto();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getInputsortmode();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getPagenumber();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getItemsperpage();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional google.protobuf.Timestamp inputFrom = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.mt5_term_api.OrderHistoryRequest.prototype.getInputfrom = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.mt5_term_api.OrderHistoryRequest} returns this
*/
proto.mt5_term_api.OrderHistoryRequest.prototype.setInputfrom = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.OrderHistoryRequest} returns this
 */
proto.mt5_term_api.OrderHistoryRequest.prototype.clearInputfrom = function() {
  return this.setInputfrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.OrderHistoryRequest.prototype.hasInputfrom = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp inputTo = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.mt5_term_api.OrderHistoryRequest.prototype.getInputto = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.mt5_term_api.OrderHistoryRequest} returns this
*/
proto.mt5_term_api.OrderHistoryRequest.prototype.setInputto = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.OrderHistoryRequest} returns this
 */
proto.mt5_term_api.OrderHistoryRequest.prototype.clearInputto = function() {
  return this.setInputto(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.OrderHistoryRequest.prototype.hasInputto = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional BMT5_ENUM_ORDER_HISTORY_SORT_TYPE inputSortMode = 3;
 * @return {!proto.mt5_term_api.BMT5_ENUM_ORDER_HISTORY_SORT_TYPE}
 */
proto.mt5_term_api.OrderHistoryRequest.prototype.getInputsortmode = function() {
  return /** @type {!proto.mt5_term_api.BMT5_ENUM_ORDER_HISTORY_SORT_TYPE} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.mt5_term_api.BMT5_ENUM_ORDER_HISTORY_SORT_TYPE} value
 * @return {!proto.mt5_term_api.OrderHistoryRequest} returns this
 */
proto.mt5_term_api.OrderHistoryRequest.prototype.setInputsortmode = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional int32 pageNumber = 4;
 * @return {number}
 */
proto.mt5_term_api.OrderHistoryRequest.prototype.getPagenumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.OrderHistoryRequest} returns this
 */
proto.mt5_term_api.OrderHistoryRequest.prototype.setPagenumber = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 itemsPerPage = 5;
 * @return {number}
 */
proto.mt5_term_api.OrderHistoryRequest.prototype.getItemsperpage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.OrderHistoryRequest} returns this
 */
proto.mt5_term_api.OrderHistoryRequest.prototype.setItemsperpage = function(value) {
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
proto.mt5_term_api.OrderHistoryReply.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.mt5_term_api.OrderHistoryReply.ResponseCase = {
  RESPONSE_NOT_SET: 0,
  DATA: 1,
  ERROR: 2
};

/**
 * @return {proto.mt5_term_api.OrderHistoryReply.ResponseCase}
 */
proto.mt5_term_api.OrderHistoryReply.prototype.getResponseCase = function() {
  return /** @type {proto.mt5_term_api.OrderHistoryReply.ResponseCase} */(jspb.Message.computeOneofCase(this, proto.mt5_term_api.OrderHistoryReply.oneofGroups_[0]));
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
proto.mt5_term_api.OrderHistoryReply.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.OrderHistoryReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.OrderHistoryReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.OrderHistoryReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && proto.mt5_term_api.OrdersHistoryData.toObject(includeInstance, f),
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
 * @return {!proto.mt5_term_api.OrderHistoryReply}
 */
proto.mt5_term_api.OrderHistoryReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.OrderHistoryReply;
  return proto.mt5_term_api.OrderHistoryReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.OrderHistoryReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.OrderHistoryReply}
 */
proto.mt5_term_api.OrderHistoryReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mt5_term_api.OrdersHistoryData;
      reader.readMessage(value,proto.mt5_term_api.OrdersHistoryData.deserializeBinaryFromReader);
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
proto.mt5_term_api.OrderHistoryReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.OrderHistoryReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.OrderHistoryReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.OrderHistoryReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mt5_term_api.OrdersHistoryData.serializeBinaryToWriter
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
 * optional OrdersHistoryData data = 1;
 * @return {?proto.mt5_term_api.OrdersHistoryData}
 */
proto.mt5_term_api.OrderHistoryReply.prototype.getData = function() {
  return /** @type{?proto.mt5_term_api.OrdersHistoryData} */ (
    jspb.Message.getWrapperField(this, proto.mt5_term_api.OrdersHistoryData, 1));
};


/**
 * @param {?proto.mt5_term_api.OrdersHistoryData|undefined} value
 * @return {!proto.mt5_term_api.OrderHistoryReply} returns this
*/
proto.mt5_term_api.OrderHistoryReply.prototype.setData = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.mt5_term_api.OrderHistoryReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.OrderHistoryReply} returns this
 */
proto.mt5_term_api.OrderHistoryReply.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.OrderHistoryReply.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Error error = 2;
 * @return {?proto.mt5_term_api.Error}
 */
proto.mt5_term_api.OrderHistoryReply.prototype.getError = function() {
  return /** @type{?proto.mt5_term_api.Error} */ (
    jspb.Message.getWrapperField(this, mrpc$mt5$error_pb.Error, 2));
};


/**
 * @param {?proto.mt5_term_api.Error|undefined} value
 * @return {!proto.mt5_term_api.OrderHistoryReply} returns this
*/
proto.mt5_term_api.OrderHistoryReply.prototype.setError = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.mt5_term_api.OrderHistoryReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.OrderHistoryReply} returns this
 */
proto.mt5_term_api.OrderHistoryReply.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.OrderHistoryReply.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mt5_term_api.OrdersHistoryData.repeatedFields_ = [4];



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
proto.mt5_term_api.OrdersHistoryData.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.OrdersHistoryData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.OrdersHistoryData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.OrdersHistoryData.toObject = function(includeInstance, msg) {
  var f, obj = {
    arraytotal: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pagenumber: jspb.Message.getFieldWithDefault(msg, 2, 0),
    itemsperpage: jspb.Message.getFieldWithDefault(msg, 3, 0),
    historyDataList: jspb.Message.toObjectList(msg.getHistoryDataList(),
    proto.mt5_term_api.HistoryData.toObject, includeInstance)
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
 * @return {!proto.mt5_term_api.OrdersHistoryData}
 */
proto.mt5_term_api.OrdersHistoryData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.OrdersHistoryData;
  return proto.mt5_term_api.OrdersHistoryData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.OrdersHistoryData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.OrdersHistoryData}
 */
proto.mt5_term_api.OrdersHistoryData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setArraytotal(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPagenumber(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setItemsperpage(value);
      break;
    case 4:
      var value = new proto.mt5_term_api.HistoryData;
      reader.readMessage(value,proto.mt5_term_api.HistoryData.deserializeBinaryFromReader);
      msg.addHistoryData(value);
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
proto.mt5_term_api.OrdersHistoryData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.OrdersHistoryData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.OrdersHistoryData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.OrdersHistoryData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArraytotal();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPagenumber();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getItemsperpage();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getHistoryDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.mt5_term_api.HistoryData.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 arrayTotal = 1;
 * @return {number}
 */
proto.mt5_term_api.OrdersHistoryData.prototype.getArraytotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.OrdersHistoryData} returns this
 */
proto.mt5_term_api.OrdersHistoryData.prototype.setArraytotal = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 pageNumber = 2;
 * @return {number}
 */
proto.mt5_term_api.OrdersHistoryData.prototype.getPagenumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.OrdersHistoryData} returns this
 */
proto.mt5_term_api.OrdersHistoryData.prototype.setPagenumber = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 itemsPerPage = 3;
 * @return {number}
 */
proto.mt5_term_api.OrdersHistoryData.prototype.getItemsperpage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.OrdersHistoryData} returns this
 */
proto.mt5_term_api.OrdersHistoryData.prototype.setItemsperpage = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated HistoryData history_data = 4;
 * @return {!Array<!proto.mt5_term_api.HistoryData>}
 */
proto.mt5_term_api.OrdersHistoryData.prototype.getHistoryDataList = function() {
  return /** @type{!Array<!proto.mt5_term_api.HistoryData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.mt5_term_api.HistoryData, 4));
};


/**
 * @param {!Array<!proto.mt5_term_api.HistoryData>} value
 * @return {!proto.mt5_term_api.OrdersHistoryData} returns this
*/
proto.mt5_term_api.OrdersHistoryData.prototype.setHistoryDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.mt5_term_api.HistoryData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mt5_term_api.HistoryData}
 */
proto.mt5_term_api.OrdersHistoryData.prototype.addHistoryData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.mt5_term_api.HistoryData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mt5_term_api.OrdersHistoryData} returns this
 */
proto.mt5_term_api.OrdersHistoryData.prototype.clearHistoryDataList = function() {
  return this.setHistoryDataList([]);
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
proto.mt5_term_api.HistoryData.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.HistoryData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.HistoryData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.HistoryData.toObject = function(includeInstance, msg) {
  var f, obj = {
    index: jspb.Message.getFieldWithDefault(msg, 1, 0),
    historyOrder: (f = msg.getHistoryOrder()) && proto.mt5_term_api.OrderHistoryData.toObject(includeInstance, f),
    historyDeal: (f = msg.getHistoryDeal()) && proto.mt5_term_api.DealHistoryData.toObject(includeInstance, f)
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
 * @return {!proto.mt5_term_api.HistoryData}
 */
proto.mt5_term_api.HistoryData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.HistoryData;
  return proto.mt5_term_api.HistoryData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.HistoryData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.HistoryData}
 */
proto.mt5_term_api.HistoryData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIndex(value);
      break;
    case 2:
      var value = new proto.mt5_term_api.OrderHistoryData;
      reader.readMessage(value,proto.mt5_term_api.OrderHistoryData.deserializeBinaryFromReader);
      msg.setHistoryOrder(value);
      break;
    case 3:
      var value = new proto.mt5_term_api.DealHistoryData;
      reader.readMessage(value,proto.mt5_term_api.DealHistoryData.deserializeBinaryFromReader);
      msg.setHistoryDeal(value);
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
proto.mt5_term_api.HistoryData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.HistoryData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.HistoryData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.HistoryData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndex();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getHistoryOrder();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.mt5_term_api.OrderHistoryData.serializeBinaryToWriter
    );
  }
  f = message.getHistoryDeal();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.mt5_term_api.DealHistoryData.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 index = 1;
 * @return {number}
 */
proto.mt5_term_api.HistoryData.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.HistoryData} returns this
 */
proto.mt5_term_api.HistoryData.prototype.setIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional OrderHistoryData history_order = 2;
 * @return {?proto.mt5_term_api.OrderHistoryData}
 */
proto.mt5_term_api.HistoryData.prototype.getHistoryOrder = function() {
  return /** @type{?proto.mt5_term_api.OrderHistoryData} */ (
    jspb.Message.getWrapperField(this, proto.mt5_term_api.OrderHistoryData, 2));
};


/**
 * @param {?proto.mt5_term_api.OrderHistoryData|undefined} value
 * @return {!proto.mt5_term_api.HistoryData} returns this
*/
proto.mt5_term_api.HistoryData.prototype.setHistoryOrder = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.HistoryData} returns this
 */
proto.mt5_term_api.HistoryData.prototype.clearHistoryOrder = function() {
  return this.setHistoryOrder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.HistoryData.prototype.hasHistoryOrder = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional DealHistoryData history_deal = 3;
 * @return {?proto.mt5_term_api.DealHistoryData}
 */
proto.mt5_term_api.HistoryData.prototype.getHistoryDeal = function() {
  return /** @type{?proto.mt5_term_api.DealHistoryData} */ (
    jspb.Message.getWrapperField(this, proto.mt5_term_api.DealHistoryData, 3));
};


/**
 * @param {?proto.mt5_term_api.DealHistoryData|undefined} value
 * @return {!proto.mt5_term_api.HistoryData} returns this
*/
proto.mt5_term_api.HistoryData.prototype.setHistoryDeal = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.HistoryData} returns this
 */
proto.mt5_term_api.HistoryData.prototype.clearHistoryDeal = function() {
  return this.setHistoryDeal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.HistoryData.prototype.hasHistoryDeal = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.mt5_term_api.DealHistoryData.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.DealHistoryData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.DealHistoryData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.DealHistoryData.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticket: jspb.Message.getFieldWithDefault(msg, 1, 0),
    profit: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    commission: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    fee: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    price: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    stopLoss: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    takeProfit: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    swap: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    volume: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0),
    entryType: jspb.Message.getFieldWithDefault(msg, 10, 0),
    time: (f = msg.getTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    type: jspb.Message.getFieldWithDefault(msg, 12, 0),
    reason: jspb.Message.getFieldWithDefault(msg, 13, 0),
    positionId: jspb.Message.getFieldWithDefault(msg, 14, 0),
    comment: jspb.Message.getFieldWithDefault(msg, 15, ""),
    symbol: jspb.Message.getFieldWithDefault(msg, 16, ""),
    externalId: jspb.Message.getFieldWithDefault(msg, 17, ""),
    accountLogin: jspb.Message.getFieldWithDefault(msg, 18, 0)
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
 * @return {!proto.mt5_term_api.DealHistoryData}
 */
proto.mt5_term_api.DealHistoryData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.DealHistoryData;
  return proto.mt5_term_api.DealHistoryData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.DealHistoryData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.DealHistoryData}
 */
proto.mt5_term_api.DealHistoryData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTicket(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setProfit(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCommission(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFee(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setStopLoss(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTakeProfit(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSwap(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVolume(value);
      break;
    case 10:
      var value = /** @type {!proto.mt5_term_api.BMT5_ENUM_DEAL_ENTRY_TYPE} */ (reader.readEnum());
      msg.setEntryType(value);
      break;
    case 11:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 12:
      var value = /** @type {!proto.mt5_term_api.BMT5_ENUM_DEAL_TYPE} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 13:
      var value = /** @type {!proto.mt5_term_api.BMT5_ENUM_DEAL_REASON} */ (reader.readEnum());
      msg.setReason(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPositionId(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setComment(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbol(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setExternalId(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAccountLogin(value);
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
proto.mt5_term_api.DealHistoryData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.DealHistoryData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.DealHistoryData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.DealHistoryData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicket();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getProfit();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getCommission();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getFee();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getStopLoss();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getTakeProfit();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getSwap();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = message.getVolume();
  if (f !== 0.0) {
    writer.writeDouble(
      9,
      f
    );
  }
  f = message.getEntryType();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = message.getReason();
  if (f !== 0.0) {
    writer.writeEnum(
      13,
      f
    );
  }
  f = message.getPositionId();
  if (f !== 0) {
    writer.writeUint64(
      14,
      f
    );
  }
  f = message.getComment();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getSymbol();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getExternalId();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getAccountLogin();
  if (f !== 0) {
    writer.writeInt64(
      18,
      f
    );
  }
};


/**
 * optional uint64 ticket = 1;
 * @return {number}
 */
proto.mt5_term_api.DealHistoryData.prototype.getTicket = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.DealHistoryData} returns this
 */
proto.mt5_term_api.DealHistoryData.prototype.setTicket = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional double profit = 2;
 * @return {number}
 */
proto.mt5_term_api.DealHistoryData.prototype.getProfit = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.DealHistoryData} returns this
 */
proto.mt5_term_api.DealHistoryData.prototype.setProfit = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double commission = 3;
 * @return {number}
 */
proto.mt5_term_api.DealHistoryData.prototype.getCommission = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.DealHistoryData} returns this
 */
proto.mt5_term_api.DealHistoryData.prototype.setCommission = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double fee = 4;
 * @return {number}
 */
proto.mt5_term_api.DealHistoryData.prototype.getFee = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.DealHistoryData} returns this
 */
proto.mt5_term_api.DealHistoryData.prototype.setFee = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double price = 5;
 * @return {number}
 */
proto.mt5_term_api.DealHistoryData.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.DealHistoryData} returns this
 */
proto.mt5_term_api.DealHistoryData.prototype.setPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double stop_loss = 6;
 * @return {number}
 */
proto.mt5_term_api.DealHistoryData.prototype.getStopLoss = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.DealHistoryData} returns this
 */
proto.mt5_term_api.DealHistoryData.prototype.setStopLoss = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional double take_profit = 7;
 * @return {number}
 */
proto.mt5_term_api.DealHistoryData.prototype.getTakeProfit = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.DealHistoryData} returns this
 */
proto.mt5_term_api.DealHistoryData.prototype.setTakeProfit = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional double swap = 8;
 * @return {number}
 */
proto.mt5_term_api.DealHistoryData.prototype.getSwap = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.DealHistoryData} returns this
 */
proto.mt5_term_api.DealHistoryData.prototype.setSwap = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional double volume = 9;
 * @return {number}
 */
proto.mt5_term_api.DealHistoryData.prototype.getVolume = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.DealHistoryData} returns this
 */
proto.mt5_term_api.DealHistoryData.prototype.setVolume = function(value) {
  return jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * optional BMT5_ENUM_DEAL_ENTRY_TYPE entry_type = 10;
 * @return {!proto.mt5_term_api.BMT5_ENUM_DEAL_ENTRY_TYPE}
 */
proto.mt5_term_api.DealHistoryData.prototype.getEntryType = function() {
  return /** @type {!proto.mt5_term_api.BMT5_ENUM_DEAL_ENTRY_TYPE} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.mt5_term_api.BMT5_ENUM_DEAL_ENTRY_TYPE} value
 * @return {!proto.mt5_term_api.DealHistoryData} returns this
 */
proto.mt5_term_api.DealHistoryData.prototype.setEntryType = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional google.protobuf.Timestamp time = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.mt5_term_api.DealHistoryData.prototype.getTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.mt5_term_api.DealHistoryData} returns this
*/
proto.mt5_term_api.DealHistoryData.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.DealHistoryData} returns this
 */
proto.mt5_term_api.DealHistoryData.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.DealHistoryData.prototype.hasTime = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional BMT5_ENUM_DEAL_TYPE type = 12;
 * @return {!proto.mt5_term_api.BMT5_ENUM_DEAL_TYPE}
 */
proto.mt5_term_api.DealHistoryData.prototype.getType = function() {
  return /** @type {!proto.mt5_term_api.BMT5_ENUM_DEAL_TYPE} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.mt5_term_api.BMT5_ENUM_DEAL_TYPE} value
 * @return {!proto.mt5_term_api.DealHistoryData} returns this
 */
proto.mt5_term_api.DealHistoryData.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 12, value);
};


/**
 * optional BMT5_ENUM_DEAL_REASON reason = 13;
 * @return {!proto.mt5_term_api.BMT5_ENUM_DEAL_REASON}
 */
proto.mt5_term_api.DealHistoryData.prototype.getReason = function() {
  return /** @type {!proto.mt5_term_api.BMT5_ENUM_DEAL_REASON} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {!proto.mt5_term_api.BMT5_ENUM_DEAL_REASON} value
 * @return {!proto.mt5_term_api.DealHistoryData} returns this
 */
proto.mt5_term_api.DealHistoryData.prototype.setReason = function(value) {
  return jspb.Message.setProto3EnumField(this, 13, value);
};


/**
 * optional uint64 position_id = 14;
 * @return {number}
 */
proto.mt5_term_api.DealHistoryData.prototype.getPositionId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.DealHistoryData} returns this
 */
proto.mt5_term_api.DealHistoryData.prototype.setPositionId = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional string comment = 15;
 * @return {string}
 */
proto.mt5_term_api.DealHistoryData.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.DealHistoryData} returns this
 */
proto.mt5_term_api.DealHistoryData.prototype.setComment = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string symbol = 16;
 * @return {string}
 */
proto.mt5_term_api.DealHistoryData.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.DealHistoryData} returns this
 */
proto.mt5_term_api.DealHistoryData.prototype.setSymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string external_id = 17;
 * @return {string}
 */
proto.mt5_term_api.DealHistoryData.prototype.getExternalId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.DealHistoryData} returns this
 */
proto.mt5_term_api.DealHistoryData.prototype.setExternalId = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional int64 account_login = 18;
 * @return {number}
 */
proto.mt5_term_api.DealHistoryData.prototype.getAccountLogin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.DealHistoryData} returns this
 */
proto.mt5_term_api.DealHistoryData.prototype.setAccountLogin = function(value) {
  return jspb.Message.setProto3IntField(this, 18, value);
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
proto.mt5_term_api.OrderHistoryData.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.OrderHistoryData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.OrderHistoryData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.OrderHistoryData.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticket: jspb.Message.getFieldWithDefault(msg, 1, 0),
    setupTime: (f = msg.getSetupTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    doneTime: (f = msg.getDoneTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    state: jspb.Message.getFieldWithDefault(msg, 4, 0),
    priceCurrent: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    priceOpen: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    stopLimit: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    stopLoss: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    takeProfit: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0),
    volumeCurrent: jspb.Message.getFloatingPointFieldWithDefault(msg, 10, 0.0),
    volumeInitial: jspb.Message.getFloatingPointFieldWithDefault(msg, 11, 0.0),
    magicNumber: jspb.Message.getFieldWithDefault(msg, 12, 0),
    type: jspb.Message.getFieldWithDefault(msg, 13, 0),
    timeExpiration: (f = msg.getTimeExpiration()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    typeFilling: jspb.Message.getFieldWithDefault(msg, 15, 0),
    typeTime: jspb.Message.getFieldWithDefault(msg, 16, 0),
    positionId: jspb.Message.getFieldWithDefault(msg, 17, 0),
    symbol: jspb.Message.getFieldWithDefault(msg, 18, ""),
    externalId: jspb.Message.getFieldWithDefault(msg, 19, ""),
    comment: jspb.Message.getFieldWithDefault(msg, 20, ""),
    accountLogin: jspb.Message.getFieldWithDefault(msg, 21, 0)
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
 * @return {!proto.mt5_term_api.OrderHistoryData}
 */
proto.mt5_term_api.OrderHistoryData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.OrderHistoryData;
  return proto.mt5_term_api.OrderHistoryData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.OrderHistoryData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.OrderHistoryData}
 */
proto.mt5_term_api.OrderHistoryData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTicket(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setSetupTime(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDoneTime(value);
      break;
    case 4:
      var value = /** @type {!proto.mt5_term_api.BMT5_ENUM_ORDER_STATE} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPriceCurrent(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPriceOpen(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setStopLimit(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setStopLoss(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTakeProfit(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVolumeCurrent(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVolumeInitial(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMagicNumber(value);
      break;
    case 13:
      var value = /** @type {!proto.mt5_term_api.BMT5_ENUM_ORDER_TYPE} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 14:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimeExpiration(value);
      break;
    case 15:
      var value = /** @type {!proto.mt5_term_api.BMT5_ENUM_ORDER_TYPE_FILLING} */ (reader.readEnum());
      msg.setTypeFilling(value);
      break;
    case 16:
      var value = /** @type {!proto.mt5_term_api.BMT5_ENUM_ORDER_TYPE_TIME} */ (reader.readEnum());
      msg.setTypeTime(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPositionId(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbol(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setExternalId(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setComment(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAccountLogin(value);
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
proto.mt5_term_api.OrderHistoryData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.OrderHistoryData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.OrderHistoryData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.OrderHistoryData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicket();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getSetupTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDoneTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getPriceCurrent();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getPriceOpen();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getStopLimit();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getStopLoss();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = message.getTakeProfit();
  if (f !== 0.0) {
    writer.writeDouble(
      9,
      f
    );
  }
  f = message.getVolumeCurrent();
  if (f !== 0.0) {
    writer.writeDouble(
      10,
      f
    );
  }
  f = message.getVolumeInitial();
  if (f !== 0.0) {
    writer.writeDouble(
      11,
      f
    );
  }
  f = message.getMagicNumber();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      13,
      f
    );
  }
  f = message.getTimeExpiration();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTypeFilling();
  if (f !== 0.0) {
    writer.writeEnum(
      15,
      f
    );
  }
  f = message.getTypeTime();
  if (f !== 0.0) {
    writer.writeEnum(
      16,
      f
    );
  }
  f = message.getPositionId();
  if (f !== 0) {
    writer.writeUint64(
      17,
      f
    );
  }
  f = message.getSymbol();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getExternalId();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getComment();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getAccountLogin();
  if (f !== 0) {
    writer.writeInt64(
      21,
      f
    );
  }
};


/**
 * optional uint64 ticket = 1;
 * @return {number}
 */
proto.mt5_term_api.OrderHistoryData.prototype.getTicket = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.OrderHistoryData} returns this
 */
proto.mt5_term_api.OrderHistoryData.prototype.setTicket = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp setup_time = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.mt5_term_api.OrderHistoryData.prototype.getSetupTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.mt5_term_api.OrderHistoryData} returns this
*/
proto.mt5_term_api.OrderHistoryData.prototype.setSetupTime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.OrderHistoryData} returns this
 */
proto.mt5_term_api.OrderHistoryData.prototype.clearSetupTime = function() {
  return this.setSetupTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.OrderHistoryData.prototype.hasSetupTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp done_time = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.mt5_term_api.OrderHistoryData.prototype.getDoneTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.mt5_term_api.OrderHistoryData} returns this
*/
proto.mt5_term_api.OrderHistoryData.prototype.setDoneTime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.OrderHistoryData} returns this
 */
proto.mt5_term_api.OrderHistoryData.prototype.clearDoneTime = function() {
  return this.setDoneTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.OrderHistoryData.prototype.hasDoneTime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional BMT5_ENUM_ORDER_STATE state = 4;
 * @return {!proto.mt5_term_api.BMT5_ENUM_ORDER_STATE}
 */
proto.mt5_term_api.OrderHistoryData.prototype.getState = function() {
  return /** @type {!proto.mt5_term_api.BMT5_ENUM_ORDER_STATE} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.mt5_term_api.BMT5_ENUM_ORDER_STATE} value
 * @return {!proto.mt5_term_api.OrderHistoryData} returns this
 */
proto.mt5_term_api.OrderHistoryData.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional double price_current = 5;
 * @return {number}
 */
proto.mt5_term_api.OrderHistoryData.prototype.getPriceCurrent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.OrderHistoryData} returns this
 */
proto.mt5_term_api.OrderHistoryData.prototype.setPriceCurrent = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double price_open = 6;
 * @return {number}
 */
proto.mt5_term_api.OrderHistoryData.prototype.getPriceOpen = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.OrderHistoryData} returns this
 */
proto.mt5_term_api.OrderHistoryData.prototype.setPriceOpen = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional double stop_limit = 7;
 * @return {number}
 */
proto.mt5_term_api.OrderHistoryData.prototype.getStopLimit = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.OrderHistoryData} returns this
 */
proto.mt5_term_api.OrderHistoryData.prototype.setStopLimit = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional double stop_loss = 8;
 * @return {number}
 */
proto.mt5_term_api.OrderHistoryData.prototype.getStopLoss = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.OrderHistoryData} returns this
 */
proto.mt5_term_api.OrderHistoryData.prototype.setStopLoss = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional double take_profit = 9;
 * @return {number}
 */
proto.mt5_term_api.OrderHistoryData.prototype.getTakeProfit = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.OrderHistoryData} returns this
 */
proto.mt5_term_api.OrderHistoryData.prototype.setTakeProfit = function(value) {
  return jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * optional double volume_current = 10;
 * @return {number}
 */
proto.mt5_term_api.OrderHistoryData.prototype.getVolumeCurrent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.OrderHistoryData} returns this
 */
proto.mt5_term_api.OrderHistoryData.prototype.setVolumeCurrent = function(value) {
  return jspb.Message.setProto3FloatField(this, 10, value);
};


/**
 * optional double volume_initial = 11;
 * @return {number}
 */
proto.mt5_term_api.OrderHistoryData.prototype.getVolumeInitial = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.OrderHistoryData} returns this
 */
proto.mt5_term_api.OrderHistoryData.prototype.setVolumeInitial = function(value) {
  return jspb.Message.setProto3FloatField(this, 11, value);
};


/**
 * optional int64 magic_number = 12;
 * @return {number}
 */
proto.mt5_term_api.OrderHistoryData.prototype.getMagicNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.OrderHistoryData} returns this
 */
proto.mt5_term_api.OrderHistoryData.prototype.setMagicNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional BMT5_ENUM_ORDER_TYPE type = 13;
 * @return {!proto.mt5_term_api.BMT5_ENUM_ORDER_TYPE}
 */
proto.mt5_term_api.OrderHistoryData.prototype.getType = function() {
  return /** @type {!proto.mt5_term_api.BMT5_ENUM_ORDER_TYPE} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {!proto.mt5_term_api.BMT5_ENUM_ORDER_TYPE} value
 * @return {!proto.mt5_term_api.OrderHistoryData} returns this
 */
proto.mt5_term_api.OrderHistoryData.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 13, value);
};


/**
 * optional google.protobuf.Timestamp time_expiration = 14;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.mt5_term_api.OrderHistoryData.prototype.getTimeExpiration = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 14));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.mt5_term_api.OrderHistoryData} returns this
*/
proto.mt5_term_api.OrderHistoryData.prototype.setTimeExpiration = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.OrderHistoryData} returns this
 */
proto.mt5_term_api.OrderHistoryData.prototype.clearTimeExpiration = function() {
  return this.setTimeExpiration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.OrderHistoryData.prototype.hasTimeExpiration = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional BMT5_ENUM_ORDER_TYPE_FILLING type_filling = 15;
 * @return {!proto.mt5_term_api.BMT5_ENUM_ORDER_TYPE_FILLING}
 */
proto.mt5_term_api.OrderHistoryData.prototype.getTypeFilling = function() {
  return /** @type {!proto.mt5_term_api.BMT5_ENUM_ORDER_TYPE_FILLING} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {!proto.mt5_term_api.BMT5_ENUM_ORDER_TYPE_FILLING} value
 * @return {!proto.mt5_term_api.OrderHistoryData} returns this
 */
proto.mt5_term_api.OrderHistoryData.prototype.setTypeFilling = function(value) {
  return jspb.Message.setProto3EnumField(this, 15, value);
};


/**
 * optional BMT5_ENUM_ORDER_TYPE_TIME type_time = 16;
 * @return {!proto.mt5_term_api.BMT5_ENUM_ORDER_TYPE_TIME}
 */
proto.mt5_term_api.OrderHistoryData.prototype.getTypeTime = function() {
  return /** @type {!proto.mt5_term_api.BMT5_ENUM_ORDER_TYPE_TIME} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {!proto.mt5_term_api.BMT5_ENUM_ORDER_TYPE_TIME} value
 * @return {!proto.mt5_term_api.OrderHistoryData} returns this
 */
proto.mt5_term_api.OrderHistoryData.prototype.setTypeTime = function(value) {
  return jspb.Message.setProto3EnumField(this, 16, value);
};


/**
 * optional uint64 position_id = 17;
 * @return {number}
 */
proto.mt5_term_api.OrderHistoryData.prototype.getPositionId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.OrderHistoryData} returns this
 */
proto.mt5_term_api.OrderHistoryData.prototype.setPositionId = function(value) {
  return jspb.Message.setProto3IntField(this, 17, value);
};


/**
 * optional string symbol = 18;
 * @return {string}
 */
proto.mt5_term_api.OrderHistoryData.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.OrderHistoryData} returns this
 */
proto.mt5_term_api.OrderHistoryData.prototype.setSymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional string external_id = 19;
 * @return {string}
 */
proto.mt5_term_api.OrderHistoryData.prototype.getExternalId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.OrderHistoryData} returns this
 */
proto.mt5_term_api.OrderHistoryData.prototype.setExternalId = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional string comment = 20;
 * @return {string}
 */
proto.mt5_term_api.OrderHistoryData.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.OrderHistoryData} returns this
 */
proto.mt5_term_api.OrderHistoryData.prototype.setComment = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional int64 account_login = 21;
 * @return {number}
 */
proto.mt5_term_api.OrderHistoryData.prototype.getAccountLogin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.OrderHistoryData} returns this
 */
proto.mt5_term_api.OrderHistoryData.prototype.setAccountLogin = function(value) {
  return jspb.Message.setProto3IntField(this, 21, value);
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
proto.mt5_term_api.AccountSummaryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.AccountSummaryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.AccountSummaryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.AccountSummaryRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mt5_term_api.AccountSummaryRequest}
 */
proto.mt5_term_api.AccountSummaryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.AccountSummaryRequest;
  return proto.mt5_term_api.AccountSummaryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.AccountSummaryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.AccountSummaryRequest}
 */
proto.mt5_term_api.AccountSummaryRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mt5_term_api.AccountSummaryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.AccountSummaryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.AccountSummaryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.AccountSummaryRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mt5_term_api.AccountSummaryReply.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.mt5_term_api.AccountSummaryReply.ResponseCase = {
  RESPONSE_NOT_SET: 0,
  DATA: 1,
  ERROR: 2
};

/**
 * @return {proto.mt5_term_api.AccountSummaryReply.ResponseCase}
 */
proto.mt5_term_api.AccountSummaryReply.prototype.getResponseCase = function() {
  return /** @type {proto.mt5_term_api.AccountSummaryReply.ResponseCase} */(jspb.Message.computeOneofCase(this, proto.mt5_term_api.AccountSummaryReply.oneofGroups_[0]));
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
proto.mt5_term_api.AccountSummaryReply.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.AccountSummaryReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.AccountSummaryReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.AccountSummaryReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && proto.mt5_term_api.AccountSummaryData.toObject(includeInstance, f),
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
 * @return {!proto.mt5_term_api.AccountSummaryReply}
 */
proto.mt5_term_api.AccountSummaryReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.AccountSummaryReply;
  return proto.mt5_term_api.AccountSummaryReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.AccountSummaryReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.AccountSummaryReply}
 */
proto.mt5_term_api.AccountSummaryReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mt5_term_api.AccountSummaryData;
      reader.readMessage(value,proto.mt5_term_api.AccountSummaryData.deserializeBinaryFromReader);
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
proto.mt5_term_api.AccountSummaryReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.AccountSummaryReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.AccountSummaryReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.AccountSummaryReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mt5_term_api.AccountSummaryData.serializeBinaryToWriter
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
 * optional AccountSummaryData data = 1;
 * @return {?proto.mt5_term_api.AccountSummaryData}
 */
proto.mt5_term_api.AccountSummaryReply.prototype.getData = function() {
  return /** @type{?proto.mt5_term_api.AccountSummaryData} */ (
    jspb.Message.getWrapperField(this, proto.mt5_term_api.AccountSummaryData, 1));
};


/**
 * @param {?proto.mt5_term_api.AccountSummaryData|undefined} value
 * @return {!proto.mt5_term_api.AccountSummaryReply} returns this
*/
proto.mt5_term_api.AccountSummaryReply.prototype.setData = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.mt5_term_api.AccountSummaryReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.AccountSummaryReply} returns this
 */
proto.mt5_term_api.AccountSummaryReply.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.AccountSummaryReply.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Error error = 2;
 * @return {?proto.mt5_term_api.Error}
 */
proto.mt5_term_api.AccountSummaryReply.prototype.getError = function() {
  return /** @type{?proto.mt5_term_api.Error} */ (
    jspb.Message.getWrapperField(this, mrpc$mt5$error_pb.Error, 2));
};


/**
 * @param {?proto.mt5_term_api.Error|undefined} value
 * @return {!proto.mt5_term_api.AccountSummaryReply} returns this
*/
proto.mt5_term_api.AccountSummaryReply.prototype.setError = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.mt5_term_api.AccountSummaryReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.AccountSummaryReply} returns this
 */
proto.mt5_term_api.AccountSummaryReply.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.AccountSummaryReply.prototype.hasError = function() {
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
proto.mt5_term_api.AccountSummaryData.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.AccountSummaryData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.AccountSummaryData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.AccountSummaryData.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountLogin: jspb.Message.getFieldWithDefault(msg, 1, 0),
    accountBalance: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    accountEquity: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    accountUserName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    accountLeverage: jspb.Message.getFieldWithDefault(msg, 5, 0),
    accountTradeMode: jspb.Message.getFieldWithDefault(msg, 6, 0),
    accountCompanyName: jspb.Message.getFieldWithDefault(msg, 7, ""),
    accountCurrency: jspb.Message.getFieldWithDefault(msg, 8, ""),
    serverTime: (f = msg.getServerTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    utcTimezoneServerTimeShiftMinutes: jspb.Message.getFieldWithDefault(msg, 10, 0),
    accountCredit: jspb.Message.getFloatingPointFieldWithDefault(msg, 11, 0.0)
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
 * @return {!proto.mt5_term_api.AccountSummaryData}
 */
proto.mt5_term_api.AccountSummaryData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.AccountSummaryData;
  return proto.mt5_term_api.AccountSummaryData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.AccountSummaryData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.AccountSummaryData}
 */
proto.mt5_term_api.AccountSummaryData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAccountLogin(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAccountBalance(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAccountEquity(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountUserName(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAccountLeverage(value);
      break;
    case 6:
      var value = /** @type {!proto.mt5_term_api.MrpcEnumAccountTradeMode} */ (reader.readEnum());
      msg.setAccountTradeMode(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountCompanyName(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountCurrency(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setServerTime(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUtcTimezoneServerTimeShiftMinutes(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAccountCredit(value);
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
proto.mt5_term_api.AccountSummaryData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.AccountSummaryData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.AccountSummaryData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.AccountSummaryData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountLogin();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getAccountBalance();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getAccountEquity();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getAccountUserName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAccountLeverage();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getAccountTradeMode();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getAccountCompanyName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getAccountCurrency();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getServerTime();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUtcTimezoneServerTimeShiftMinutes();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getAccountCredit();
  if (f !== 0.0) {
    writer.writeDouble(
      11,
      f
    );
  }
};


/**
 * optional int64 account_login = 1;
 * @return {number}
 */
proto.mt5_term_api.AccountSummaryData.prototype.getAccountLogin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.AccountSummaryData} returns this
 */
proto.mt5_term_api.AccountSummaryData.prototype.setAccountLogin = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional double account_balance = 2;
 * @return {number}
 */
proto.mt5_term_api.AccountSummaryData.prototype.getAccountBalance = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.AccountSummaryData} returns this
 */
proto.mt5_term_api.AccountSummaryData.prototype.setAccountBalance = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double account_equity = 3;
 * @return {number}
 */
proto.mt5_term_api.AccountSummaryData.prototype.getAccountEquity = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.AccountSummaryData} returns this
 */
proto.mt5_term_api.AccountSummaryData.prototype.setAccountEquity = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional string account_user_name = 4;
 * @return {string}
 */
proto.mt5_term_api.AccountSummaryData.prototype.getAccountUserName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.AccountSummaryData} returns this
 */
proto.mt5_term_api.AccountSummaryData.prototype.setAccountUserName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 account_leverage = 5;
 * @return {number}
 */
proto.mt5_term_api.AccountSummaryData.prototype.getAccountLeverage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.AccountSummaryData} returns this
 */
proto.mt5_term_api.AccountSummaryData.prototype.setAccountLeverage = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional MrpcEnumAccountTradeMode account_trade_mode = 6;
 * @return {!proto.mt5_term_api.MrpcEnumAccountTradeMode}
 */
proto.mt5_term_api.AccountSummaryData.prototype.getAccountTradeMode = function() {
  return /** @type {!proto.mt5_term_api.MrpcEnumAccountTradeMode} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.mt5_term_api.MrpcEnumAccountTradeMode} value
 * @return {!proto.mt5_term_api.AccountSummaryData} returns this
 */
proto.mt5_term_api.AccountSummaryData.prototype.setAccountTradeMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional string account_company_name = 7;
 * @return {string}
 */
proto.mt5_term_api.AccountSummaryData.prototype.getAccountCompanyName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.AccountSummaryData} returns this
 */
proto.mt5_term_api.AccountSummaryData.prototype.setAccountCompanyName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string account_currency = 8;
 * @return {string}
 */
proto.mt5_term_api.AccountSummaryData.prototype.getAccountCurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.AccountSummaryData} returns this
 */
proto.mt5_term_api.AccountSummaryData.prototype.setAccountCurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional google.protobuf.Timestamp server_time = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.mt5_term_api.AccountSummaryData.prototype.getServerTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.mt5_term_api.AccountSummaryData} returns this
*/
proto.mt5_term_api.AccountSummaryData.prototype.setServerTime = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.AccountSummaryData} returns this
 */
proto.mt5_term_api.AccountSummaryData.prototype.clearServerTime = function() {
  return this.setServerTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.AccountSummaryData.prototype.hasServerTime = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int64 utc_timezone_server_time_shift_minutes = 10;
 * @return {number}
 */
proto.mt5_term_api.AccountSummaryData.prototype.getUtcTimezoneServerTimeShiftMinutes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.AccountSummaryData} returns this
 */
proto.mt5_term_api.AccountSummaryData.prototype.setUtcTimezoneServerTimeShiftMinutes = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional double account_credit = 11;
 * @return {number}
 */
proto.mt5_term_api.AccountSummaryData.prototype.getAccountCredit = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.AccountSummaryData} returns this
 */
proto.mt5_term_api.AccountSummaryData.prototype.setAccountCredit = function(value) {
  return jspb.Message.setProto3FloatField(this, 11, value);
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
proto.mt5_term_api.SymbolParamsManyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.SymbolParamsManyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.SymbolParamsManyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolParamsManyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbolName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sortType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pageNumber: jspb.Message.getFieldWithDefault(msg, 3, 0),
    itemsPerPage: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.mt5_term_api.SymbolParamsManyRequest}
 */
proto.mt5_term_api.SymbolParamsManyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.SymbolParamsManyRequest;
  return proto.mt5_term_api.SymbolParamsManyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.SymbolParamsManyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.SymbolParamsManyRequest}
 */
proto.mt5_term_api.SymbolParamsManyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbolName(value);
      break;
    case 2:
      var value = /** @type {!proto.mt5_term_api.AH_SYMBOL_PARAMS_MANY_SORT_TYPE} */ (reader.readEnum());
      msg.setSortType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageNumber(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setItemsPerPage(value);
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
proto.mt5_term_api.SymbolParamsManyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.SymbolParamsManyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.SymbolParamsManyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolParamsManyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {!proto.mt5_term_api.AH_SYMBOL_PARAMS_MANY_SORT_TYPE} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional string symbol_name = 1;
 * @return {string}
 */
proto.mt5_term_api.SymbolParamsManyRequest.prototype.getSymbolName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.SymbolParamsManyRequest} returns this
 */
proto.mt5_term_api.SymbolParamsManyRequest.prototype.setSymbolName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mt5_term_api.SymbolParamsManyRequest} returns this
 */
proto.mt5_term_api.SymbolParamsManyRequest.prototype.clearSymbolName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.SymbolParamsManyRequest.prototype.hasSymbolName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AH_SYMBOL_PARAMS_MANY_SORT_TYPE sort_type = 2;
 * @return {!proto.mt5_term_api.AH_SYMBOL_PARAMS_MANY_SORT_TYPE}
 */
proto.mt5_term_api.SymbolParamsManyRequest.prototype.getSortType = function() {
  return /** @type {!proto.mt5_term_api.AH_SYMBOL_PARAMS_MANY_SORT_TYPE} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.mt5_term_api.AH_SYMBOL_PARAMS_MANY_SORT_TYPE} value
 * @return {!proto.mt5_term_api.SymbolParamsManyRequest} returns this
 */
proto.mt5_term_api.SymbolParamsManyRequest.prototype.setSortType = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mt5_term_api.SymbolParamsManyRequest} returns this
 */
proto.mt5_term_api.SymbolParamsManyRequest.prototype.clearSortType = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.SymbolParamsManyRequest.prototype.hasSortType = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 page_number = 3;
 * @return {number}
 */
proto.mt5_term_api.SymbolParamsManyRequest.prototype.getPageNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParamsManyRequest} returns this
 */
proto.mt5_term_api.SymbolParamsManyRequest.prototype.setPageNumber = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mt5_term_api.SymbolParamsManyRequest} returns this
 */
proto.mt5_term_api.SymbolParamsManyRequest.prototype.clearPageNumber = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.SymbolParamsManyRequest.prototype.hasPageNumber = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 items_per_page = 4;
 * @return {number}
 */
proto.mt5_term_api.SymbolParamsManyRequest.prototype.getItemsPerPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParamsManyRequest} returns this
 */
proto.mt5_term_api.SymbolParamsManyRequest.prototype.setItemsPerPage = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mt5_term_api.SymbolParamsManyRequest} returns this
 */
proto.mt5_term_api.SymbolParamsManyRequest.prototype.clearItemsPerPage = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.SymbolParamsManyRequest.prototype.hasItemsPerPage = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.mt5_term_api.SymbolParamsManyReply.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.mt5_term_api.SymbolParamsManyReply.ResponseCase = {
  RESPONSE_NOT_SET: 0,
  DATA: 1,
  ERROR: 2
};

/**
 * @return {proto.mt5_term_api.SymbolParamsManyReply.ResponseCase}
 */
proto.mt5_term_api.SymbolParamsManyReply.prototype.getResponseCase = function() {
  return /** @type {proto.mt5_term_api.SymbolParamsManyReply.ResponseCase} */(jspb.Message.computeOneofCase(this, proto.mt5_term_api.SymbolParamsManyReply.oneofGroups_[0]));
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
proto.mt5_term_api.SymbolParamsManyReply.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.SymbolParamsManyReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.SymbolParamsManyReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolParamsManyReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && proto.mt5_term_api.SymbolParamsManyData.toObject(includeInstance, f),
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
 * @return {!proto.mt5_term_api.SymbolParamsManyReply}
 */
proto.mt5_term_api.SymbolParamsManyReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.SymbolParamsManyReply;
  return proto.mt5_term_api.SymbolParamsManyReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.SymbolParamsManyReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.SymbolParamsManyReply}
 */
proto.mt5_term_api.SymbolParamsManyReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mt5_term_api.SymbolParamsManyData;
      reader.readMessage(value,proto.mt5_term_api.SymbolParamsManyData.deserializeBinaryFromReader);
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
proto.mt5_term_api.SymbolParamsManyReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.SymbolParamsManyReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.SymbolParamsManyReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolParamsManyReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mt5_term_api.SymbolParamsManyData.serializeBinaryToWriter
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
 * optional SymbolParamsManyData data = 1;
 * @return {?proto.mt5_term_api.SymbolParamsManyData}
 */
proto.mt5_term_api.SymbolParamsManyReply.prototype.getData = function() {
  return /** @type{?proto.mt5_term_api.SymbolParamsManyData} */ (
    jspb.Message.getWrapperField(this, proto.mt5_term_api.SymbolParamsManyData, 1));
};


/**
 * @param {?proto.mt5_term_api.SymbolParamsManyData|undefined} value
 * @return {!proto.mt5_term_api.SymbolParamsManyReply} returns this
*/
proto.mt5_term_api.SymbolParamsManyReply.prototype.setData = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.mt5_term_api.SymbolParamsManyReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.SymbolParamsManyReply} returns this
 */
proto.mt5_term_api.SymbolParamsManyReply.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.SymbolParamsManyReply.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Error error = 2;
 * @return {?proto.mt5_term_api.Error}
 */
proto.mt5_term_api.SymbolParamsManyReply.prototype.getError = function() {
  return /** @type{?proto.mt5_term_api.Error} */ (
    jspb.Message.getWrapperField(this, mrpc$mt5$error_pb.Error, 2));
};


/**
 * @param {?proto.mt5_term_api.Error|undefined} value
 * @return {!proto.mt5_term_api.SymbolParamsManyReply} returns this
*/
proto.mt5_term_api.SymbolParamsManyReply.prototype.setError = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.mt5_term_api.SymbolParamsManyReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.SymbolParamsManyReply} returns this
 */
proto.mt5_term_api.SymbolParamsManyReply.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.SymbolParamsManyReply.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mt5_term_api.SymbolParamsManyData.repeatedFields_ = [1];



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
proto.mt5_term_api.SymbolParamsManyData.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.SymbolParamsManyData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.SymbolParamsManyData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolParamsManyData.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbolInfosList: jspb.Message.toObjectList(msg.getSymbolInfosList(),
    proto.mt5_term_api.SymbolParameters.toObject, includeInstance),
    symbolsTotal: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pageNumber: jspb.Message.getFieldWithDefault(msg, 3, 0),
    itemsPerPage: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.mt5_term_api.SymbolParamsManyData}
 */
proto.mt5_term_api.SymbolParamsManyData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.SymbolParamsManyData;
  return proto.mt5_term_api.SymbolParamsManyData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.SymbolParamsManyData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.SymbolParamsManyData}
 */
proto.mt5_term_api.SymbolParamsManyData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mt5_term_api.SymbolParameters;
      reader.readMessage(value,proto.mt5_term_api.SymbolParameters.deserializeBinaryFromReader);
      msg.addSymbolInfos(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSymbolsTotal(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageNumber(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setItemsPerPage(value);
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
proto.mt5_term_api.SymbolParamsManyData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.SymbolParamsManyData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.SymbolParamsManyData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolParamsManyData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSymbolInfosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.mt5_term_api.SymbolParameters.serializeBinaryToWriter
    );
  }
  f = message.getSymbolsTotal();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * repeated SymbolParameters symbol_infos = 1;
 * @return {!Array<!proto.mt5_term_api.SymbolParameters>}
 */
proto.mt5_term_api.SymbolParamsManyData.prototype.getSymbolInfosList = function() {
  return /** @type{!Array<!proto.mt5_term_api.SymbolParameters>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.mt5_term_api.SymbolParameters, 1));
};


/**
 * @param {!Array<!proto.mt5_term_api.SymbolParameters>} value
 * @return {!proto.mt5_term_api.SymbolParamsManyData} returns this
*/
proto.mt5_term_api.SymbolParamsManyData.prototype.setSymbolInfosList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.mt5_term_api.SymbolParameters=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mt5_term_api.SymbolParameters}
 */
proto.mt5_term_api.SymbolParamsManyData.prototype.addSymbolInfos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.mt5_term_api.SymbolParameters, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mt5_term_api.SymbolParamsManyData} returns this
 */
proto.mt5_term_api.SymbolParamsManyData.prototype.clearSymbolInfosList = function() {
  return this.setSymbolInfosList([]);
};


/**
 * optional int32 symbols_total = 2;
 * @return {number}
 */
proto.mt5_term_api.SymbolParamsManyData.prototype.getSymbolsTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParamsManyData} returns this
 */
proto.mt5_term_api.SymbolParamsManyData.prototype.setSymbolsTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 page_number = 3;
 * @return {number}
 */
proto.mt5_term_api.SymbolParamsManyData.prototype.getPageNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParamsManyData} returns this
 */
proto.mt5_term_api.SymbolParamsManyData.prototype.setPageNumber = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mt5_term_api.SymbolParamsManyData} returns this
 */
proto.mt5_term_api.SymbolParamsManyData.prototype.clearPageNumber = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.SymbolParamsManyData.prototype.hasPageNumber = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 items_per_page = 4;
 * @return {number}
 */
proto.mt5_term_api.SymbolParamsManyData.prototype.getItemsPerPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParamsManyData} returns this
 */
proto.mt5_term_api.SymbolParamsManyData.prototype.setItemsPerPage = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mt5_term_api.SymbolParamsManyData} returns this
 */
proto.mt5_term_api.SymbolParamsManyData.prototype.clearItemsPerPage = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.SymbolParamsManyData.prototype.hasItemsPerPage = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mt5_term_api.SymbolParameters.repeatedFields_ = [93];



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
proto.mt5_term_api.SymbolParameters.prototype.toObject = function(opt_includeInstance) {
  return proto.mt5_term_api.SymbolParameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mt5_term_api.SymbolParameters} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolParameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    bid: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    bidHigh: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    bidLow: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    ask: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    askHigh: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    askLow: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    last: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    lastHigh: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0),
    lastLow: jspb.Message.getFloatingPointFieldWithDefault(msg, 10, 0.0),
    volumeReal: jspb.Message.getFloatingPointFieldWithDefault(msg, 11, 0.0),
    volumeHighReal: jspb.Message.getFloatingPointFieldWithDefault(msg, 12, 0.0),
    volumeLowReal: jspb.Message.getFloatingPointFieldWithDefault(msg, 13, 0.0),
    optionStrike: jspb.Message.getFloatingPointFieldWithDefault(msg, 14, 0.0),
    point: jspb.Message.getFloatingPointFieldWithDefault(msg, 15, 0.0),
    tradeTickValue: jspb.Message.getFloatingPointFieldWithDefault(msg, 16, 0.0),
    tradeTickValueProfit: jspb.Message.getFloatingPointFieldWithDefault(msg, 17, 0.0),
    tradeTickValueLoss: jspb.Message.getFloatingPointFieldWithDefault(msg, 18, 0.0),
    tradeTickSize: jspb.Message.getFloatingPointFieldWithDefault(msg, 19, 0.0),
    tradeContractSize: jspb.Message.getFloatingPointFieldWithDefault(msg, 20, 0.0),
    tradeAccruedInterest: jspb.Message.getFloatingPointFieldWithDefault(msg, 21, 0.0),
    tradeFaceValue: jspb.Message.getFloatingPointFieldWithDefault(msg, 22, 0.0),
    tradeLiquidityRate: jspb.Message.getFloatingPointFieldWithDefault(msg, 23, 0.0),
    volumeMin: jspb.Message.getFloatingPointFieldWithDefault(msg, 24, 0.0),
    volumeMax: jspb.Message.getFloatingPointFieldWithDefault(msg, 25, 0.0),
    volumeStep: jspb.Message.getFloatingPointFieldWithDefault(msg, 26, 0.0),
    volumeLimit: jspb.Message.getFloatingPointFieldWithDefault(msg, 27, 0.0),
    swapLong: jspb.Message.getFloatingPointFieldWithDefault(msg, 28, 0.0),
    swapShort: jspb.Message.getFloatingPointFieldWithDefault(msg, 29, 0.0),
    swapSunday: jspb.Message.getFloatingPointFieldWithDefault(msg, 30, 0.0),
    swapMonday: jspb.Message.getFloatingPointFieldWithDefault(msg, 31, 0.0),
    swapTuesday: jspb.Message.getFloatingPointFieldWithDefault(msg, 32, 0.0),
    swapWednesday: jspb.Message.getFloatingPointFieldWithDefault(msg, 33, 0.0),
    swapThursday: jspb.Message.getFloatingPointFieldWithDefault(msg, 34, 0.0),
    swapFriday: jspb.Message.getFloatingPointFieldWithDefault(msg, 35, 0.0),
    swapSaturday: jspb.Message.getFloatingPointFieldWithDefault(msg, 36, 0.0),
    marginInitial: jspb.Message.getFloatingPointFieldWithDefault(msg, 37, 0.0),
    marginMaintenance: jspb.Message.getFloatingPointFieldWithDefault(msg, 38, 0.0),
    sessionVolume: jspb.Message.getFloatingPointFieldWithDefault(msg, 39, 0.0),
    sessionTurnover: jspb.Message.getFloatingPointFieldWithDefault(msg, 40, 0.0),
    sessionInterest: jspb.Message.getFloatingPointFieldWithDefault(msg, 41, 0.0),
    sessionBuyOrdersVolume: jspb.Message.getFloatingPointFieldWithDefault(msg, 42, 0.0),
    sessionSellOrdersVolume: jspb.Message.getFloatingPointFieldWithDefault(msg, 43, 0.0),
    sessionOpen: jspb.Message.getFloatingPointFieldWithDefault(msg, 44, 0.0),
    sessionClose: jspb.Message.getFloatingPointFieldWithDefault(msg, 45, 0.0),
    sessionAw: jspb.Message.getFloatingPointFieldWithDefault(msg, 46, 0.0),
    sessionPriceSettlement: jspb.Message.getFloatingPointFieldWithDefault(msg, 47, 0.0),
    sessionPriceLimitMin: jspb.Message.getFloatingPointFieldWithDefault(msg, 48, 0.0),
    sessionPriceLimitMax: jspb.Message.getFloatingPointFieldWithDefault(msg, 49, 0.0),
    marginHedged: jspb.Message.getFloatingPointFieldWithDefault(msg, 50, 0.0),
    priceChange: jspb.Message.getFloatingPointFieldWithDefault(msg, 51, 0.0),
    priceVolatility: jspb.Message.getFloatingPointFieldWithDefault(msg, 52, 0.0),
    priceTheoretical: jspb.Message.getFloatingPointFieldWithDefault(msg, 53, 0.0),
    priceDelta: jspb.Message.getFloatingPointFieldWithDefault(msg, 54, 0.0),
    priceTheta: jspb.Message.getFloatingPointFieldWithDefault(msg, 55, 0.0),
    priceGamma: jspb.Message.getFloatingPointFieldWithDefault(msg, 56, 0.0),
    priceVega: jspb.Message.getFloatingPointFieldWithDefault(msg, 57, 0.0),
    priceRho: jspb.Message.getFloatingPointFieldWithDefault(msg, 58, 0.0),
    priceOmega: jspb.Message.getFloatingPointFieldWithDefault(msg, 59, 0.0),
    priceSensitivity: jspb.Message.getFloatingPointFieldWithDefault(msg, 60, 0.0),
    sector: jspb.Message.getFieldWithDefault(msg, 61, 0),
    industry: jspb.Message.getFieldWithDefault(msg, 62, 0),
    custom: jspb.Message.getBooleanFieldWithDefault(msg, 63, false),
    backgroundColor: jspb.Message.getFieldWithDefault(msg, 64, ""),
    chartMode: jspb.Message.getFieldWithDefault(msg, 65, 0),
    exist: jspb.Message.getBooleanFieldWithDefault(msg, 66, false),
    select: jspb.Message.getBooleanFieldWithDefault(msg, 67, false),
    subscriptionDelay: jspb.Message.getFieldWithDefault(msg, 68, 0),
    visible: jspb.Message.getBooleanFieldWithDefault(msg, 69, false),
    sessionDeals: jspb.Message.getFieldWithDefault(msg, 70, 0),
    sessionBuyOrders: jspb.Message.getFieldWithDefault(msg, 71, 0),
    sessionSellOrders: jspb.Message.getFieldWithDefault(msg, 72, 0),
    volume: jspb.Message.getFieldWithDefault(msg, 73, 0),
    volumeHigh: jspb.Message.getFieldWithDefault(msg, 74, 0),
    volumeLow: jspb.Message.getFieldWithDefault(msg, 75, 0),
    time: (f = msg.getTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    timeMsc: jspb.Message.getFieldWithDefault(msg, 77, 0),
    digits: jspb.Message.getFieldWithDefault(msg, 78, 0),
    spreadFloat: jspb.Message.getBooleanFieldWithDefault(msg, 79, false),
    spread: jspb.Message.getFieldWithDefault(msg, 80, 0),
    ticksBookDepth: jspb.Message.getFieldWithDefault(msg, 81, 0),
    tradeCalcMode: jspb.Message.getFieldWithDefault(msg, 82, 0),
    tradeMode: jspb.Message.getFieldWithDefault(msg, 83, 0),
    startTime: (f = msg.getStartTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    expirationTime: (f = msg.getExpirationTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    tradeStopsLevel: jspb.Message.getFieldWithDefault(msg, 86, 0),
    tradeFreezeLevel: jspb.Message.getFieldWithDefault(msg, 87, 0),
    tradeExeMode: jspb.Message.getFieldWithDefault(msg, 88, 0),
    swapMode: jspb.Message.getFieldWithDefault(msg, 89, 0),
    swapRollover3days: jspb.Message.getFieldWithDefault(msg, 90, 0),
    marginHedgedUseLeg: jspb.Message.getBooleanFieldWithDefault(msg, 91, false),
    expirationMode: jspb.Message.getFieldWithDefault(msg, 92, 0),
    fillingModeList: (f = jspb.Message.getRepeatedField(msg, 93)) == null ? undefined : f,
    orderMode: jspb.Message.getFieldWithDefault(msg, 94, 0),
    orderGtcMode: jspb.Message.getFieldWithDefault(msg, 95, 0),
    optionMode: jspb.Message.getFieldWithDefault(msg, 96, 0),
    optionRight: jspb.Message.getFieldWithDefault(msg, 97, 0),
    basis: jspb.Message.getFieldWithDefault(msg, 98, ""),
    category: jspb.Message.getFieldWithDefault(msg, 99, ""),
    country: jspb.Message.getFieldWithDefault(msg, 100, ""),
    sectorName: jspb.Message.getFieldWithDefault(msg, 101, ""),
    industryName: jspb.Message.getFieldWithDefault(msg, 102, ""),
    currencyBase: jspb.Message.getFieldWithDefault(msg, 103, ""),
    currencyProfit: jspb.Message.getFieldWithDefault(msg, 104, ""),
    currencyMargin: jspb.Message.getFieldWithDefault(msg, 105, ""),
    bank: jspb.Message.getFieldWithDefault(msg, 106, ""),
    symDescription: jspb.Message.getFieldWithDefault(msg, 107, ""),
    exchange: jspb.Message.getFieldWithDefault(msg, 108, ""),
    formula: jspb.Message.getFieldWithDefault(msg, 109, ""),
    isin: jspb.Message.getFieldWithDefault(msg, 110, ""),
    page: jspb.Message.getFieldWithDefault(msg, 111, ""),
    path: jspb.Message.getFieldWithDefault(msg, 112, "")
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
 * @return {!proto.mt5_term_api.SymbolParameters}
 */
proto.mt5_term_api.SymbolParameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mt5_term_api.SymbolParameters;
  return proto.mt5_term_api.SymbolParameters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mt5_term_api.SymbolParameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mt5_term_api.SymbolParameters}
 */
proto.mt5_term_api.SymbolParameters.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBidHigh(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBidLow(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAsk(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAskHigh(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAskLow(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLast(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLastHigh(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLastLow(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVolumeReal(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVolumeHighReal(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVolumeLowReal(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOptionStrike(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPoint(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTradeTickValue(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTradeTickValueProfit(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTradeTickValueLoss(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTradeTickSize(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTradeContractSize(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTradeAccruedInterest(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTradeFaceValue(value);
      break;
    case 23:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTradeLiquidityRate(value);
      break;
    case 24:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVolumeMin(value);
      break;
    case 25:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVolumeMax(value);
      break;
    case 26:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVolumeStep(value);
      break;
    case 27:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVolumeLimit(value);
      break;
    case 28:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSwapLong(value);
      break;
    case 29:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSwapShort(value);
      break;
    case 30:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSwapSunday(value);
      break;
    case 31:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSwapMonday(value);
      break;
    case 32:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSwapTuesday(value);
      break;
    case 33:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSwapWednesday(value);
      break;
    case 34:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSwapThursday(value);
      break;
    case 35:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSwapFriday(value);
      break;
    case 36:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSwapSaturday(value);
      break;
    case 37:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMarginInitial(value);
      break;
    case 38:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMarginMaintenance(value);
      break;
    case 39:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSessionVolume(value);
      break;
    case 40:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSessionTurnover(value);
      break;
    case 41:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSessionInterest(value);
      break;
    case 42:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSessionBuyOrdersVolume(value);
      break;
    case 43:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSessionSellOrdersVolume(value);
      break;
    case 44:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSessionOpen(value);
      break;
    case 45:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSessionClose(value);
      break;
    case 46:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSessionAw(value);
      break;
    case 47:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSessionPriceSettlement(value);
      break;
    case 48:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSessionPriceLimitMin(value);
      break;
    case 49:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSessionPriceLimitMax(value);
      break;
    case 50:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMarginHedged(value);
      break;
    case 51:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPriceChange(value);
      break;
    case 52:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPriceVolatility(value);
      break;
    case 53:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPriceTheoretical(value);
      break;
    case 54:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPriceDelta(value);
      break;
    case 55:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPriceTheta(value);
      break;
    case 56:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPriceGamma(value);
      break;
    case 57:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPriceVega(value);
      break;
    case 58:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPriceRho(value);
      break;
    case 59:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPriceOmega(value);
      break;
    case 60:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPriceSensitivity(value);
      break;
    case 61:
      var value = /** @type {!proto.mt5_term_api.BMT5_ENUM_SYMBOL_SECTOR} */ (reader.readEnum());
      msg.setSector(value);
      break;
    case 62:
      var value = /** @type {!proto.mt5_term_api.BMT5_ENUM_SYMBOL_INDUSTRY} */ (reader.readEnum());
      msg.setIndustry(value);
      break;
    case 63:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCustom(value);
      break;
    case 64:
      var value = /** @type {string} */ (reader.readString());
      msg.setBackgroundColor(value);
      break;
    case 65:
      var value = /** @type {!proto.mt5_term_api.BMT5_ENUM_SYMBOL_CHART_MODE} */ (reader.readEnum());
      msg.setChartMode(value);
      break;
    case 66:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExist(value);
      break;
    case 67:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSelect(value);
      break;
    case 68:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSubscriptionDelay(value);
      break;
    case 69:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVisible(value);
      break;
    case 70:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSessionDeals(value);
      break;
    case 71:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSessionBuyOrders(value);
      break;
    case 72:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSessionSellOrders(value);
      break;
    case 73:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVolume(value);
      break;
    case 74:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVolumeHigh(value);
      break;
    case 75:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVolumeLow(value);
      break;
    case 76:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 77:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimeMsc(value);
      break;
    case 78:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDigits(value);
      break;
    case 79:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSpreadFloat(value);
      break;
    case 80:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSpread(value);
      break;
    case 81:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTicksBookDepth(value);
      break;
    case 82:
      var value = /** @type {!proto.mt5_term_api.BMT5_ENUM_SYMBOL_CALC_MODE} */ (reader.readEnum());
      msg.setTradeCalcMode(value);
      break;
    case 83:
      var value = /** @type {!proto.mt5_term_api.BMT5_ENUM_SYMBOL_TRADE_MODE} */ (reader.readEnum());
      msg.setTradeMode(value);
      break;
    case 84:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartTime(value);
      break;
    case 85:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpirationTime(value);
      break;
    case 86:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTradeStopsLevel(value);
      break;
    case 87:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTradeFreezeLevel(value);
      break;
    case 88:
      var value = /** @type {!proto.mt5_term_api.BMT5_ENUM_SYMBOL_TRADE_EXECUTION} */ (reader.readEnum());
      msg.setTradeExeMode(value);
      break;
    case 89:
      var value = /** @type {!proto.mt5_term_api.BMT5_ENUM_SYMBOL_SWAP_MODE} */ (reader.readEnum());
      msg.setSwapMode(value);
      break;
    case 90:
      var value = /** @type {!proto.mt5_term_api.BMT5_ENUM_DAY_OF_WEEK} */ (reader.readEnum());
      msg.setSwapRollover3days(value);
      break;
    case 91:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMarginHedgedUseLeg(value);
      break;
    case 92:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setExpirationMode(value);
      break;
    case 93:
      var values = /** @type {!Array<!proto.mt5_term_api.BMT5_ENUM_ORDER_TYPE_FILLING>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addFillingMode(values[i]);
      }
      break;
    case 94:
      var value = /** @type {!proto.mt5_term_api.BMT5_ENUM_ORDER_TYPE} */ (reader.readEnum());
      msg.setOrderMode(value);
      break;
    case 95:
      var value = /** @type {!proto.mt5_term_api.BMT5_ENUM_SYMBOL_ORDER_GTC_MODE} */ (reader.readEnum());
      msg.setOrderGtcMode(value);
      break;
    case 96:
      var value = /** @type {!proto.mt5_term_api.BMT5_ENUM_SYMBOL_OPTION_MODE} */ (reader.readEnum());
      msg.setOptionMode(value);
      break;
    case 97:
      var value = /** @type {!proto.mt5_term_api.BMT5_ENUM_SYMBOL_OPTION_RIGHT} */ (reader.readEnum());
      msg.setOptionRight(value);
      break;
    case 98:
      var value = /** @type {string} */ (reader.readString());
      msg.setBasis(value);
      break;
    case 99:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 100:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountry(value);
      break;
    case 101:
      var value = /** @type {string} */ (reader.readString());
      msg.setSectorName(value);
      break;
    case 102:
      var value = /** @type {string} */ (reader.readString());
      msg.setIndustryName(value);
      break;
    case 103:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencyBase(value);
      break;
    case 104:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencyProfit(value);
      break;
    case 105:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencyMargin(value);
      break;
    case 106:
      var value = /** @type {string} */ (reader.readString());
      msg.setBank(value);
      break;
    case 107:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymDescription(value);
      break;
    case 108:
      var value = /** @type {string} */ (reader.readString());
      msg.setExchange(value);
      break;
    case 109:
      var value = /** @type {string} */ (reader.readString());
      msg.setFormula(value);
      break;
    case 110:
      var value = /** @type {string} */ (reader.readString());
      msg.setIsin(value);
      break;
    case 111:
      var value = /** @type {string} */ (reader.readString());
      msg.setPage(value);
      break;
    case 112:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
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
proto.mt5_term_api.SymbolParameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mt5_term_api.SymbolParameters.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mt5_term_api.SymbolParameters} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mt5_term_api.SymbolParameters.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getBidHigh();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getBidLow();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getAsk();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getAskHigh();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getAskLow();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getLast();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = message.getLastHigh();
  if (f !== 0.0) {
    writer.writeDouble(
      9,
      f
    );
  }
  f = message.getLastLow();
  if (f !== 0.0) {
    writer.writeDouble(
      10,
      f
    );
  }
  f = message.getVolumeReal();
  if (f !== 0.0) {
    writer.writeDouble(
      11,
      f
    );
  }
  f = message.getVolumeHighReal();
  if (f !== 0.0) {
    writer.writeDouble(
      12,
      f
    );
  }
  f = message.getVolumeLowReal();
  if (f !== 0.0) {
    writer.writeDouble(
      13,
      f
    );
  }
  f = message.getOptionStrike();
  if (f !== 0.0) {
    writer.writeDouble(
      14,
      f
    );
  }
  f = message.getPoint();
  if (f !== 0.0) {
    writer.writeDouble(
      15,
      f
    );
  }
  f = message.getTradeTickValue();
  if (f !== 0.0) {
    writer.writeDouble(
      16,
      f
    );
  }
  f = message.getTradeTickValueProfit();
  if (f !== 0.0) {
    writer.writeDouble(
      17,
      f
    );
  }
  f = message.getTradeTickValueLoss();
  if (f !== 0.0) {
    writer.writeDouble(
      18,
      f
    );
  }
  f = message.getTradeTickSize();
  if (f !== 0.0) {
    writer.writeDouble(
      19,
      f
    );
  }
  f = message.getTradeContractSize();
  if (f !== 0.0) {
    writer.writeDouble(
      20,
      f
    );
  }
  f = message.getTradeAccruedInterest();
  if (f !== 0.0) {
    writer.writeDouble(
      21,
      f
    );
  }
  f = message.getTradeFaceValue();
  if (f !== 0.0) {
    writer.writeDouble(
      22,
      f
    );
  }
  f = message.getTradeLiquidityRate();
  if (f !== 0.0) {
    writer.writeDouble(
      23,
      f
    );
  }
  f = message.getVolumeMin();
  if (f !== 0.0) {
    writer.writeDouble(
      24,
      f
    );
  }
  f = message.getVolumeMax();
  if (f !== 0.0) {
    writer.writeDouble(
      25,
      f
    );
  }
  f = message.getVolumeStep();
  if (f !== 0.0) {
    writer.writeDouble(
      26,
      f
    );
  }
  f = message.getVolumeLimit();
  if (f !== 0.0) {
    writer.writeDouble(
      27,
      f
    );
  }
  f = message.getSwapLong();
  if (f !== 0.0) {
    writer.writeDouble(
      28,
      f
    );
  }
  f = message.getSwapShort();
  if (f !== 0.0) {
    writer.writeDouble(
      29,
      f
    );
  }
  f = message.getSwapSunday();
  if (f !== 0.0) {
    writer.writeDouble(
      30,
      f
    );
  }
  f = message.getSwapMonday();
  if (f !== 0.0) {
    writer.writeDouble(
      31,
      f
    );
  }
  f = message.getSwapTuesday();
  if (f !== 0.0) {
    writer.writeDouble(
      32,
      f
    );
  }
  f = message.getSwapWednesday();
  if (f !== 0.0) {
    writer.writeDouble(
      33,
      f
    );
  }
  f = message.getSwapThursday();
  if (f !== 0.0) {
    writer.writeDouble(
      34,
      f
    );
  }
  f = message.getSwapFriday();
  if (f !== 0.0) {
    writer.writeDouble(
      35,
      f
    );
  }
  f = message.getSwapSaturday();
  if (f !== 0.0) {
    writer.writeDouble(
      36,
      f
    );
  }
  f = message.getMarginInitial();
  if (f !== 0.0) {
    writer.writeDouble(
      37,
      f
    );
  }
  f = message.getMarginMaintenance();
  if (f !== 0.0) {
    writer.writeDouble(
      38,
      f
    );
  }
  f = message.getSessionVolume();
  if (f !== 0.0) {
    writer.writeDouble(
      39,
      f
    );
  }
  f = message.getSessionTurnover();
  if (f !== 0.0) {
    writer.writeDouble(
      40,
      f
    );
  }
  f = message.getSessionInterest();
  if (f !== 0.0) {
    writer.writeDouble(
      41,
      f
    );
  }
  f = message.getSessionBuyOrdersVolume();
  if (f !== 0.0) {
    writer.writeDouble(
      42,
      f
    );
  }
  f = message.getSessionSellOrdersVolume();
  if (f !== 0.0) {
    writer.writeDouble(
      43,
      f
    );
  }
  f = message.getSessionOpen();
  if (f !== 0.0) {
    writer.writeDouble(
      44,
      f
    );
  }
  f = message.getSessionClose();
  if (f !== 0.0) {
    writer.writeDouble(
      45,
      f
    );
  }
  f = message.getSessionAw();
  if (f !== 0.0) {
    writer.writeDouble(
      46,
      f
    );
  }
  f = message.getSessionPriceSettlement();
  if (f !== 0.0) {
    writer.writeDouble(
      47,
      f
    );
  }
  f = message.getSessionPriceLimitMin();
  if (f !== 0.0) {
    writer.writeDouble(
      48,
      f
    );
  }
  f = message.getSessionPriceLimitMax();
  if (f !== 0.0) {
    writer.writeDouble(
      49,
      f
    );
  }
  f = message.getMarginHedged();
  if (f !== 0.0) {
    writer.writeDouble(
      50,
      f
    );
  }
  f = message.getPriceChange();
  if (f !== 0.0) {
    writer.writeDouble(
      51,
      f
    );
  }
  f = message.getPriceVolatility();
  if (f !== 0.0) {
    writer.writeDouble(
      52,
      f
    );
  }
  f = message.getPriceTheoretical();
  if (f !== 0.0) {
    writer.writeDouble(
      53,
      f
    );
  }
  f = message.getPriceDelta();
  if (f !== 0.0) {
    writer.writeDouble(
      54,
      f
    );
  }
  f = message.getPriceTheta();
  if (f !== 0.0) {
    writer.writeDouble(
      55,
      f
    );
  }
  f = message.getPriceGamma();
  if (f !== 0.0) {
    writer.writeDouble(
      56,
      f
    );
  }
  f = message.getPriceVega();
  if (f !== 0.0) {
    writer.writeDouble(
      57,
      f
    );
  }
  f = message.getPriceRho();
  if (f !== 0.0) {
    writer.writeDouble(
      58,
      f
    );
  }
  f = message.getPriceOmega();
  if (f !== 0.0) {
    writer.writeDouble(
      59,
      f
    );
  }
  f = message.getPriceSensitivity();
  if (f !== 0.0) {
    writer.writeDouble(
      60,
      f
    );
  }
  f = message.getSector();
  if (f !== 0.0) {
    writer.writeEnum(
      61,
      f
    );
  }
  f = message.getIndustry();
  if (f !== 0.0) {
    writer.writeEnum(
      62,
      f
    );
  }
  f = message.getCustom();
  if (f) {
    writer.writeBool(
      63,
      f
    );
  }
  f = message.getBackgroundColor();
  if (f.length > 0) {
    writer.writeString(
      64,
      f
    );
  }
  f = message.getChartMode();
  if (f !== 0.0) {
    writer.writeEnum(
      65,
      f
    );
  }
  f = message.getExist();
  if (f) {
    writer.writeBool(
      66,
      f
    );
  }
  f = message.getSelect();
  if (f) {
    writer.writeBool(
      67,
      f
    );
  }
  f = message.getSubscriptionDelay();
  if (f !== 0) {
    writer.writeInt32(
      68,
      f
    );
  }
  f = message.getVisible();
  if (f) {
    writer.writeBool(
      69,
      f
    );
  }
  f = message.getSessionDeals();
  if (f !== 0) {
    writer.writeInt64(
      70,
      f
    );
  }
  f = message.getSessionBuyOrders();
  if (f !== 0) {
    writer.writeInt64(
      71,
      f
    );
  }
  f = message.getSessionSellOrders();
  if (f !== 0) {
    writer.writeInt64(
      72,
      f
    );
  }
  f = message.getVolume();
  if (f !== 0) {
    writer.writeInt64(
      73,
      f
    );
  }
  f = message.getVolumeHigh();
  if (f !== 0) {
    writer.writeInt64(
      74,
      f
    );
  }
  f = message.getVolumeLow();
  if (f !== 0) {
    writer.writeInt64(
      75,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      76,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTimeMsc();
  if (f !== 0) {
    writer.writeInt64(
      77,
      f
    );
  }
  f = message.getDigits();
  if (f !== 0) {
    writer.writeInt32(
      78,
      f
    );
  }
  f = message.getSpreadFloat();
  if (f) {
    writer.writeBool(
      79,
      f
    );
  }
  f = message.getSpread();
  if (f !== 0) {
    writer.writeInt32(
      80,
      f
    );
  }
  f = message.getTicksBookDepth();
  if (f !== 0) {
    writer.writeInt32(
      81,
      f
    );
  }
  f = message.getTradeCalcMode();
  if (f !== 0.0) {
    writer.writeEnum(
      82,
      f
    );
  }
  f = message.getTradeMode();
  if (f !== 0.0) {
    writer.writeEnum(
      83,
      f
    );
  }
  f = message.getStartTime();
  if (f != null) {
    writer.writeMessage(
      84,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getExpirationTime();
  if (f != null) {
    writer.writeMessage(
      85,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTradeStopsLevel();
  if (f !== 0) {
    writer.writeInt32(
      86,
      f
    );
  }
  f = message.getTradeFreezeLevel();
  if (f !== 0) {
    writer.writeInt32(
      87,
      f
    );
  }
  f = message.getTradeExeMode();
  if (f !== 0.0) {
    writer.writeEnum(
      88,
      f
    );
  }
  f = message.getSwapMode();
  if (f !== 0.0) {
    writer.writeEnum(
      89,
      f
    );
  }
  f = message.getSwapRollover3days();
  if (f !== 0.0) {
    writer.writeEnum(
      90,
      f
    );
  }
  f = message.getMarginHedgedUseLeg();
  if (f) {
    writer.writeBool(
      91,
      f
    );
  }
  f = message.getExpirationMode();
  if (f !== 0) {
    writer.writeInt32(
      92,
      f
    );
  }
  f = message.getFillingModeList();
  if (f.length > 0) {
    writer.writePackedEnum(
      93,
      f
    );
  }
  f = message.getOrderMode();
  if (f !== 0.0) {
    writer.writeEnum(
      94,
      f
    );
  }
  f = message.getOrderGtcMode();
  if (f !== 0.0) {
    writer.writeEnum(
      95,
      f
    );
  }
  f = message.getOptionMode();
  if (f !== 0.0) {
    writer.writeEnum(
      96,
      f
    );
  }
  f = message.getOptionRight();
  if (f !== 0.0) {
    writer.writeEnum(
      97,
      f
    );
  }
  f = message.getBasis();
  if (f.length > 0) {
    writer.writeString(
      98,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      99,
      f
    );
  }
  f = message.getCountry();
  if (f.length > 0) {
    writer.writeString(
      100,
      f
    );
  }
  f = message.getSectorName();
  if (f.length > 0) {
    writer.writeString(
      101,
      f
    );
  }
  f = message.getIndustryName();
  if (f.length > 0) {
    writer.writeString(
      102,
      f
    );
  }
  f = message.getCurrencyBase();
  if (f.length > 0) {
    writer.writeString(
      103,
      f
    );
  }
  f = message.getCurrencyProfit();
  if (f.length > 0) {
    writer.writeString(
      104,
      f
    );
  }
  f = message.getCurrencyMargin();
  if (f.length > 0) {
    writer.writeString(
      105,
      f
    );
  }
  f = message.getBank();
  if (f.length > 0) {
    writer.writeString(
      106,
      f
    );
  }
  f = message.getSymDescription();
  if (f.length > 0) {
    writer.writeString(
      107,
      f
    );
  }
  f = message.getExchange();
  if (f.length > 0) {
    writer.writeString(
      108,
      f
    );
  }
  f = message.getFormula();
  if (f.length > 0) {
    writer.writeString(
      109,
      f
    );
  }
  f = message.getIsin();
  if (f.length > 0) {
    writer.writeString(
      110,
      f
    );
  }
  f = message.getPage();
  if (f.length > 0) {
    writer.writeString(
      111,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      112,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.mt5_term_api.SymbolParameters.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double bid = 2;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getBid = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setBid = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double bid_high = 3;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getBidHigh = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setBidHigh = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double bid_low = 4;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getBidLow = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setBidLow = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double ask = 5;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getAsk = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setAsk = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double ask_high = 6;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getAskHigh = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setAskHigh = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional double ask_low = 7;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getAskLow = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setAskLow = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional double last = 8;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getLast = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setLast = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional double last_high = 9;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getLastHigh = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setLastHigh = function(value) {
  return jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * optional double last_low = 10;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getLastLow = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setLastLow = function(value) {
  return jspb.Message.setProto3FloatField(this, 10, value);
};


/**
 * optional double volume_real = 11;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getVolumeReal = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setVolumeReal = function(value) {
  return jspb.Message.setProto3FloatField(this, 11, value);
};


/**
 * optional double volume_high_real = 12;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getVolumeHighReal = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 12, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setVolumeHighReal = function(value) {
  return jspb.Message.setProto3FloatField(this, 12, value);
};


/**
 * optional double volume_low_real = 13;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getVolumeLowReal = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 13, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setVolumeLowReal = function(value) {
  return jspb.Message.setProto3FloatField(this, 13, value);
};


/**
 * optional double option_strike = 14;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getOptionStrike = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 14, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setOptionStrike = function(value) {
  return jspb.Message.setProto3FloatField(this, 14, value);
};


/**
 * optional double point = 15;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getPoint = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 15, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setPoint = function(value) {
  return jspb.Message.setProto3FloatField(this, 15, value);
};


/**
 * optional double trade_tick_value = 16;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getTradeTickValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 16, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setTradeTickValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 16, value);
};


/**
 * optional double trade_tick_value_profit = 17;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getTradeTickValueProfit = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 17, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setTradeTickValueProfit = function(value) {
  return jspb.Message.setProto3FloatField(this, 17, value);
};


/**
 * optional double trade_tick_value_loss = 18;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getTradeTickValueLoss = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 18, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setTradeTickValueLoss = function(value) {
  return jspb.Message.setProto3FloatField(this, 18, value);
};


/**
 * optional double trade_tick_size = 19;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getTradeTickSize = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 19, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setTradeTickSize = function(value) {
  return jspb.Message.setProto3FloatField(this, 19, value);
};


/**
 * optional double trade_contract_size = 20;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getTradeContractSize = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 20, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setTradeContractSize = function(value) {
  return jspb.Message.setProto3FloatField(this, 20, value);
};


/**
 * optional double trade_accrued_interest = 21;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getTradeAccruedInterest = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 21, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setTradeAccruedInterest = function(value) {
  return jspb.Message.setProto3FloatField(this, 21, value);
};


/**
 * optional double trade_face_value = 22;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getTradeFaceValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 22, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setTradeFaceValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 22, value);
};


/**
 * optional double trade_liquidity_rate = 23;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getTradeLiquidityRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 23, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setTradeLiquidityRate = function(value) {
  return jspb.Message.setProto3FloatField(this, 23, value);
};


/**
 * optional double volume_min = 24;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getVolumeMin = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 24, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setVolumeMin = function(value) {
  return jspb.Message.setProto3FloatField(this, 24, value);
};


/**
 * optional double volume_max = 25;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getVolumeMax = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 25, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setVolumeMax = function(value) {
  return jspb.Message.setProto3FloatField(this, 25, value);
};


/**
 * optional double volume_step = 26;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getVolumeStep = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 26, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setVolumeStep = function(value) {
  return jspb.Message.setProto3FloatField(this, 26, value);
};


/**
 * optional double volume_limit = 27;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getVolumeLimit = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 27, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setVolumeLimit = function(value) {
  return jspb.Message.setProto3FloatField(this, 27, value);
};


/**
 * optional double swap_long = 28;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getSwapLong = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 28, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setSwapLong = function(value) {
  return jspb.Message.setProto3FloatField(this, 28, value);
};


/**
 * optional double swap_short = 29;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getSwapShort = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 29, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setSwapShort = function(value) {
  return jspb.Message.setProto3FloatField(this, 29, value);
};


/**
 * optional double swap_sunday = 30;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getSwapSunday = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 30, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setSwapSunday = function(value) {
  return jspb.Message.setProto3FloatField(this, 30, value);
};


/**
 * optional double swap_monday = 31;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getSwapMonday = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 31, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setSwapMonday = function(value) {
  return jspb.Message.setProto3FloatField(this, 31, value);
};


/**
 * optional double swap_tuesday = 32;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getSwapTuesday = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 32, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setSwapTuesday = function(value) {
  return jspb.Message.setProto3FloatField(this, 32, value);
};


/**
 * optional double swap_wednesday = 33;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getSwapWednesday = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 33, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setSwapWednesday = function(value) {
  return jspb.Message.setProto3FloatField(this, 33, value);
};


/**
 * optional double swap_thursday = 34;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getSwapThursday = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 34, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setSwapThursday = function(value) {
  return jspb.Message.setProto3FloatField(this, 34, value);
};


/**
 * optional double swap_friday = 35;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getSwapFriday = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 35, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setSwapFriday = function(value) {
  return jspb.Message.setProto3FloatField(this, 35, value);
};


/**
 * optional double swap_saturday = 36;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getSwapSaturday = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 36, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setSwapSaturday = function(value) {
  return jspb.Message.setProto3FloatField(this, 36, value);
};


/**
 * optional double margin_initial = 37;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getMarginInitial = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 37, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setMarginInitial = function(value) {
  return jspb.Message.setProto3FloatField(this, 37, value);
};


/**
 * optional double margin_maintenance = 38;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getMarginMaintenance = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 38, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setMarginMaintenance = function(value) {
  return jspb.Message.setProto3FloatField(this, 38, value);
};


/**
 * optional double session_volume = 39;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getSessionVolume = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 39, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setSessionVolume = function(value) {
  return jspb.Message.setProto3FloatField(this, 39, value);
};


/**
 * optional double session_turnover = 40;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getSessionTurnover = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 40, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setSessionTurnover = function(value) {
  return jspb.Message.setProto3FloatField(this, 40, value);
};


/**
 * optional double session_interest = 41;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getSessionInterest = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 41, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setSessionInterest = function(value) {
  return jspb.Message.setProto3FloatField(this, 41, value);
};


/**
 * optional double session_buy_orders_volume = 42;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getSessionBuyOrdersVolume = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 42, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setSessionBuyOrdersVolume = function(value) {
  return jspb.Message.setProto3FloatField(this, 42, value);
};


/**
 * optional double session_sell_orders_volume = 43;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getSessionSellOrdersVolume = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 43, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setSessionSellOrdersVolume = function(value) {
  return jspb.Message.setProto3FloatField(this, 43, value);
};


/**
 * optional double session_open = 44;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getSessionOpen = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 44, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setSessionOpen = function(value) {
  return jspb.Message.setProto3FloatField(this, 44, value);
};


/**
 * optional double session_close = 45;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getSessionClose = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 45, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setSessionClose = function(value) {
  return jspb.Message.setProto3FloatField(this, 45, value);
};


/**
 * optional double session_aw = 46;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getSessionAw = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 46, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setSessionAw = function(value) {
  return jspb.Message.setProto3FloatField(this, 46, value);
};


/**
 * optional double session_price_settlement = 47;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getSessionPriceSettlement = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 47, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setSessionPriceSettlement = function(value) {
  return jspb.Message.setProto3FloatField(this, 47, value);
};


/**
 * optional double session_price_limit_min = 48;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getSessionPriceLimitMin = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 48, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setSessionPriceLimitMin = function(value) {
  return jspb.Message.setProto3FloatField(this, 48, value);
};


/**
 * optional double session_price_limit_max = 49;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getSessionPriceLimitMax = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 49, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setSessionPriceLimitMax = function(value) {
  return jspb.Message.setProto3FloatField(this, 49, value);
};


/**
 * optional double margin_hedged = 50;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getMarginHedged = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 50, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setMarginHedged = function(value) {
  return jspb.Message.setProto3FloatField(this, 50, value);
};


/**
 * optional double price_change = 51;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getPriceChange = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 51, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setPriceChange = function(value) {
  return jspb.Message.setProto3FloatField(this, 51, value);
};


/**
 * optional double price_volatility = 52;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getPriceVolatility = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 52, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setPriceVolatility = function(value) {
  return jspb.Message.setProto3FloatField(this, 52, value);
};


/**
 * optional double price_theoretical = 53;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getPriceTheoretical = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 53, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setPriceTheoretical = function(value) {
  return jspb.Message.setProto3FloatField(this, 53, value);
};


/**
 * optional double price_delta = 54;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getPriceDelta = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 54, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setPriceDelta = function(value) {
  return jspb.Message.setProto3FloatField(this, 54, value);
};


/**
 * optional double price_theta = 55;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getPriceTheta = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 55, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setPriceTheta = function(value) {
  return jspb.Message.setProto3FloatField(this, 55, value);
};


/**
 * optional double price_gamma = 56;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getPriceGamma = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 56, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setPriceGamma = function(value) {
  return jspb.Message.setProto3FloatField(this, 56, value);
};


/**
 * optional double price_vega = 57;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getPriceVega = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 57, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setPriceVega = function(value) {
  return jspb.Message.setProto3FloatField(this, 57, value);
};


/**
 * optional double price_rho = 58;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getPriceRho = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 58, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setPriceRho = function(value) {
  return jspb.Message.setProto3FloatField(this, 58, value);
};


/**
 * optional double price_omega = 59;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getPriceOmega = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 59, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setPriceOmega = function(value) {
  return jspb.Message.setProto3FloatField(this, 59, value);
};


/**
 * optional double price_sensitivity = 60;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getPriceSensitivity = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 60, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setPriceSensitivity = function(value) {
  return jspb.Message.setProto3FloatField(this, 60, value);
};


/**
 * optional BMT5_ENUM_SYMBOL_SECTOR sector = 61;
 * @return {!proto.mt5_term_api.BMT5_ENUM_SYMBOL_SECTOR}
 */
proto.mt5_term_api.SymbolParameters.prototype.getSector = function() {
  return /** @type {!proto.mt5_term_api.BMT5_ENUM_SYMBOL_SECTOR} */ (jspb.Message.getFieldWithDefault(this, 61, 0));
};


/**
 * @param {!proto.mt5_term_api.BMT5_ENUM_SYMBOL_SECTOR} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setSector = function(value) {
  return jspb.Message.setProto3EnumField(this, 61, value);
};


/**
 * optional BMT5_ENUM_SYMBOL_INDUSTRY industry = 62;
 * @return {!proto.mt5_term_api.BMT5_ENUM_SYMBOL_INDUSTRY}
 */
proto.mt5_term_api.SymbolParameters.prototype.getIndustry = function() {
  return /** @type {!proto.mt5_term_api.BMT5_ENUM_SYMBOL_INDUSTRY} */ (jspb.Message.getFieldWithDefault(this, 62, 0));
};


/**
 * @param {!proto.mt5_term_api.BMT5_ENUM_SYMBOL_INDUSTRY} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setIndustry = function(value) {
  return jspb.Message.setProto3EnumField(this, 62, value);
};


/**
 * optional bool custom = 63;
 * @return {boolean}
 */
proto.mt5_term_api.SymbolParameters.prototype.getCustom = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 63, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setCustom = function(value) {
  return jspb.Message.setProto3BooleanField(this, 63, value);
};


/**
 * optional string background_color = 64;
 * @return {string}
 */
proto.mt5_term_api.SymbolParameters.prototype.getBackgroundColor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 64, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setBackgroundColor = function(value) {
  return jspb.Message.setProto3StringField(this, 64, value);
};


/**
 * optional BMT5_ENUM_SYMBOL_CHART_MODE chart_mode = 65;
 * @return {!proto.mt5_term_api.BMT5_ENUM_SYMBOL_CHART_MODE}
 */
proto.mt5_term_api.SymbolParameters.prototype.getChartMode = function() {
  return /** @type {!proto.mt5_term_api.BMT5_ENUM_SYMBOL_CHART_MODE} */ (jspb.Message.getFieldWithDefault(this, 65, 0));
};


/**
 * @param {!proto.mt5_term_api.BMT5_ENUM_SYMBOL_CHART_MODE} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setChartMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 65, value);
};


/**
 * optional bool exist = 66;
 * @return {boolean}
 */
proto.mt5_term_api.SymbolParameters.prototype.getExist = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 66, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setExist = function(value) {
  return jspb.Message.setProto3BooleanField(this, 66, value);
};


/**
 * optional bool select = 67;
 * @return {boolean}
 */
proto.mt5_term_api.SymbolParameters.prototype.getSelect = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 67, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setSelect = function(value) {
  return jspb.Message.setProto3BooleanField(this, 67, value);
};


/**
 * optional int32 subscription_delay = 68;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getSubscriptionDelay = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 68, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setSubscriptionDelay = function(value) {
  return jspb.Message.setProto3IntField(this, 68, value);
};


/**
 * optional bool visible = 69;
 * @return {boolean}
 */
proto.mt5_term_api.SymbolParameters.prototype.getVisible = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 69, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setVisible = function(value) {
  return jspb.Message.setProto3BooleanField(this, 69, value);
};


/**
 * optional int64 session_deals = 70;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getSessionDeals = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 70, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setSessionDeals = function(value) {
  return jspb.Message.setProto3IntField(this, 70, value);
};


/**
 * optional int64 session_buy_orders = 71;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getSessionBuyOrders = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 71, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setSessionBuyOrders = function(value) {
  return jspb.Message.setProto3IntField(this, 71, value);
};


/**
 * optional int64 session_sell_orders = 72;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getSessionSellOrders = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 72, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setSessionSellOrders = function(value) {
  return jspb.Message.setProto3IntField(this, 72, value);
};


/**
 * optional int64 volume = 73;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getVolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 73, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setVolume = function(value) {
  return jspb.Message.setProto3IntField(this, 73, value);
};


/**
 * optional int64 volume_high = 74;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getVolumeHigh = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 74, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setVolumeHigh = function(value) {
  return jspb.Message.setProto3IntField(this, 74, value);
};


/**
 * optional int64 volume_low = 75;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getVolumeLow = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 75, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setVolumeLow = function(value) {
  return jspb.Message.setProto3IntField(this, 75, value);
};


/**
 * optional google.protobuf.Timestamp time = 76;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.mt5_term_api.SymbolParameters.prototype.getTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 76));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
*/
proto.mt5_term_api.SymbolParameters.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 76, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.SymbolParameters.prototype.hasTime = function() {
  return jspb.Message.getField(this, 76) != null;
};


/**
 * optional int64 time_msc = 77;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getTimeMsc = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 77, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setTimeMsc = function(value) {
  return jspb.Message.setProto3IntField(this, 77, value);
};


/**
 * optional int32 digits = 78;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getDigits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 78, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setDigits = function(value) {
  return jspb.Message.setProto3IntField(this, 78, value);
};


/**
 * optional bool spread_float = 79;
 * @return {boolean}
 */
proto.mt5_term_api.SymbolParameters.prototype.getSpreadFloat = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 79, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setSpreadFloat = function(value) {
  return jspb.Message.setProto3BooleanField(this, 79, value);
};


/**
 * optional int32 spread = 80;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getSpread = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 80, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setSpread = function(value) {
  return jspb.Message.setProto3IntField(this, 80, value);
};


/**
 * optional int32 ticks_book_depth = 81;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getTicksBookDepth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 81, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setTicksBookDepth = function(value) {
  return jspb.Message.setProto3IntField(this, 81, value);
};


/**
 * optional BMT5_ENUM_SYMBOL_CALC_MODE trade_calc_mode = 82;
 * @return {!proto.mt5_term_api.BMT5_ENUM_SYMBOL_CALC_MODE}
 */
proto.mt5_term_api.SymbolParameters.prototype.getTradeCalcMode = function() {
  return /** @type {!proto.mt5_term_api.BMT5_ENUM_SYMBOL_CALC_MODE} */ (jspb.Message.getFieldWithDefault(this, 82, 0));
};


/**
 * @param {!proto.mt5_term_api.BMT5_ENUM_SYMBOL_CALC_MODE} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setTradeCalcMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 82, value);
};


/**
 * optional BMT5_ENUM_SYMBOL_TRADE_MODE trade_mode = 83;
 * @return {!proto.mt5_term_api.BMT5_ENUM_SYMBOL_TRADE_MODE}
 */
proto.mt5_term_api.SymbolParameters.prototype.getTradeMode = function() {
  return /** @type {!proto.mt5_term_api.BMT5_ENUM_SYMBOL_TRADE_MODE} */ (jspb.Message.getFieldWithDefault(this, 83, 0));
};


/**
 * @param {!proto.mt5_term_api.BMT5_ENUM_SYMBOL_TRADE_MODE} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setTradeMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 83, value);
};


/**
 * optional google.protobuf.Timestamp start_time = 84;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.mt5_term_api.SymbolParameters.prototype.getStartTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 84));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
*/
proto.mt5_term_api.SymbolParameters.prototype.setStartTime = function(value) {
  return jspb.Message.setWrapperField(this, 84, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.clearStartTime = function() {
  return this.setStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.SymbolParameters.prototype.hasStartTime = function() {
  return jspb.Message.getField(this, 84) != null;
};


/**
 * optional google.protobuf.Timestamp expiration_time = 85;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.mt5_term_api.SymbolParameters.prototype.getExpirationTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 85));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
*/
proto.mt5_term_api.SymbolParameters.prototype.setExpirationTime = function(value) {
  return jspb.Message.setWrapperField(this, 85, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.clearExpirationTime = function() {
  return this.setExpirationTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mt5_term_api.SymbolParameters.prototype.hasExpirationTime = function() {
  return jspb.Message.getField(this, 85) != null;
};


/**
 * optional int32 trade_stops_level = 86;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getTradeStopsLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 86, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setTradeStopsLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 86, value);
};


/**
 * optional int32 trade_freeze_level = 87;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getTradeFreezeLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 87, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setTradeFreezeLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 87, value);
};


/**
 * optional BMT5_ENUM_SYMBOL_TRADE_EXECUTION trade_exe_mode = 88;
 * @return {!proto.mt5_term_api.BMT5_ENUM_SYMBOL_TRADE_EXECUTION}
 */
proto.mt5_term_api.SymbolParameters.prototype.getTradeExeMode = function() {
  return /** @type {!proto.mt5_term_api.BMT5_ENUM_SYMBOL_TRADE_EXECUTION} */ (jspb.Message.getFieldWithDefault(this, 88, 0));
};


/**
 * @param {!proto.mt5_term_api.BMT5_ENUM_SYMBOL_TRADE_EXECUTION} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setTradeExeMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 88, value);
};


/**
 * optional BMT5_ENUM_SYMBOL_SWAP_MODE swap_mode = 89;
 * @return {!proto.mt5_term_api.BMT5_ENUM_SYMBOL_SWAP_MODE}
 */
proto.mt5_term_api.SymbolParameters.prototype.getSwapMode = function() {
  return /** @type {!proto.mt5_term_api.BMT5_ENUM_SYMBOL_SWAP_MODE} */ (jspb.Message.getFieldWithDefault(this, 89, 0));
};


/**
 * @param {!proto.mt5_term_api.BMT5_ENUM_SYMBOL_SWAP_MODE} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setSwapMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 89, value);
};


/**
 * optional BMT5_ENUM_DAY_OF_WEEK swap_rollover_3days = 90;
 * @return {!proto.mt5_term_api.BMT5_ENUM_DAY_OF_WEEK}
 */
proto.mt5_term_api.SymbolParameters.prototype.getSwapRollover3days = function() {
  return /** @type {!proto.mt5_term_api.BMT5_ENUM_DAY_OF_WEEK} */ (jspb.Message.getFieldWithDefault(this, 90, 0));
};


/**
 * @param {!proto.mt5_term_api.BMT5_ENUM_DAY_OF_WEEK} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setSwapRollover3days = function(value) {
  return jspb.Message.setProto3EnumField(this, 90, value);
};


/**
 * optional bool margin_hedged_use_leg = 91;
 * @return {boolean}
 */
proto.mt5_term_api.SymbolParameters.prototype.getMarginHedgedUseLeg = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 91, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setMarginHedgedUseLeg = function(value) {
  return jspb.Message.setProto3BooleanField(this, 91, value);
};


/**
 * optional int32 expiration_mode = 92;
 * @return {number}
 */
proto.mt5_term_api.SymbolParameters.prototype.getExpirationMode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 92, 0));
};


/**
 * @param {number} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setExpirationMode = function(value) {
  return jspb.Message.setProto3IntField(this, 92, value);
};


/**
 * repeated BMT5_ENUM_ORDER_TYPE_FILLING filling_mode = 93;
 * @return {!Array<!proto.mt5_term_api.BMT5_ENUM_ORDER_TYPE_FILLING>}
 */
proto.mt5_term_api.SymbolParameters.prototype.getFillingModeList = function() {
  return /** @type {!Array<!proto.mt5_term_api.BMT5_ENUM_ORDER_TYPE_FILLING>} */ (jspb.Message.getRepeatedField(this, 93));
};


/**
 * @param {!Array<!proto.mt5_term_api.BMT5_ENUM_ORDER_TYPE_FILLING>} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setFillingModeList = function(value) {
  return jspb.Message.setField(this, 93, value || []);
};


/**
 * @param {!proto.mt5_term_api.BMT5_ENUM_ORDER_TYPE_FILLING} value
 * @param {number=} opt_index
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.addFillingMode = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 93, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.clearFillingModeList = function() {
  return this.setFillingModeList([]);
};


/**
 * optional BMT5_ENUM_ORDER_TYPE order_mode = 94;
 * @return {!proto.mt5_term_api.BMT5_ENUM_ORDER_TYPE}
 */
proto.mt5_term_api.SymbolParameters.prototype.getOrderMode = function() {
  return /** @type {!proto.mt5_term_api.BMT5_ENUM_ORDER_TYPE} */ (jspb.Message.getFieldWithDefault(this, 94, 0));
};


/**
 * @param {!proto.mt5_term_api.BMT5_ENUM_ORDER_TYPE} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setOrderMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 94, value);
};


/**
 * optional BMT5_ENUM_SYMBOL_ORDER_GTC_MODE order_gtc_mode = 95;
 * @return {!proto.mt5_term_api.BMT5_ENUM_SYMBOL_ORDER_GTC_MODE}
 */
proto.mt5_term_api.SymbolParameters.prototype.getOrderGtcMode = function() {
  return /** @type {!proto.mt5_term_api.BMT5_ENUM_SYMBOL_ORDER_GTC_MODE} */ (jspb.Message.getFieldWithDefault(this, 95, 0));
};


/**
 * @param {!proto.mt5_term_api.BMT5_ENUM_SYMBOL_ORDER_GTC_MODE} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setOrderGtcMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 95, value);
};


/**
 * optional BMT5_ENUM_SYMBOL_OPTION_MODE option_mode = 96;
 * @return {!proto.mt5_term_api.BMT5_ENUM_SYMBOL_OPTION_MODE}
 */
proto.mt5_term_api.SymbolParameters.prototype.getOptionMode = function() {
  return /** @type {!proto.mt5_term_api.BMT5_ENUM_SYMBOL_OPTION_MODE} */ (jspb.Message.getFieldWithDefault(this, 96, 0));
};


/**
 * @param {!proto.mt5_term_api.BMT5_ENUM_SYMBOL_OPTION_MODE} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setOptionMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 96, value);
};


/**
 * optional BMT5_ENUM_SYMBOL_OPTION_RIGHT option_right = 97;
 * @return {!proto.mt5_term_api.BMT5_ENUM_SYMBOL_OPTION_RIGHT}
 */
proto.mt5_term_api.SymbolParameters.prototype.getOptionRight = function() {
  return /** @type {!proto.mt5_term_api.BMT5_ENUM_SYMBOL_OPTION_RIGHT} */ (jspb.Message.getFieldWithDefault(this, 97, 0));
};


/**
 * @param {!proto.mt5_term_api.BMT5_ENUM_SYMBOL_OPTION_RIGHT} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setOptionRight = function(value) {
  return jspb.Message.setProto3EnumField(this, 97, value);
};


/**
 * optional string basis = 98;
 * @return {string}
 */
proto.mt5_term_api.SymbolParameters.prototype.getBasis = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 98, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setBasis = function(value) {
  return jspb.Message.setProto3StringField(this, 98, value);
};


/**
 * optional string category = 99;
 * @return {string}
 */
proto.mt5_term_api.SymbolParameters.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 99, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 99, value);
};


/**
 * optional string country = 100;
 * @return {string}
 */
proto.mt5_term_api.SymbolParameters.prototype.getCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 100, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setCountry = function(value) {
  return jspb.Message.setProto3StringField(this, 100, value);
};


/**
 * optional string sector_name = 101;
 * @return {string}
 */
proto.mt5_term_api.SymbolParameters.prototype.getSectorName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 101, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setSectorName = function(value) {
  return jspb.Message.setProto3StringField(this, 101, value);
};


/**
 * optional string industry_name = 102;
 * @return {string}
 */
proto.mt5_term_api.SymbolParameters.prototype.getIndustryName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 102, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setIndustryName = function(value) {
  return jspb.Message.setProto3StringField(this, 102, value);
};


/**
 * optional string currency_base = 103;
 * @return {string}
 */
proto.mt5_term_api.SymbolParameters.prototype.getCurrencyBase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 103, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setCurrencyBase = function(value) {
  return jspb.Message.setProto3StringField(this, 103, value);
};


/**
 * optional string currency_profit = 104;
 * @return {string}
 */
proto.mt5_term_api.SymbolParameters.prototype.getCurrencyProfit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 104, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setCurrencyProfit = function(value) {
  return jspb.Message.setProto3StringField(this, 104, value);
};


/**
 * optional string currency_margin = 105;
 * @return {string}
 */
proto.mt5_term_api.SymbolParameters.prototype.getCurrencyMargin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 105, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setCurrencyMargin = function(value) {
  return jspb.Message.setProto3StringField(this, 105, value);
};


/**
 * optional string bank = 106;
 * @return {string}
 */
proto.mt5_term_api.SymbolParameters.prototype.getBank = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 106, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setBank = function(value) {
  return jspb.Message.setProto3StringField(this, 106, value);
};


/**
 * optional string sym_description = 107;
 * @return {string}
 */
proto.mt5_term_api.SymbolParameters.prototype.getSymDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 107, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setSymDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 107, value);
};


/**
 * optional string exchange = 108;
 * @return {string}
 */
proto.mt5_term_api.SymbolParameters.prototype.getExchange = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 108, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setExchange = function(value) {
  return jspb.Message.setProto3StringField(this, 108, value);
};


/**
 * optional string formula = 109;
 * @return {string}
 */
proto.mt5_term_api.SymbolParameters.prototype.getFormula = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 109, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setFormula = function(value) {
  return jspb.Message.setProto3StringField(this, 109, value);
};


/**
 * optional string isin = 110;
 * @return {string}
 */
proto.mt5_term_api.SymbolParameters.prototype.getIsin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 110, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setIsin = function(value) {
  return jspb.Message.setProto3StringField(this, 110, value);
};


/**
 * optional string page = 111;
 * @return {string}
 */
proto.mt5_term_api.SymbolParameters.prototype.getPage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 111, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setPage = function(value) {
  return jspb.Message.setProto3StringField(this, 111, value);
};


/**
 * optional string path = 112;
 * @return {string}
 */
proto.mt5_term_api.SymbolParameters.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 112, ""));
};


/**
 * @param {string} value
 * @return {!proto.mt5_term_api.SymbolParameters} returns this
 */
proto.mt5_term_api.SymbolParameters.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 112, value);
};


/**
 * @enum {number}
 */
proto.mt5_term_api.AH_ENUM_POSITIONS_HISTORY_SORT_TYPE = {
  AH_POSITION_OPEN_TIME_ASC: 0,
  AH_POSITION_OPEN_TIME_DESC: 1,
  AH_POSITION_TICKET_ASC: 2,
  AH_POSITION_TICKET_DESC: 3
};

/**
 * @enum {number}
 */
proto.mt5_term_api.AH_ENUM_POSITIONS_HISTORY_ORDER_TYPE = {
  AH_ORDER_TYPE_BUY: 0,
  AH_ORDER_TYPE_SELL: 1,
  AH_ORDER_TYPE_BUY_LIMIT: 2,
  AH_ORDER_TYPE_SELL_LIMIT: 3,
  AH_ORDER_TYPE_BUY_STOP: 4,
  AH_ORDER_TYPE_SELL_STOP: 5,
  AH_ORDER_TYPE_BUY_STOP_LIMIT: 6,
  AH_ORDER_TYPE_SELL_STOP_LIMIT: 7,
  AH_ORDER_TYPE_CLOSE_BY: 8
};

/**
 * @enum {number}
 */
proto.mt5_term_api.BMT5_ENUM_OPENED_ORDER_SORT_TYPE = {
  BMT5_OPENED_ORDER_SORT_BY_OPEN_TIME_ASC: 0,
  BMT5_OPENED_ORDER_SORT_BY_OPEN_TIME_DESC: 1,
  BMT5_OPENED_ORDER_SORT_BY_ORDER_TICKET_ID_ASC: 2,
  BMT5_OPENED_ORDER_SORT_BY_ORDER_TICKET_ID_DESC: 3
};

/**
 * @enum {number}
 */
proto.mt5_term_api.BMT5_ENUM_POSITION_TYPE = {
  BMT5_POSITION_TYPE_BUY: 0,
  BMT5_POSITION_TYPE_SELL: 1
};

/**
 * @enum {number}
 */
proto.mt5_term_api.BMT5_ENUM_POSITION_REASON = {
  BMT5_POSITION_REASON_CLIENT: 0,
  BMT5_POSITION_REASON_MOBILE: 1,
  BMT5_POSITION_REASON_WEB: 2,
  BMT5_POSITION_REASON_EXPERT: 3,
  ORDER_REASON_SL: 4,
  ORDER_REASON_TP: 5,
  ORDER_REASON_SO: 6
};

/**
 * @enum {number}
 */
proto.mt5_term_api.BMT5_ENUM_ORDER_TYPE_TIME = {
  BMT5_ORDER_TIME_GTC: 0,
  BMT5_ORDER_TIME_DAY: 1,
  BMT5_ORDER_TIME_SPECIFIED: 2,
  BMT5_ORDER_TIME_SPECIFIED_DAY: 3
};

/**
 * @enum {number}
 */
proto.mt5_term_api.BMT5_ENUM_ORDER_TYPE_FILLING = {
  BMT5_ORDER_FILLING_FOK: 0,
  BMT5_ORDER_FILLING_IOC: 1,
  BMT5_ORDER_FILLING_BOC: 3,
  BMT5_ORDER_FILLING_RETURN: 2
};

/**
 * @enum {number}
 */
proto.mt5_term_api.BMT5_ENUM_ORDER_TYPE = {
  BMT5_ORDER_TYPE_BUY: 0,
  BMT5_ORDER_TYPE_SELL: 1,
  BMT5_ORDER_TYPE_BUY_LIMIT: 2,
  BMT5_ORDER_TYPE_SELL_LIMIT: 3,
  BMT5_ORDER_TYPE_BUY_STOP: 4,
  BMT5_ORDER_TYPE_SELL_STOP: 5,
  BMT5_ORDER_TYPE_BUY_STOP_LIMIT: 6,
  BMT5_ORDER_TYPE_SELL_STOP_LIMIT: 7,
  BMT5_ORDER_TYPE_CLOSE_BY: 8
};

/**
 * @enum {number}
 */
proto.mt5_term_api.BMT5_ENUM_DEAL_REASON = {
  BMT5_DEAL_REASON_CLIENT: 0,
  BMT5_DEAL_REASON_MOBILE: 1,
  BMT5_DEAL_REASON_WEB: 2,
  BMT5_DEAL_REASON_EXPERT: 3,
  BMT5_DEAL_REASON_SL: 4,
  BMT5_DEAL_REASON_TP: 5,
  BMT5_DEAL_REASON_SO: 6,
  BMT5_DEAL_REASON_ROLLOVER: 7,
  BMT5_DEAL_REASON_VMARGIN: 8,
  BMT5_DEAL_REASON_SPLIT: 9,
  BMT5_DEAL_REASON_CORPORATE_ACTION: 10
};

/**
 * @enum {number}
 */
proto.mt5_term_api.BMT5_ENUM_DEAL_TYPE = {
  BMT5_DEAL_TYPE_BUY: 0,
  BMT5_DEAL_TYPE_SELL: 1,
  BMT5_DEAL_TYPE_BALANCE: 2,
  BMT5_DEAL_TYPE_CREDIT: 3,
  BMT5_DEAL_TYPE_CHARGE: 4,
  BMT5_DEAL_TYPE_CORRECTION: 5,
  BMT5_DEAL_TYPE_BONUS: 6,
  BMT5_DEAL_TYPE_COMMISSION: 7,
  BMT5_DEAL_TYPE_COMMISSION_DAILY: 8,
  BMT5_DEAL_TYPE_COMMISSION_MONTHLY: 9,
  BMT5_DEAL_TYPE_COMMISSION_AGENT_DAILY: 10,
  BMT5_DEAL_TYPE_COMMISSION_AGENT_MONTHLY: 11,
  BMT5_DEAL_TYPE_INTEREST: 12,
  BMT5_DEAL_TYPE_BUY_CANCELED: 13,
  BMT5_DEAL_TYPE_SELL_CANCELED: 14,
  BMT5_DEAL_DIVIDEND: 15,
  BMT5_DEAL_DIVIDEND_FRANKED: 16,
  BMT5_DEAL_TAX: 17
};

/**
 * @enum {number}
 */
proto.mt5_term_api.BMT5_ENUM_DEAL_ENTRY_TYPE = {
  BMT5_DEAL_ENTRY_IN: 0,
  BMT5_DEAL_ENTRY_OUT: 1,
  BMT5_DEAL_ENTRY_INOUT: 2,
  BMT5_DEAL_ENTRY_OUT_BY: 3
};

/**
 * @enum {number}
 */
proto.mt5_term_api.BMT5_ENUM_ORDER_HISTORY_SORT_TYPE = {
  BMT5_SORT_BY_OPEN_TIME_ASC: 0,
  BMT5_SORT_BY_OPEN_TIME_DESC: 1,
  BMT5_SORT_BY_CLOSE_TIME_ASC: 2,
  BMT5_SORT_BY_CLOSE_TIME_DESC: 3,
  BMT5_SORT_BY_ORDER_TICKET_ID_ASC: 4,
  BMT5_SORT_BY_ORDER_TICKET_ID_DESC: 5
};

/**
 * @enum {number}
 */
proto.mt5_term_api.BMT5_ENUM_ORDER_STATE = {
  BMT5_ORDER_STATE_STARTED: 0,
  BMT5_ORDER_STATE_PLACED: 1,
  BMT5_ORDER_STATE_CANCELED: 2,
  BMT5_ORDER_STATE_PARTIAL: 3,
  BMT5_ORDER_STATE_FILLED: 4,
  BMT5_ORDER_STATE_REJECTED: 5,
  BMT5_ORDER_STATE_EXPIRED: 6,
  BMT5_ORDER_STATE_REQUEST_ADD: 7,
  BMT5_ORDER_STATE_REQUEST_MODIFY: 8,
  BMT5_ORDER_STATE_REQUEST_CANCEL: 9
};

/**
 * @enum {number}
 */
proto.mt5_term_api.MrpcEnumAccountTradeMode = {
  MRPC_ACCOUNT_TRADE_MODE_DEMO: 0,
  MRPC_ACCOUNT_TRADE_MODE_CONTEST: 1,
  MRPC_ACCOUNT_TRADE_MODE_REAL: 2
};

/**
 * @enum {number}
 */
proto.mt5_term_api.AH_SYMBOL_PARAMS_MANY_SORT_TYPE = {
  AH_PARAMS_MANY_SORT_TYPE_SYMBOL_NAME_ASC: 0,
  AH_PARAMS_MANY_SORT_TYPE_SYMBOL_NAME_DESC: 1,
  AH_PARAMS_MANY_SORT_TYPE_MQL_INDEX_ASC: 2,
  AH_PARAMS_MANY_SORT_TYPE_MQL_INDEX_DESC: 3
};

/**
 * @enum {number}
 */
proto.mt5_term_api.BMT5_ENUM_SYMBOL_OPTION_RIGHT = {
  BMT5_SYMBOL_OPTION_RIGHT_CALL: 0,
  BMT5_SYMBOL_OPTION_RIGHT_PUT: 1
};

/**
 * @enum {number}
 */
proto.mt5_term_api.BMT5_ENUM_SYMBOL_OPTION_MODE = {
  BMT5_SYMBOL_OPTION_MODE_EUROPEAN: 0,
  BMT5_SYMBOL_OPTION_MODE_AMERICAN: 1
};

/**
 * @enum {number}
 */
proto.mt5_term_api.BMT5_ENUM_SYMBOL_ORDER_GTC_MODE = {
  BMT5_SYMBOL_ORDERS_GTC: 0,
  BMT5_SYMBOL_ORDERS_DAILY: 1,
  BMT5_SYMBOL_ORDERS_DAILY_EXCLUDING_STOPS: 2
};

/**
 * @enum {number}
 */
proto.mt5_term_api.BMT5_ENUM_DAY_OF_WEEK = {
  BMT5_SUNDAY: 0,
  BMT5_MONDAY: 1,
  BMT5_TUESDAY: 2,
  BMT5_WEDNESDAY: 3,
  BMT5_THURSDAY: 4,
  BMT5_FRIDAY: 5,
  BMT5_SATURDAY: 6
};

/**
 * @enum {number}
 */
proto.mt5_term_api.BMT5_ENUM_SYMBOL_SWAP_MODE = {
  BMT5_SYMBOL_SWAP_MODE_DISABLED: 0,
  BMT5_SYMBOL_SWAP_MODE_POINTS: 1,
  BMT5_SYMBOL_SWAP_MODE_CURRENCY_SYMBOL: 2,
  BMT5_SYMBOL_SWAP_MODE_CURRENCY_MARGIN: 3,
  BMT5_SYMBOL_SWAP_MODE_CURRENCY_DEPOSIT: 4,
  BMT5_SYMBOL_SWAP_MODE_CURRENCY_PROFIT: 5,
  BMT5_SYMBOL_SWAP_MODE_INTEREST_CURRENT: 6,
  BMT5_SYMBOL_SWAP_MODE_INTEREST_OPEN: 7,
  BMT5_SYMBOL_SWAP_MODE_REOPEN_CURRENT: 8,
  BMT5_SYMBOL_SWAP_MODE_REOPEN_BID: 9
};

/**
 * @enum {number}
 */
proto.mt5_term_api.BMT5_ENUM_SYMBOL_TRADE_EXECUTION = {
  BMT5_SYMBOL_TRADE_EXECUTION_REQUEST: 0,
  BMT5_SYMBOL_TRADE_EXECUTION_INSTANT: 1,
  BMT5_SYMBOL_TRADE_EXECUTION_MARKET: 2,
  BMT5_SYMBOL_TRADE_EXECUTION_EXCHANGE: 3
};

/**
 * @enum {number}
 */
proto.mt5_term_api.BMT5_ENUM_SYMBOL_TRADE_MODE = {
  BMT5_SYMBOL_TRADE_MODE_DISABLED: 0,
  BMT5_SYMBOL_TRADE_MODE_LONGONLY: 1,
  BMT5_SYMBOL_TRADE_MODE_SHORTONLY: 2,
  BMT5_SYMBOL_TRADE_MODE_CLOSEONLY: 3,
  BMT5_SYMBOL_TRADE_MODE_FULL: 4
};

/**
 * @enum {number}
 */
proto.mt5_term_api.BMT5_ENUM_SYMBOL_CALC_MODE = {
  BMT5_SYMBOL_CALC_MODE_FOREX: 0,
  BMT5_SYMBOL_CALC_MODE_FOREX_NO_LEVERAGE: 1,
  BMT5_SYMBOL_CALC_MODE_FUTURES: 2,
  BMT5_SYMBOL_CALC_MODE_CFD: 3,
  BMT5_SYMBOL_CALC_MODE_CFDINDEX: 4,
  BMT5_SYMBOL_CALC_MODE_CFDLEVERAGE: 5,
  BMT5_SYMBOL_CALC_MODE_EXCH_STOCKS: 6,
  BMT5_SYMBOL_CALC_MODE_EXCH_FUTURES: 7,
  BMT5_SYMBOL_CALC_MODE_EXCH_FUTURES_FORTS: 8,
  BMT5_SYMBOL_CALC_MODE_EXCH_BONDS: 9,
  BMT5_SYMBOL_CALC_MODE_EXCH_STOCKS_MOEX: 10,
  BMT5_SYMBOL_CALC_MODE_EXCH_BONDS_MOEX: 11,
  BMT5_SYMBOL_CALC_MODE_SERV_COLLATERAL: 12
};

/**
 * @enum {number}
 */
proto.mt5_term_api.BMT5_ENUM_SYMBOL_SECTOR = {
  BMT5_SECTOR_UNDEFINED: 0,
  BMT5_SECTOR_BASIC_MATERIALS: 1,
  BMT5_SECTOR_COMMUNICATION_SERVICES: 2,
  BMT5_SECTOR_CONSUMER_CYCLICAL: 3,
  BMT5_SECTOR_CONSUMER_DEFENSIVE: 4,
  BMT5_SECTOR_CURRENCY: 5,
  BMT5_SECTOR_CURRENCY_CRYPTO: 6,
  BMT5_SECTOR_ENERGY: 7,
  BMT5_SECTOR_FINANCIAL: 8,
  BMT5_SECTOR_HEALTHCARE: 9,
  BMT5_SECTOR_INDUSTRIALS: 10,
  BMT5_SECTOR_REAL_ESTATE: 11,
  BMT5_SECTOR_TECHNOLOGY: 12,
  BMT5_SECTOR_UTILITIES: 13
};

/**
 * @enum {number}
 */
proto.mt5_term_api.BMT5_ENUM_SYMBOL_CHART_MODE = {
  BMT5_SYMBOL_CHART_MODE_BID: 0,
  BMT5_SYMBOL_CHART_MODE_LAST: 1
};

/**
 * @enum {number}
 */
proto.mt5_term_api.BMT5_ENUM_SYMBOL_INDUSTRY = {
  BMT5_INDUSTRY_UNDEFINED: 0,
  BMT5_INDUSTRY_AGRICULTURAL_INPUTS: 1,
  BMT5_INDUSTRY_ALUMINIUM: 2,
  BMT5_INDUSTRY_BUILDING_MATERIALS: 3,
  BMT5_INDUSTRY_CHEMICALS: 4,
  BMT5_INDUSTRY_COKING_COAL: 5,
  BMT5_INDUSTRY_COPPER: 6,
  BMT5_INDUSTRY_GOLD: 7,
  BMT5_INDUSTRY_LUMBER_WOOD: 8,
  BMT5_INDUSTRY_INDUSTRIAL_METALS: 9,
  BMT5_INDUSTRY_PRECIOUS_METALS: 10,
  BMT5_INDUSTRY_PAPER: 11,
  BMT5_INDUSTRY_SILVER: 12,
  BMT5_INDUSTRY_SPECIALTY_CHEMICALS: 13,
  BMT5_INDUSTRY_STEEL: 14,
  BMT5_INDUSTRY_ADVERTISING: 15,
  BMT5_INDUSTRY_BROADCASTING: 16,
  BMT5_INDUSTRY_GAMING_MULTIMEDIA: 17,
  BMT5_INDUSTRY_ENTERTAINMENT: 18,
  BMT5_INDUSTRY_INTERNET_CONTENT: 19,
  BMT5_INDUSTRY_PUBLISHING: 20,
  BMT5_INDUSTRY_TELECOM: 21,
  BMT5_INDUSTRY_APPAREL_MANUFACTURING: 22,
  BMT5_INDUSTRY_APPAREL_RETAIL: 23,
  BMT5_INDUSTRY_AUTO_MANUFACTURERS: 24,
  BMT5_INDUSTRY_AUTO_PARTS: 25,
  BMT5_INDUSTRY_AUTO_DEALERSHIP: 26,
  BMT5_INDUSTRY_DEPARTMENT_STORES: 27,
  BMT5_INDUSTRY_FOOTWEAR_ACCESSORIES: 28,
  BMT5_INDUSTRY_FURNISHINGS: 29,
  BMT5_INDUSTRY_GAMBLING: 30,
  BMT5_INDUSTRY_HOME_IMPROV_RETAIL: 31,
  BMT5_INDUSTRY_INTERNET_RETAIL: 32,
  BMT5_INDUSTRY_LEISURE: 33,
  BMT5_INDUSTRY_LODGING: 34,
  BMT5_INDUSTRY_LUXURY_GOODS: 35,
  BMT5_INDUSTRY_PACKAGING_CONTAINERS: 36,
  BMT5_INDUSTRY_PERSONAL_SERVICES: 37,
  BMT5_INDUSTRY_RECREATIONAL_VEHICLES: 38,
  BMT5_INDUSTRY_RESIDENT_CONSTRUCTION: 39,
  BMT5_INDUSTRY_RESORTS_CASINOS: 40,
  BMT5_INDUSTRY_RESTAURANTS: 41,
  BMT5_INDUSTRY_SPECIALTY_RETAIL: 42,
  BMT5_INDUSTRY_TEXTILE_MANUFACTURING: 43,
  BMT5_INDUSTRY_TRAVEL_SERVICES: 44,
  BMT5_INDUSTRY_BEVERAGES_BREWERS: 45,
  BMT5_INDUSTRY_BEVERAGES_NON_ALCO: 46,
  BMT5_INDUSTRY_BEVERAGES_WINERIES: 47,
  BMT5_INDUSTRY_CONFECTIONERS: 48,
  BMT5_INDUSTRY_DISCOUNT_STORES: 49,
  BMT5_INDUSTRY_EDUCATION_TRAINIG: 50,
  BMT5_INDUSTRY_FARM_PRODUCTS: 51,
  BMT5_INDUSTRY_FOOD_DISTRIBUTION: 52,
  BMT5_INDUSTRY_GROCERY_STORES: 53,
  BMT5_INDUSTRY_HOUSEHOLD_PRODUCTS: 54,
  BMT5_INDUSTRY_PACKAGED_FOODS: 55,
  BMT5_INDUSTRY_TOBACCO: 56,
  BMT5_INDUSTRY_OIL_GAS_DRILLING: 57,
  BMT5_INDUSTRY_OIL_GAS_EP: 58,
  BMT5_INDUSTRY_OIL_GAS_EQUIPMENT: 59,
  BMT5_INDUSTRY_OIL_GAS_INTEGRATED: 60,
  BMT5_INDUSTRY_OIL_GAS_MIDSTREAM: 61,
  BMT5_INDUSTRY_OIL_GAS_REFINING: 62,
  BMT5_INDUSTRY_THERMAL_COAL: 63,
  BMT5_INDUSTRY_URANIUM: 64,
  BMT5_INDUSTRY_EXCHANGE_TRADED_FUND: 65,
  BMT5_INDUSTRY_ASSETS_MANAGEMENT: 66,
  BMT5_INDUSTRY_BANKS_DIVERSIFIED: 67,
  BMT5_INDUSTRY_BANKS_REGIONAL: 68,
  BMT5_INDUSTRY_CAPITAL_MARKETS: 69,
  BMT5_INDUSTRY_CLOSE_END_FUND_DEBT: 70,
  BMT5_INDUSTRY_CLOSE_END_FUND_EQUITY: 71,
  BMT5_INDUSTRY_CLOSE_END_FUND_FOREIGN: 72,
  BMT5_INDUSTRY_CREDIT_SERVICES: 73,
  BMT5_INDUSTRY_FINANCIAL_CONGLOMERATE: 74,
  BMT5_INDUSTRY_FINANCIAL_DATA_EXCHANGE: 75,
  BMT5_INDUSTRY_INSURANCE_BROKERS: 76,
  BMT5_INDUSTRY_INSURANCE_DIVERSIFIED: 77,
  BMT5_INDUSTRY_INSURANCE_LIFE: 78,
  BMT5_INDUSTRY_INSURANCE_PROPERTY: 79,
  BMT5_INDUSTRY_INSURANCE_REINSURANCE: 80,
  BMT5_INDUSTRY_INSURANCE_SPECIALTY: 81,
  BMT5_INDUSTRY_MORTGAGE_FINANCE: 82,
  BMT5_INDUSTRY_SHELL_COMPANIES: 83,
  BMT5_INDUSTRY_BIOTECHNOLOGY: 84,
  BMT5_INDUSTRY_DIAGNOSTICS_RESEARCH: 85,
  BMT5_INDUSTRY_DRUGS_MANUFACTURERS: 86,
  BMT5_INDUSTRY_DRUGS_MANUFACTURERS_SPEC: 87,
  BMT5_INDUSTRY_HEALTHCARE_PLANS: 88,
  BMT5_INDUSTRY_HEALTH_INFORMATION: 89,
  BMT5_INDUSTRY_MEDICAL_FACILITIES: 90,
  BMT5_INDUSTRY_MEDICAL_DEVICES: 91,
  BMT5_INDUSTRY_MEDICAL_DISTRIBUTION: 92,
  BMT5_INDUSTRY_MEDICAL_INSTRUMENTS: 93,
  BMT5_INDUSTRY_PHARM_RETAILERS: 94,
  BMT5_INDUSTRY_AEROSPACE_DEFENSE: 95,
  BMT5_INDUSTRY_AIRLINES: 96,
  BMT5_INDUSTRY_AIRPORTS_SERVICES: 97,
  BMT5_INDUSTRY_BUILDING_PRODUCTS: 98,
  BMT5_INDUSTRY_BUSINESS_EQUIPMENT: 99,
  BMT5_INDUSTRY_CONGLOMERATES: 100,
  BMT5_INDUSTRY_CONSULTING_SERVICES: 101,
  BMT5_INDUSTRY_ELECTRICAL_EQUIPMENT: 102,
  BMT5_INDUSTRY_ENGINEERING_CONSTRUCTION: 103,
  BMT5_INDUSTRY_FARM_HEAVY_MACHINERY: 104,
  BMT5_INDUSTRY_INDUSTRIAL_DISTRIBUTION: 105,
  BMT5_INDUSTRY_INFRASTRUCTURE_OPERATIONS: 106,
  BMT5_INDUSTRY_FREIGHT_LOGISTICS: 107,
  BMT5_INDUSTRY_MARINE_SHIPPING: 108,
  BMT5_INDUSTRY_METAL_FABRICATION: 109,
  BMT5_INDUSTRY_POLLUTION_CONTROL: 110,
  BMT5_INDUSTRY_RAILROADS: 111,
  BMT5_INDUSTRY_RENTAL_LEASING: 112,
  BMT5_INDUSTRY_SECURITY_PROTECTION: 113,
  BMT5_INDUSTRY_SPEALITY_BUSINESS_SERVICES: 114,
  BMT5_INDUSTRY_SPEALITY_MACHINERY: 115,
  BMT5_INDUSTRY_STUFFING_EMPLOYMENT: 116,
  BMT5_INDUSTRY_TOOLS_ACCESSORIES: 117,
  BMT5_INDUSTRY_TRUCKING: 118,
  BMT5_INDUSTRY_WASTE_MANAGEMENT: 119,
  BMT5_INDUSTRY_REAL_ESTATE_DEVELOPMENT: 120,
  BMT5_INDUSTRY_REAL_ESTATE_DIVERSIFIED: 121,
  BMT5_INDUSTRY_REAL_ESTATE_SERVICES: 122,
  BMT5_INDUSTRY_REIT_DIVERSIFIED: 123,
  BMT5_INDUSTRY_REIT_HEALTCARE: 124,
  BMT5_INDUSTRY_REIT_HOTEL_MOTEL: 125,
  BMT5_INDUSTRY_REIT_INDUSTRIAL: 126,
  BMT5_INDUSTRY_REIT_MORTAGE: 127,
  BMT5_INDUSTRY_REIT_OFFICE: 128,
  BMT5_INDUSTRY_REIT_RESIDENTAL: 129,
  BMT5_INDUSTRY_REIT_RETAIL: 130,
  BMT5_INDUSTRY_REIT_SPECIALITY: 131,
  BMT5_INDUSTRY_COMMUNICATION_EQUIPMENT: 132,
  BMT5_INDUSTRY_COMPUTER_HARDWARE: 133,
  BMT5_INDUSTRY_CONSUMER_ELECTRONICS: 134,
  BMT5_INDUSTRY_ELECTRONIC_COMPONENTS: 135,
  BMT5_INDUSTRY_ELECTRONIC_DISTRIBUTION: 136,
  BMT5_INDUSTRY_IT_SERVICES: 137,
  BMT5_INDUSTRY_SCIENTIFIC_INSTRUMENTS: 138,
  BMT5_INDUSTRY_SEMICONDUCTOR_EQUIPMENT: 139,
  BMT5_INDUSTRY_SEMICONDUCTORS: 140,
  BMT5_INDUSTRY_SOFTWARE_APPLICATION: 141,
  BMT5_INDUSTRY_SOFTWARE_INFRASTRUCTURE: 142,
  BMT5_INDUSTRY_SOLAR: 143,
  BMT5_INDUSTRY_UTILITIES_DIVERSIFIED: 144,
  BMT5_INDUSTRY_UTILITIES_POWERPRODUCERS: 145,
  BMT5_INDUSTRY_UTILITIES_RENEWABLE: 146,
  BMT5_INDUSTRY_UTILITIES_REGULATED_ELECTRIC: 147,
  BMT5_INDUSTRY_UTILITIES_REGULATED_GAS: 148,
  BMT5_INDUSTRY_UTILITIES_REGULATED_WATER: 149,
  BMT5_INDUSTRY_UTILITIES_FIRST: 150,
  BMT5_INDUSTRY_UTILITIES_LAST: 151
};

goog.object.extend(exports, proto.mt5_term_api);
