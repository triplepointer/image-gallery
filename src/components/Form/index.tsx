import React from 'react';
import './Form.scss';
import {connect} from 'react-redux';
import {setUrlActionCreator, addDataActionCreator} from '../../store/reducers/Form/actions';

function Form({url, setUrlActionCreator, addDataActionCreator}:any) {
    return (
        <form className="form" onSubmit={addDataActionCreator}>
            <input className="form__input" type="url" value={url} required onChange={setUrlActionCreator}/>    
        <input className="form__submit" type="submit"/>
        </form>
    );
}

const mapStateToProps = (state:any) => {
    return {
        url: state.form.url
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        setUrlActionCreator: (event:any) => dispatch(setUrlActionCreator(event.target.value)),
        addDataActionCreator: (event:any) => dispatch(addDataActionCreator(event))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Form);