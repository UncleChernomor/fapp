import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import chatsReducer from "./chats/chatsReducer";
import messagesReducer from "./messages/messagesReducer";
import profileReducer from "./profile/reducerProfile";


const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));