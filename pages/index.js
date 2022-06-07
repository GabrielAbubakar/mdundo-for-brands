import Image from 'next/image'
import Navigation from "../components/navBar/Navigation";
import styles from '../styles/Home.module.scss'
import BrandLift from '../public/assets/images/BrandLift-Desktop.png'
import Sportpesa from '../public/assets/images/SportPesa.svg'
import Cocacola from '../public/assets/images/CocaCola.svg'
import EABL from '../public/assets/images/EABL.svg'

const Home = () => {
    return (
        <div>
            <Navigation />


            {/* Home Section */}
            <section className={styles.home}>
                <div className={styles.homeContainer}>
                    <div className={styles.homeTextContent}>
                        <h1>
                            Find out how your brand is performing <br /> in <span>Africa&apos;s biggest consumer market</span>
                        </h1>
                        <div className={styles.homeTextCta}>
                            <a href="#try">Try Now(Free)</a>
                            <a href="#vid">Watch Introductory Video</a>
                        </div>
                        <div className={styles.homeTextUsers}>
                            <p>Trusted by over 100 businesses</p>
                            <div className={styles.userLogos}>
                                <Image src={Sportpesa} alt="Sportpesa" />
                                <Image src={EABL} alt="EABL" />
                                <Image src={Cocacola} alt="Cocacola" />
                            </div>
                        </div>
                    </div>

                    <div className={styles.homeImgContainer}>
                        <Image src={BrandLift} alt="bradlift desktop " width={944} height={577} />
                    </div>
                </div>
            </section>




        </div>
    )
}

export default Home