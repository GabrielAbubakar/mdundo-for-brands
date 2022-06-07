import React from 'react'
import Image from 'next/image'
import styles from './Navigation.module.scss'
import MudondoLogo from '../../public/assets/images/MdundoBrandsLogo.svg'


const Navigation = () => {
    return (
        <div className={styles.navigation__container}>
            <nav className={styles.navigation}>
                <div className={styles.navigation__logo}>
                    <Image src={MudondoLogo} alt="mdundobrands" title='mdundobrands logo' />
                </div>

                <ul className={styles.navigation__links}>
                    <li><a href="#home">Resources</a></li>
                    <a href='#none' className={styles.navigation__button}>Sign Up</a>
                </ul>


            </nav>
        </div>
    )
}

export default Navigation