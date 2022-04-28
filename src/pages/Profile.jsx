import React, { useContext, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDispatch, useSelector } from 'react-redux';
import { UserContext } from '..';
import { store } from '../store';
import { setUserName, showNameProfile } from '../store/profile/actions';

function Profile(props) {
    const [value, setValue] = useState();
    const { showName, name } = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    const { auth } = useContext(UserContext);
    const [user] = useAuthState(auth);

    useEffect(() => {
        dispatch(setUserName(user.displayName));
    }, [user]);

    console.log('PROFILE');
    console.log(user);
    console.log(name + ' ' + showName);

    const setShowName = (() => {
        store.dispatch(showNameProfile());
    });

    const changeName = () => {
        dispatch(setUserName(value));
        setValue('');
    };

    return (
        <main>
            <h3 style={{ textAlign: 'center' }}>Profile Page {name}</h3>
            <h4>&nbsp;
                {showName && (<span>USER: {name}</span>)}
            </h4>
            <input type="text" value={value} onChange={(e) => { setValue(e.target.value) }} />
            <button onClick={changeName}>add name</button>
        </main>
    );
}

export default Profile;