import { Suspense } from 'react';

import Navigation from './components/Navigation';
import Loader from 'react-loader-spinner';
import styles from './App.module.css';


const App = () => {
    return (
        <div className={styles.App}>
          
            <Navigation />

            <Suspense
                fallback={
                    <Loader type="Circles" color="#00BFFF" height={80} width={80} />
                }
            >
                {/* <Switch>
                    <Route path="/movies" exact>
                        <MoviesView />
                    </Route>
                  
                    <Route path="/">
                        <HomeView />
                    </Route>
                </Switch> */}
            </Suspense>
        </div>
    );
};

export default App;