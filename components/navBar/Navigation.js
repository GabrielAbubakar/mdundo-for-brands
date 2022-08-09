import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Navigation.module.scss'
// import MudondoLogo from '../Icons/MdundoLight'
import MdundoLogo from '../../public/assets/images/MdundoBrandsLogo.svg'


const Navigation = () => {

    const [navOpen, setNavOpen] = useState(false)
    const [burgerOpen, setBurgerOpen] = useState(false)

    const closeBurger = () => {
        setBurgerOpen(!burgerOpen)
    }


    return (
        // Navigation Container
        <div className={styles.navigation__container} style={{ position: burgerOpen ? 'fixed' : 'initial' }}>
            {/* <div className="widthContainer"> */}
            <nav className={styles.navigation}>
                {/* Main Logo */}
                <Link href='/'>
                    <a className={styles.navigation__logo}>
                        {/* <MudondoLogo /> */}
                        <Image src={MdundoLogo} alt="mdundo for brands" />
                    </a>
                </Link>
                <ul className={styles.navigation__links}>
                    {/* <li> */}
                    <li onMouseEnter={() => setNavOpen(!navOpen)} onMouseLeave={() => setNavOpen(!navOpen)}>
                        <a href="#home" >
                            Resources
                        </a>
                        <svg width={11} height={6} fill="none">
                            <path d="M11 0H0l6 6 5-6z" fill="#000" />
                        </svg>
                        <ul className={styles.hoverNavigation}
                            style={{ display: navOpen ? 'block' : 'none' }}
                        >
                            <li><a href="https://joseph04163.wixsite.com/my-site-1" target={`_blank`} rel="noreferrer">Case Studies</a></li>
                            <li><a href="mailto:brands@mdundo.com">Contact Us</a></li>
                            <li><a href="#">FAQs</a></li>
                        </ul>
                    </li>
                    <Link href='/signup'>
                        <a className={styles.navigation__button}>Sign Up</a>
                    </Link>
                </ul>

                {/* Hamburger Icon */}
                <button className={burgerOpen ? `${styles.hamburger} ${styles.open}` : styles.hamburger}
                    onClick={() => setBurgerOpen(!burgerOpen)}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </button>

            </nav>

            {/* Hamburger Menu */}
            <div className={styles.hamburgerMenuContainer} style={{ display: burgerOpen ? 'block' : 'none' }}>
                <div className={styles.hamburgerMenu} >
                    <ul>
                        <li onClick={closeBurger}>
                            <a href="https://joseph04163.wixsite.com/my-site-1" target={`_blank`} rel="noreferrer">Case Studies</a>
                        </li>
                        <li onClick={closeBurger}>
                            <a href="#contact-us">Contact Us</a>
                        </li>
                        <li onClick={closeBurger}>
                            <a href="#faqs">FAQS</a>
                        </li>
                    </ul>

                    <a href="#try" onClick={closeBurger}>Try Now</a>
                </div>
            </div>
            {/* </div> */}
        </div>
    )
}

export default Navigation;