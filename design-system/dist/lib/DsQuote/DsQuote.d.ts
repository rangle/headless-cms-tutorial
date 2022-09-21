/// <reference types="react" />
export interface DsQuoteProps {
    attribution: string;
    quotation: string;
    image: {
        src: string;
        alt: string;
    };
}
export declare function DsQuote({ attribution, quotation, image }: DsQuoteProps): JSX.Element;
export default DsQuote;
