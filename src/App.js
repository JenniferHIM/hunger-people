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
import Gallery from './components/Gallery';
import Direction from './components/Direction';
import Footer from './components/Footer';

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
            <Gallery />
            <Contact />
            <Direction />
            <Footer />
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