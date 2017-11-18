import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import reducer from './state/reducer'

const reducers = combineReducers({
  foo: reducer,
})

const store = createStore(
  reducers,
  applyMiddleware(thunk),
)

export default store
