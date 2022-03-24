import React, {useState} from 'react';
import classes from './MyInput.module.css';
import InputError from './../input-error/InputError.jsx';

const MyInput = (props) => {
    const [value, setValue] = useState('');
    return (
        <div className={classes.myInput + ' ' + props.classmod}>
            <label className={'inputLabel'} disablet={props.disablet}>{props.label}</label>
                <input value={value} onChange={event => setValue(event.target.value)} className={classes.myInputBody} {...props} />
            <div className={'myInput__error'}>
                <div className={'myInput__errorX'}>
                    <div className={'myInput__errorX1'}></div>
                    <div className={'myInput__errorX2'}></div>
                </div>
                <InputError textError="Error"/>
            </div> 
        </div>
    );
};

export default MyInput;
