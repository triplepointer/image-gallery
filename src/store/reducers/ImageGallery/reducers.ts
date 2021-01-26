import {FILE_DROP} from './actions'
import {FILE_DRAG_OVER} from './actions'
import {HANDLE_IMAGE_DELETE} from './actions'
import {SET_IMAGES} from  './actions'

const initialState = {
    images: []
};

export const imageGalleryReducer = (state:any = initialState, action:any) => {
    switch(action.type) {
        case SET_IMAGES:
            return {...state, images: action.payload};
        case FILE_DROP:
            return {...state};
        case FILE_DRAG_OVER:
            return {...state};
        case HANDLE_IMAGE_DELETE:
            return {...state};
    }
    return state;
}