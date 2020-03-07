import { combineReducers, createStore } from 'redux';
import { UserReducer } from './reducers/UserReducer';
import IUser from './states/IUser';

export interface IState {
    User: IUser;
}

const combinedReducer = combineReducers<IState>({
    User: UserReducer,
});

export const store = createStore(combinedReducer);

export default store;
