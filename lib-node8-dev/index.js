'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.minVersionsForOptions = void 0;
exports.default = isModernBrowser;

var _flowRuntime = require('flow-runtime');

var _flowRuntime2 = _interopRequireDefault(_flowRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://www.npmjs.com/package/babel-preset-modern-browsers
const agents = {
  edge: /edge\/([\d]+)/i,
  firefox: /firefox\/([\d]+)/i,
  chrome: /chrom(?:e|ium)\/([\d]+)/i, // also works for opera.
  safari: /version\/([\d\w.-]+).*safari/i
};

const minVersionsForOptions = exports.minVersionsForOptions = options => options.edge || options.safari10 ? [{ key: 'edge', minVersion: 15 }, { key: 'firefox', minVersion: 53 }, { key: 'chrome', minVersion: 55 }, { key: 'safari', minVersion: 10.1 }] : [{ key: 'firefox', minVersion: 55 }, { key: 'chrome', minVersion: 60 }];

function isModernBrowser(userAgent, options = { edge: true, safari10: true }) {
  let _userAgentType = _flowRuntime2.default.string();

  _flowRuntime2.default.param('userAgent', _userAgentType).assert(userAgent);

  const minVersions = minVersionsForOptions(options);
  return minVersions.some(({ key, minVersion }) => {
    const res = agents[key].exec(userAgent);
    return res && parseFloat(res[1]) >= minVersion;
  });
}
//# sourceMappingURL=index.js.map