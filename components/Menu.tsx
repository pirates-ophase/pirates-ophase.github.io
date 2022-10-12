import NextLink from 'next/link';

export const Menu = () => {
  
    return <nav>
        <NextLink href={'/'}>Home</NextLink>
        <NextLink href={'/crew'}>Crew</NextLink>
        <NextLink href={'/plan'}>Wochenplan</NextLink>
        <NextLink href={'/log'}>Logbuch</NextLink>
    </nav>
};
