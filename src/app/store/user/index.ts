import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from './types';

const initialState: User = {
    name: ''
};

export const { actions, reducer } = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<User>) {
            state = action.payload
        },
    }
});

export default reducer; 