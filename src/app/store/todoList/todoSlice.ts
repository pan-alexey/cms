import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppDispatch, AppThunk, AppState } from '../index'
import { Todo } from './types';

const initialState :{
    todo: Array<Todo>
} = {
    todo: []
};

const { actions, reducer } = createSlice({
    name: '$todos',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<Todo>) {
            state.todo.push(action.payload);
        },
        toggleTodo(state, action: PayloadAction<Todo>) {
            // const todo = state.find(todo => todo.id === action.payload.id);
            state.todo.push(action.payload);
        },
    }
});

export const { toggleTodo, addTodo } = actions;
export const actionAddTodo = (): AppThunk => async (dispatch, getStore) => {
    const newTodo : Todo = {
        id: Math.random().toString(36).substr(2, 9), // https://gist.github.com/gordonbrander/2230317,
        completed: false,
        text: '123',
    }

    await new Promise(resolve => setTimeout(resolve, 1000));
    const store = getStore()
    console.log(store)
    dispatch(addTodo(newTodo))
}

export default reducer; 