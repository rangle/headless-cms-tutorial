/// <reference types="react" />
import { SanityImageProps } from '../../utils/buildSrcSet';
export interface QuoteProps {
    attribution: string;
    quotation: string;
    image: SanityImageProps;
}
export declare function Quote({ attribution, quotation, image }: QuoteProps): JSX.Element;
export default Quote;
