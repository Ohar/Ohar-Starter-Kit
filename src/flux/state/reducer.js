import * as actionTypes from './action-types'
import DEFAULT_STATE from './default_state'

export default function reducer (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case actionTypes.DO_ACTION:
      return {
        ...state,
        bar: action.bar,
      }

    default:
      return state
  }
}
