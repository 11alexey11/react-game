import React from 'react';
import { Route } from 'react-router-dom';
import GameSettingsContainer from './Game Settings/GameSettingsContainer';
import HomeContainer from './Home/HomeContainer';
import ListHotKeys from './ListHotKeys';
import styles from './Main.module.css';
import StatisticContainer from './Statistic/StatisticContainer';
import VolumeSettingsContainer from './Volume Settings/VolumeSettingsContainer';

const Main = (props) => {
    return (
        <main className={styles.main}>
            <Route exact path='/list' render={() => <ListHotKeys />} />
            <Route path='/home'
                render={() => <HomeContainer clickElement={props.clickElement} />} />

            <Route path='/volume'
                render={() => <VolumeSettingsContainer clickElement={props.clickElement} />} />

            <Route path='/game'
                render={() => <GameSettingsContainer isSound={props.isSound} soundValue={props.soundValue} clickElement={props.clickElement} />} />

            <Route path='/statistic'
                render={() => <StatisticContainer />} />
        </main>
    );
}

export default Main;