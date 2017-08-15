// https://www.npmjs.com/package/babel-preset-modern-browsers
const agents = {
  edge: /edge\/([\d]+)/i,
  firefox: /firefox\/([\d]+)/i,
  chrome: /chrom(?:e|ium)\/([\d]+)/i, // also works for opera.
  safari: /version\/([\d\w.-]+).*safari/i,
};

export const minVersionsForOptions = options => {
  if (options.edge || options.safari10) {
    return [
      { key: 'edge', minVersion: 15 },
      { key: 'firefox', minVersion: 53 },
      { key: 'chrome', minVersion: 55 },
      { key: 'safari', minVersion: 10.1 },
    ];
  }

  return [{ key: 'firefox', minVersion: 55 }, { key: 'chrome', minVersion: 60 }];
};

export default function isModernBrowser(
  userAgent: string,
  options = { edge: true, safari10: true },
) {
  const minVersions = minVersionsForOptions(options);
  return minVersions.some(({ key, minVersion }) => {
    const res = agents[key].exec(userAgent);
    return res && parseFloat(res[1]) >= minVersion;
  });
}
