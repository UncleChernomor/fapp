import React from "react";
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button'
// import classes from './ButtonV.module.css';

const ButtonV = function ({ children, ...props }) {
    return (<>
        <Button {...props} variant="outlined">send</Button>
        {/* 
        кнопка без MUI
        <button {...props} className={classes.buttonV}>{children}</button> 
        */}
    </>
    );
}

export default ButtonV;