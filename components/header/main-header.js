import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import logoImage from '@/assets/logo.png';
import styles from './main-header.module.css';
import MainHeaderBackground from './main-header-bg';
/**
 * A functional component that renders the main header of the application.
 *
 * @return {React.ReactElement} The JSX element representing the main header.
 */
const MainHeader = () => {
    return (
        <>
            <MainHeaderBackground />
            <header className={styles.header}>
                <Link href="/" className={styles.logo}>
                    <Image
                        src={logoImage}
                        alt="NextLevel Food Logo"
                        priority
                        />
                    NextLevel Food
                </Link>
                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <Link href="/meals">Meals</Link>
                        </li>
                        <li>
                            <Link href="/community">Community</Link>
                        </li>
                        <li>
                            <Link href="/meals/share">Share a Meal</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default MainHeader;
