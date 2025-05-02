import React from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './nav-link.module.css';
const NavLink = ({href, children}) => {
    //HOOKS
    const path  = usePathname();
    
    //RENDER
    return (
        <Link href={href} className={path.startsWith(href) ? styles.active : undefined}>
            {children }
        </Link>
    )
}

export  default NavLink
