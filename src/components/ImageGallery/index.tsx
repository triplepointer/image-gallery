import React from 'react';
import './ImageGallery.scss';
import JustifiedGrid from './../../GridSystem';
import { connect } from 'react-redux';
import { handleImageDelete, onFileDragOverActionCreator, onFileDropActionCreator } from '../../store/reducers/ImageGallery/actions';

function ImageGallery({
  onFileDropActionCreator,
  onFileDragOverActionCreator,
  handleImageDelete,
  images}:any) {
    return (
        <div className="images"
		onDrop={onFileDropActionCreator}
    onDragOver={onFileDragOverActionCreator}
    >
            <JustifiedGrid 
              images={images}
              gutter={1} 
              maxRowHeight={200}>
        {processedImages => {
          return (
            <React.Fragment>
              {processedImages.map((image, index) => {
                const { url, width, height} = image;
                return (
                  <div key={index} style={{display: "inline-flex",justifyContent: "center", alignItems: "center", position: "relative",width: width, height: height}}  >
                    <img className="images__item" src={url} width={width} height={height} alt="" onClick={handleImageDelete}/>
                    <div className="images__text">DELETE</div>
                  </div>
                );
              })}
            </React.Fragment>
          );
        }}
      </JustifiedGrid>
        </div>
    );
}

const mapStateToProps = (state:any) => {
	return {
		images: state.gallery.images
	}
}

const mapDispatchToProps = (dispatch:any) => {
	return {
		onFileDropActionCreator: (event:any) => dispatch(onFileDropActionCreator(event)),
		onFileDragOverActionCreator: (event:any) => dispatch(onFileDragOverActionCreator(event)),
		handleImageDelete: (event:any) => dispatch(handleImageDelete(event))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageGallery);