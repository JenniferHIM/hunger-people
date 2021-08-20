import React from 'react';
import styles from './Direction.module.scss';

const Direction = () => {

    return (
        <section className={styles.direction}>
            <div className={styles.container}>
                <img className={styles.direction__map} src="" alt="map"></img>
            </div>
        </section>
    )
}

export default Direction;