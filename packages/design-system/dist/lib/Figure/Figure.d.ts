/// <reference types="react" />
export declare type FigureProps = {
    src: string;
    alt: string;
    caption?: string;
    isCover?: boolean;
};
export declare const Figure: ({ src, alt, caption, isCover }: FigureProps) => JSX.Element;
