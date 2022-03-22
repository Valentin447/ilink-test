import React from 'react';
import classes from './MyInput.module.css';

const MyInput = React.forwardRef((props, ref) => {
    return (
        <div>
            <label className={classes.inputLabel} disablet={props.disablet}>{props.label}
                <input ref={ref} className={classes.myInput} {...props} />
            </label>
            <p className={'myInput__error'}></p>
            <span className={'myInput__counter'}></span>
        </div>
    );
});

export default MyInput;
