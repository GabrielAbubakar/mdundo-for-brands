import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from '../../styles/TabContent.module.scss'
import AudioPlayer from "../AudioPlayer/AudioPlayer";


const TabContent = ({ id, activeTab, title, subtitle, content, src1, src2, audio }) => {
    return (
        activeTab === id ? <div className={styles.tabContent}>
            <div className={styles.tabContentContainer}>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <p>{content}</p>
            </div>

            <div>
                <div className={styles.tabAudioGroup}>
                    <h4>Listen to Audio Ad</h4>
                    <AudioPlayer audioLink={audio} />
                    <Link href='#'>
                        <a>See Campaign Results</a>
                    </Link>
                </div>
            </div>

        </div>
            : null
    );
};

export default TabContent;