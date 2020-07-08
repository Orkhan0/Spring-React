import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './authReducer';
import SecureLs from 'secure-ls';
import { setAuthorizationHeader } from '../api/apiCalls';

const secureLs = new SecureLs();

const getStateFromStorage = () => {
    const hoaxAuth = secureLs.get('hoax-aut');

    let stateInLocalStorage = {
        isLoggedIn: false,
        username: undefined,
        displayName: undefined,
        image: undefined,
        password: undefined
    }
    if (hoaxAuth) {
        return hoaxAuth;
    }
    return stateInLocalStorage;
};

const updateStateInStorage = newState => {
    secureLs.set('hoax-aut', newState);
}

const configureStore = () => {
    const initialState = getStateFromStorage();
    setAuthorizationHeader(initialState)
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(authReducer, initialState, composeEnhancers(applyMiddleware(thunk)));

    store.subscribe(() => {
        updateStateInStorage(store.getState());
        setAuthorizationHeader(store.getState())
    });

    return store;
}

export default configureStore;