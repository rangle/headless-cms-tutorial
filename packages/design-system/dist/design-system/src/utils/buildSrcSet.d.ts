export interface SanityImageProps {
    asset: SanityAssetProps;
    hotspot?: SanityHotspotProps;
}
export interface SanityAssetProps {
    _ref: string;
}
export interface SanityHotspotProps {
    height: number;
    width: number;
    x: number;
    y: number;
}
export declare const buildSrcSet: (image: SanityImageProps, width?: number | undefined, height?: number | undefined) => string;
