import React from 'react';
import { connect } from 'react-redux';
import VolumeSettings from './VolumeSettings';
import { changeSoundValue, changeMusicValue, triggerSound, triggerMusic, closeWindow } from '../../../redux/volume-reducer';
import { clickElement } from '../../../redux/app-reducer';

class VolumeSettingsContainer extends React.Component {
    render() {
        return <VolumeSettings {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    soundValue: state.volumeSettingsPage.soundValue,
    musicValue: state.volumeSettingsPage.musicValue,
    isSound: state.volumeSettingsPage.isSound,
    isMusic: state.volumeSettingsPage.isMusic,
    isClosedWindow: state.volumeSettingsPage.isClosedWindow
});

const mapDispatchToProps = (dispatch) => {
    return {
        changeSoundValue: (soundValue) => {
            dispatch(changeSoundValue(soundValue));
        },
        changeMusicValue: (musicValue) => {
            dispatch(changeMusicValue(musicValue));
        },
        triggerSound: (isSound) => {
            dispatch(triggerSound(isSound));
        },
        triggerMusic: (isMusic) => {
            dispatch(triggerMusic(isMusic));
        },
        closeWindow: (isClosedWindow) => {
            dispatch(closeWindow(isClosedWindow));
        },
        clickElement: (volumeClick, isSound) => {
            dispatch(clickElement(volumeClick, isSound));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(VolumeSettingsContainer);