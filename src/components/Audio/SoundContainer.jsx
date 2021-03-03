import React from 'react';
import { connect } from 'react-redux';
import Sound from './Sound';

class SoundContainer extends React.Component {
    render () {
        return <Sound {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    soundValue: state.volumeSettingsPage.soundValue,
    isSound: state.volumeSettingsPage.isSound,
});

export default connect(mapStateToProps, null)(SoundContainer);