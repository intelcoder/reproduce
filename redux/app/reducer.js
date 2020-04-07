import { createReducer, updateObject } from '../utils'
import { SET_DRAWER_OPEN } from './actions'
const initialState = {
  isDrawerOpen: false,
}

const handlers = {
  [SET_DRAWER_OPEN]: (state, action) =>
    updateObject(state, { isDrawerOpen: action.isDrawerOpen }),
}

const appReducer = createReducer(initialState, handlers)

export default appReducer
