import React, {useState} from 'react';
import classes from './MyInput.module.css';

const MyInput = (props) => {
    return (
        <div className={classes.myInput + ' ' + props.classMod}>
            <label className={'inputLabel'} disablet={props.disablet}>{props.label}</label>
                <input type={props.type} placeholder={props.placeholder} label={props.label} value={props.textInputName} onChange={event => props.changeInput(event.target.value)} className={'myInputBody' + ' ' + props.classError} />
        </div>
    );
};

export default MyInput;
