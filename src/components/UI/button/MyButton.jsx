import React from 'react';
import classes from './MyButton.module.css';
import "./MyButton.module.css";

const Mybutton = ({children, ...props}) => {
    return (
        <button className={classes.myBtn + " " + props.classMod}>
            <span>{children}</span>
        </button>
    );
}

export default Mybutton;
