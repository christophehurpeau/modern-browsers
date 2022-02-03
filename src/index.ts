// https://www.npmjs.com/package/babel-preset-modern-browsers

type AgentKeys = 'chrome' | 'firefox' | 'safari';

export const minVersions: Record<AgentKeys, number> = {
  chrome: 80,
  firefox: 78,
  safari: 13.1,
  // 'mobile safari webview': 605.1,
};

interface Agent {
  key: AgentKeys;
  regExp: RegExp;
}

interface AgentVersion {
  key: AgentKeys;
  version: string;
}

const agents: Agent[] = [
  { key: 'firefox', regExp: /firefox\/(\d+)/i },
  { key: 'chrome', regExp: /chrom(?:e|ium)\/(\d+)/i }, // also works for opera and edge.
  { key: 'safari', regExp: /version\/([\d.]+).*safari/i },
  // {
  //   key: 'mobile safari webview',
  //   regExp: /(?:iPod|iPhone|iPad).+AppleWebKit\/([\d.]+)/i,
  // },
];

export function isModernBrowser(userAgent: string): boolean {
  let agent: AgentVersion | undefined;
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
}
