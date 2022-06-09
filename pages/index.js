import Image from 'next/image'
import Navigation from "../components/navBar/Navigation";
import styles from '../styles/Home.module.scss'
import BrandLift from '../public/assets/images/BrandLift-Desktop.png'
import Sportpesa from '../public/assets/images/SportPesa.svg'
import Cocacola from '../public/assets/images/CocaCola.svg'
import EABL from '../public/assets/images/EABL.svg'
import AudioAdMockup from '../public/assets/images/AudioAdMockup.png'
import Tabs from '../components/FeatureTabs/Tabs';

const Home = () => {
    return (
        <div>
            <Navigation />


            {/* Home Section */}
            <section className={styles.home} id="home">
                {/* <div className='widthContainer'> */}
                <div className={styles.homeContainer}>
                    <div className={styles.homeTextContent}>
                        <h1>
                            Find out how your brand is performing <br /> in <span>Africa&apos;s biggest consumer market</span>
                        </h1>
                        <div className={styles.homeTextCta}>
                            <a href="#try">Try Now (Free)</a>
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
                {/* </div> */}
            </section>


            {/* Case Studies */}
            <section className={styles.caseStudies} id="case-studies">
                {/* <div className='widthContainer'> */}
                <div className={styles.caseStudiesContainer}>
                    <div className={styles.caseStudiesLeft}>
                        <p>
                            See how we’ve helped our clients increase their Brandlift score with our <br /> unique advertising and insights.
                        </p>
                        <a href="#casestudies">
                            View Case Studies
                        </a>
                    </div>
                    <h2>Case Studies</h2>
                </div>
                {/* </div> */}
            </section>

            {/* Feature */}
            <section className={styles.feature} id='feature'>
                <div className={styles.featuresContainer}>
                    <div className={styles.featuresTop}>
                        <div className={styles.featuresContent}>
                            <h3>Audio Ads</h3>
                            <h2>Capture the Attention of your Audience with High <span>impact audio ads!</span></h2>
                            <p>
                                5-10 second Audio Ad, played just before your target audience listens to their favorite song!
                            </p>
                        </div>
                        <Image src={AudioAdMockup} alt="audio ad phone" width={716} height={670} />

                        {/* <div className={styles.featuresImgBox}>
                        </div> */}
                    </div>

                    <div className={styles.featuresMid}>
                        <Tabs />
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Home