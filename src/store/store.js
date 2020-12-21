import { createStore } from 'redux';
import myRootReducer from '../reducers/rootReducer';


export const store = createStore(myRootReducer);