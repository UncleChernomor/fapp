import * as React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//import './Message.css';

const Message = function (props) {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id={props.msg.title}
                sx={{ display: 'flex', justifyContent: 'space-between' }}
            >
                <div>
                    <Typography sx={{ display: 'block' }} variant="subtitle1" component="div">Автор: {props.msg.author}</Typography>
                    <Typography sx={{ display: 'block' }} variant="subtitle1" component="div">Тема: {props.msg.title}</Typography>
                </div>


            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    {props.msg.body}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
}

export default Message;