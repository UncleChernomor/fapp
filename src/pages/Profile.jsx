import { ChatBubble } from '@mui/icons-material';
import React, { useCallback, useState } from 'react';
import { store } from '../store';
import { setUserName, showNameProfile } from '../store/profile/actions';

function Profile(props) {
    const [dummy, setDummy] = useState();
    const [value, setValue] = useState();
    const { showName, name } = store.getState();
    window.store = store;

    const setShowName = (() => {
        store.dispatch(showNameProfile());
        setDummy({});
    });

    const changeName = () => {
        store.dispatch({ ...setUserName(), payload: value });
        setValue('');
    };

    return (
        <div>
            <h3 style={{ textAlign: 'center' }}>Profile Page {name}</h3>
            <h4>&nbsp;
                {showName && (<span>USER: {name}</span>)}
            </h4>
            <input type="text" value={value} onChange={(e) => { setValue(e.target.value) }} />
            <button onClick={changeName}>add name</button>
        </div>
    );
}

export default Profile;