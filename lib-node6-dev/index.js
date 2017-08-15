'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isModernBrowser;

var _flowRuntime = require('flow-runtime');

var _flowRuntime2 = _interopRequireDefault(_flowRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://www.npmjs.com/package/babel-preset-modern-browsers
const agents = [{ name: 'Edge', optionName: 'edge', regexp: /edge\/([\d]+)/i, modernMinVersion: 15 }, { name: 'Firefox', regexp: /firefox\/([\d]+)/i, modernMinVersion: 55 }, { name: 'Chrome', regexp: /chrom(?:e|ium)\/([\d]+)/i, modernMinVersion: 60 }, // also works for opera.
{
  name: 'Safari',
  optionName: 'safari10',
  regexp: /version\/([\d\w.-]+).*safari/i,
  modernMinVersion: 10.1
}];

function isModernBrowser(userAgent, options = { edge: true, safari10: true }) {
  let _userAgentType = _flowRuntime2.default.string();

  _flowRuntime2.default.param('userAgent', _userAgentType).assert(userAgent);

  return agents.some(agent => {
    if (agent.optionName && !options[agent.optionName]) return false;
    const res = agent.regexp.exec(userAgent);
    return res && parseFloat(res[1]) >= agent.modernMinVersion;
  });
}
//# sourceMappingURL=index.js.map