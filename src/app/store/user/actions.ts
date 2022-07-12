import { AppDispatch, AppThunk, AppState } from '../index';
import { actions } from './index';

export const loadUser = (): AppThunk => async (dispatch: AppDispatch, getStore: () => AppState) => {
  dispatch(actions.setUser({
    name: 'test'
  }))
}