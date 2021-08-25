import React from 'react';
import styles from './AboutUs.module.scss';
import about from '../../images/about-img.png';
import square from '../../images/square.png';

const AboutUs = () => {

    return (
    <section className={styles.aboutUs}>
        <div className={styles.container}>
                <div className={styles.aboutUs__textWrap}>
                    <h2 className={styles.aboutUs__title}>About Us</h2>
                    <hr className={ styles.aboutUs__line }/>
                    <p className={styles.aboutUs__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna. <br/>
                        <span className={styles.aboutUs__partText}>
                        Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula.
                        Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem.
                        Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet.
                        </span>
                    </p>
                </div>
                <div className={styles.aboutUs__imageWrap}>
                    <img src={about} alt="bonfire" className={styles.aboutUs__image} />
                    <img src={square} alt="square" className={ styles.aboutUs__square}/> 
                </div>         
        </div>
    </section>     
) 
}

export default AboutUs;