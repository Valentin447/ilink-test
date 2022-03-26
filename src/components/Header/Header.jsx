import React from 'react';
import MyButton from './../UI/button/MyButton';
import avatar1 from './../../static/img/avatars/user-id-5.jpg';
import logo from './../../static/icons/ilink-academy.png';
import classes from './Header.module.css';

const Header = (props) => {


    return (
        <header className={classes.header}>
            <div className='header__container'>
                <div className='header__user'>
                    <img className='header__avatar' src={avatar1} alt='' />
                    <span className='header__username'>{props.name}</span>
                </div>
                <div className='header__logo-wrap'>
                    <img className='header__logo' src={logo} alt=''></img>
                </div>
                <MyButton classMod="button_2" className='header__button'>Панель управления</MyButton>
            </div>
        </header>
    );
}

export default Header;
