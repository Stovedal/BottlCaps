import React, { Component } from 'react'
import { Animated, PanResponder, Easing, View } from 'react-native'

export default class Moveable extends Component {

  constructor(props){
    super(props)
    this.state = {
      fadeIn: new Animated.Value(0),
      pan: new Animated.ValueXY(),
      scale: new Animated.Value(1),
      rotation: new Animated.Value(0),
      isPickedUp: false,
    }
    this.panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderGrant: (e, gestureState) => {
        this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
        this.state.pan.setValue({x: 0, y: 0});
        this.state.rotation.setValue(0)
        Animated.parallel(
          Animated.spring(
            this.state.scale,
            { toValue: 1.1}
          ).start(),
          Animated.loop(
            Animated.timing(
              this.state.rotation,
              {
                toValue: 1,
                easing: Easing.linear
              }
            )
          ).start()
        )
      },
      onPanResponderMove: Animated.event([null,{
          dx : this.state.pan.x,
          dy : this.state.pan.y
      }]),
      onPanResponderRelease : (e, gesture) => {
        this.state.pan.flattenOffset()
        this.state.rotation.stopAnimation(
          ()=>Animated.spring(
            this.state.scale,
            { toValue: 1 }
          ).start()
        )

      }
    });
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
    const spin = this.state.rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
    })
    return(
      <Animated.View
        {...this.panResponder.panHandlers}

        style={[
          this.state.pan.getLayout(),
          this.props.style,
          { transform: [ {scale: this.state.scale}, {rotate: spin}] }
        ]}
        >
        {this.props.children}
      </Animated.View>
    )
  }
}
