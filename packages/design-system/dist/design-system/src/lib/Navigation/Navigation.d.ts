/// <reference types="react" />
import { SanityImageProps } from '../../utils/buildSrcSet';
export interface NavigationProps {
    contactLabel: string;
    frameworkLinkTag: any;
    image: SanityImageProps;
    navigationItems: NavigationItem[];
}
interface NavigationItem {
    label: string;
    url?: string;
    submenu?: Submenu[];
}
interface Submenu {
    label: string;
    url: string;
}
export declare function Navigation({ contactLabel, frameworkLinkTag, image, navigationItems }: NavigationProps): JSX.Element;
export default Navigation;
