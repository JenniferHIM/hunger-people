import {NavLink} from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {

    return (
        <div className={styles.container}>
            <nav className={styles.navigation}>
                <NavLink exact to="/" className={styles.link} activeClassName={styles.activeLink}>
                    Home
                </NavLink>
                <NavLink to="/about" className={styles.link} activeClassName={styles.activeLink}>
                    About
                </NavLink>
                <NavLink to="/team" className={styles.link} activeClassName={styles.activeLink}>
                    Team
                </NavLink>
                <NavLink to="/booking" className={styles.link} activeClassName={styles.activeLink}>
                    Booking
                </NavLink>
                <NavLink to="/menu" className={styles.link} activeClassName={styles.activeLink}>
                    Menu
                </NavLink>
                <NavLink to="/galerie" className={styles.link} activeClassName={styles.activeLink}>
                    Galerie
                </NavLink>
                <NavLink to="/event" className={styles.link} activeClassName={styles.activeLink}>
                    Event
                </NavLink>
                <NavLink to="/contact" className={styles.link} activeClassName={styles.activeLink}>
                    Contact
                </NavLink>
            </nav>

           

        </div>
    );
};

export default Navigation;