"use client";
import Link from 'next/link';
import React, { use } from 'react'
import Image from 'next/image';
import logoImage from '@/assets/logo.png';
import styles from './main-header.module.css';
import MainHeaderBackground from './main-header-bg';
import NavLink from './nav-link';



/**
 * A functional component that renders the main header of the application.
 *
 * @return {React.ReactElement} The JSX element representing the main header.
*/
const MainHeader = () => {

    //RENDER
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
                            <NavLink href="/meals">Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href="/community">Community</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default MainHeader;
