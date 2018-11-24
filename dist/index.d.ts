interface Options {
    edge?: boolean;
    safari10?: never;
}
export declare const minVersionsForOptions: (options: Options) => {
    [agent: string]: number | undefined;
};
declare const _default: (options?: Options) => (userAgent: string) => boolean;
export default _default;
//# sourceMappingURL=index.d.ts.map