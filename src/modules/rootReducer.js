import { combineReducers } from 'redux'
import * as navigationReducers from '../navigation/reducers'

export default combineReducers(Object.assign(
  navigationReducers
))
