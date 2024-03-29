import React, { useState } from "react";
import TabNavItem from "./TabNavItem";
import TabContent from "./TabContent";
import styles from '../../styles/Tabs.module.scss'
import VodaColor from "../Icons/VodaColor";
import ChromeColor from "../Icons/ChromeColor";
import NiveaColor from "../Icons/NiveaColor"
// const pokemon = require("../../public/assets/audio/Voda.mp3");
// import VodaAud from "../../public/assets/audio/Voda.mp3"



const Tabs = () => {

    // const audioTune = new Audio('../../public/assets/audio/Voda.mp3');


    const [activeTab, setActiveTab] = useState("tab1");

    return (
        <div className={styles.userBrands}>
            <p>See our audio ads in action for these brands</p>
            <ul className={`${styles.brandsNav} widthContainer`}>
                <TabNavItem id="tab1" activeTab={activeTab} setActiveTab={setActiveTab} src={<VodaColor />} />
                <TabNavItem id="tab2" activeTab={activeTab} setActiveTab={setActiveTab} src={<NiveaColor />} />
                <TabNavItem id="tab3" activeTab={activeTab} setActiveTab={setActiveTab} src={<ChromeColor />} />
            </ul>

            <div className={`${styles.brandsDetails} widthContainer`}>

                <TabContent id="tab1"
                    activeTab={activeTab}
                    title='Vodacom TZ'
                    subtitle='Voda Bima Campaign'
                    content="In Q2 of 2021, Vodacom Tanzania launched ‘Voda Bima,’ a service that allows customers to access insurance products through their M-PESA app for the first time. Vodacom briefed Mdundo.com to increase awareness of the service as well as drive subscriptions among its users in Tanzania."
                    audio='https://mdundo.com/widget_song/2081730'
                    article='https://joseph04163.wixsite.com/my-site-1/post/copy-of-how-mdundo-com-increased-nivea-s-customer-favorability-by-44'
                />



                <TabContent id="tab2"
                    activeTab={activeTab}
                    title='Nivea'
                    subtitle='NIVEA HARMATTAN CAMPAIGN'
                    content="Leading global personal care brand, Nivea ran the “NIVEA Harmattan” campaign on Mdundo in December 2021, targeted at our users in Nigeria. The campaign resulted in a 44% increase in the brand's favourability."
                    audio='https://mdundo.com/widget_song/2081729'
                    article='https://joseph04163.wixsite.com/my-site-1/post/how-mdundo-com-increased-nivea-s-customer-favorability-by-44'
                />

                <TabContent id="tab3"
                    activeTab={activeTab}
                    title='Chrome Gin'
                    subtitle='AWARENESS CAMPAIGN'
                    content="Following the launch of Chrome Gin, the team at Saracen OMD, briefed Mdundo to increase awareness of the brand among Mdundo users in Kenya."
                    audio='https://mdundo.com/widget_song/2081728'
                    article='https://joseph04163.wixsite.com/my-site-1/post/how-mdundo-com-increased-chrome-gin-awareness-by-41'
                />
            </div>


        </div>
    );
};

export default Tabs;