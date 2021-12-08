import React from 'react';
import styles from './Events.module.scss';
import rings from '../../images/rings.png';
import glasses from '../../images/glasses.png';
import square from '../../images/square.png';
import cx from 'classnames';

const images = [
    { image: rings, content: 'Weddings' },
    { image: glasses, content: 'Corporate Parties' },
];

const Events = () => {

    return (
        <section className={styles.events}>
            <div className={styles.container}>
                <h2 className={styles.events__title}>Private Events</h2>
                <div className={styles.events__wrapper}>
                    {images.map((item, index) => (
                        <div key={item.content}
                            className={cx(styles.events__imageWrap, {
                            [styles.reverse]: index === 1,
                        })}>
                            <img src={item.image} alt="rings" className={styles.events__image} />
                            <img src={square} alt="square" className={styles.events__square} />
                            <div key={ index} className={cx(styles.events__content, {[styles.reverse]: index === 1,})}>
                                {item.content}
                            </div>
                        </div>
                    ))}
                </div>
                 <div className={styles.events__sceduleWrap}>
                    <p className={styles.events__schedule}>For private events please call: <strong>+40 729 131 637/+40 726 458 782</strong> or use the contact form.</p>
                </div> 
            </div>
       </section>
   ) 
}

export default Events;