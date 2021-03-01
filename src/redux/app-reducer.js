import click from '../assets/click.mp3';

const CLICK_ELEMENT = 'CLICK_ELEMENT';

const initialState = {
    volumeClick: '100',
    isSound: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLICK_ELEMENT: {
            if (!action.isSound) {
                const audio = new Audio(click);
                audio.volume = Number(action.volumeClick) / 100;
                audio.play();
            }
            return {
                ...state,
                volumeClick: action.volumeClick,
                isSound: action.isSound
            }
        }
        default:
            return state;
    }
}

export const clickElement = (volumeClick, isSound) => ({type: CLICK_ELEMENT, volumeClick, isSound});

export default appReducer;