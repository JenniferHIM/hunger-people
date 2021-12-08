import React from 'react';
import styles from './Specialties.module.scss';
import chef from '../../images/dessert.png';
import square from '../../images/square.png';

const Specialties = () => {

    return (
        <section className={styles.specialties}>
            <div className={styles.container}>
                <h2 className={styles.specialties__header}>Specialties</h2>
                <div className={styles.specialties__wrapper}>
                     <div className={styles.specialties__imageWrap}>
                        <img src={chef} alt="bonfire" className={styles.specialties__image} />
                        <img src={square} alt="square" className={ styles.specialties__square}/> 
                    </div>
                
                    <div className={styles.specialties__textWrap}>
                        <h3 className={styles.specialties__title}>Chocolate Pancakes</h3>
                        <hr className={ styles.specialties__line }/>
                        <p className={styles.specialties__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna. <br/>
                            <span className={styles.specialties__partText}>
                            Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula.
                            Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem.
                            Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet.
                            </span>
                        </p>
                    </div>  
                </div>
                    
    </div>
    </section>
    )
}

export default Specialties;