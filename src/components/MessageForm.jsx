import React, { useState, useRef, useEffect } from 'react';
import ButtonV from "./UI/button/ButtonV";
import InputV from "./UI/input/InputV";
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../store/messages/actions';

/**
 * added message in the array messages
 * @param {object} param List properties html elements
 * @returns component form for added message
 */
function MessageForm({ props }) {

    const [post, setPost] = useState({
        author: '',
        header: '',
        body: '',
        chatId: undefined
    });


    //не удаляем, надо будет для показа или нет формы ввода автора
    const profileName = useSelector((state) => state.profile.name);
    const refFocus = useRef();
    const { chatId } = useParams();
    const dispatch = useDispatch();


    useEffect(() => {
        refFocus.current.focus();
    });

    const addNewMessage = (e) => {

        e.preventDefault();

        if (post.author.length < 1 ||
            post.header.length < 1 ||
            post.body.length < 1 ||
            chatId === undefined) return;

        const newMessage = {
            id: Date.now(),
            author: post.author,
            title: post.header,
            body: post.body,
            chatId: parseInt(chatId),
        }

        dispatch(addMessage(newMessage));

        setPost({
            author: '',
            header: '',
            body: '',
        });
    }

    return (
        <Box
            component="form"
        >
            {
                (post.author === 'Default' && post.author.length > 20) ? <InputV
                    disabled
                    autoFocus
                    ref={refFocus}
                    type='text'
                    value={post.author}
                    placeholder="автор"
                    label="автор"
                    onChange={e => setPost({ ...post, author: e.target.value })}
                /> : <InputV
                    autoFocus
                    ref={refFocus}
                    type='text'
                    value={post.author}
                    placeholder="автор"
                    label="автор"
                    onChange={e => setPost({ ...post, author: e.target.value })}
                />
            }
            <InputV
                type='text'
                value={post.header}
                placeholder="заголовок"
                label="заголовок"
                onChange={e => setPost({ ...post, header: e.target.value })}
            />
            <InputV
                type='text'
                value={post.body}
                placeholder="сообщение"
                label="сообщение"
                onChange={e => setPost({ ...post, body: e.target.value })}
            />
            <ButtonV onClick={addNewMessage}>Отправить сообщение</ButtonV>
        </Box>
    );
}

export default MessageForm;