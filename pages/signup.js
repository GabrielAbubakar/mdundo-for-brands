import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/SignUp.module.scss'
import MdundoLogo from '../public/assets/images/mdundoLogoDark.svg'

const Signup = () => {


    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [company, setCompany] = useState('')
    const [position, setPosition] = useState('')

    const handleFormSubmit = (e) => {
        e.preventDefault();
    }



    return (
        <div className={styles.container}>
            <div className={styles.containerItems}>
                <span className={styles.logo}>
                    <Link href='/'>
                        <a>
                            {/* <MudondoLogo /> */}
                            <Image src={MdundoLogo} alt="mdundo for brands" />
                        </a>
                    </Link>
                </span>
                <form className={styles.signupForm} onSubmit={handleFormSubmit}>
                    <label htmlFor="firstname">
                        First Name
                        <input id='firstname' type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </label>
                    <label htmlFor="lastname" >
                        Last Name
                        <input id='lastname' type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </label>
                    <label htmlFor="email">
                        Email
                        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label htmlFor="company">
                        Company
                        <input id='company' type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
                    </label>
                    <label htmlFor="position">
                        Position
                        <input id='position' type="text" value={position} onChange={(e) => setPosition(e.target.value)} />
                    </label>

                    <input type="submit" value="Create Account" />
                </form>

                <div className={styles.loginText}>
                    <p>Already have an account? <a href="#">Login</a></p>
                </div>
            </div>
        </div>
    )
}

export default Signup