import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
    
    return (
        <section className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footer__copyright}>
                    <span className={styles.footer__text}> &copy; Copyright <strong>Mindblister</strong> 2019</span>
                </div>
            </div>
        </section>
    )
}

export default Footer;