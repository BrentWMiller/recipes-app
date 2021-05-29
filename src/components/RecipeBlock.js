import React from 'react';
import { View, Text } from 'react-native';

function RecipeBlock(props) {
  const { recipe } = props;
  
  return (
    <View>
      <Text>{ recipe.name }</Text>
    </View>
  );
}

export default RecipeBlock;