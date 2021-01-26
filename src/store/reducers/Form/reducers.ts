import {ADD_DATA} from './actions'
import {SET_URL} from './actions'

const initialState = {
    url: '',
}

export const formReducer = (state:any = initialState, action:any) => {
    switch(action.type) {
        case ADD_DATA:
            return {...state};
        case SET_URL:
            return {...state, url: action.payload};
    }
    return state;
}