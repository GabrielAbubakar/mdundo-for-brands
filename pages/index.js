import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import Navigation from "../components/navBar/Navigation";
import Tabs from '../components/FeatureTabs/Tabs';
import styles from '../styles/Home.module.scss'

// import BrandLift from '../public/assets/images/ProductShots2.png'
import BrandLift2 from '../public/assets/images/ProductShots2.webp'
import AudioAdMockup from '../public/assets/images/AudioAd2.png'
import AudioAdMockup2 from '../public/assets/images/AudioAdMockup2.png'
import MapPng from '../public/assets/images/MapSVG.svg'
import RachelPng from '../public/assets/images/RachelMdundo.png'
import VivianPng from '../public/assets/images/Vivian.png'
import LanrePng from '../public/assets/images/Olanrewaju.png'
import CountryCard from '../components/CountryCard';

//Flags
import { NG, GH, KE, TZ, UG, ZA } from '../components/Icons/Flags';

//Icon Components
import Trust from '../components/Icons/Trust'
import AdBlocker from '../components/Icons/AdBlocker'
import Growth from '../components/Icons/Growth'
import MdundoDark from '../components/Icons/MdundoDark'

// Client Icon Components
import Chrome from '../components/Icons/Chrome'
import Cocacola from '../components/Icons/Cocacola'
import Dentsu from '../components/Icons/Dentsu'
import EABL from '../components/Icons/EABL'
import Guiness from '../components/Icons/Guiness'
import MTN from '../components/Icons/MTN'
import Nivea from '../components/Icons/Nivea'
import OMG from '../components/Icons/OMG'
import Ostrich from '../components/Icons/Ostrich'
import Phd from '../components/Icons/Phd'
import Safaricom from '../components/Icons/Safaricom'
import SportPesa from '../components/Icons/SportPesa'
import StandChart from '../components/Icons/StandChart'
import Tusker from '../components/Icons/Tusker'
import Vodacom from '../components/Icons/Vodacom'






const Home = () => {

    const youtubeData = [
        'https://www.youtube.com/embed/SqZVm5s3vYE',
        'https://www.youtube.com/embed/Dsq2flogCw4',
        'https://www.youtube.com/embed/de0AV3q5dIg',
        'https://www.youtube.com/embed/s6gCDK8CgBo',
        'https://www.youtube.com/embed/Kp8clO-RRUU',
        'https://www.youtube.com/embed/PmP8wnoz6IE',
        'https://www.youtube.com/embed/PVJ5hS-GQhQ',
        'https://www.youtube.com/embed/V9mhMM96G4g',
        'https://www.youtube.com/embed/3P6qKvmJ3KA',
        'https://www.youtube.com/embed/mCl4MdcYh0I',
        'https://www.youtube.com/embed/Vj5II45DjXA',
        'https://www.youtube.com/embed/pYfsS7NfggQ',
        'https://www.youtube.com/embed/EaqN8qlJc7o',
        'https://www.youtube.com/embed/tQa-BN2ly5Y',
        'https://www.youtube.com/embed/WLmYZCkUvbM',
        'https://www.youtube.com/embed/ty-ZEjUtvog',
        'https://www.youtube.com/embed/LA2kx2qReNs',
        'https://www.youtube.com/embed/l-fLSE1mNWg',
        'https://www.youtube.com/embed/rR-nkopcn1g',
        'https://www.youtube.com/embed/w9s73b37SzY',
    ]


    return (
        <>
            <Head>
                <meta name="description" content="Grow your brand in Africas Biggest Markets Today." />
                <meta name="keywords" content="mdundo, mdundo brands, mdundo nigeria, mdundo for brands" />
                <meta name="author" content="Mdundo" />
                <meta property="og:title" content="Mdundo for Brands" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Mdundo for Brands" />
                <meta property="og:url" content="www.mdundoforbrands.com" />
                {/* <meta property="og:image" content="/learn-nigerian-law.png" /> */}
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="1200" />
                <meta property="og:locale" content="en_US" />

                <meta property="twitter:site" content="Mdundo for Brandsw" />
                <meta property="twitter:creator" content="mdundohq" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content="Mdundo for Brands" />
                <meta property="twitter:description" content="Grow your brand in Africas Biggest Markets Today." />
                {/* <meta property="twitter:image:src" content="/learn-nigerian-law.png" /> */}
                <meta property="twitter:image:width" content="1200" />
                <meta property="twitter:image:height" content="1200" />
                <title>Mdundo for Brands</title>
            </Head>
            <Navigation />


            {/* Home Section */}
            <section className={styles.home} id="home">
                {/* <div className='widthContainer'> */}
                <div className={`${styles.homeContainer} widthContainer`}>
                    <div className={styles.homeTextContent}>
                        <h1>
                            Find out how your brand is performing in <span>Africa&apos;s biggest consumer market</span>
                        </h1>
                        <p>
                            Increase brand awareness, expand your audience, and boost foot traffic, among other things. Track the impact of your ad and gain insights on delivery and audience engagement.
                        </p>
                        <div className={styles.homeTextCta}>
                            {/* <Link href='/signup'> */}
                            <a href="https://brandlift.mdundoforbrands.com/" target={`_blank`} rel="noreferrer">
                                Try Now <span>(Free)</span>
                            </a>
                            {/* </Link> */}
                            <a href="https://www.youtube.com/watch?v=TlHIPxUQP4E" target={`_blank`} rel="noreferrer">Watch Introductory Video &gt;</a>
                        </div>
                        <div className={styles.homeTextUsers}>
                            <p>Trusted by over 100 businesses</p>
                            <div className={styles.userLogos}>
                                <SportPesa />
                                <EABL />
                                <Cocacola />
                            </div>
                        </div>
                    </div>

                    <div className={styles.homeImgContainer}>
                        <Image src={BrandLift2} alt="bradlift desktop"
                            width={982}
                            height={645}
                            quality={80}
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
                <div className={`${styles.caseStudiesContainer} widthContainer`}>
                    <div className={styles.caseStudiesLeft}>
                        <p>
                            See how we’ve helped our clients increase their Brandlift score with our <br /> unique advertising and insights.
                        </p>
                        <a href="https://joseph04163.wixsite.com/my-site-1">
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
                    <div className={`${styles.featuresTop} widthContainer`}>
                        <div className={styles.featuresContent}>
                            <h3>Audio Ads</h3>
                            <h2>Capture the Attention of your Audience with High <span>impact audio ads!</span></h2>
                            <p>
                                5-10 second Audio Ad, played just before your target audience listens to their favorite song!
                            </p>
                            <a href='#'>Listen</a>
                        </div>

                        <div className={styles.featuresImgBox}>
                            <Image src={AudioAdMockup} alt="audio ad phone" width={716} height={670} quality={100} />
                        </div>
                        <div className={styles.featuresImgBoxMobile}>
                            <Image src={AudioAdMockup2} alt="audio ad phone" quality={100} />
                        </div>
                    </div>

                    <div className={styles.featuresMid}>
                        <Tabs />
                    </div>

                    <div className={styles.featuresBottom}>
                        <div className={styles.featuresBottomContainer}>
                            <div className={styles.featuresBottomContentBox}>
                                <div className={styles.featuresBottomImg}>
                                    <Trust />
                                </div>
                                <h3>Builds Trust</h3>
                                <p>
                                    Campaigns on Mdundo increase a brand’s brand lift score by an average of 27%
                                </p>
                            </div>
                            <div className={styles.featuresBottomContentBox}>
                                <div className={styles.featuresBottomImg}>
                                    <AdBlocker />
                                </div>
                                <h3>Reaches a wider audience</h3>
                                <p>
                                    Up to 40% of Africans below the age of 34 years, use ad-blockers, our audio ads reach this audience. The ad is available offline!
                                </p>
                            </div>
                            <div className={styles.featuresBottomContentBox}>
                                <div className={styles.featuresBottomImg}>
                                    <Growth />
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
                <div className={`${styles.statisticsContainer} widthContainer`}>
                    <div className={`${styles.statisticsContent} widthContainer`}>
                        <h2>We have a young, <br /> highly engaged audience!</h2>
                        <p>
                            Get in touch with us to capture the attention of your target audience with maximum impact, Today!
                        </p>

                        <div className={styles.statisticsCountriesCarousel}>
                            <CountryCard flag={<NG />} name="Nigeria" stat="10.7" />
                            <CountryCard flag={<KE />} name="Kenya" stat="5.3" />
                            <CountryCard flag={<TZ />} name="Tanzania" stat="5.1" />
                            <CountryCard flag={<GH />} name="Ghana" stat="1.3" />
                            <CountryCard flag={<UG />} name="Uganda" stat="2.9" />
                            <CountryCard flag={<ZA />} name="S. Africa" stat="4.1" />
                        </div>

                        <div className={styles.statisticsButtons}>
                            <a href="mailto:brands@mdundo.com">Get in Touch</a>
                            <a href="#numbers">View Full report Here here &gt;</a>
                        </div>
                    </div>
                    <div className={styles.statisticsImgBox}>
                        <Image src={MapPng} alt='map of africa' quality={100} />
                    </div>
                </div>
            </section>

            {/* Clients Section */}
            <section className={styles.clients} id="clients">
                <div className={`${styles.clientsContainer} widthContainer`}>
                    <div className={styles.clientsLogos}>
                        <h2>Who we work with</h2>
                        <h2>Our Strong Global Partners</h2>
                        <p>
                            We have been trusted by the biggest brands and agencies <br /> across Africa…
                        </p>

                        <div className={styles.clientsLogosMobileGrid}>
                            <div>
                                <SportPesa />
                                <EABL />
                                <Vodacom />
                            </div>
                            <div>
                                <Cocacola />
                                <OMG />
                                <Guiness />
                            </div>
                            <div>
                                <Dentsu />
                                <MTN />
                                <Chrome />
                            </div>
                            <div>
                                <Tusker />
                                <Phd />
                                <Ostrich />
                            </div>
                        </div>

                        <div className={styles.clientsLogosGrid}>
                            <div>
                                <SportPesa />
                                <EABL />
                                <Vodacom />
                                <Safaricom />
                                <Cocacola />
                            </div>
                            <div>
                                <OMG />
                                <Guiness />
                                <Dentsu />
                                <MTN />
                                <Chrome />
                            </div>
                            <div>
                                <StandChart />
                                <Nivea />
                                <Tusker />
                                <Phd />
                                <Ostrich />
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
                <div className={`${styles.teamContainer} widthContainer`}>
                    <div className={styles.teamMemberCard}>
                        <figure>
                            <Image src={RachelPng} alt="team member" quality={100} />
                        </figure>
                        <h3>Rachel Karanu</h3>
                        <h4>Head of Brand Partnerships, Africa</h4>
                        <p>
                            rachel@mdundo.com
                        </p>
                    </div>
                    <div className={styles.teamMemberCard}>
                        <figure>
                            <Image src={VivianPng} alt="team member" quality={100} />
                        </figure>
                        <h3>Vivian Njeri</h3>
                        <h4>Head of Sales, Kenya</h4>
                        <p>
                            vivian@mdundo.com
                        </p>
                    </div>
                    <div className={styles.teamMemberCard}>
                        <figure>
                            <Image src={LanrePng} alt="team member" quality={100} />
                        </figure>
                        <h3>Olanrewaju Effiong</h3>
                        <h4>Head of Brand Partnerships, Nigeria</h4>
                        <p>
                            lanre@mdundo.com
                        </p>
                    </div>
                </div>
            </section>

            {/* Events Section */}
            <section className={styles.events} id="events">
                <div className={styles.eventsContainer}>
                    <div className={styles.eventsContainerTop}>
                        <h2>Events</h2>
                        <div className={styles.eventsVideoCarousel}>
                            {
                                youtubeData.map((item, i) => (
                                    <div key={i} className={styles.eventsVideoCard}>
                                        <iframe width='100%' height='100%' src={item} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading='lazy'></iframe>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className={styles.eventsText} id='contact-us'>
                        <div className={styles.eventsTextBg}>
                            <p>Try Now</p>
                            <h3 >
                                groW YOUR BRAND in africa&apos;s <br />
                                biggest marketS TODAY.
                            </h3>
                            <a href="mailto:brands@mdundo.com">GET IN tOUCH</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className={styles.footer} id="footer">
                <div className={`${styles.footerContainer} widthContainer`}>
                    <div className={styles.footerContentContainer}>

                        <figure>
                            <MdundoDark />
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
                    <p className={styles.footerCopyright}>Copyright © 2022 Mdundo. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Home