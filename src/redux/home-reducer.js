const SHOW_HOME = 'SHOW_HOME';

const initialState = {
    isHome: true
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_HOME: {
            return {
                ...state,
                isHome: action.isHome
            }
        }
        default: 
            return state;
    }
}

export const showHomeActionCreator = (isHome) => ({type: SHOW_HOME, isHome});

export default homeReducer;