export const SUCCESS = 'SUCCESS'
export const REQUEST = 'REQUEST'
export const FAILURE = 'FAILURE'

const STATUS_TYPES = [REQUEST, SUCCESS, FAILURE]

export const updateObject = (oldObject, newValues) =>
  Object.assign({}, oldObject, newValues)

export const createReducer = (initialState, handlers) => (
  state = initialState,
  action,
) => {
  if (handlers[action.type]) {
    return handlers[action.type](state, action)
  }
  return state
}

export const makeActionCreator = (type, ...argNames) => (...args) => {
  const action = { type }
  argNames.forEach((arg, index) => {
    action[argNames[index]] = args[index]
  })
  return action
}
export const makeAsyncActionTypes = type =>
  STATUS_TYPES.map(status => `${type}_${status}`)

// {
//   // Types of actions to emit before and after
//   types: ['LOAD_POSTS_REQUEST', 'LOAD_POSTS_SUCCESS', 'LOAD_POSTS_FAILURE'],
//     // Check the cache (optional):
//     shouldCallAPI: state => !state.posts[userId],
//   // Perform the fetching:
//   callAPI: () => fetch(`http://myapi.com/users/${userId}/posts`),
//   // Arguments to inject in begin/end actions
//   payload: { userId }
// }
export const callAPIMiddleware = ({ dispatch, getState }) => next => action => {
  const { types, callApi, shouldCallAPI = () => true, payload = {} } = action

  if (!types) {
    // Normal action: pass it on
    return next(action)
  }
  if (
    !Array.isArray(types) ||
    types.length !== 3 ||
    !types.every(type => typeof type === 'string')
  ) {
    throw new Error('Expected an array of three string types.')
  }

  if (typeof callApi !== 'function') {
    throw new Error('Expected callAPI to be a function.')
  }

  if (!shouldCallAPI(getState())) {
    return null
  }

  const [requestType, successType, failureType] = types

  dispatch(
    Object.assign({}, payload, {
      type: requestType,
    }),
  )

  return callApi(payload).then(
    response =>
      dispatch(
        Object.assign({}, payload, {
          response,
          type: successType,
        }),
      ),
    error =>
      dispatch(
        Object.assign({}, payload, {
          error,
          type: failureType,
        }),
      ),
  )
}
