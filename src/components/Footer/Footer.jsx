import React from 'react';
import vk from './../../static/icons/vk.png';
import reddit from './../../static/icons/reddit.png';
import telegram from './../../static/icons/telegram.png';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <span className='copyright'>© iLINK ACADEMY. ALL RIGHTS RESERVED. 2022</span>
                <div className='footer__social-networks'>
                    <a className='footer__linck-vk' href='https://vk.com'><img className='footer__linck-vk-icon' src={vk} alt='' /></a>
                    <a className='footer__linck-reddit' href='https://www.reddit.com/'><img className='footer__linck-reddit-icon' src={reddit} alt='' /></a>
                    <a className='footer__linck-telegram' href='https://web.telegram.org'><img className='footer__linck-telegram-icon' src={telegram} alt='' /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
