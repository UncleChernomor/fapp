import React, { useCallback, useState } from 'react';
import { store } from '../store';
import { showNameProfile } from '../store/profile/actions';

function Profile(props) {
    const [dummy, setDummy] = useState();
    const { showName, name } = store.getState();
    window.store = store;

    const setShowName = () => {
        store.dispatch(showNameProfile());
        setDummy({});
    };

    return (
        <div>
            <h4>Profile</h4>
            <div>&nbsp;
                {showName && (<span>{name}</span>)}
            </div>
            <input type="checkbox" onChange={setShowName} value={showName} checked={showName} />
        </div>
    );

}

export default Profile;