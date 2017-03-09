'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isModernBrowser;
// https://www.npmjs.com/package/babel-preset-modern-browsers
const agents = [{ name: 'Edge', regexp: /edge\/([\d]+)/i, modernMinVersion: 14 }, { name: 'Firefox', regexp: /firefox\/([\d]+)/i, modernMinVersion: 52 }, { name: 'Chrome', regexp: /(?:chrom(?:e|ium)|crios)\/([\d]+)/i, modernMinVersion: 52 }, // also works for opera.
{ name: 'Safari', regexp: /version\/([\d\w.-]+).*safari/i, modernMinVersion: 10 }];

function isModernBrowser(userAgent) {
  return agents.some(agent => {
    const res = agent.regexp.exec(userAgent);
    return res && parseFloat(res[1]) >= agent.modernMinVersion;
  });
}
//# sourceMappingURL=index.js.map