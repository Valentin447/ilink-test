import React from 'react';
import foto from './../../static/img/foto2.jpg';
import man from './../../static/icons/man.png';

const Presentation = () => {
    return (
        <div className='presentation'>
            <div className='presentation__container'>
                <h1 className='presentation__title'>Добро пожаловать в академию!</h1>
                <div className='presentation__info'>
                    <img className='presentation__foto' src={foto} alt='' />
                    <div className='presentation__card'>
                        <div className='presentation__card-top'>
                            <h3 className='presentation__name'>Валентин Михайлов</h3>
                            <p className='presentation__date'>17.07.1986</p>
                        </div>
                        <div className='presentation__card-data'>
                            <div className='presentation__city'><b>Город:</b>  Томск</div>
                            <div className='presentation__sex'><div><b>Пол:</b>  мужской</div>
                                <img className='presentation__sex-icon' src={man} />
                            </div>
                            <div className='presentation__age'><b>Возраст:</b>  35</div>
                        </div>
                        <div className='presentation__about-me-div'>
                            <p className='presentation__about-me'><b>О себе:</b> Всем привет! Меня зовут Валентин, мне 35 года. Я решил сменить направление деятельности с автомобильной на IT. Благо в интернете сейчас много курсов, статей, документации в свободном доступе, было бы желание учиться. Надеюсь что всё получится!<br /><br /><i>BTW: И да, у меня есть кактус :)</i></p>
                        </div>
                        <div className='presentation__pet'><div><b>Комнатное растение:</b>  есть</div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Presentation;
