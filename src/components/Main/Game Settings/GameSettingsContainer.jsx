import React from 'react';
import { connect } from 'react-redux';
import { clickBackground, clickBackgroundItem, clickTurn } from '../../../redux/game-settings-reducer';
import { setMinutes, setMoves, setSeconds, startNewGame } from '../../../redux/home-reducer';
import GameSettings from './GameSettings';

class GameSettingsContainer extends React.Component {
    render() {
        return <GameSettings {...this.props} />;
    }
}

const mapStateToProps = (state) => ({
    xTurn: state.gameSettingsPage.xTurn,
    isLightField: state.gameSettingsPage.isLightField,
    isLightItem: state.gameSettingsPage.isLightItem,
});

const mapDispatchToProps = (dispatch) => {
    return {
        clickTurn: (xTurn) => {
            dispatch(clickTurn(xTurn));
        },
        clickBackground: (isLightField) => {
            dispatch(clickBackground(isLightField));
        },
        clickBackgroundItem: (isLightItem) => {
            dispatch(clickBackgroundItem(isLightItem));
        },
        startNewGame: (isContinueGame) => {
            dispatch(startNewGame(isContinueGame));
        },
        setMinutes: (minutes) => {
            dispatch(setMinutes(minutes));
        },
        setSeconds: (seconds) => {
            dispatch(setSeconds(seconds));
        },
        setMoves: (moves) => {
            dispatch(setMoves(moves));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GameSettingsContainer);