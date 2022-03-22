import React, { Children } from 'react';

const Comment = ({children, ...props}) => {

    return (
        <div className='comment'>
            <div className='comment__info'>
                <div className='comment__user'>
                    <div className='comment__avatar-default'>
                        <img className='comment__user-avatar' src={props.avatar} alt=''/>
                    </div>
                    <span className='comment__user-name'>{props.userName}</span>
                </div>
                <span className='comment__date'>{props.date}</span>
            </div>
            <p className='comment__text'>{children}</p>
        </div>
    );
}

export default Comment;
