import { combineReducers, createStore } from 'redux';
import { EventReducer } from './reducers/EventReducer';
import { IState } from './IStore';

const combinedReducer = combineReducers<IState>({
    map: EventReducer,
});

export const store = createStore(combinedReducer);
export default store;
