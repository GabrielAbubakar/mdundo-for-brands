import Image from 'next/image'
import Navigation from "../components/navBar/Navigation";
import Tabs from '../components/FeatureTabs/Tabs';
import styles from '../styles/Home.module.scss'
import BrandLift from '../public/assets/images/BrandLift-Desktop.png'
import Sportpesa from '../public/assets/images/SportPesa.svg'
import Cocacola from '../public/assets/images/CocaCola.svg'
import EABL from '../public/assets/images/EABL.svg'
import AudioAdMockup from '../public/assets/images/AudioAdMockup.png'
import TrustSvg from '../public/assets/images/Trust.svg'
import AdBlockerSvg from '../public/assets/images/AdBlocker.svg'
import GrowthSvg from '../public/assets/images/Growth.svg'
import MapPng from '../public/assets/images/map.png'




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


            {/* Case Studies Section*/}
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

            {/* Features Section */}
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

                    <div className={styles.featuresBottom}>
                        <div className={styles.featuresBottomContainer}>
                            <div className={styles.featuresBottomContentBox}>
                                <Image src={TrustSvg} alt="Trust Us" title='Trust Us' />
                                <h3>Builds Trust</h3>
                                <p>
                                    Campaigns on Mdundo increase a brand’s brand lift score by an average of 27%
                                </p>
                            </div>
                            <div className={styles.featuresBottomContentBox}>
                                <Image src={AdBlockerSvg} alt="AdBlocker" title='We always play our ads' />
                                <h3>Reaches a wider audience</h3>
                                <p>
                                    Up to 40% of Africans below the age of 34 years, use ad-blockers, our audio ads reach this audience. The ad is available offline!
                                </p>
                            </div>
                            <div className={styles.featuresBottomContentBox}>
                                <Image src={GrowthSvg} alt="Growth" title='We guarantee Growth' />
                                <h3>Influence Consumer Decisions</h3>
                                <p>
                                    53% of consumers trust influencers, our audio ads are served in association with your target audience’s favorite musicians.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics Section*/}
            <section className={styles.statistics} id="statistics">
                <div className={styles.statisticsContainer}>
                    <div className={styles.statisticsContent}>
                        <h2>We have a young, <br /> highly engaged audience!</h2>
                        <p>
                            Get in touch with us to capture the attention of your target audience with maximum impact, Today!
                        </p>
                        <div className={styles.statisticsButtons}>
                            <a href="#touch">Get in Touch</a>
                            <a href="#numbers">View Q4 numers here</a>
                        </div>
                    </div>
                    <div className={styles.statisticsImgBox}>
                        <Image src={MapPng} alt='map of africa' />
                        {/* <img src={Map} alt="map" /> */}
                        {/* <SvgMap /> */}
                    </div>
                </div>
            </section>


            {/* Clients Section */}
            <section className={styles.clients} id="clients">
                <div className={styles.clientsContainer}>
                    <div className={styles.clientsLogos}>
                        <h2>Who we work with</h2>
                        <p>
                            We have been trusted by the biggest brands and agencies <br /> across Africa…
                        </p>

                        <div className={styles.clientsLogosGrid}>
                            <div>
                                <Image src={EABL} alt="eabl" width={106} height={64} />
                                <Image src={Cocacola} alt="eabl" width={106} height={64} />
                                <Image src={Sportpesa} alt="eabl" width={136} height={64} />
                                <Image src={Cocacola} alt="eabl" width={106} height={64} />
                                <Image src={EABL} alt="eabl" width={106} height={64} />
                            </div>
                            <div>
                                <Image src={EABL} alt="eabl" width={106} height={64} />
                                <Image src={Cocacola} alt="eabl" width={106} height={64} />
                                <Image src={Sportpesa} alt="eabl" width={136} height={64} />
                                <Image src={Cocacola} alt="eabl" width={106} height={64} />
                                <Image src={EABL} alt="eabl" width={106} height={64} />
                            </div>
                            <div>
                                <Image src={EABL} alt="eabl" width={106} height={64} />
                                <Image src={Cocacola} alt="eabl" width={106} height={64} />
                                <Image src={Sportpesa} alt="eabl" width={136} height={64} />
                                <Image src={Cocacola} alt="eabl" width={106} height={64} />
                                <Image src={EABL} alt="eabl" width={106} height={64} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Home