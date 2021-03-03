import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './GameSettings.module.css';

const GameSettings = (props) => {
    console.log(props);
    return (
        <div className={styles.gameSettingsContainer}>
            <div className={styles.title}>
                <h3>Game Settings</h3>
            </div>
            <div className={styles.settingsItem}>
                <h4>Turn Order</h4>
                <input
                    type="radio"
                    onChange={() => {
                        props.clickTurn(!props.xTurn);
                        props.startNewGame(true);
                        props.setMinutes(0);
                        props.setSeconds(0);
                        props.setMoves(0);
                        localStorage.removeItem('game');
                    }}
                    checked={props.xTurn} name="turn" /> X
                <input 
                    type="radio" 
                    onChange={ () => {
                        props.clickTurn(!props.xTurn);
                        props.startNewGame(true);
                        props.setMinutes(0);
                        props.setSeconds(0);
                        props.setMoves(0);
                        localStorage.removeItem('game');
                    } } 
                    checked={!props.xTurn} 
                    name="turn" /> 0
            </div>

            <div className={styles.settingsItem}>
                <h4>Field Background</h4>
                <input type="radio" onChange={ () => props.clickBackground(!props.isLightField) } checked={!props.isLightField} name="background" /> Dark
                <input type="radio" onChange={ () => props.clickBackground(!props.isLightField) } checked={props.isLightField} name="background" /> Light
            </div>

            <div className={styles.settingsItem}>
                <h4>Field Item Background</h4>
                <input type="radio" onChange={ () => props.clickBackgroundItem(!props.isLightItem) } checked={!props.isLightItem} name="item" /> Dark
                <input type="radio" onChange={ () => props.clickBackgroundItem(!props.isLightItem) } checked={props.isLightItem} name="item" /> Light
            </div>

            <div className={styles.btnClose}>
                <NavLink onClick={ () => props.clickElement(props.soundValue, props.isSound) } to="/home" className={'material-icons ' + styles.icon.toString()}>close</NavLink>
            </div>
        </div>
    );
}

export default GameSettings;