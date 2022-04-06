import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { NavLink } from 'react-router-dom';
import { Divider, ListItemIcon } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function ChatList(props) {
    const [chats, SetChats] = useState([
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

    function addNewChat() {
        console.log('addNewChat');
    }

    function delChat() {
        console.log('delChat');
    }

    return (
        <div>
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
                    <Divider />
                    <ListItem>
                        <ListItemButton onClick={addNewChat}>
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
        </div >
    );
}

export default ChatList;