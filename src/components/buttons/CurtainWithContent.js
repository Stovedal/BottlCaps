import React, { Component } from 'react'
import { Animated, PanResponder, View, TouchableWithoutFeedback } from 'react-native'
import { StandardButtonWrapper, StandardButtonText, CurtainKnob } from './components/styledComponents'
import Curtain from '../animated/Curtain'

export default class CurtainWithContent extends Component {

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
      <Curtain
        knobTitle={this.props.knobTitle}
        style={{ opacity: this.state.fadeIn}}
        >
          {this.props.children}
      </Curtain>
    )
  }
}
