import { StackNavigator } from 'react-navigation'
import {
  HOMESCREEN
} from '../constants'
import screens from '../../screens'

export default StackNavigator({
  [HOMESCREEN]: {
    screen: screens.HomeScreen,
  }
})
