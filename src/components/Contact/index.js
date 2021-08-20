import React from 'react';
import styles from './Contact.module.scss';
import cx from 'classnames';

const Contact = () => {

    return (
        <section className={styles.contact}>
            <div className={styles.container}>
                <div className={styles.contact__textWrap}>
                    <h2 className={styles.contact__title}>CONTACT</h2>
                    <hr className={styles.contact__line} />
                    <p className={styles.contact__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.</p>
                </div>
                <div className={styles.contact__formWrap}>
                    <form className={styles.contact__form}>
                        <input className={styles.contact__input} type="text" name="name" placeholder="Name"/>
                        <input className={styles.contact__input} type="text" name="email" placeholder="Email"/>
                        <input className={styles.contact__input} type="tel" name="phone" placeholder="Phone" />
                        <input className={cx((styles.contact__input), (styles.contact__inputPart))} type="text" name="message" placeholder="Message" />
                    </form>
                    <label className={styles.contact__label}>5th London Boulevard, U.K.  +40 729 131 637/+40 726 458 782  office@mindblister.com</label>
                    <button className={styles.contact__button} type="sumbit">SEND MESSAGE</button>
                </div>
            </div>
        </section>
    )
}

export default Contact;