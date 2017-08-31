import React, { Component } from 'react'
import { Animated, PanResponder, View } from 'react-native'
import { CurtainContentWrapper, StandardButtonWrapper, StandardButtonText, CurtainKnob } from '../../buttons/components/styledComponents'

export default class Curtain extends Component {

  constructor(props){
    super(props)
    this.state = {
      fadeIn: new Animated.Value(0),
      pan: new Animated.ValueXY(),
      contentHeight:0,
      distanceToScreenTop: 0,
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
                {toValue:{x:0, y:this.state.contentHeight+this.state.distanceToScreenTop}}
            ).start();
          }
          this.state.pan.flattenOffset();
        }
    });

  }

  componentDidMount(){
    setTimeout(
      ()=> {
        this.refs.container._component.measure((fx, fy, width, height, px, py)=> {
          this.setState({ distanceToScreenTop: py})
        })
      },
      50
    )
  }

  render(){
    console.log(this.state)

    return(
      <Animated.View
        ref="container"
        style={[{ minHeight: this.state.pan.y }, this.props.style]}
        >
          <CurtainContentWrapper>
            <Animated.View
              removeClippedSubviews={false}
              style={[{ height: this.state.pan.y }, this.props.style]}
              >
              <View onLayout={(event) => {
                this.setState({
                  contentHeight: event.nativeEvent.layout.height
                })
              }}>
               {this.props.children}
              </View>
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
