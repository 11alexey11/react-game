import React from 'react';
import { connect } from 'react-redux';
import App from './App';
import { clickElement } from './redux/app-reducer';

class AppContainer extends React.Component {
    render() {
        return <App {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    soundValue: state.volumeSettingsPage.soundValue,
    isSound: state.volumeSettingsPage.isSound,
    isZero: state.gameSettingsPage.isZero,
    isLight: state.gameSettingsPage.isLight,
    isHard: state.gameSettingsPage.isHard,
});

const mapDispatchToProps = (dispatch) => {
    return {
        clickElement: (soundValue, isSound) => {
            dispatch(clickElement(soundValue, isSound));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);