/// <reference types="react" />
export interface QuoteProps {
    attribution: string;
    quotation: string;
    image: {
        src: string;
        alt: string;
    };
}
export declare function Quote({ attribution, quotation, image }: QuoteProps): JSX.Element;
export default Quote;
