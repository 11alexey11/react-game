const CLICK_TURN = 'CLICK_TURN';
const CLICK_BACKGROUND = 'CLICK_BACKGROUND';
const CLICK_BACKGROUND_ITEM = 'CLICK_BACKGROUND_ITEM'

const initialState = {
    xTurn: true,
    isLightField: false,
    isLightItem: false,
};

const gameSettingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLICK_TURN: {
            return {
                ...state,
                xTurn: action.xTurn
            }
        }
        case CLICK_BACKGROUND: {
            return {
                ...state,
                isLightField: action.isLightField
            }
        }
        case CLICK_BACKGROUND_ITEM: {
            return {
                ...state,
                isLightItem: action.isLightItem
            }
        }
        default: 
            return state;
    }
}

export const clickTurn = (xTurn) => ({type: CLICK_TURN, xTurn});
export const clickBackground = (isLightField) => ({type: CLICK_BACKGROUND, isLightField});
export const clickBackgroundItem = (isLightItem) => ({type: CLICK_BACKGROUND_ITEM, isLightItem});

export default gameSettingsReducer;