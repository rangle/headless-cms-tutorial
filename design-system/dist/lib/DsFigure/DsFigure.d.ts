/// <reference types="react" />
export declare type DsFigureProps = {
    src: string;
    alt: string;
    caption?: string;
    isCover?: boolean;
};
export declare const DsFigure: ({ src, alt, caption, isCover }: DsFigureProps) => JSX.Element | null;
