import React, { useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { List, ListItem, Divider, ListItemIcon, Box, ListItemButton, ListItemText } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModalAddChat from "./ModalAddChat";
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { addChat, removeChat } from '../store/chats/actions';
import getChats from '../store/chats/selectors';

function ChatList(props) {

    const [isOpenChat, setOpenChat] = useState(false);
    const { chats } = useSelector(getChats, shallowEqual);
    const dispatch = useDispatch();

    //working with modal window
    //for added new chat
    /**
     * set modal window  is open
     */
    function addNewChatOpen() {
        setOpenChat(true);
    }

    /**
     * set modal window  is close
     */
    function closeModal() {
        setOpenChat(false);
    }


    /**
     * call dispatch for added chat
     * @param {string} name name of chat
     */
    function addNewChat(name) {

        dispatch(addChat(name));

        setOpenChat(false);
    }

    const params = useParams();
    const navigate = useNavigate();

    function delChat() {
        dispatch(removeChat(parseInt(params.chatId)));
        navigate('/chats');
    }

    return (
        <Box>
            <nav aria-label="secondary mailbox folders">
                <List sx={{
                    backgroundColor: "info.main",
                    color: ""
                }}>
                    {
                        chats.map((item) =>
                            <ListItem disablePadding key={item.id}>
                                <NavLink to={`/chats/${item.id}`} style={({ isActive }) => {
                                    return {
                                        display: "block",
                                        width: '100%',
                                        margin: "1rem 0",
                                        color: isActive ? "red" : "white",
                                    };
                                }}>
                                    <ListItemButton>
                                        <ListItemText>
                                            {item.name}
                                        </ListItemText>
                                    </ListItemButton>
                                </NavLink>
                            </ListItem>
                        )
                    }
                </List>
                <Divider />
                <List sx={{ border: 1 }}>
                    <ListItem>
                        <ListItemButton onClick={addNewChatOpen}>
                            <ListItemIcon>
                                <AddCircleOutlineIcon />
                                ADD
                            </ListItemIcon>
                        </ListItemButton>
                        <ListItemButton onClick={delChat}>
                            <ListItemIcon>
                                <DeleteForeverIcon />
                                DEL
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
            <ModalAddChat isOpen={isOpenChat} close={closeModal} add={addNewChat} />
        </Box >
    );
}

export default ChatList;