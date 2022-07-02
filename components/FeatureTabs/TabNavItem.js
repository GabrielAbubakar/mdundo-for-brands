import React from "react";
import styles from '../../styles/Tabs.module.scss'


const TabNavItem = ({ id, title, activeTab, setActiveTab, src, }) => {

    const handleClick = () => {
        if (id !== activeTab) {
            setActiveTab(id);

        }
    };

    return (
        <li onClick={handleClick} className={activeTab === id ? styles.active : ""}>
            {src}
        </li>
    );
};
export default TabNavItem;