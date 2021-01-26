export const SET_IMAGES = "SET_IMAGES"
export const FILE_DROP = "FILE_DROP"
export const FILE_DRAG_OVER = "FILE_DRAG_OVER"
export const HANDLE_IMAGE_DELETE = "HANDLE_IMAGE_DELETE"

interface Image {
    width: number,
    height: number
}

export const setImagesActionCreator = (images:Array<object>) => (
    {
        type: SET_IMAGES,
        payload: images
    }
)

export const onFileDropActionCreator = (e:any) => (dispatch:any,getState:any) => {
    e.preventDefault();
    dispatch({type: FILE_DROP});
    const {images} = getState().gallery;
    const _images = [...images];
    const data = [...e.dataTransfer.files][0];
    let reader = new FileReader();
    reader.readAsDataURL(data);
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const _img:Image = {
          width: img.width,
          height: img.height
        }
        _images.push(Object.assign({url: reader.result}, _img))
        localStorage.setItem('images', JSON.stringify(_images))
        dispatch(setImagesActionCreator(_images));
      };
      img.src = reader.result as string;
    }
  }

export const onFileDragOverActionCreator = (e:any) => (dispatch:any) => {
    e.preventDefault();
    dispatch({type: FILE_DRAG_OVER});
}

export const handleImageDelete = (e:any) => (dispatch:any,getState:any) => {
    dispatch({type: HANDLE_IMAGE_DELETE});
    const imgSrc = e.target.src;
    const {images} = getState().gallery;
    const _images = images.filter((img:any) => img.url !== imgSrc );
    dispatch(setImagesActionCreator(_images));
    _images.length === 0 && localStorage.clear();
    localStorage.setItem('images', JSON.stringify(_images));
  }

  export {}