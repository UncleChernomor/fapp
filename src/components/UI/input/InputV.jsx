import React from "react";
import TextField from '@mui/material/TextField'
// import classes from './InputV.module.css';


const InputV = React.forwardRef((props, ref) => {
    return (
        <>
            <TextField
                ref={ref}
                fullWidth
                variant="outlined"
                {...props}
                margin="dense"
            >

            </TextField>
            {/* 
                без MUI
                <input {...props} className={classes.inputV} /> 
            */}
        </>
    );
});

export default InputV
