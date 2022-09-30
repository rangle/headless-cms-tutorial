import React from 'react';
import { LinkProps } from '../Link';
import { SanityImageProps } from '../../utils/buildSrcSet';
export interface MediaModuleProps {
    cta?: React.ReactElement<LinkProps>;
    heading: string;
    subcopy: React.ReactNode;
    variant: 'Media Left' | 'Media Right';
    image?: SanityImageProps;
}
export declare function MediaModule({ cta, heading, image, subcopy, variant }: MediaModuleProps): JSX.Element;
export default MediaModule;
