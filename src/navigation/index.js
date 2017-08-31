import React from 'react'
import TopNavigator from './TopNavigator'
import { addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'

const App = ({ dispatch, navigation }) => (
  <TopNavigator
    navigation={addNavigationHelpers({ dispatch, state: navigation })}
  />
)

const mapStateToProps = (state) => {
  return {
    navigation: state.navigation
  }
}

export default connect(mapStateToProps)(App)
