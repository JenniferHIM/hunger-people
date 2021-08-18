import React from 'react';
import styles from './Events.module.scss';
import rings from '../../images/rings.png';
import glasses from '../../images/glasses.png';
import square from '../../images/square.png';

const Events = () => {

    return (
        <section className={styles.events}>
            <div className={styles.container}>
                <h2 className={styles.events__title}>Private Events</h2>
                <div className={styles.events__wrapper}>
                    <div className={styles.events__imageWrap1}>
                        <img src={rings} alt="rings" className={styles.events__image1} />
                        <img src={square} alt="square" className={ styles.events__square1}/> 
                    </div>

                    <div className={styles.events__imageWrap2}>
                        <img src={glasses} alt="glasses" className={styles.events__image2} />
                        <img src={square} alt="square" className={ styles.events__square2}/> 
                    </div>
                </div>
                 <div className={styles.events__sceduleWrap}>
                    <p className={styles.events__schedule}>For private events please call: <strong>+40 729 131 637/+40 726 458 782</strong> or use the contact form.</p>
                </div> 
            </div>
       </section>
   ) 
}

export default Events;