import React from 'react';
import styles from './Gallery.module.scss';
import mazzo from '../../images/mazzo.png';
import bonfire from '../../images/bonfire.png';
import table from '../../images/table.png';
import restaurant from '../../images/restaurant.png';
import cx from 'classnames';

const images = [
    { image: mazzo },
    { image: bonfire },
    { image: table },
    { image: restaurant }
    
]

const Gallery = () => {

    return (
        <section className={styles.gallery}>
            <div className={styles.container}>
                  <div className={styles.gallery__wrapper}>
                    {images.map((item, index) => (
                            // className={cx(styles.events__imageWrap, {
                        <img key={ index } src={item.image} alt="rings" className={cx(styles.gallery__image)} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Gallery;