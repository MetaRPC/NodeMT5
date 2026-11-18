/*══════════════════════════════════════════════════════════════════════════════
 FILE: config.js - DEMO CONNECTION SETTINGS

 PURPOSE:
   Loads the demo credentials from config/config.json and overlays environment
   variables (env wins). Never commit real credentials — prefer the MT5_* env vars.

 ENV VARS (override the JSON file):
   MT5_LOGIN · MT5_PASSWORD · MT5_SERVER · MT5_SYMBOL · MT5_VOLUME · MRPC_API_KEY

 USAGE:
   const { loadConfig } = require('./config/config');
   const cfg = loadConfig();   // { user, password, server, host, port, apiKey, testSymbol, testVolume }
══════════════════════════════════════════════════════════════════════════════*/

'use strict';

const fs = require('fs');
const path = require('path');

/** API key passed on the command line (set by main.js from argv), overrides env + file. */
let apiKeyOverride = '';
function setApiKeyOverride(key) { apiKeyOverride = key || ''; }

function loadConfig() {
  let file = {};
  try {
    file = JSON.parse(fs.readFileSync(path.join(__dirname, 'config.json'), 'utf8'));
  } catch { /* file optional — env can supply everything */ }

  const env = process.env;
  const num = (v, d) => (v !== undefined && v !== '' ? Number(v) : d);

  return {
    user: num(env.MT5_LOGIN, file.user || 0),
    password: env.MT5_PASSWORD || file.password || '',
    server: env.MT5_SERVER || file.mt_cluster || 'MetaQuotes-Demo',
    host: env.MT5_HOST || file.host || 'mt5.mrpc.pro',
    port: num(env.MT5_PORT, file.port || 443),
    apiKey: apiKeyOverride || env.MRPC_API_KEY || file.api_key || '',
    testSymbol: env.MT5_SYMBOL || file.test_symbol || 'EURUSD',
    testVolume: num(env.MT5_VOLUME, file.test_volume || 0.01),
  };
}

module.exports = { loadConfig, setApiKeyOverride };
