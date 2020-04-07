const initialState = {
  component: '',
  id: null,
  url: null,
  parameters: null,
  area_type: null,
  area_id: null,
}

const lookupReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_LOOKUP_SUCCESS':
      // console.log('lookupReducer', action.data.data)
      return {
        ...state,
        ...action.data.data,
      }
  }
  return state
}

export default lookupReducer
