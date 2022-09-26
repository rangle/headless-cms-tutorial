/// <reference types="react" />
import { SanityImageProps } from '../../utils/buildSrcSet';
export declare type FigureProps = {
    caption?: string;
    image: SanityImageProps;
    isCover?: boolean;
};
export declare const Figure: ({ image, isCover }: FigureProps) => JSX.Element;
