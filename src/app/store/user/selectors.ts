import { AppState, useAppSelector } from '../index'

export const getUserName = () => useAppSelector((state: AppState) => state.user.name)