const CHANGE_SOUND_VALUE = 'CHANGE_SOUND_VALUE';
const CHANGE_MUSIC_VALUE = 'CHANGE_MUSIC_VALUE';
const TRIGGER_SOUND = 'TRIGGER_SOUND';
const TRIGGER_MUSIC = 'TRIGGER_MUSIC';
const CLOSE_WINDOW = 'CLOSE_WINDOW';

const initialState = {
    soundValue: '100',
    musicValue: '100',
    isSound: false,
    isMusic: false,
    isClosedWindow: false
};

const volumeReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SOUND_VALUE: {
            return {
                ...state,
                soundValue: action.soundValue
            }
        }
        case CHANGE_MUSIC_VALUE: {
            return {
                ...state,
                musicValue: action.musicValue
            }
        }
        case TRIGGER_SOUND: {
            return {
                ...state,
                isSound: action.isSound
            }
        }
        case TRIGGER_MUSIC: {
            return {
                ...state,
                isMusic: action.isMusic
            }
        }
        case CLOSE_WINDOW: {
            return {
                ...state,
                isClosedWindow: action.isClosedWindow
            }
        }
        default: 
            return state;
    }
}

export const changeSoundValue = (soundValue) => ({type: CHANGE_SOUND_VALUE, soundValue});
export const changeMusicValue = (musicValue) => ({type: CHANGE_MUSIC_VALUE, musicValue});
export const triggerSound = (isSound) => ({type: TRIGGER_SOUND, isSound});
export const triggerMusic = (isMusic) => ({type: TRIGGER_MUSIC, isMusic});
export const closeWindow = (isClosedWindow) => ({type: CLOSE_WINDOW, isClosedWindow});

export default volumeReducer;