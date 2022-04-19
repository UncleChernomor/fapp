import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonV from '../components/UI/button/ButtonV';
import { middlewareReadData } from '../store/api/actions';
import classes from './WorkWithApi.module.css';

function WorkWithApi(props) {
    const items = useSelector(state => state.api.items);
    const dispatch = useDispatch();

    function clickHandler() {
        dispatch(middlewareReadData());
        setTimeout(() => console.log(items), 2000);
    }

    useEffect(() => {
        dispatch(middlewareReadData());
    }, [items]);

    // for(let key in items.rates) {
    //     <div>
    //         <div>key</div>
    //         <div>items.rates[key]</div>
    //     </div>
    // };
    return (
        <>
            <div>
                <ButtonV onClick={clickHandler}>
                    Get DATA
                </ButtonV>
                <h1>work with API</h1>
            </div>
            <h3>Date {items.date}</h3>
            <h3>1 {items.base}</h3>

            <div >
                {
                    Object.keys(items.rates).map(value => (
                        <div key={value} className={classes.Api}>
                            <div className={classes.Name}>
                                {value}
                            </div>
                            <div className={classes.Rate}>
                                {items.rates[value]}
                            </div>
                        </div>
                    ))
                }
            </div>
        </>

    );
}

export default WorkWithApi;