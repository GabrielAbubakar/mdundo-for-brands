import React, { useState } from "react";
import TabNavItem from "./TabNavItem";
import TabContent from "./TabContent";
import Voda from "../../public/assets/images/vodacom.svg"
import Chrome from "../../public/assets/images/chrome1.svg"
import Nivea from "../../public/assets/images/nivea.svg"
import VodaPosterLg from "../../public/assets/images/VodacomBig.png"
import VodaPosterSm from "../../public/assets/images/VodacomSmall.png"
import styles from '../../styles/Tabs.module.scss'

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    return (
        <div className={styles.userBrands}>
            <p>See our audio ads in action for these brands</p>
            <ul className={styles.brandsNav}>
                <TabNavItem id="tab1" activeTab={activeTab} setActiveTab={setActiveTab} src={Voda} />
                <TabNavItem id="tab2" activeTab={activeTab} setActiveTab={setActiveTab} src={Nivea} />
                <TabNavItem id="tab3" activeTab={activeTab} setActiveTab={setActiveTab} src={Chrome} />
            </ul>

            <div className={styles.brandDetails}>

                <TabContent id="tab1"
                    activeTab={activeTab}
                    title='Vodacom TZ'
                    subtitle='Voda Bima Campaign'
                    content="In Q2 of 2021, Vodacom Tanzania launched ‘Voda Bima,’ a service that allows customers to access insurance products through their M-PESA app for the first time. Vodacom briefed Mdundo.com to increase awareness of the service as well as drive subscriptions among its users in Tanzania."
                    src1={VodaPosterLg}
                    src2={VodaPosterSm}
                    audio='https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
                />

                <TabContent id="tab2"
                    activeTab={activeTab}
                    title='Nivea'
                    subtitle='NIVEA HARMATTAN CAMPAIGN'
                    content="Leading global personal care brand, Nivea ran the “NIVEA Harmattan” campaign on Mdundo in December 2021, targeted at our users in Nigeria. The campaign resulted in a 44% increase in the brand's favourability."
                    src1={VodaPosterLg}
                    src2={VodaPosterSm}
                    audio='https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
                />

                <TabContent id="tab3"
                    activeTab={activeTab}
                    title='Chrome Gin'
                    subtitle='AWARENESS CAMPAIGN'
                    content="Following the launch of Chrome Gin, the team at Saracen OMD, briefed Mdundo to increase awareness of the brand among Mdundo users in Kenya."
                    src1={VodaPosterLg}
                    src2={VodaPosterSm}
                    audio='https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
                />
            </div>


        </div>
    );
};

export default Tabs;