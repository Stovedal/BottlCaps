import {
  COLOR_PRIMARY,
  COLOR_SECONDARY,
  COLOR_BACKGROUND
} from '../../../../styles/colors'

export const getDayCircleColor = (props) => {
  if(props.isSelected){
    return COLOR_PRIMARY
  }
  if(props.isToday){
    return 'lightgrey'
  }
  return COLOR_BACKGROUND
}

export const getEventIndicatorColor = (props) => {
  if(props.isSelected){
    return COLOR_BACKGROUND
  }
  if(props.isToday){
    return COLOR_BACKGROUND
  }
  return '#000'
}

export const getDayTextColor = (props) => {
  if(props.isSelected){
    return COLOR_BACKGROUND
  }
  if(props.isToday){
    return COLOR_BACKGROUND
  }
  return '#000'
}
