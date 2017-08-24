'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// https://www.npmjs.com/package/babel-preset-modern-browsers
const agents = [{ key: 'edge', regExp: /edge\/([\d]+)/i }, { key: 'firefox', regExp: /firefox\/([\d]+)/i }, { key: 'chrome', regExp: /chrom(?:e|ium)\/([\d]+)/i }, // also works for opera.
{ key: 'safari', regExp: /version\/([\d.]+).*safari/i }, { key: 'mobile safari webview', regExp: /(?:iPod|iPhone|iPad).+AppleWebKit\/([\d.]+)/i }];

const minVersionsForOptions = exports.minVersionsForOptions = options => options.edge || options.safari10 ? {
  edge: 15,
  firefox: 53,
  chrome: 55,
  safari: 10.1,
  // https://en.wikipedia.org/wiki/Safari_version_history
  'mobile safari webview': 603.1
} : { firefox: 55, chrome: 60 };

exports.default = (options = { edge: true, safari10: true }) => {
  const minVersions = minVersionsForOptions(options);
  return userAgent => {
    let agent;

    if (agents.some(({ key, regExp }) => {
      const res = regExp.exec(userAgent);
      return res && res[1] && (agent = { key, version: res[1] }, true);
    }), !agent) return false;

    const minVersion = minVersions[agent.key];
    return !!minVersion && parseFloat(agent.version) >= minVersion;
  };
};
//# sourceMappingURL=index.js.map