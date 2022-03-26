import React from 'react';

const Buttonarrow = (props) => {

    return (
        <button onClick={props.clickButton} className={"arrow-button" + " " + props.className}>
            <div className="arrow-button-icon">
                <svg width="17" height="14">
                    <line x1="1" y1="7" x2="14" y2="7"></line>
                    <polyline points="9,13 15,7 9,1"/>
                </svg>
            </div>
        </button>
    );
}

export default Buttonarrow;
