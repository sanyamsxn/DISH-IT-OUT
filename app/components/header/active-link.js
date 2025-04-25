'use client';
import Link from "next/link"
import { usePathname } from 'next/navigation';
import classes from './active-link.module.css';



export default function ActiveLink({href, children }){
    const currentPath = usePathname();

    return (
            <Link href={href} className={currentPath.startsWith(href) ? `${classes.active} ${classes.link}` : classes.link}>
                {children}
            </Link>
    
    )
 
}