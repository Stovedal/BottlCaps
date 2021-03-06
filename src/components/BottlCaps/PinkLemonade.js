import React from 'react'
import { Image } from 'react-native'
import MoveableSpinning from '../animated/MoveableSpinning'

export default (props) => {
  let size = props.size ? props.size : 200
  return (
    <MoveableSpinning spinWhileUp={true} style={{width: size }}>
      <Image source={require('./images/PinkLemonade_BottlCap.png')} style={{height:size, width:size}}/>
    </MoveableSpinning>
  )
}
