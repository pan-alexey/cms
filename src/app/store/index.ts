import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import rootReducer from './reducer'

const store = configureStore({
  reducer: rootReducer
})

export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = (dispatch: AppDispatch, getStore: () => AppState) => Promise<void>

export default store;

// hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

// for hot module replacement
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./reducer', () => {
    import('./reducer').then((moduleData) => {
      store.replaceReducer(moduleData.default)
    })
  })
}
