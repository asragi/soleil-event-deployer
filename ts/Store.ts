import { combineReducers, createStore } from 'redux';
import { TaskReducer } from "./reducers/TaskReducer";
import { IState } from './IStore';

const combinedReducer = combineReducers<IState>({
    taskList: TaskReducer,
});

export const store = createStore(combinedReducer);
export default store;
