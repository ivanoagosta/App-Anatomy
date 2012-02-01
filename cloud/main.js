var util = require('util');
/* main.js
 * All calls here are publicly exposed as REST API endpoints.
 * - all parameters must be passed in a single JSON paramater.
 * - the return 'callback' method signature is 'callback (error, data)', where 'data' is a JSON object.
*/

/* 'getConfig' server side REST API method.
 * Trivial example of pulling in a shared config file.
 */
exports.getConfig = function(params, callback) {
  console.log('in getConfig with ts:' + params.ts);
  var cfg = require("config.js");
  console.log('got cfg:' + typeof cfg);
  console.log('cfg.config:' + cfg.config);
  return callback(null, {data: cfg.config});
};