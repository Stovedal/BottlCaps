
import React, { Component } from 'react'
import {
  View,
  Text,
} from 'react-native'
import Calendar from 'react-native-calendar'
import { calendarStyle } from './styles'
import Day from './components/Day'
import Swipeable from '../animated/Swipeable'

export default class CalendarComponent extends Component {
  onSwipeNext(event){
    console.log("swipenext")
  }

  onSwipePrev(event){
    console.log("swipeprev")

  }
  render(){
    return (
/*      <Swipeable
        onRightSwipe={this.onSwipeNext}
        onLeftSwipe={this.onSwipePrev}
        >*/
        <Calendar
          showControls={true}
          dayHeadings={["Sön","Mån","Tis","Ons","Tors","Fre","Lör"]}
          monthNames={["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","Oktober","November","December"]}
          onSwipeNext={this.onSwipeNext}    // Callback for forward swipe event
          onSwipePrev={this.onSwipePrev}    // Callback for back swipe event
          events={this.props.events}
          renderDay={(date)=><Day {...date}/>}
          customStyle={calendarStyle}
          onDateSelect={(date)=>this.props.onDateSelect(date)}
        />
    )
  }
}
//</Swipeable>
