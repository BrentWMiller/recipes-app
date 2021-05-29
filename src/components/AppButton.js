import React from "react";
import { Text, TouchableOpacity } from "react-native";
import BUTTONS from "~styles/buttons";

const AppButton = (props) => {
  const { title, type, onPress, style } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[BUTTONS[type ? type : 'default'], {...style}]}>{ title }</Text>
    </TouchableOpacity>
  )
}

export default AppButton;