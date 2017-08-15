'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.minVersionsForOptions = undefined;
exports.default = isModernBrowser;

var _flowRuntime = require('flow-runtime');

var _flowRuntime2 = _interopRequireDefault(_flowRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://www.npmjs.com/package/babel-preset-modern-browsers
var agents = {
  edge: /edge\/([\d]+)/i,
  firefox: /firefox\/([\d]+)/i,
  chrome: /chrom(?:e|ium)\/([\d]+)/i, // also works for opera.
  safari: /version\/([\d\w.-]+).*safari/i
};

var minVersionsForOptions = exports.minVersionsForOptions = function minVersionsForOptions(options) {
  if (options.edge || options.safari10) {
    return [{ key: 'edge', minVersion: 15 }, { key: 'firefox', minVersion: 53 }, { key: 'chrome', minVersion: 55 }, { key: 'safari', minVersion: 10.1 }];
  }

  return [{ key: 'firefox', minVersion: 55 }, { key: 'chrome', minVersion: 60 }];
};

function isModernBrowser(userAgent) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { edge: true, safari10: true };

  var _userAgentType = _flowRuntime2.default.string();

  _flowRuntime2.default.param('userAgent', _userAgentType).assert(userAgent);

  var minVersions = minVersionsForOptions(options);
  return minVersions.some(function (_ref) {
    var key = _ref.key,
        minVersion = _ref.minVersion;

    var res = agents[key].exec(userAgent);
    return res && parseFloat(res[1]) >= minVersion;
  });
}
//# sourceMappingURL=index.js.map