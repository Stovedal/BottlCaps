import React, { Component } from 'react'
import { Animated, PanResponder, View, TouchableWithoutFeedback } from 'react-native'
import { StandardButtonWrapper, StandardButtonText } from './components/styledComponents'
import Moveable from '../animated/Moveable'

export default class MoveableButton extends Component {

  constructor(props){
    super(props)
    this.state = {
      fadeIn: new Animated.Value(0),
    }
  }

  componentDidMount(){
    Animated.timing(
      this.state.fadeIn,
      {
        toValue: 1,
        duration: 1000
      }
    ).start()
  }

  render(){
    return(
      <Moveable
        style={{ opacity: this.state.fadeIn }}
        >
        <StandardButtonWrapper>
          <StandardButtonText>
            {this.props.children}
          </StandardButtonText>
        </StandardButtonWrapper>
      </Moveable>
    )
  }

}
