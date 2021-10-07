import { createStore } from 'redux';
import  userReducers  from './user/userReducer';

const store = createStore(userReducers);

export default store;