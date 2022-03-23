import React from 'react';
import foto from './../../static/img/foto.jpg';
import woman from './../../static/icons/woman.png';

const Presentation = () => {
    return (
        <div className='presentation'>
            <div className='presentation__container'>
                <h1 className='presentation__title'>Добро пожаловать в академию!</h1>
                <div className='presentation__info'>
                    <img className='presentation__foto' src={foto} alt='' />
                    <div className='presentation__card'>
                        <div className='presentation__card-top'>
                            <h3 className='presentation__name'>Яна Валиева</h3>
                            <p className='presentation__date'>08.10.1999</p>
                        </div>
                        <div className='presentation__card-data'>
                            <div className='presentation__city'><b>Город:</b>  Томск</div>
                            <div className='presentation__sex'><div><b>Пол:</b>  женщина</div>
                                <img className='presentation__sex-icon' src={woman} />
                            </div>
                            <div className='presentation__age'><b>Возраст:</b>  22</div>
                        </div>
                        <div className='presentation__about-me-div'>
                            <p className='presentation__about-me'><b>О себе:</b> Всем привет! Меня зовут Яна, мне 22 года, я студент. Учусь на программиста, но хочу стать продуктовым аналитиком. Недавно, например, я начала проходить курс на известной платформе, который поможет мне устроиться на работу моей мечты!<br /><br /><i>BTW: И да, у меня есть милая кошка :)</i></p>
                        </div>
                        <div className='presentation__pet'><div><b>Домашнее животное:</b>  есть</div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Presentation;
