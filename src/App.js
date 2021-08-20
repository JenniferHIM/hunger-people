import { Suspense } from 'react';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Team from './components/Team';
import Table from './components/Table';
import Specialties from './components/Specialties';
import Menu from './components/Menu';
import Events from './components/Events';
import Contact from './components/Contact';

import Loader from 'react-loader-spinner';
import styles from './App.module.scss';

const App = () => {
    return (
        <div className={styles.App}>
            <Navigation />
            <Hero />
            <AboutUs />
            <Team />
            <Table />
            <Specialties />
            <Menu />
            <Events />
            <Contact />
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