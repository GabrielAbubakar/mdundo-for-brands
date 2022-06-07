import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Navigation.module.scss'
import MudondoLogo from '../../public/assets/images/MdundoBrandsLogo.svg'


const Navigation = () => {

    const [navOpen, setNavOpen] = useState(false)


    return (
        <div className={styles.navigation__container}>
            <nav className={styles.navigation}>

                <Link href='/'>
                    <a>
                        <Image src={MudondoLogo} alt="mdundobrands" title='mdundobrands logo' />
                    </a>
                </Link>
                <ul className={styles.navigation__links}>
                    <li>
                        <a href="#home">
                            Resources
                        </a>
                        <ul className={styles.hoverNavigation} style={{ display: navOpen ? 'block' : 'none' }}>
                            <li><a href="#">Case Studies</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">FAQs</a></li>
                        </ul>
                    </li>
                    <a href='#none' className={styles.navigation__button}>Sign Up</a>
                </ul>


            </nav>
        </div>
    )
}

export default Navigation