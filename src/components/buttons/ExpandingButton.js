import React, { Component } from 'react'
import { Animated, PanResponder, View, TouchableWithoutFeedback } from 'react-native'
import { StandardButtonWrapper, StandardButtonText } from './components/styledComponents'

export default class ExpandingButton extends Component {

  constructor(props){
    super(props)
    this.state = {
      fadeIn: new Animated.Value(0),
      size: new Animated.Value(props.size),
      startSize: props.size
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

  onPress(){
    Animated.spring(
      this.state.size,
      {
        toValue: (this.state.size._value>this.state.startSize) ? this.state.startSize : this.state.startSize*1.5,
      }
    ).start()
    this.props.onPress()
  }

  render(){
    return(
      <TouchableWithoutFeedback onPress={()=>this.onPress()}>
        <Animated.View
          style={{
            opacity: this.state.fadeIn,
            height:this.state.size,
            width:this.state.size,
            borderRadius: this.state.size,
            backgroundColor: 'white',
            borderWidth: 2,
            borderColor: "#F44336",
            justifyContent: 'center',
          }}
          >
        <StandardButtonText>
          {this.props.children}
        </StandardButtonText>
      </Animated.View>
    </TouchableWithoutFeedback>

    )
  }

}
