import React from 'react';
import { Text, View } from 'react-native';
import { getTimebasedGreeting } from '~helpers/greetings';
import TYPOGRAPHY from '~styles/typography';

function Greeting(props) {
  let { greeting, name } = props;
  greeting = greeting ? greeting : getTimebasedGreeting();

  return (
    <View>
      <Text style={{fontSize: 20}}>{ greeting }</Text>
      <Text style={[TYPOGRAPHY.heading]}>{ name }</Text>
    </View>
  );
}

export default Greeting;