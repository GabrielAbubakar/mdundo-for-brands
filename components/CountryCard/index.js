import styles from '../../styles/CountryCard.module.scss';
import Image from 'next/image'


const CountryCard = ({ name, flag, stat }) => {
    return (
        <div className={styles.statisticsCountriesBox}>
            <div>
                <Image src={flag} alt='nigerian Flag' />
                <h4>{name}</h4>
            </div>
            <h3>{stat}M</h3>
            <p>Annual Users</p>
        </div>
    )
}

export default CountryCard