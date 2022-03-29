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
            >
                <Typography variant="h6" component="h3">{props.msg.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    {props.msg.body}
                </Typography>
            </AccordionDetails>
        </Accordion>
        // <div className="Message">
        //     <h2 className="Message-header">{props.msg.title}</h2>
        //     <p>{props.msg.body}</p>
        // </div>
    );
}

export default Message;