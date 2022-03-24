import React from "react";
import classes from './ButtonV.module.css';

const ButtonV = function ({ children, ...props }) {
    return (
        <button {...props} className={classes.buttonV}>{children}</button>
    );
}

export default ButtonV;