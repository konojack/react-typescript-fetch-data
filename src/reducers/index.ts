import { todosReducer } from './todos';
import { combineReducers } from 'redux';
import { Todo } from '../actions';

export interface StoreState {
  todos: Todo[];
}

export const reducers = combineReducers<StoreState>({
  todos: todosReducer,
});
