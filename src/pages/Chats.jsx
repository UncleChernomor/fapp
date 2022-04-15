import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Snackbar, Button, IconButton, Slide, Alert } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ChatList from "../components/ChatList.jsx";
import MessageForm from "../components/MessageForm.jsx";
import { shallowEqual, useSelector } from "react-redux";
import getStoreMessages from "../store/messages/selectors";


function Chats(props) {

    /**
     * isOpen Snackbar for the robot's response to the added message
     */
    const [open, setOpen] = useState(false);
    const [mount, setMount] = useState(false);
    const messages = useSelector(getStoreMessages, shallowEqual);

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

    useEffect(() => {
        //почему здесь длина массива messages == undefined ?
        console.log('use effect chats: ' + messages.length);

        if (!mount) {
            setMount(true);
        } else {
            if ((messages.length > 0) && (messages[messages.length - 1].author.length > 0)) {
                console.log('messages 222 - : ' + messages[messages.length - 1].author);
                setTimeout(() => {
                    setOpen(true);
                }, 1500);
            }
        }
    }, [messages]);

    function TransitionDown(props) {
        return <Slide {...props} direction="down" />;
    }

    /**
     * Close Snackbar
     */
    function handleClose() {
        setOpen(false);
    }

    function deleteChat(id) {
        console.log('deleteChat-- ' + typeof (id) + ' -- ' + parseInt(id));
        setMount(false);
        console.log('удалить чат');
        setTimeout(() => setMount(true), 1000);
    }

    return (
        <Box maxWidth='lg'>
            <CssBaseline />
            <MessageForm />
            <Box sx={{
                display: "flex",
                p: 2
            }}>
                <ChatList deleteChat={deleteChat} />
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
    );
}

export default Chats;