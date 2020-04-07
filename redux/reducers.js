/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { combineReducers } from 'redux'
import { routerReducer } from 'connected-next-router'
import lookupReducer from 'Redux/lookups/reducer'
import appReducer from './app/reducer'
/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    app: appReducer,
    lookups: lookupReducer,
    router: routerReducer,
    ...injectedReducers,
  })

  return rootReducer
}
