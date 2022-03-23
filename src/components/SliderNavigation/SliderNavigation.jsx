import React from 'react';

const Slidernavigation = (props) => {

    const navComponents = function(){
        const arrayComponents = [];
        for(let i = 0; i < +props.numberOfPages; i++){
            if((+props.focusPage - 1) === i){
                arrayComponents.push(<div className={'slider-navigation-page' + ' ' + 'slider-navigation-focus-page'} key={'slider-navigation-page'+i}></div>);
                continue;
            }
            arrayComponents.push(<div className='slider-navigation-page' key={'slider-navigation-page'+i}></div>);
        }
        return arrayComponents;
    }
    console.log(navComponents());
    return (
        <div className='slider__navigation'>
            {navComponents()}
        </div>
    );
}

export default Slidernavigation;
