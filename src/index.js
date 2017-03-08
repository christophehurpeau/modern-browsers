// https://www.npmjs.com/package/babel-preset-modern-browsers
const agents = [
  { name: 'Edge', regexp: /edge\/([\d]+)/i, modernMinVersion: 14 },
  { name: 'Firefox', regexp: /firefox\/([\d]+)/i, modernMinVersion: 52 },
  { name: 'Chrome', regexp: /(?:chrom(?:e|ium)|crios)\/([\d]+)/i, modernMinVersion: 55 }, // also works for opera.
  { name: 'Safari', regexp: /version\/([\d\w.-]+).*safari/i, modernMinVersion: 10.1 },
];

type OptionsType = {|
  safari10: ?boolean,
|};

export default function isModernBrowser(userAgent: string, { safari10 }: OptionsType = {}) {
  return agents.some(agent => {
    const res = agent.regexp.exec(userAgent);
    return res && parseFloat(res[1]) >= (safari10 && agent.name === 'Safari' ? 10 : agent.modernMinVersion);
  });
}
