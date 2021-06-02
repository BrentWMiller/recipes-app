import React from 'react';
import { View, Text } from 'react-native';
import { useState } from 'react/cjs/react.development';

function EditRecipe(props) {

  return (
    <View>
      <Text>{ props.isVisible ? 'Showing' : 'Hidden' }</Text>
    </View>
  );
}

export default EditRecipe;