import React from 'react';
import styles from './Direction.module.scss';
import direction from '../../images/map.png';

const Direction = () => {

    return (
        <section className={styles.direction}>
            <div className={styles.container}>
                <img className={styles.direction__map} src={direction} alt="map"></img>
            </div>
        </section>
    )
}

export default Direction;