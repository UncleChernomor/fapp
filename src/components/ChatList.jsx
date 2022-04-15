import React, { useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { List, ListItem, Divider, ListItemIcon, Box, ListItemButton, ListItemText } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModalAddChat from "./ModalAddChat";
import { useDispatch, useSelector } from 'react-redux';
import { addChat, removeChat } from '../store/chats/actions';

function ChatList(props) {
    // const [chats, setChats] = useState([
    //     {
    //         id: 1,
    //         name: "chat 1"
    //     },
    //     {
    //         id: 2,
    //         name: "chat 2"
    //     },
    //     {
    //         id: 3,
    //         name: "chat 3"
    //     },
    // ]);

    const [isOpenChat, setOpenChat] = useState(false);
    const { chats } = useSelector((state) => state.chats);
    const dispatch = useDispatch();

    function addNewChatOpen() {
        setOpenChat(true);
    }

    function addNewChat(name) {

        dispatch(addChat(name));
        // setChats([...chats, newChat]);
        setOpenChat(false);
    }

    function closeModal() {
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
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText>
                                        <NavLink key={item.id} to={`/chats/${item.id}`} style={({ isActive }) => {
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