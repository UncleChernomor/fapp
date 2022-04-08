import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { NavLink } from 'react-router-dom';
import { Divider, ListItemIcon, Box } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModalAddChat from "./ModalAddChat";
import { ChatContext } from '../context/ChatContext';

function ChatList(props) {
    const [chats, setChats] = useState([
        {
            id: 1,
            name: "chat 1"
        },
        {
            id: 2,
            name: "chat 2"
        },
        {
            id: 3,
            name: "chat 3"
        },
    ]);

    const [isOpenChat, setOpenChat] = useState(false);

    function addNewChatOpen() {
        setOpenChat(true);
    }

    function addNewChat(name) {
        console.log('addNewChat--' + name);

        const newChat = {
            id: chats.length + 1,
            name: name,
        }

        setChats([...chats, newChat]);
        setOpenChat(false);
    }

    function closeModal() {
        setOpenChat(false);
    }

    function delChat() {
        console.log('delChat');
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
                                <ListItemButton>
                                    <ListItemText>
                                        <NavLink to={`/chats/${item.id}`} style={({ isActive }) => {
                                            return {
                                                display: "block",
                                                margin: "1rem 0",
                                                color: isActive ? "red" : "white",
                                            };
                                        }}> {item.name}</NavLink>
                                    </ListItemText>
                                </ListItemButton>
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