import React from 'react';
import styles from './Table.module.scss';
import time from '../../images/time.png';
import square from '../../images/square.png';

const Table = () => {
    return (
        <section className={styles.table}>
            <div className={styles.container}>
                <div className={styles.table__textWrap}>
                    <h2 className={styles.table__title}>Book A Table</h2>
                    <hr className={ styles.table__line }/>
                    <form className={styles.table__form}>
                        <input className={styles.table__input} type="text" name="name" placeholder="Name"/>
                        <input className={styles.table__input} type="text" name="email" placeholder="Email"/>
                        <input className={styles.table__input} type="tel" name="phone" placeholder="Phone" />
                        <input className={styles.table__input} type="number" name="quantity" placeholder="People" />
                        <input className={styles.table__input} type="date" name="date" placeholder="Date(mm/dd)" />
                        <input className={styles.table__input} type="time" name="time" placeholder="Time"/>
                    </form>
                      <button className={styles.table__button} type="sumbit">Book now</button>
                </div>
                <div className={styles.table__imageWrap}>
                    <img src={time} alt="bonfire" className={styles.table__image} />
                    <img src={square} alt="square" className={ styles.table__square}/> 
                </div>
                <div className={styles.table__sceduleWrap}>
                    <p className={styles.table__schedule}>Mon - Fri: <strong>8PM - 10PM</strong>, Sat - Sun: <strong>8PM - 3AM</strong>, Phone: <strong>+40 729 131 637/+40 726 458 782</strong></p>
                </div>
            </div>
              
        </section>
       
    )
}

export default Table;