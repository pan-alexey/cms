import { combineReducers } from '@reduxjs/toolkit'
import user from './user/'
import todos from './todoList/todoSlice';
import visibilityFilter from './visibilityFilter/visibilityFilterSlice';

import layout from '../../view/pages/layout/store';

const rootReducer = combineReducers({
  user,
  layout,
  todos,
  visibilityFilter
})

export default rootReducer