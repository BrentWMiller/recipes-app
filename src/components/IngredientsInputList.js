import React from 'react';
import { View, Text } from 'react-native';
import { useState } from 'react/cjs/react.development';
import APP from '~styles/app';
import IngredientInput from './IngredientInput';

function IngredientsInputList(props) {
  const { title } = props;
  const [ingredients, setIngredients] = useState([]);

  // TODO Add/remove inputs dynamically
  // https://stackoverflow.com/questions/62974370/react-native-add-remove-input-field-on-click-of-a-button

  const updatedIngredients = (ingredients) => {
    // setIngredients(ingredients);
  };

  return (
    <View>
      <Text style={[APP.inputLabel]}>{ title }</Text>

      <IngredientInput />
    </View>
  );
}

export default IngredientsInputList;