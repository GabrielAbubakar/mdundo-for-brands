import React from "react";
import Image from "next/image";
import styles from '../../styles/TabContent.module.scss'


const TabContent = ({ id, activeTab, title, subtitle, content, src1, src2 }) => {
    return (
        activeTab === id ? <div className={styles.tabContent}>
            <div className={styles.tabContentContainer}>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <p>{content}</p>
                <div className={styles.buttonGroup}>
                    <a href="#er">Listen to Ad</a>
                    <a href="#er">See Campaign Results</a>
                </div>
            </div>
            <div className={styles.tabImgContainer}>
                <Image src={src2} alt="" />
                <Image src={src1} alt="" />
            </div>
        </div>
            : null
    );
};

export default TabContent;