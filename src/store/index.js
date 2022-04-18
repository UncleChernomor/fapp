import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import chatsReducer from "./chats/chatsReducer";
import messagesReducer from "./messages/messagesReducer";
import profileReducer from "./profile/reducerProfile";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { useApiReducer } from "./api/useApiReducer";

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
    api: useApiReducer,
});

const persistConfig = {
    key: 'root',
    storage: storage,
};

const pReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export const store = createStore(pReducer, composeEnhancers(applyMiddleware(thunk)));
export const persistor = persistStore(store);