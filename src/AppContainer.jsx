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
    volumeClick: state.volumeSettingsPage.soundValue,
    isSound: state.volumeSettingsPage.isSound,
});

const mapDispatchToProps = (dispatch) => {
    return {
        clickElement: (volumeClick) => {
            dispatch(clickElement(volumeClick));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);