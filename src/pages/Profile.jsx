import React, { useCallback } from 'react';
import { store } from '../store';
import { showNameProfile } from '../store/profile/actions';

function Profile(props) {
    const { showName, name } = store.getState();
    window.store = store;

    const setShowName = useCallback(() => {
        store.dispatch(showNameProfile);
    });

    return (
        <div style={{ color: 'black' }}>
            <h4>Profile</h4>
            {showName && <div>{name}</div>}
            {/* <input type="checkbox" onChange={setShowName} /> */}
        </div>
    );

}

export default Profile;