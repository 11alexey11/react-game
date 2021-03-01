import React from 'react';
import { connect } from 'react-redux';
import Music from './Music';

class MusicContainer extends React.Component {
    render () {
        return <Music {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    musicValue: state.volumeSettingsPage.musicValue,
    isMusic: state.volumeSettingsPage.isMusic,
});

export default connect(mapStateToProps, null)(MusicContainer);