import React, { Component } from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'
import MoveableButton from '../../components/buttons/MoveableButton'
import ExpandingButton from '../../components/buttons/ExpandingButton'
import CurtainWithContent from '../../components/buttons/CurtainWithContent'
import Calendar from '../../components/Calendar'
import events from './mocks'
import Moveable from '../../components/animated/Moveable'
import PinkLemonade from '../../components/BottlCaps/PinkLemonade'
import DonaldCola from '../../components/BottlCaps/DonaldCola'

export default class HomeScreen extends Component {

  constructor(props){
    super(props)
    this.state = {
      selected: null,
    }
  }

  selectDate(date){
    console.log(date)
    this.setState({
      selected: date
    })
  }

  render(){
    return(
      <View style={{backgroundColor:'white', flex:1}}>
        <CurtainWithContent knobTitle={"Curtain!"} onPress={()=>console.log("CurtainPress!")}>
          <Calendar
            events={events}
            onDateSelect={this.selectDate.bind(this)}
          />
        </CurtainWithContent>
        <View style={{flex:1, backgroundColor:'white'}}>
          <MoveableButton onPress={()=>console.log("MoveableButtonPress!")}>
            Hallå hallå!
          </MoveableButton>
          <ExpandingButton size={100} onPress={()=>console.log("ExpandingButtonPress")}>
            I grow!
          </ExpandingButton>
          <PinkLemonade/>
          <DonaldCola/>
        </View>
      </View>
    )
  }
}
