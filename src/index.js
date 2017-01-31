// https://www.npmjs.com/package/babel-preset-modern-browsers
const agents = [
  { name: 'Edge', regexp: /edge\/([\d]+)/i, modernMinVersion: 14 },
  { name: 'Firefox', regexp: /firefox\/([\d]+)/i, modernMinVersion: 51 },
  { name: 'Chrome', regexp: /chrom(?:e|ium)\/([\d]+)/i, modernMinVersion: 51 }, // also works for opera.
  { name: 'Safari', regexp: /version\/([\d\w.-]+).*safari/i, modernMinVersion: 10 },
];

export default function isModernBrowser(userAgent: string) {
  return agents.some(agent => {
    const res = agent.regexp.exec(userAgent);
    return res && res[1] >= agent.modernMinVersion;
  });
}
