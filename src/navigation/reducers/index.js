import TopNavigator from '../TopNavigator'
import { navigateTo } from '../actions'
import { FIRSTSCREEN } from '../constants'
const initialState = TopNavigator.router.getStateForAction(navigateTo(FIRSTSCREEN))

export const navigation = (state = initialState, action) => {
  let newState =  TopNavigator.router.getStateForAction(action, state)
  return newState || state
}
