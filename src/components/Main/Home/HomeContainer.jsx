import React from 'react';
import { connect } from 'react-redux';
import { clickTurn } from '../../../redux/game-settings-reducer';
import { addStatistic, clickCell, continueGame, setGame, setMinutes, setMoves, setSeconds, showMessage, startNewGame } from '../../../redux/home-reducer';
import Home from './Home';

class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.timerInterval = null;
        this.autoplayInterval = null;
        this.eventAutoplay = null;
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    onCellClick = (event, cells = this.props.cells, clickCell = this.props.clickCell, game = this.props.game, xTurn = this.props.xTurn, showMessage = this.props.showMessage) => {
        if (this.isAllowToClick(event) && this.props.isContinueGame) {
            const cellsCopy = cells.map((item) => this.createNewObject(item, event.target.dataset.id, xTurn));
            const gameCopy = game.map((itemArr) => {
                return itemArr.map((item) => this.createNewObject(item, event.target.dataset.id, xTurn));
            });
            clickCell(cellsCopy, gameCopy);
            this.props.setMoves(this.props.moves + 1);
            this.props.clickTurn(!xTurn);
            const winner = this.defineWinner(gameCopy);
            showMessage(null);
            if (winner.length > 0) {
                this.props.continueGame(false);
                clearInterval(this.timerInterval);
                this.addObjectOfStatistic(winner);
                showMessage(`Winner is ${winner}`);
            }
        } else if (this.props.isContinueGame) {
            showMessage('This cell filled');
        }
    }

    createNewObject(item, id, xTurn) {
        if (item.id.toString() === id) {
            return {
                id: item.id,
                value: xTurn ? 'X' : '0'
            }
        }
        return item;
    }

    defineWinner(gameCopy) {
        for (let i = 0; i < gameCopy.length; i += 1) {
            if (gameCopy[i].every((item) => item.value === 'X')) {
                return 'X';
            }
            if (gameCopy[i].every((item) => item.value === '0')) {
                return '0';
            }
        }
        return gameCopy.every((itemArr) => {
            return itemArr.every((item) => item.value !== null);
        }) ? 'Tie' : '';
    }

    isAllowToClick(event, cells = this.props.cells) {
        return (cells.some((item) => item.id.toString() === event.target.dataset.id && item.value === null));
    }

    addObjectOfStatistic(winner) {
        this.props.addStatistic({ moves: this.props.moves, time: `${this.props.minutes}:${this.props.seconds}`, winner });
    }

    setTimerInterval() {
        this.timerInterval = setInterval(() => {
            if (this.props.seconds >= 60) {
                this.props.setMinutes(this.props.minutes + Math.floor(this.props.seconds / 60));
                this.props.setSeconds(0);
            }
            this.props.setSeconds(this.props.seconds + 1);
        }, 1000);
    }

    setAutoplayInterval() {
        this.autoplayInterval = setInterval(() => this.createComputerMode(), 2000);
    }

    handleKeyPress(event) {
        const elementFocus = event.target;
        if (elementFocus.dataset.id) {
            let min, max = 0;
            const dataId = elementFocus.dataset.id;
            const parentItems = event.target.parentNode.children;
            const numberId = Number(dataId);
            if (numberId >= 1 && numberId <= 3) {
                min = 1;
                max = 3;
            } else if (numberId >= 4 && numberId <= 6) {
                min = 4;
                max = 6;
            } else if (numberId >= 7 && numberId <= 9) {
                min = 7;
                max = 9;
            }
            if (event.key === 'ArrowUp') {
                if (numberId - 4 < 0) {
                    parentItems[9 + (numberId - 4)].focus();
                } else {
                    parentItems[numberId - 4].focus();
                }
            } else if (event.key === 'ArrowDown') {
                if (numberId + 2 > 8) {
                    parentItems[numberId + 2 - 9].focus();
                } else {
                    parentItems[numberId + 2].focus();
                }
            } else if (event.key === 'ArrowLeft') {
                if (numberId - 1 < min) {
                    parentItems[max - 1].focus();
                } else {
                    parentItems[numberId - 2].focus();
                }
            } else if (event.key === 'ArrowRight') {
                if (numberId + 1 > max) {
                    parentItems[min - 1].focus();
                } else {
                    parentItems[numberId].focus();
                }
            } else if (event.key === 'Enter') {
                this.onCellClick(event);
            }
        }
    }

    createComputerMode(event, cells = this.props.cells, clickCell = this.props.clickCell, game = this.props.game, xTurn = this.props.xTurn, showMessage = this.props.showMessage) {
        if (event) {
            this.eventAutoplay = event.target;
            event.target.disabled = true;
        }
        if (this.props.isContinueGame) {
            let randomCell = Math.floor(Math.random() * Math.floor(9)) + 1;
            let isEmptyCell = cells.some((item) => item.id.toString() === randomCell.toString() && item.value === null);
            while (!isEmptyCell) {
                const random = Math.floor(Math.random() * Math.floor(9)) + 1;
                isEmptyCell = cells.some((item) => item.id.toString() === random.toString() && item.value === null);
                if (isEmptyCell) {
                    randomCell = random;
                }
            }
            const cellsCopy = cells.map((item) => this.createNewObject(item, randomCell.toString(), xTurn));
            const gameCopy = game.map((itemArr) => {
                return itemArr.map((item) => this.createNewObject(item, randomCell.toString(), xTurn));
            });
            clickCell(cellsCopy, gameCopy);
            this.props.setMoves(this.props.moves + 1);
            this.props.clickTurn(!xTurn);
            const winner = this.defineWinner(gameCopy);
            showMessage(null);
            if (winner.length > 0) {
                this.props.continueGame(false);
                clearInterval(this.timerInterval);
                clearInterval(this.autoplayInterval);
                this.addObjectOfStatistic(winner);
                showMessage(`Winner is ${winner}`);
                this.eventAutoplay.disabled = false;
            }
        }
    }

    componentDidMount() {
        this.setTimerInterval();
        if (localStorage.getItem('game') === null) {
            const gameState = {
                game: this.props.game,
                xTurn: this.props.xTurn,
                cells: this.props.cells,
                isContinueGame: this.props.isContinueGame,
                minutes: this.props.minutes,
                seconds: this.props.seconds,
                moves: this.props.moves,
                message: this.props.message
            }
            localStorage.setItem('game', JSON.stringify(gameState));
            this.props.setGame(gameState);
        } else {
            this.props.setGame(JSON.parse(localStorage.getItem('game')));
            this.props.clickTurn(JSON.parse(localStorage.getItem('game')).xTurn);
            this.props.showMessage(JSON.parse(localStorage.getItem('game')).message);
        }

        document.querySelector('.Home_field__1xDrW').addEventListener('keyup', (event) => this.handleKeyPress(event));
    }

    componentWillUnmount() {
        clearInterval(this.timerInterval);
        clearInterval(this.autoplayInterval);
        document.querySelector('.Home_field__1xDrW').removeEventListener('keyup', this.handleKeyPress, false);
    }

    componentDidUpdate() {
        const gameState = {
            game: this.props.game,
            xTurn: this.props.xTurn,
            cells: this.props.cells,
            isContinueGame: this.props.isContinueGame,
            minutes: this.props.minutes,
            seconds: this.props.seconds,
            moves: this.props.moves,
            message: this.props.message
        }
        localStorage.setItem('game', JSON.stringify(gameState));
    }

    render() {
        return (
            <Home
                {...this.props}
                onCellClick={this.onCellClick}
                timerInterval={this.timerInterval}
                setTimerInterval={this.setTimerInterval.bind(this)}
                setAutoplayInterval={this.setAutoplayInterval.bind(this)}
                createComputerMode={this.createComputerMode.bind(this)}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    statistic: JSON.parse(localStorage.getItem('statistic')),
    soundValue: state.volumeSettingsPage.soundValue,
    isSound: state.volumeSettingsPage.isSound,
    isLightField: state.gameSettingsPage.isLightField,
    isLightItem: state.gameSettingsPage.isLightItem,
    game: state.homePage.game,
    cells: state.homePage.cells,
    xTurn: state.gameSettingsPage.xTurn,
    message: state.homePage.message,
    isContinueGame: state.homePage.isContinueGame,
    minutes: state.homePage.minutes,
    seconds: state.homePage.seconds,
    moves: state.homePage.moves
});

const mapDispatchToProps = (dispatch) => {
    return {
        startNewGame: (isContinueGame) => {
            dispatch(startNewGame(isContinueGame));
        },
        clickCell: (cells, game) => {
            dispatch(clickCell(cells, game));
        },
        showMessage: (messageError) => {
            dispatch(showMessage(messageError));
        },
        continueGame: (isContinueGame) => {
            dispatch(continueGame(isContinueGame));
        },
        clickTurn: (xTurn) => {
            dispatch(clickTurn(xTurn));
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
        addStatistic: (statistic) => {
            dispatch(addStatistic(statistic));
        },
        setGame: (game) => {
            dispatch(setGame(game));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);