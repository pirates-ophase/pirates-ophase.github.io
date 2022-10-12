// just the typings we need for our use of parallax JS
declare module 'parallax-js' {
    interface ParallaxConfig {
        pointerEvents: boolean;
    }

    export default class Parallax {
        constructor(element: HTMLElement, config: ParallaxConfig);
        destroy(): void;
    }
}
