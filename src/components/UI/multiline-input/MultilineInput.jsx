import React, {useState} from 'react';
import classes from './MultilineInput.module.css';

const Multilineinput = (props) => {
    const[value, setValue] = useState('');
    return (
        <div className={classes.multilineInput + ' ' + props.classmod}>
            <label className={'multilineInput__label'} disablet={props.disablet}>{props.label}
                <div className={'multilineInput__wraper'}><textarea value={value} onChange={(event)=> setValue(event.target.value)} className={'multilineInput__body'} {...props}></textarea></div>
            </label>
            <div className={'multilineInput__error'}><span className={'multilineInput__counter'}>0/200</span></div>
        </div>
    );
};

export default Multilineinput;
