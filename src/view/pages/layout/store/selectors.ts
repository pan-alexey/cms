import { AppState, useAppSelector } from '../../../../app/store'

export const getWidgets = () => useAppSelector((state: AppState) => state.layout.widgets)

