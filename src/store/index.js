import { combineReducers, createStore } from "redux";
import chatsReducer from "./chats/chatsReducer";
import messagesReducer from "./messages/messagesReducer";
import profileReducer from "./profile/reducerProfile";

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
});
export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__());
