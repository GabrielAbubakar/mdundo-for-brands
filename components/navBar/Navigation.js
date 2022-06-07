import React from 'react'
import './Navigation.css'
import MudondoLogo from '../../assets/images/MdundoBrandsLogo.svg'

const Navigation = () => {
    return (
        <div className='navigation__container'>
            <nav className='navigation'>
                <div className='navigation__logo'>
                    <img src={MudondoLogo} alt="mdundobrands logo" />
                </div>

                <ul className='navigation__links'>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#clients">Clients</a></li>
                </ul>

                <a href='#none' className='navigation__button'>Get in Touch</a>
            </nav>
        </div>
    )
}

export default Navigation