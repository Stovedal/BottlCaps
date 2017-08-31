import React, { Component } from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import {
  DayContainer,
  DayCircle,
  DayText,
  EventIndicator,
  EventIndicatorContainer
} from '../styled'
import {
  getDayCircleColor,
  getDayTextColor,
  getEventIndicatorColor,
} from '../utilities'

export default (props) => {
  if(props.filler){
    return (
      <DayContainer style={{backgroundColor:'#fff7f7'}}/>
    )
  }
  return(
    <TouchableWithoutFeedback onPress={()=>props.onPress()}>
      <DayContainer>
        <DayCircle style={{backgroundColor:getDayCircleColor(props)}}>
          <DayText style={{color: getDayTextColor(props)}}>
            {props.caption}
          </DayText>
          <EventIndicatorContainer>
          {
            (props.event) ? props.event.events.map((event, index)=>
              <EventIndicator
                key={index}
                style={{backgroundColor: getEventIndicatorColor(props)}}
              />
            )
            : null
          }
          </EventIndicatorContainer>
        </DayCircle>
      </DayContainer>
    </TouchableWithoutFeedback>
  )
}
