import React from 'react';
import { Facebook, Twitter, Instagram } from '@material-ui/icons';
import styles from './Hero.module.scss';
import logo from '../../images/logo.png';
// import { ReactComponent as TableIcon } from '../../images/sprite.svg';

const Hero = () => {

    return (
        <div className={styles.container}>
            <img src={logo} alt="logo" className={ styles.logo}/>
            <p className={styles.vertical}>Mon - Fri: 8PM - 10PM, Sat - Sun: 8PM - 3AM</p>
            <div className={ styles.heroContainer }>
                <h1 className={styles.title}><span className={styles.titleMain}>Restaurant</span>Hungry People</h1>
                <hr className={ styles.line }/>
                <div className={styles.buttonWrapper}>
                    <button type="submit" className={ styles.addBtn }>Book table</button>
                    <button type="submit" className={ styles.addBtn }>Explore</button>
                </div>
                <button type="button" className={styles.roundBtn}><img className={styles.downIcon} href="./images/sprite.svg" alt=""/></button>
            </div>
            
           

            <div className={styles.socialBox}>
                <Facebook className={ styles.socialList } />
                <Twitter className={ styles.socialList } />
                <Instagram className={ styles.socialList } />
            </div>

        </div>
    )
}

export default Hero;