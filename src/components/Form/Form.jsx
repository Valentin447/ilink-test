import React, { useContext, useRef, useState } from 'react';
import Button from './../UI/button/MyButton';
import Input from './../UI/input/MyInput';
import Multilineinput from './../UI/multiline-input/MultilineInput';
import InfoIcon from './../../static/icons/info-square.png';
import CloseIcon from './../../static/icons/x.png'
import { Context } from '../../context';

const Form = (props) => {
    const imputFile = useRef();
    const { displayForm, setDisplayForm } = useContext(Context);

    const [textInputName, setTextInputName] = useState('');
    const [classShowError, setClassShowError] = useState('');
    const [classErrorInput, setClassErrorInput] = useState('');
    const [loadFileName, setLoadFileName] = useState('');
    const [showLoadFilePanel, setShowLoadFilePanel] = useState('none');
    const [textBodyInput, setTextBodyInput] = useState('');

    function changeInputNameHandler(value) {
        const reg = /[^A-Za-zА-Яа-я ]/;
        if (reg.test(value)) {
            setClassShowError('myform__input-name-error-show');
            setClassErrorInput('myInput_error')
        } else {
            setTextInputName(value);
            setClassShowError('');
            setClassErrorInput('')
        }
    }

    function closeForm(event) {
        event.preventDefault();
        setDisplayForm('none');
        props.setFilterBlur('none');
        props.setDisplayBlackout('none');
        
    }
    function deleteFile(event){
        event.preventDefault();
        setShowLoadFilePanel('none');
        setLoadFileName('');
    }
    function loadFile(){
        setLoadFileName(getFileName());
        setShowLoadFilePanel('block');
    }

    function getFileName() {
        console.log(imputFile.current.value);
        let arr = imputFile.current.value.split("")
        let indexLastSlesh;
        for (let i = 0; i <= arr.length; i++) {
            if (arr[i] === "\\") {
                indexLastSlesh = i;
            }
        }
        let fileName = '';
        for (let j = indexLastSlesh + 1; j < arr.length; j++) {
            console.log(arr[j]);
            fileName += arr[j];
        }
        return fileName;
    }

    function submit(){
        alert("Комментарий: " + textBodyInput + "      Имя: " + textInputName + "       Файл: " + loadFileName);
        closeForm();
    }
    return (
        <form onSubmit={submit} className={'myform'} style={{ display: displayForm }}>
            <div className='myform__top'>
                <div className='myform__title'>Отзыв</div>
                <button className='myform__button-close' onClick={closeForm}><img className='myform__button-close-icon' src={CloseIcon} alt='' /></button>
            </div>
            <div className='myform__mid'>
                <div className='myform__input-name'>
                    <Input type="text" placeholder='Имя Фамилия' label="Как вас зовут?" value={textInputName} changeInput={changeInputNameHandler} classMod={classErrorInput} />
                </div>
                <div className='select-file-wrapper'>
                    <label className='select-file-label' htmlFor='inputFile'></label>
                    <input onChange={loadFile} ref={imputFile} className='select-file' type="file" id="inputFile"></input>
                    <Button classMod="button_icon" className='myform__button-load-file'>Загрузить фото</Button>
                </div>
            </div>
            <div className={'myform__input-name-error' + ' ' + classShowError}>
                <svg className={'myform__input-name-error-x'}>
                    <line x1="0" y1="0" x2="8" y2="8"></line>
                    <line x1="0" y1="8" x2="8" y2="0"></line>
                </svg>
                <p className='myform__input-name-error-text'>Можно вводить только буквы и пробелы!</p>
            </div>
            <div className="myform_load-file-window" style={{display: showLoadFilePanel}}>
                <div className="load-file">
                <div className="load-file__icon"></div>
                <div className="load-file__mid">
                    <div className="load-file__name">{loadFileName}</div>
                    <div className="load-file__progress"></div>
                </div>
                <div className="load-file__delete-or-loading">
                    <button onClick={deleteFile} className="load-file__delete"></button>
                    <div className="load-file__loading"></div>
                </div>
            </div>
            </div>
            <div className='myform__comment-text'>
                <Multilineinput type="text" placeholder="Напишите пару слов о вашем опыте..." label="Все ли вам понравилось?" textbodyinput={setTextBodyInput}/>
                </div>
            <div className='myform__bottom'>
                <Button classMod="button_2" className='mtform__button-send' type='submit' >Отправить отзыв</Button>
                <div className='myform__info'>
                    <img className='myform__info-icon' src={InfoIcon} alt='' />
                    <div className='myform__info-text'>Все отзывы проходят модерацию в течение 2 часов</div>
                </div>
            </div>
        </form>
    );
}

export default Form;
