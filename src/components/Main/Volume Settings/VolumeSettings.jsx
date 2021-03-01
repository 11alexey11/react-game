import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './VolumeSettings.module.css';

const VolumeSettings = (props) => {
    const onButtonSoundClick = (volumeClick = props.soundValue, triggerSound = props.triggerSound, clickElement = props.clickElement) => {
        clickElement(volumeClick, props.isSound);
        triggerSound(!props.isSound);
    }

    const onButtonMusicClick = (volumeClick = props.soundValue, triggerMusic = props.triggerMusic, clickElement = props.clickElement) => {
        clickElement(volumeClick, props.isSound);
        triggerMusic(!props.isMusic);
    }
    
    return (
        <div className={styles.volumeContainer}>
            <div className={styles.title}>
                <h3>Volume Settings</h3>
            </div>
            <div className={styles.soundContainer}>
                <label htmlFor="sound">Sound</label>
                <input id='sound' type="range" onChange={ (event) => props.changeSoundValue(event.target.value) } value={props.soundValue} />
                <span className={styles.volume}>{props.soundValue}</span>
            </div>
            <div className={styles.musicContainer}>
                <label htmlFor="music">Music</label>
                <input id='music' type="range" onChange={ (event) => props.changeMusicValue(event.target.value) } value={props.musicValue} />
                <span className={styles.volume}>{props.musicValue}</span>
            </div>
            <div className={styles.onOff}>
                <button onClick={ () => onButtonSoundClick() } className={'material-icons ' + styles.btnTrigger.toString()}>{props.isSound ? 'music_off' : 'music_note'}</button>
                <button onClick={ () => onButtonMusicClick() } className={'material-icons ' + styles.btnTrigger.toString()}>{props.isMusic ? 'volume_off' : 'volume_up'}</button>
            </div>
            <div className={styles.btnClose}>
                <NavLink onClick={ () => props.clickElement(props.soundValue, props.isSound ) } to="/" className={'material-icons ' + styles.icon.toString()}>close</NavLink>
            </div>
        </div>
    );
}

export default VolumeSettings;