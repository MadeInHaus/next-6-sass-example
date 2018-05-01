import Link from 'next/link';
import css from './Nav.scss';

export default () => (
    <nav className={css.nav}>
        <Link href="/">
            <a className={css.navLink}>Home</a>
        </Link>
        <Link href="/about">
            <a className={css.navLink}>About</a>
        </Link>
        <Link href="/contact">
            <a className={css.navLink}>Contact</a>
        </Link>
    </nav>
);
