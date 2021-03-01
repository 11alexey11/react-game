import React from 'react';
import { Route } from 'react-router-dom';
import styles from './Main.module.css';
import VolumeSettingsContainer from './Volume Settings/VolumeSettingsContainer';

const Main = () => {
    return (
        <main className={styles.main}>
            <Route path='/home'
                render={() => <div>Home</div>} />

            <Route path='/volume'
                render={() => <VolumeSettingsContainer />} />

            <Route path='/game'
                render={() => <div>Game</div>} />

            <Route path='/statistic'
                render={() => <div>Statistic</div>} />
        </main>
    );
}

export default Main;