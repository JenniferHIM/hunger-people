import React from 'react';
import styles from './Team.module.scss';
import chef from '../../images/chef.png';
import square from '../../images/square.png';

const Team = () => {

    return (
        <section className={styles.team}>
            <div className={styles.container}>
                <div className={styles.team__imageWrap}>
                    <img src={chef} alt="bonfire" className={styles.team__image} />
                    <img src={square} alt="square" className={ styles.team__square}/> 
                </div>
               
                <div className={styles.team__textWrap}>
                    <h3 className={styles.team__title}>MASTER CHEF</h3>
                    <hr className={ styles.team__line }/>
                    <p className={styles.team__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna. <br/>
                        <span className={styles.team__partText}>
                        Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula.
                        Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem.
                        Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet.
                        </span>
                    </p>
                </div>       
    </div>
    </section>
    )
}

export default Team;