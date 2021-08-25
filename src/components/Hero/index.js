import React from 'react';
import { Facebook, Twitter, Instagram } from '@material-ui/icons';
import styles from './Hero.module.scss';
import logo from '../../images/logo.png';
import icon from '../../images/downBtn.png';

const Hero = () => {

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <img src={logo} alt="logo" className={ styles.hero__logo}/>
                <p className={styles.hero__vertical}>Mon - Fri: 8PM - 10PM, Sat - Sun: 8PM - 3AM</p>
                <div className={ styles.hero__heroContainer }>
                    <h1 className={styles.hero__title}><span className={styles.hero__titleMain}>Restaurant</span>Hungry People</h1>
                    <hr className={ styles.hero__line }/>
                    <div className={styles.hero__buttonWrapper}>
                        <button type="submit" className={ styles.hero__addBtn }>Book table</button>
                        <button type="submit" className={ styles.hero__addBtn }>Explore</button>
                    </div>
                    <button type="button" className={styles.hero__roundBtn}>
                        <img className={styles.hero__downIcon} src={icon} alt="icon" />
                    </button>
                </div>
                <div className={styles.hero__socialBox}>
                    <Facebook className={ styles.hero__socialList } />
                    <Twitter className={ styles.hero__socialList } />
                    <Instagram className={ styles.hero__socialList } />
                </div>
            </div>
        </section>
      
    )
}

export default Hero;