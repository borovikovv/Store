import { createStore, combineReducers } from 'redux';
import reducer from './reducer/reducer';
const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {};

let rootReducer = combineReducers({
    products: reducer
})
let store = createStore(rootReducer, persistedState);

store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
});

window.store = store;

export default store;