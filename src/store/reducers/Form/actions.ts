export const ADD_DATA = "ADD_DATA";
export const SET_IMAGES = "SET_IMAGES";
export const SET_URL = "SET_URL";

export const setImagesActionCreator = (images:Array<object>) => (
    {
        type: SET_IMAGES,
        payload: images
    }
)

export const setUrlActionCreator = (url: any) => (
    {
        type: SET_URL,
        payload: url
    }
)

export const addDataActionCreator = (e:any) => async  (dispatch:any, getState:any) => {
    e.preventDefault();
    dispatch({type: ADD_DATA});
    const {url} = getState().form;
    const response = await fetch(url);
    const _images = await response.json();

    localStorage.setItem('images', JSON.stringify(_images.galleryImages))
    dispatch(setImagesActionCreator(_images.galleryImages));
  }

  export {}