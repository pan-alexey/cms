import { AppDispatch, AppThunk, AppState } from '../../../../app/store'
import { actions } from './index';

export const loadWidget = (): AppThunk => async (dispatch: AppDispatch, getStore: () => AppState) => {
  dispatch(actions.setWidgetItem([{
    id: 'string',
    completed: true,
    text: 'string', 
  }]))
}