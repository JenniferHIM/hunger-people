import { Suspense } from 'react';

import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import AboutUs from './components/AboutUs/AboutUs';
import Loader from 'react-loader-spinner';
import styles from './App.module.scss';

const App = () => {
    return (
        <div className={styles.App}>
            <Navigation />
            <Hero />
            <AboutUs />
            <Suspense
                fallback={
                    <Loader type="Circles" color="#00BFFF" height={80} width={80} />
                }
            >
            </Suspense>
        </div>
    );
};

export default App;