import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import LINKS from '~styles/links';

function AppLink(props) {
  const { title, onPress, style } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[LINKS.default, {...style}]}>{ title }</Text>
    </TouchableOpacity>
  );
}

export default AppLink;