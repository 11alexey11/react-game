import click from '../assets/click.mp3';

const CLICK_ELEMENT = 'CLICK_ELEMENT';

const initialState = {
    // statistic: JSON.parse(localStorage.getItem('statistic')),
    soundValue: '100',
    isSound: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLICK_ELEMENT: {
            if (!action.isSound) {
                const audio = new Audio(click);
                audio.volume = Number(action.soundValue) / 100;
                audio.play();
            }
            return {
                ...state,
                soundValue: action.soundValue,
                isSound: action.isSound
            }
        }
        default:
            return state;
    }
}

export const clickElement = (soundValue, isSound) => ({type: CLICK_ELEMENT, soundValue, isSound});

export default appReducer;