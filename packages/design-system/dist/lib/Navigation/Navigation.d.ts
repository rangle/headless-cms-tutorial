/// <reference types="react" />
export interface NavigationProps {
    contactLabel: string;
    frameworkLinkTag: any;
    image: {
        src: string;
        alt: string;
    };
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
