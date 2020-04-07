import { makeActionCreator } from '../utils'

export const SET_DRAWER_OPEN = 'SET_DRAWER_OPEN'
export const setDrawerOpen = makeActionCreator(SET_DRAWER_OPEN, 'isDrawerOpen')
