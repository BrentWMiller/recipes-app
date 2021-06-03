import React from 'react';
import { Text, View } from 'react-native';

function TimeFormatted(props) {
  const { time, style } = props;

  const hours = Math.floor(time / 60);
  const minutes = time % 60;

  let timeString = '';

  if (hours > 0) {
    timeString += `${hours} hr${hours > 1 ? 's' : ''}`;
  }

  if (hours > 0 && minutes > 0) {
    timeString += ' '
  }

  if (minutes > 0) {
    timeString += `${minutes} min${minutes > 1 ? 's' : ''}`;
  }

  if (timeString === '') {
    timeString = 'No time'
  }
  
  return (
    <View>
      <Text style={style}>{ timeString }</Text>
    </View>
  );
}

export default TimeFormatted;