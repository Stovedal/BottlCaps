import React, { Component } from 'react'
import { Animated, PanResponder } from 'react-native'

export default class Swipeable extends Component {

  constructor(props){
    super(props)
    this.state = {
      pan: new Animated.ValueXY(),
    }

    this.panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderGrant: (e, gestureState) => {
        this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
        this.state.pan.setValue({x: 0, y: 0})
      },
      onPanResponderMove: Animated.event([null,{
          dx : this.state.pan.x,
      }]),
      onPanResponderRelease : (e, gesture) => {
        let swipeDiff= gesture.x0-gesture.moveX
        console.log(gesture.x0,gesture.moveX)
        console.log(swipeDiff)
        if(swipeDiff>50){
          this.props.onLeftSwipe()
        } else if(swipeDiff<-50){
          this.props.onRightSwipe()
        } else {
          Animated.spring(
            this.state.pan,
            { toValue: {x:0, y:0} }
          ).start();
        }
        this.state.pan.flattenOffset()
      }
    });

  }

  render(){
    return(
      <Animated.View
        {...this.panResponder.panHandlers}
        style={[
          this.state.pan.getLayout(),
          this.props.style,
        ]}
        >
        {this.props.children}
      </Animated.View>
    )
  }
}
