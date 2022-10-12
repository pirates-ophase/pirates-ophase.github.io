import NextLink from 'next/link';

import Parallax from 'parallax-js';
import React, { useEffect, useRef } from 'react';
import styles from '../styles/Menu.module.css'

export const Menu = () => {
    const parallaxSceneRef = useRef<HTMLElement>(null);

    useEffect(() => { // maybe useLayoutEffect
        if (parallaxSceneRef.current === null) throw new Error('missing scene');

        const parallax = new Parallax(parallaxSceneRef.current, {
            pointerEvents: true,
        });

        return function cleanup() {
            parallax.destroy();
        }
    }, [/* this side effect is not dependent on any props */]);

    return <nav className={styles.menu} ref={parallaxSceneRef}>
        <div data-depth="0.2">
            <NextLink href={'/'}>Home</NextLink>
            <NextLink href={'/crew'}>Crew</NextLink>
            <NextLink href={'/plan'}>Wochenplan</NextLink>
            <NextLink href={'/log'}>Logbuch</NextLink>
        </div>
    </nav>
};
