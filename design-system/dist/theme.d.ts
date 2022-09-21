import facepaint from 'facepaint';
export declare const theme: {
    colors: {
        grayscale: {
            darker: string;
            dark: string;
            medium: string;
            light: string;
            lighter: string;
            white: string;
        };
        redscale: {
            darker: string;
            dark: string;
            medium: string;
            light: string;
            lighter: string;
        };
    };
    mediaQuery: {
        mobile: string;
        tablet: string;
        desktop: string;
    };
    spacing: {
        xxxSmall: string[];
        xxSmall: string[];
        xSmall: string[];
        small: string[];
        medium: string[];
        large: string[];
        xLarge: string[];
        xxLarge: string[];
        xxxLarge: string[];
    };
    transitions: {
        durations: {
            slow: string;
            medium: string;
            fast: string;
        };
    };
};
export declare const mq: facepaint.DynamicStyleFunction;
