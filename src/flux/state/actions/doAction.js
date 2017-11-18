import {DO_ACTION} from '../action-types'

export default function actionDoAction (bar) {
  return dispatch => {
    dispatch({type: DO_ACTION, bar})
  }
}
