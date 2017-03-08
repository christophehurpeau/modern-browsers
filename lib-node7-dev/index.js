'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isModernBrowser;

var _flowRuntime = require('flow-runtime');

var _flowRuntime2 = _interopRequireDefault(_flowRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://www.npmjs.com/package/babel-preset-modern-browsers
const agents = [{ name: 'Edge', regexp: /edge\/([\d]+)/i, modernMinVersion: 14 }, { name: 'Firefox', regexp: /firefox\/([\d]+)/i, modernMinVersion: 52 }, { name: 'Chrome', regexp: /(?:chrom(?:e|ium)|crios)\/([\d]+)/i, modernMinVersion: 55 }, // also works for opera.
{ name: 'Safari', regexp: /version\/([\d\w.-]+).*safari/i, modernMinVersion: 10.1 }];

const OptionsType = _flowRuntime2.default.type('OptionsType', _flowRuntime2.default.exactObject(_flowRuntime2.default.property('safari10', _flowRuntime2.default.nullable(_flowRuntime2.default.boolean()))));

function isModernBrowser(userAgent, { safari10 } = {}) {
  let _userAgentType = _flowRuntime2.default.string();

  _flowRuntime2.default.param('userAgent', _userAgentType).assert(userAgent);

  if (arguments[1] !== undefined) {
    _flowRuntime2.default.param('arguments[1]', OptionsType).assert(arguments[1]);
  }

  return agents.some(agent => {
    const res = agent.regexp.exec(userAgent);
    return res && parseFloat(res[1]) >= (safari10 && agent.name === 'Safari' ? 10 : agent.modernMinVersion);
  });
}
//# sourceMappingURL=index.js.map