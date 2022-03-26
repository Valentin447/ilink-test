import React from 'react';

const Mybutton = ({children, ...props}) => {
 
    return (
        <button className={"my-button" + " " + props.classMod + " " + props.className} type={props.type}>
            <span>{children}</span>
        </button>
    );
}

export default Mybutton;
