import React from 'react';
import MyButton from './../UI/button/MyButton';
import avatar from './../../static/img/avatars/no-avatar.jpg';
import logo from './../../static/icons/ilink-academy.png';
import classes from './Header.module.css';

const Header = (props) => {


    return (
        <header className={classes.header}>
            <div className='header__container'>
                <div className='header__user'>
                    <img className='header__avatar' src={avatar} alt='' />
                    <span className='header__username'>{props.name}</span>
                </div>
                <img className='header__logo' src={logo} alt=''></img>
                <MyButton classMod="button_2">Панель управления</MyButton>
            </div>
        </header>
    );
}

export default Header;
