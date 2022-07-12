import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { WidgetItems } from './types';

const initialState :{
    widgets: Array<WidgetItems>
} = {
    widgets: []
};

export const { actions, reducer } = createSlice({
    name: 'layout',
    initialState,
    reducers: {
        setWidgetItem(state, action: PayloadAction<WidgetItems[]>) {
            state.widgets = action.payload
        },
    }
});

export default reducer; 