import t from 'flow-runtime';
// https://www.npmjs.com/package/babel-preset-modern-browsers
const agents = {
  edge: /edge\/([\d]+)/i,
  firefox: /firefox\/([\d]+)/i,
  chrome: /chrom(?:e|ium)\/([\d]+)/i, // also works for opera.
  safari: /version\/([\d\w.-]+).*safari/i
};

export const minVersionsForOptions = options => options.edge || options.safari10 ? [{ key: 'edge', minVersion: 15 }, { key: 'firefox', minVersion: 53 }, { key: 'chrome', minVersion: 55 }, { key: 'safari', minVersion: 10.1 }] : [{ key: 'firefox', minVersion: 55 }, { key: 'chrome', minVersion: 60 }];

export default function isModernBrowser(userAgent, options = { edge: true, safari10: true }) {
  let _userAgentType = t.string();

  t.param('userAgent', _userAgentType).assert(userAgent);

  const minVersions = minVersionsForOptions(options);
  return minVersions.some(({ key, minVersion }) => {
    const res = agents[key].exec(userAgent);
    return res && parseFloat(res[1]) >= minVersion;
  });
}
//# sourceMappingURL=index.js.map