import React from 'react';
import ButtonAdd from './../UI/button/MyButton';
import Comment from './../Comment/Comment';
import ButtonArrow from './../UI/button-arrow/ButtonArrow';
import noAvatar from './../../static/img/avatars/no-avatar.jpg';
import avatarUser1 from './../../static/img/avatars/user-id-1.jpg';
import avatarUser2 from './../../static/img/avatars/user-id-2.jpg';
import avatarUser3 from './../../static/img/avatars/user-id-3.jpg';
import avatarUser4 from './../../static/img/avatars/user-id-4.jpg';
import Slidernavigation from '../SliderNavigation/SliderNavigation';

const Slider = () => {
    return (
        <div className='slider'>
            <div className='slider__white-background-left'></div>
            <div className='slider__container'>
                <div className='slider__comments'>
                    <div className='slider__top'>
                        <h2 className='slider__title'>Отзывы</h2>
                        <ButtonAdd className='slider__button-add' classMod='button_icon'>Добавить отзыв</ButtonAdd>
                    </div>
                    <div className='slider__center'>
                        <Comment userName="Буба Бубенцов" avatar={avatarUser4} date='08.01.2022'>Отличный коллектив, руководители понимают сам процесс работы каждого сотрудника и помогают всем без исключения. Система KPI позволяет реально хорошо зарабатывать по простому принципу - чем больше и лучше ты работаешь, тем больше денег получаешь. Соцпакет - отличная страховка ДМС, организовали курсы английского языка бесплатно, оплачивают тренажерный зал. Зарплату выплачивают всегда вовремя.</Comment>
                        <Comment userName="Илья Анташкевич" avatar={noAvatar} date='08.01.2022'>Год назад попытал счастье, откликнулся на вакансию, прошел собес и попал в компанию. Долго переживал что будет тяжело влиться, но тут прям классные ребята работают, все на одной волне. Всегда готовы помочь с любым вопросом. Для эффективной работы здесь нужно хорошо знать иностранные языки.</Comment>
                    </div>
                    <div className='slider__bottom'>
                        <Slidernavigation focusPage='1' numberOfPages='3'></Slidernavigation>
                    </div>
                </div>
                <div className='slider__arrow-buttons'>
                    <ButtonArrow className='slider__arrow-button-left' />
                    <ButtonArrow className='slider__arrow-button-right' />
                </div>
            </div>
        </div>
    );
}

export default Slider;
