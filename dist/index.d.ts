export declare const minVersionsForOptions: (options: any) => {
    edge: number;
    firefox: number;
    chrome: number;
    safari: number;
    'mobile safari webview': number;
} | {
    firefox: number;
    chrome: number;
    safari: number;
    'mobile safari webview': number;
    edge?: undefined;
};
declare const _default: (options?: {
    edge: boolean;
}) => (userAgent: any) => boolean;
export default _default;
//# sourceMappingURL=index.d.ts.map