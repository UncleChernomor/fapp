import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Snackbar, Button, IconButton, Slide, Alert } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { MessageContext } from '../context';
import ChatList from "../components/ChatList.jsx";
import MessageForm from "../components/MessageForm.jsx";


function Chats(props) {

    const [messages, setMessageList] = useState([
        {
            id: 1,
            chatId: 1,
            author: 'vasya',
            title: 'message 1',
            body: 'message 1 body there'
        },
        {
            id: 2,
            chatId: 1,
            author: 'fedya',
            title: 'message 2',
            body: 'message 2 body there'
        },
        {
            id: 3,
            chatId: 2,
            author: 'vasya',
            title: 'message 3',
            body: 'message 3 body there'
        },
    ]);

    /**
     * isOpen Snackbar for the robot's response to the added message
     */
    const [open, setOpen] = useState(false);
    const [mount, setMount] = useState(false);

    const action = (
        <React.Fragment>
            <Button color="inherit" size="small" onClick={handleClose}>
                CLOSE
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    /**
     * Add element in state messages
     * @param {*} message object state messages
     */
    function createMessage(message) {
        console.log('chats new message');
        setMessageList([...messages, message]);
    }

    function handleClose() {
        setOpen(false);
    }

    useEffect(() => {
        if (!mount) {
            setMount(true);
        } else {
            if (messages[messages.length - 1].author.length > 0) {
                setTimeout(() => {
                    setOpen(true);
                }, 1500);
            }
        }


        //Настроить фокус --- НЕ ЗАБЫТЬ!!!
        // refFocus.current?.focus():null;
    }, [messages]);

    function TransitionDown(props) {
        return <Slide {...props} direction="down" />;
    }

    return (
        <MessageContext.Provider value={{ messages, setMessageList }}>
            <Box maxWidth='lg'>
                <CssBaseline />
                <MessageForm createMsg={createMessage} />
                <Box sx={{
                    display: "flex",
                    p: 2
                }}>
                    <ChatList />
                    <Outlet />
                </Box>
                <Snackbar
                    severity='success'
                    open={open}
                    autoHideDuration={3000}
                    onClose={handleClose}
                    message="Message added"
                    action={action}
                    TransitionComponent={TransitionDown}
                >
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        This is a success message!
                    </Alert>
                </Snackbar>
            </Box>
        </MessageContext.Provider >
    );
}

export default Chats;