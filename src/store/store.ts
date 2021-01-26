import {applyMiddleware, combineReducers, createStore} from 'redux';
import { formReducer } from './reducers/Form/reducers';
import { imageGalleryReducer } from './reducers/ImageGallery/reducers';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    form: formReducer,
    gallery: imageGalleryReducer});

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(ReduxThunk)));