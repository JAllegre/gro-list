import {Action} from 'redux'
import {UPDATE_ITEMS_DATA} from './actions'
import {GroState, GroAction} from "./index";


const initialState: GroState = {
    GroList: []
}

function reducer(state: GroState = initialState, action: GroAction) {
    switch (action.type) {
        case UPDATE_ITEMS_DATA:
            const newState = {...state};
            newState.GroList = [...action.payload.GroList]
            return newState;
        default:
            return state;
    }
}

export default reducer;