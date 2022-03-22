import React from 'react';

const Inputerror = (props) => {
    return (
        <div className={'inputError'}>
            <div className={'inputError__X'}>
                <div className={'inputError__X1'}></div>
                <div className={'inputError__X2'}></div>
            </div>
            <p className={'inputError__text'}>{props.textError}</p>
        </div>
    );
}

export default Inputerror;
