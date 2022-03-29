import React from "react";
// import ReactDOM from 'react-dom';
import Button from '@mui/material/Button'
// import classes from './ButtonV.module.css';

const ButtonV = function ({ children, ...props }) {
    return (
        <>
            <Button {...props} variant="outlined" sx={{ mt: 1 }}>{children}</Button>
            {/* 
        кнопка без MUI
        <button {...props} className={classes.buttonV}>{children}</button> 
        */}
        </>
    );
}

export default ButtonV;