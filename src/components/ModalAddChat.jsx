import React, { useState } from 'react';
import './ModalAddChat.css';
import InputV from './UI/input/InputV';
import ButtonV from './UI/button/ButtonV';

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
                                props.add(name);
                                setName('');
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