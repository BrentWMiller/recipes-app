import React from 'react';
import { View, Text } from 'react-native';
import PlaceholderImg from "~svgs/placeholder.svg";

function CategoryBlock(props) {
  const { category } = props;

  console.log(category);
  
  return (
    <View>
      <PlaceholderImg width="67" height="70"/>
      <Text>{ category.title }</Text>
      <Text>{ category.recipesCount }</Text>
    </View>
  );
}

export default CategoryBlock;