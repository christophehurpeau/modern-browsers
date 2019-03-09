// https://www.npmjs.com/package/babel-preset-modern-browsers

interface Options {
  edge?: boolean;
  safari10?: never;
}

const agents = [
  { key: 'edge', regExp: /edge\/([\d]+)/i },
  { key: 'firefox', regExp: /firefox\/([\d]+)/i },
  { key: 'chrome', regExp: /chrom(?:e|ium)\/([\d]+)/i }, // also works for opera.
  { key: 'safari', regExp: /version\/([\d.]+).*safari/i },
  {
    key: 'mobile safari webview',
    regExp: /(?:iPod|iPhone|iPad).+AppleWebKit\/([\d.]+)/i,
  },
];

export const minVersionsForOptions = (
  options: Options,
): { [agent: string]: number | undefined } => {
  if (options.edge) {
    return {
      edge: 15,
      firefox: 53,
      chrome: 55,
      safari: 10.1,
      // https://en.wikipedia.org/wiki/Safari_version_history
      'mobile safari webview': 603.1,
    };
  }

  return {
    firefox: 58,
    chrome: 66,
    safari: 12,
    'mobile safari webview': 605.1,
  };
};

export default (options: Options = { edge: true }) => {
  if (options.safari10 !== undefined) {
    throw new Error('option safari10 removed');
  }

  const minVersions = minVersionsForOptions(options);

  return (userAgent: string) => {
    let agent: { key: string; version: string } | undefined;
    agents.some(({ key, regExp }) => {
      const res = regExp.exec(userAgent);
      if (!res || !res[1]) return false;
      agent = { key, version: res[1] };
      return true;
    });
    if (!agent) return false;

    const minVersion: number | undefined = minVersions[agent.key];
    if (!minVersion) return false;
    return parseFloat(agent.version) >= minVersion;
  };
};
