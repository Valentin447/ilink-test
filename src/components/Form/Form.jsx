import React from 'react';
import Button from './../UI/button/MyButton';
import Input from './../UI/input/MyInput';
import Multilineinput from './../UI/multiline-input/MultilineInput';
import InfoIcon from './../../static/icons/info-square.png';
import CloseIcon from './../../static/icons/x.png'

const Form = () => {
    return (
        <form className='myform'>
            <div className='myform__top'>
                <div className='myform__title'>Отзыв</div>
                <button className='myform__button-close'><img className='myform__button-close-icon' src={CloseIcon} alt=''/></button>
            </div>
            <div className='myform__mid'>
            <div className='myform__input-name'><Input type="text" placeholder='Имя Фамилия' label="Как вас зовут?" /></div>
                <Button  classMod="button_icon">Загрузить фото</Button>
            </div>
            <div  className='myform__comment-text'><Multilineinput  type="text"  placeholder="Напишите пару слов о вашем опыте..." label="Все ли вам понравилось?"/></div>
            <div className='myform__bottom'>
                <Button classMod="button_2">Отправить отзыв</Button>
                <img className='myform__info-icon' src={InfoIcon} alt=''/> 
                <div className='myform__info-text'>Все отзывы проходят модерацию в течение 2 часов</div>
            </div>
        </form>
    );
}

export default Form;
