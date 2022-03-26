import React, { useState } from 'react';
import classes from './MultilineInput.module.css';

const Multilineinput = (props) => {
    const [valueInput, setValueInput] = useState('');
    const [valueCounter, setValueCounter] = useState('0');
    const [colorCounter, setColorCounter] = useState('var(--grey)');
    const [errorText, setErrorText] = useState('');
    const [displayError, setDisplayError] = useState('none');
    const [classError, setClassError] = useState('');

    function changeInputHandler(value) {  
        if (value.length <= 200) {
            setValueInput(value);
            setValueCounter(value.length)
            setColorCounter('var(--grey)')
            setDisplayError('none');
            setClassError('');
        } else {
            setColorCounter('var(--red)');
            showError('Максимальная длинна комментария 200 символов!');
        }
        props.textbodyinput(value);
    }

    function showError(textError) {
        setErrorText(textError);
        setDisplayError('block');
        setClassError('multilineInput__isError');
    }

    return (
        <div className={classes.multilineInput + ' ' + props.classmod + ' ' + classError}>
            <label className={'multilineInput__label'} disablet={props.disablet}>{props.label}</label>
            <div className={'multilineInput__wraper'}>
                <textarea value={valueInput} onChange={(event) => changeInputHandler(event.target.value)} className={'multilineInput__body'}></textarea>
                <span className={'multilineInput__counter'} style={{ color: colorCounter }}>{valueCounter}/200</span>
                <div className={'multilineInput__error'} style={{display: displayError}}>
                    <svg className={'multilineInput__error-x'}>
                        <line x1="0" y1="0" x2="8" y2="8"></line>
                        <line x1="0" y1="8" x2="8" y2="0"></line>
                    </svg>
                    {errorText}
                </div>
            </div>

        </div>
    );
};

export default Multilineinput;
