import React from 'react';
import noAvatar from './../../static/img/avatars/no-avatar.jpg';
import avatarUser1 from './../../static/img/avatars/user-id-1.jpg';
import avatarUser2 from './../../static/img/avatars/user-id-2.jpg';
import avatarUser3 from './../../static/img/avatars/user-id-3.jpg';
import avatarUser4 from './../../static/img/avatars/user-id-4.jpg';


const Comment = (props) => {

    let commentsArr = [{userName: 'Буба Бубенцов', avatar: avatarUser4, date: '08.01.2022', comment: 'Отличный коллектив, руководители понимают сам процесс работы каждого сотрудника и помогают всем без исключения. Система KPI позволяет реально хорошо зарабатывать по простому принципу - чем больше и лучше ты работаешь, тем больше денег получаешь. Соцпакет - отличная страховка ДМС, организовали курсы английского языка бесплатно, оплачивают тренажерный зал. Зарплату выплачивают всегда вовремя.'},
                       {userName: 'Илья Анташкевич', avatar: noAvatar, date: '08.01.2022', comment: 'Год назад попытал счастье, откликнулся на вакансию, прошел собес и попал в компанию. Долго переживал что будет тяжело влиться, но тут прям классные ребята работают, все на одной волне. Всегда готовы помочь с любым вопросом. Для эффективной работы здесь нужно хорошо знать иностранные языки.'},
                       {userName: 'Юрина Маргарита', avatar: avatarUser3, date: '26.12.2021', comment: 'Наша компания благодарна фирме ilink за сотрудничество. Хотелось бы отметить отличную работу сотрудников: все было выполнено качественно, со знанием дела, в установленные сроки. За время работы с компанией значительно увеличилась аудитория, сайт приносит стабильный доход, контент уникальный, грамотный и качественный. Будет продолжать работу и дальше. Мы довольны, что доверили создание сайта компании ilink.'},
                       {userName: 'Дмитрий Иванов', avatar: avatarUser2, date: '16.12.2021', comment: 'Отвечала за найм и адаптацию сотрудников в компании, за поддержание на нужном уровне HR-бренда и трудового настроя коллектива. В компанию пришла без опыта работы HR-ом. Всему научилась здесь. Как теории, так и практике. Набрала опыт достаточно быстро. Есть программа обучения, поощряются различные курсы, и это большой плюс. В коллективе очень дружная атмосфера. Все дружелюбные, амбициозные.'}]
   let numberComment = +props.numberComment;

    return (
        <div className='comment'>
            <div className='comment__info'>
                <div className='comment__user'>
                    <div className='comment__avatar-default'>
                        <img className='comment__user-avatar' src={commentsArr[numberComment].avatar} alt=''/>
                    </div>
                    <span className='comment__user-name'>{commentsArr[numberComment].userName}</span>
                </div>
                <span className='comment__date'>{commentsArr[numberComment].date}</span>
            </div>
            <p className='comment__text'>{commentsArr[numberComment].comment}</p>
        </div>
    );
}

export default Comment;
