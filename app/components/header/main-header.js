
import LogoImg from '@/assets/logo.png';
import Image from 'next/image'
import Link from 'next/link';

import classes from './main-header.module.css'
import ActiveLink from './active-link';
export default function HeaderPage(){
     return (
        <>
            <header className={classes.header}>
            <Link href="/" className={classes.logo}>
                <Image src={LogoImg} alt='heading icon' priority/>
                DishItOut
            </Link>

            <nav className={classes.nav}>
                <ul> 
                    <li> <ActiveLink href="/meals">Browse Meals</ActiveLink> </li>
                    <li><ActiveLink href="/community">Foodies Community</ActiveLink></li>
                </ul>
            </nav>
            </header>
        </>
     )
}