import Image from 'next/image'
import Head from 'next/head'
import Navigation from "../components/navBar/Navigation";
import Tabs from '../components/FeatureTabs/Tabs';
import styles from '../styles/Home.module.scss'
//Assets
import Sportpesa from '../public/assets/images/SportPesa.svg'
import Cocacola from '../public/assets/images/CocaCola.svg'
import EABL from '../public/assets/images/EABL.svg'
import Chrome from '../public/assets/images/brandlogos/ChromeGin.svg'
import Dentsu from '../public/assets/images/brandlogos/dentsuaegis.svg'
import Guiness from '../public/assets/images/brandlogos/Guiness.svg'
import MTN from '../public/assets/images/brandlogos/MTN.svg'
import Nivea from '../public/assets/images/brandlogos/Nivea.svg'
import OMG from '../public/assets/images/brandlogos/OMG.svg'
import Ostrich from '../public/assets/images/brandlogos/Ostrich.svg'
import Phd from '../public/assets/images/brandlogos/Phd.svg'
import Safaricom from '../public/assets/images/brandlogos/Safaricom.svg'
import StandChart from '../public/assets/images/brandlogos/StandChart.svg'
import Tusker from '../public/assets/images/brandlogos/Tusker.svg'
import Vodacom from '../public/assets/images/brandlogos/vodacom.svg'

import BrandLift from '../public/assets/images/ProductShots2.png'
import AudioAdMockup from '../public/assets/images/AudioAd2.png'
import TrustSvg from '../public/assets/images/Trust.svg'
import AdBlockerSvg from '../public/assets/images/AdBlocker.svg'
import GrowthSvg from '../public/assets/images/Growth.svg'
import MapPng from '../public/assets/images/map.png'
import RachelPng from '../public/assets/images/RachelMdundo.png'
import MdundoLogoSvg from '../public/assets/images/mdundoLogoDark.svg'
import NigerianFlag from '../public/assets/images/NigerianFlag.svg'
import CountryCard from '../components/CountryCard';




const Home = () => {
    return (
        <>
            <Head>
                <title>Mdundo for Brands</title>
            </Head>
            <Navigation />


            {/* Home Section */}
            <section className={styles.home} id="home">
                {/* <div className='widthContainer'> */}
                <div className={styles.homeContainer}>
                    <div className={styles.homeTextContent}>
                        <h1>
                            Find out how your brand is performing in <span>Africa&apos;s biggest consumer market</span>
                        </h1>
                        <p>
                            Increase brand awareness, expand your audience, and boost foot traffic, among other things. Track the impact of your ad and gain insights on delivery and audience engagement.
                        </p>
                        <div className={styles.homeTextCta}>
                            <a href="#try">Try Now <span>(Free)</span></a>
                            <a href="#vid">Watch Introductory Video &gt;</a>
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
                        <Image src={BrandLift} alt="bradlift desktop"
                            width={982}
                            height={645}
                            quality={100}
                            priority />
                    </div>

                    {/* <div className={styles.homeImgContainer2}>
                        <Image src={BrandLift} alt="bradlift desktop" width={982} height={645} />
                    </div> */}
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
                            View Case Studies &gt;
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
                            <a href='#'>Listen</a>
                        </div>

                        <div className={styles.featuresImgBox}>
                            <Image src={AudioAdMockup} alt="audio ad phone" width={716} height={670} placeholder="blur" quality={100} />
                        </div>
                    </div>

                    <div className={styles.featuresMid}>
                        <Tabs />
                    </div>

                    <div className={styles.featuresBottom}>
                        <div className={styles.featuresBottomContainer}>
                            <div className={styles.featuresBottomContentBox}>
                                <div className={styles.featuresBottomImg}>
                                    <Image src={TrustSvg} alt="Trust Us" title='Trust Us' />
                                </div>
                                <h3>Builds Trust</h3>
                                <p>
                                    Campaigns on Mdundo increase a brand’s brand lift score by an average of 27%
                                </p>
                            </div>
                            <div className={styles.featuresBottomContentBox}>
                                <div className={styles.featuresBottomImg}>
                                    <Image src={AdBlockerSvg} alt="AdBlocker" title='We always play our ads' />
                                </div>
                                <h3>Reaches a wider audience</h3>
                                <p>
                                    Up to 40% of Africans below the age of 34 years, use ad-blockers, our audio ads reach this audience. The ad is available offline!
                                </p>
                            </div>
                            <div className={styles.featuresBottomContentBox}>
                                <div className={styles.featuresBottomImg}>
                                    <Image src={GrowthSvg} alt="Growth" title='We guarantee Growth' />
                                </div>
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

                        <div className={styles.statisticsCountriesCarousel}>
                            <CountryCard flag={NigerianFlag} name="Nigeria" stat="8.7" />
                            <CountryCard flag={NigerianFlag} name="Nigeria" stat="8.7" />
                            <CountryCard flag={NigerianFlag} name="Nigeria" stat="8.7" />
                            <CountryCard flag={NigerianFlag} name="Nigeria" stat="8.7" />
                            <CountryCard flag={NigerianFlag} name="Nigeria" stat="8.7" />
                            <CountryCard flag={NigerianFlag} name="Nigeria" stat="8.7" />
                        </div>

                        <div className={styles.statisticsButtons}>
                            <a href="#touch">Get in Touch</a>
                            <a href="#numbers">View Q4 numers here &gt;</a>
                        </div>
                    </div>
                    <div className={styles.statisticsImgBox}>
                        <Image src={MapPng} alt='map of africa' />
                    </div>
                </div>
            </section>

            {/* Clients Section */}
            <section className={styles.clients} id="clients">
                <div className={styles.clientsContainer}>
                    <div className={styles.clientsLogos}>
                        <h2>Who we work with</h2>
                        <h2>Our Strong Global Partners</h2>
                        <p>
                            We have been trusted by the biggest brands and agencies <br /> across Africa…
                        </p>

                        <div className={styles.clientsLogosMobileGrid}>
                            <div>
                                <Image src={Sportpesa} alt="sportpesa" width={106} height={64} />
                                <Image src={EABL} alt="eabl" width={106} height={64} />
                                <Image src={Vodacom} alt="vodacom" width={136} height={64} />
                            </div>
                            <div>
                                <Image src={Cocacola} alt="cocacola" width={106} height={64} />
                                <Image src={OMG} alt="omg" width={106} height={64} />
                                <Image src={Guiness} alt="guiness" width={106} height={64} />
                            </div>
                            <div>
                                <Image src={Dentsu} alt="dentsu" width={136} height={64} />
                                <Image src={MTN} alt="mtn" width={106} height={64} />
                                <Image src={Chrome} alt="chrome" width={106} height={64} />
                            </div>
                            <div>
                                <Image src={Tusker} alt="dentsu" width={136} height={64} />
                                <Image src={Phd} alt="mtn" width={106} height={64} />
                                <Image src={Ostrich} alt="chrome" width={106} height={64} />
                            </div>
                        </div>

                        <div className={styles.clientsLogosGrid}>
                            <div>
                                <Image src={Sportpesa} alt="sportpesa" width={106} height={64} />
                                <Image src={EABL} alt="eabl" width={106} height={64} />
                                <Image src={Vodacom} alt="vodacom" width={136} height={64} />
                                <Image src={Safaricom} alt="safaricom" width={106} height={64} />
                                <Image src={Cocacola} alt="cocacola" width={106} height={64} />
                            </div>
                            <div>
                                <Image src={OMG} alt="omg" width={106} height={64} />
                                <Image src={Guiness} alt="guiness" width={106} height={64} />
                                <Image src={Dentsu} alt="dentsu" width={136} height={64} />
                                <Image src={MTN} alt="mtn" width={106} height={64} />
                                <Image src={Chrome} alt="chrome" width={106} height={64} />
                            </div>
                            <div>
                                <Image src={StandChart} alt="standchart" width={106} height={64} />
                                <Image src={Nivea} alt="nivea" width={106} height={64} />
                                <Image src={Tusker} alt="tusker" width={136} height={64} />
                                <Image src={Phd} alt="phd" width={106} height={64} />
                                <Image src={Ostrich} alt="ostrich" width={106} height={64} />
                            </div>
                        </div>
                    </div>

                    <div className={styles.clientsTestimonials}>
                        <h2>What People Say about Us</h2>
                        <div className={styles.clientsTestimonialsContainer}>
                            <div className={styles.clientsTestimonialsCard}>
                                <p>
                                    Mdundo is a flexible partner with a great understanding of the marketing challenges our clients are facing. Mdundo offers innovative and creative solutions to ensure we deliver results
                                </p>
                                <p>
                                    Managing <br /> Partner
                                </p>
                            </div>
                            <div className={styles.clientsTestimonialsCard}>
                                <p>
                                    Mdundo provided us with a very result-driven platform creating a good balance of awareness and lead-generation for our new brand                                </p>
                                <p>
                                    Managing <br /> Manager
                                </p>
                            </div>
                            <div className={styles.clientsTestimonialsCard}>
                                <p>
                                    Mdundo worked hard with us to define the brief and gave us a channel to reach a key target audience for the new campaign to launch our new digital platform
                                </p>
                                <p>
                                    Director of Digital <br /> Marketing, Africa
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className={styles.team} id="team">
                <h2>The Team</h2>
                <div className={styles.teamContainer}>
                    <div className={styles.teamMemberCard}>
                        <figure>
                            <Image src={RachelPng} alt="team member" />
                        </figure>
                        <h3>Rachel Karanu</h3>
                        <h4>Head of Brand Partnerships, <br /> Africa</h4>
                        <p>
                            rachel@mdundo.com
                        </p>
                    </div>
                    <div className={styles.teamMemberCard}>
                        <figure>
                            <Image src={RachelPng} alt="team member" quality={100} />
                        </figure>
                        <h3>Vivian Njeri</h3>
                        <h4>Head of Sales, <br /> Kenya</h4>
                        <p>
                            vivian@mdundo.com
                        </p>
                    </div>
                    <div className={styles.teamMemberCard}>
                        <figure>
                            <Image src={RachelPng} alt="team member" />
                        </figure>
                        <h3>Thelma Areh</h3>
                        <h4>Head of Brand Partnerships, <br /> Nigeria</h4>
                        <p>
                            thelma@mdundo.com
                        </p>
                    </div>
                </div>
            </section>

            {/* Events Section */}
            <section className={styles.events} id="events">
                <div className={styles.eventsContainer}>
                    <h2>Events</h2>
                    <div className={styles.eventsVideoCarousel}>
                        <div className={styles.eventsVideoCard}>
                            <iframe width='100%' height='100%' src="https://www.youtube.com/embed/gaaTve1xLvQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className={styles.eventsVideoCard}>
                            <iframe width='100%' height="100%" src="https://www.youtube.com/embed/ArB3gEPc1I4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className={styles.eventsVideoCard}>
                            <iframe width='100%' height='100%' src="https://www.youtube.com/embed/gaaTve1xLvQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className={styles.eventsVideoCard}>
                            <iframe width='100%' height="100%" src="https://www.youtube.com/embed/ArB3gEPc1I4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className={styles.eventsText}>
                        <h3 >
                            groW YOUR BRAND in africa&apos;s <br />
                            biggest marketS TODAY, <a href="#">GET IN tOUCH</a>
                        </h3>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className={styles.footer} id="footer">
                <div className={styles.footerContainer}>
                    <div className={styles.footerContentContainer}>

                        <figure>
                            <Image src={MdundoLogoSvg} alt='mdundo dark' />
                        </figure>

                        <div className={styles.footerNavigation}>
                            <div>
                                <h4>Company</h4>
                                <ul>
                                    <li>
                                        <a href="#">
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Career
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4>Community</h4>
                                <ul>
                                    <li>
                                        <a href="#">
                                            Mdundo for Artists
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Mdundo for Investors
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Mdundo for Fans
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles.footerSocialLinks}>
                            <a href="#">
                                {/* <Image src={FacebookSvg} alt="facebook link" /> */}
                                <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.11163 3.29509H9.92331V0.139742C9.61075 0.0967442 8.53581 0 7.28393 0C4.67183 0 2.88248 1.643 2.88248 4.66274V7.44186H0V10.9693H2.88248V19.845H6.41654V10.9701H9.18243L9.6215 7.44269H6.41571V5.01251C6.41654 3.99297 6.69106 3.29509 8.11163 3.29509Z" fill="white" />
                                </svg>
                            </a>
                            <a href="#">
                                {/* <Image src={FacebookSvg} alt="facebook link" /> */}
                                <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.9617 2.11613C22.1435 2.475 21.2718 2.71288 20.3629 2.82838C21.2979 2.27013 22.0115 1.39287 22.347 0.3355C21.4753 0.85525 20.5128 1.22238 19.487 1.42725C18.6593 0.545875 17.4795 0 16.1925 0C13.6955 0 11.6853 2.02675 11.6853 4.51137C11.6853 4.86888 11.7155 5.21263 11.7898 5.53988C8.04017 5.357 4.72229 3.55988 2.49342 0.82225C2.10429 1.49738 1.87604 2.27012 1.87604 3.102C1.87604 4.664 2.68042 6.04862 3.87942 6.85025C3.15479 6.8365 2.44392 6.62613 1.84167 6.29475C1.84167 6.3085 1.84167 6.32638 1.84167 6.34425C1.84167 8.536 3.40505 10.3565 5.45517 10.7759C5.08805 10.8763 4.68792 10.9244 4.27267 10.9244C3.98392 10.9244 3.69242 10.9079 3.41879 10.8474C4.00317 12.6335 5.66142 13.9466 7.63317 13.9893C6.09867 15.1896 4.1503 15.9129 2.04104 15.9129C1.67117 15.9129 1.31642 15.8964 0.96167 15.851C2.95954 17.1394 5.3273 17.875 7.88067 17.875C16.1802 17.875 20.7177 11 20.7177 5.04075C20.7177 4.84137 20.7108 4.64887 20.7012 4.45775C21.5963 3.8225 22.3484 3.02913 22.9617 2.11613Z" fill="white" />
                                </svg>
                            </a>
                            <a href="#">
                                {/* <Image src={FacebookSvg} alt="facebook link" /> */}
                                <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.83667 0H16.0867C19.883 0 22.9617 3.07862 22.9617 6.875V15.125C22.9617 18.9214 19.883 22 16.0867 22H7.83667C4.04029 22 0.96167 18.9214 0.96167 15.125V6.875C0.96167 3.07862 4.04029 0 7.83667 0ZM16.0867 19.9375C18.7404 19.9375 20.8992 17.7787 20.8992 15.125V6.875C20.8992 4.22125 18.7404 2.0625 16.0867 2.0625H7.83667C5.18292 2.0625 3.02417 4.22125 3.02417 6.875V15.125C3.02417 17.7787 5.18292 19.9375 7.83667 19.9375H16.0867Z" fill="white" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M6.46167 11C6.46167 7.96263 8.92429 5.5 11.9617 5.5C14.999 5.5 17.4617 7.96263 17.4617 11C17.4617 14.0374 14.999 16.5 11.9617 16.5C8.92429 16.5 6.46167 14.0374 6.46167 11ZM8.52417 11C8.52417 12.8948 10.0669 14.4375 11.9617 14.4375C13.8564 14.4375 15.3992 12.8948 15.3992 11C15.3992 9.10388 13.8564 7.5625 11.9617 7.5625C10.0669 7.5625 8.52417 9.10388 8.52417 11Z" fill="white" />
                                    <circle cx="17.8742" cy="5.08737" r="0.732875" fill="white" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <p className={styles.footerCopyright}>Copyright © 2021 Mdundo. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Home