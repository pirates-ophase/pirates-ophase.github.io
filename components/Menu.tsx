import Link from 'next/link';
import { useRouter } from 'next/router';

import Parallax from 'parallax-js';
import React, { ReactElement, useEffect, useRef } from 'react';
import styles from '../styles/Menu.module.css'

const MenuItem = ({ href, children }: {href: string, children: string}) => {
    const active = useRouter().asPath === href;
    const className = styles.menuItem + (active ? ` ${styles.active}` : '');
    return (
        <Link href={href}>
            <a className={className}>{ children }</a>
        </Link>
    )
}

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
        <div data-depth="-0.1" className={styles.background}>
            <img src="/menu/background.jpg"/>
        </div>
        <div data-depth="0.0" className={styles.wave}>
            <div />
        </div>
        <div data-depth="0.2" className={styles.wave}>
            <div />
        </div>
        <div data-depth="0.4" className={styles.wave}>
            <div/>
        </div>
        <div data-depth="0.5" className={styles.ship}>
            <img
                src="/menu/pirateShip_wood.png"
                alt="Pirate ship drawn on a pice of wood"/>
        </div>
        <div data-depth="0.5">
            <MenuItem href={'/'}>Home</MenuItem>
            <MenuItem href={'/crew'}>Crew</MenuItem>
            <MenuItem href={'/schedule'}>Wochenplan</MenuItem>
            <MenuItem href={'/log'}>Logbuch</MenuItem>
            <MenuItem href={'/imprint'}>Impressum</MenuItem>
        </div>
        <div data-depth="0.6" className={styles.wave}>
            <div />
        </div>
        <div data-depth="0.8" className={styles.frontWave}>
            <div />
        </div>
        <div data-depth="0.0" className={styles.transitionLayer} />
    </nav>
};
