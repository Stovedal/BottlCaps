import React, { Component } from 'react'
import { Animated, PanResponder, View } from 'react-native'
import { CurtainContentWrapper, StandardButtonWrapper, StandardButtonText, CurtainKnob } from '../../buttons/components/styledComponents'



export default class Curtain extends Component {

  constructor(props){
    super(props)
    this.state = {
      fadeIn: new Animated.Value(0),
      pan: new Animated.ValueXY(),
    }

    this.panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderGrant: (e, gestureState) => {
        this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
        this.state.pan.setValue({x: 0, y: 0});
      },
        onPanResponderMove: Animated.event([null,{
            dy : this.state.pan.y
        }]),
        onPanResponderRelease : (e, gesture) => {
          if(gesture.moveY<210){
            Animated.timing(
                this.state.pan,
                {toValue:{x:0,y:0}}
            ).start();
          } else {
            Animated.timing(
                this.state.pan,
                {toValue:{x:0,y:420}}
            ).start();
          }
          this.state.pan.flattenOffset();
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
    return(
      <Animated.View
        style={[{ minHeight: this.state.pan.y }, this.props.style]}
        >
          <CurtainContentWrapper>
            <Animated.View removeClippedSubviews={false} style={[{ height: this.state.pan.y }, this.props.style]}>
               {this.props.children}
            </Animated.View>
          </CurtainContentWrapper>
        <Animated.View {...this.panResponder.panHandlers}>
          <CurtainKnob>
            <StandardButtonText>
              {this.props.knobTitle}
            </StandardButtonText>
          </CurtainKnob>
        </Animated.View>
      </Animated.View>
    )
  }
}
