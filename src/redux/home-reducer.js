const START_NEW_GAME = 'START_NEW_GAME';
const CLICK_CELL = 'CLICK_CELL';
const SHOW_MESSAGE = 'SHOW_MESSAGE';
const CONTINUE_GAME = 'CONTINUE_GAME';
const SET_MINUTES = 'SET_MINUTES';
const SET_SECONDS = 'SET_SECONDS';
const SET_MOVES = 'SET_MOVES';
const ADD_STATISTIC = 'ADD_STATISTIC';
const SET_GAME = 'SET_GAME';

const initialState = {
    game: [
        [{ id: 1, value: null }, { id: 2, value: null }, { id: 3, value: null }],
        [{ id: 4, value: null }, { id: 5, value: null }, { id: 6, value: null }],
        [{ id: 7, value: null }, { id: 8, value: null }, { id: 9, value: null }],
        [{ id: 1, value: null }, { id: 4, value: null }, { id: 7, value: null }],
        [{ id: 2, value: null }, { id: 5, value: null }, { id: 8, value: null }],
        [{ id: 3, value: null }, { id: 6, value: null }, { id: 9, value: null }],
        [{ id: 1, value: null }, { id: 5, value: null }, { id: 9, value: null }],
        [{ id: 3, value: null }, { id: 5, value: null }, { id: 7, value: null }],
    ],
    cells: [ 
        {id: 1, value: null},
        {id: 2, value: null}, 
        {id: 3, value: null}, 
        {id: 4, value: null}, 
        {id: 5, value: null}, 
        {id: 6, value: null}, 
        {id: 7, value: null}, 
        {id: 8, value: null}, 
        {id: 9, value: null}
    ],
    xTurn: true,
    message: null,
    isContinueGame: true,
    minutes: 0,
    seconds: 0,
    moves: 0,
    statistic: [],
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_NEW_GAME: {
            const newGameCopy = [
                [{id: 1, value: null}, {id: 2, value: null}, {id: 3, value: null}],
                [{id: 4, value: null}, {id: 5, value: null}, {id: 6, value: null}],
                [{id: 7, value: null}, {id: 8, value: null}, {id: 9, value: null}],
                [{id: 1, value: null}, {id: 4, value: null}, {id: 7, value: null}],
                [{id: 2, value: null}, {id: 5, value: null}, {id: 8, value: null}],
                [{id: 3, value: null}, {id: 6, value: null}, {id: 9, value: null}],
                [{id: 1, value: null}, {id: 5, value: null}, {id: 9, value: null}],
                [{id: 3, value: null}, {id: 5, value: null}, {id: 7, value: null}],
            ];

            const newCellsCopy = [ 
                {id: 1, value: null},
                {id: 2, value: null}, 
                {id: 3, value: null}, 
                {id: 4, value: null}, 
                {id: 5, value: null}, 
                {id: 6, value: null}, 
                {id: 7, value: null}, 
                {id: 8, value: null}, 
                {id: 9, value: null}
            ];

            return {
                ...state,
                game: newGameCopy,
                cells: newCellsCopy,
                isContinueGame: action.isContinueGame
            }
        }
        case CLICK_CELL: {
            return {
                ...state,
                cells: action.cells,
                xTurn: action.xTurn,
                game: action.game,
            }
        }
        case SHOW_MESSAGE: {
            return {
                ...state,
                message: action.message
            }
        }
        case CONTINUE_GAME: {
            return {
                ...state,
                isContinueGame: action.isContinueGame
            }
        }
        case SET_MINUTES: {
            return {
                ...state,
                minutes: action.minutes
            }
        }
        case SET_SECONDS: {
            return {
                ...state,
                seconds: action.seconds
            }
        }
        case SET_MOVES: {
            return {
                ...state,
                moves: action.moves
            }
        }
        case ADD_STATISTIC: {
            const statisticCopy = [...state.statistic, action.statistic];
            if (statisticCopy.length > 10) {
                statisticCopy.length = 10;
            }
            return {
                ...state,
                statistic: statisticCopy
            }
        }
        case SET_GAME: {
            return {
                ...state,
                game: action.game.game,
                cells: action.game.cells,
                isContinueGame: action.game.isContinueGame,
                minutes: action.game.minutes,
                seconds: action.game.seconds,
                moves: action.game.moves,
            }
        }
        default: 
            return state;
    }
}

export const startNewGame = (isContinueGame) => ({type: START_NEW_GAME, isContinueGame});
export const clickCell = (cells, game) => ({type: CLICK_CELL, cells, game});
export const showMessage = (message) => ({type: SHOW_MESSAGE, message});
export const continueGame = (isContinueGame) => ({type: CONTINUE_GAME, isContinueGame});
export const setMinutes = (minutes) => ({type: SET_MINUTES, minutes});
export const setSeconds = (seconds) => ({type: SET_SECONDS, seconds});
export const setMoves = (moves) => ({type: SET_MOVES, moves});
export const addStatistic = (statistic) => ({type: ADD_STATISTIC, statistic});
export const setGame = (game) => ({type: SET_GAME, game});

export default homeReducer;