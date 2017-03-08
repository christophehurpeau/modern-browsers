'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isModernBrowser;
// https://www.npmjs.com/package/babel-preset-modern-browsers
var agents = [{ name: 'Edge', regexp: /edge\/([\d]+)/i, modernMinVersion: 14 }, { name: 'Firefox', regexp: /firefox\/([\d]+)/i, modernMinVersion: 52 }, { name: 'Chrome', regexp: /(?:chrom(?:e|ium)|crios)\/([\d]+)/i, modernMinVersion: 55 }, // also works for opera.
{ name: 'Safari', regexp: /version\/([\d\w.-]+).*safari/i, modernMinVersion: 10.1 }];

function isModernBrowser(userAgent) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      safari10 = _ref.safari10;

  return agents.some(function (agent) {
    var res = agent.regexp.exec(userAgent);
    return res && parseFloat(res[1]) >= (safari10 && agent.name === 'Safari' ? 10 : agent.modernMinVersion);
  });
}
//# sourceMappingURL=index.js.map