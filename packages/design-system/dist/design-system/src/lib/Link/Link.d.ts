/// <reference types="react" />
export declare type LinkProps = {
    frameworkLinkTag: any;
    label: string;
    url: string;
    variant: 'Primary Button' | 'Secondary Button' | 'Small Link' | 'Medium Link' | 'Large Link' | 'Inline Link';
    direction?: 'Left' | 'Right';
};
export declare const Link: ({ label, url, variant, frameworkLinkTag, direction }: LinkProps) => JSX.Element;
export default Link;
