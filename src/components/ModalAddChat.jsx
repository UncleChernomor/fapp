import React, { useContext, useState } from 'react';
import './ModalAddChat.css';
import InputV from './UI/input/InputV';
import ButtonV from './UI/button/ButtonV';
import { ChatContext } from '../context/ChatContext';

function ModalAddChat(props) {
    const [name, setName] = useState();

    return (
        <>
            {
                props.isOpen && (
                    <div className='modal'>
                        <div className='modal-body'>
                            <InputV
                                label='Add chat'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <ButtonV onClick={() => {
                                console.log('Modal clickAdd --- ' + name);
                                props.add(name);
                            }}>Создать</ButtonV>
                            <ButtonV onClick={props.close}>Отмена</ButtonV>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default ModalAddChat;