'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.minVersionsForOptions = void 0;

var _flowRuntime = require('flow-runtime');

var _flowRuntime2 = _interopRequireDefault(_flowRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://www.npmjs.com/package/babel-preset-modern-browsers
var agents = [{ key: 'edge', regExp: /edge\/([\d]+)/i }, { key: 'firefox', regExp: /firefox\/([\d]+)/i }, { key: 'chrome', regExp: /chrom(?:e|ium)\/([\d]+)/i }, // also works for opera.
{ key: 'safari', regExp: /version\/([\d.]+).*safari/i }, { key: 'mobile safari webview', regExp: /(?:iPod|iPhone|iPad).+AppleWebKit\/([\d.]+)/i }];

var minVersionsForOptions = exports.minVersionsForOptions = function minVersionsForOptions(options) {
  return options.edge || options.safari10 ? {
    edge: 15,
    firefox: 53,
    chrome: 55,
    safari: 10.1,
    // https://en.wikipedia.org/wiki/Safari_version_history
    'mobile safari webview': 603.1
  } : { firefox: 55, chrome: 60 };
};

exports.default = function index() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { edge: true, safari10: true };

  var minVersions = minVersionsForOptions(options);
  return function (userAgent) {
    var _userAgentType = _flowRuntime2.default.string();

    _flowRuntime2.default.param('userAgent', _userAgentType).assert(userAgent);

    var agent = void 0;

    if (agents.some(function (_ref) {
      var key = _ref.key,
          regExp = _ref.regExp;

      var res = regExp.exec(userAgent);
      return res && res[1] && (agent = { key, version: res[1] }, true);
    }), !agent) return false;

    var minVersion = minVersions[agent.key];
    return !!minVersion && parseFloat(agent.version) >= minVersion;
  };
};
//# sourceMappingURL=index.js.map