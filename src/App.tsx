import React, {useEffect} from 'react';
import './App.scss';
import Form from './components/Form';
import ImageGallery from './components/ImageGallery';
import {connect} from 'react-redux';
import {setImagesActionCreator} from './store/reducers/Form/actions'

function App({setImagesActionCreator}:any) {

  function getCallback(setImagesActionCreator:any) {
    setImagesActionCreator(JSON.parse(localStorage.getItem('images')!));
  }

  useEffect(():void => {
    if(localStorage.getItem('images') !== null)
      getCallback(setImagesActionCreator);
  }, [localStorage.getItem('images')])

  return (
    <div className="App">
      <Form />
      <ImageGallery />
    </div>
  );
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    setImagesActionCreator: (images:any) => dispatch(setImagesActionCreator(images))
  }
}

export default connect(null, mapDispatchToProps)(App);
