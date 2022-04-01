import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

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
                                    <ListItemText>{item.name}</ListItemText>
                                </ListItemButton>
                            </ListItem>
                        )
                    }
                </List>
            </nav>
        </div>
    );
}

export default ChatList;