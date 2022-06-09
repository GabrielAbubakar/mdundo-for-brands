import React from "react";
import Image from "next/image";
import styles from '../../styles/Tabs.module.scss'


const TabNavItem = ({ id, title, activeTab, setActiveTab, src }) => {

    const handleClick = () => {
        if (id !== activeTab) {
            setActiveTab(id);

        } else {
            setActiveTab('')
        }
    };

    return (
        <li onClick={handleClick} className={activeTab === id ? styles.active : ""}>
            <Image src={src} alt={title} />
        </li>
    );
};
export default TabNavItem;