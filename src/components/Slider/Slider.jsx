import React, {useContext, useState} from 'react';
import ButtonAdd from './../UI/button/MyButton';
import Comment from './../Comment/Comment';
import ButtonArrow from './../UI/button-arrow/ButtonArrow';
import Slidernavigation from '../SliderNavigation/SliderNavigation';
import { Context } from '../../context';

const Slider = (props) => {
    const{ displayForm, setDisplayForm } = useContext(Context);

    const[comment, setComment] = useState(0);
    const[comment2, setComment2] = useState(1);
    
    function moveToLeft(){
        console.log(comment, comment2);
        if(comment > 2){
            setComment(0);
            console.log(comment, comment2);
        } else {
            setComment(comment + 1);
        }
        if(comment2 > 2){
            setComment2(0);
            console.log(comment, comment2);
        } else {
            setComment2(comment2 + 1);
        } 
    }
    function moveToRight(){
        console.log(comment, comment2);
        if(comment < 1){
            setComment(3);
            console.log(comment, comment2);
        } else {
            setComment(comment - 1);
        }
        if(comment2 < 1){
            setComment2(3);
            console.log(comment, comment2);
        } else {
            setComment2(comment2 - 1);
        } 
    
    }

    function openForm (){
        setDisplayForm('block');
        props.setFilterBlur('blur(5px)');
        props.setDisplayBlackout('block');
    }

    return (
        <div className='slider'>
            <div className='slider__white-background-left'></div>
            <div className='slider__container'>
                <div className='slider__comments'>
                    <div className='slider__top'>
                        <h2 className='slider__title'>Отзывы</h2>
                        <div onClick={openForm}><ButtonAdd className='slider__button-add' classMod='button_icon'>Добавить отзыв</ButtonAdd></div>
                    </div>
                    <div className='slider__center'>
                        <Comment numberComment={comment}/>
                        <Comment numberComment={comment2}/>
                    </div>
                    <div className='slider__bottom'>
                        <Slidernavigation focusPage='1' numberOfPages='3'></Slidernavigation>
                    </div>
                </div>
                <div className='slider__arrow-buttons'>
                    <ButtonArrow className='slider__arrow-button-left' clickButton={moveToLeft}/>
                    <ButtonArrow className='slider__arrow-button-right' clickButton={moveToRight}/>
                </div>
            </div>
        </div>
    );
}

export default Slider;
