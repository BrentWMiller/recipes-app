import React from 'react';
import { View, Text, Button } from 'react-native';
import { useState } from 'react/cjs/react.development';
import APP from '~styles/app';

function IngredientsInputList(props) {
  const { title } = props;
  const [ingredients, setIngredients] = useState([]);

  // TODO Add/remove inputs dynamically
  // https://stackoverflow.com/questions/62974370/react-native-add-remove-input-field-on-click-of-a-button

  const updateIngredients = (ingredients) => {
    props.updatedIngredients(ingredients);
  };

  const addIngredient = () => {
    setIngredients([...ingredients, { text: `Test ingredient ${ingredients.length}` }]);
    updateIngredients(ingredients);
  };

  return (
    <View>
      <Text style={[APP.inputLabel]}>{ title }</Text>

      {ingredients.map((ingredient, index) => {
       return <IngredientInput key={index} ingredient={ingredient} onChangeText={(text) => console.log(text)} />;
      })}

      <Button
        title="Add ingredient"
        onPress={() => addIngredient()}
      ></Button>
    </View>
  );
}

const IngredientInput = (props) => {
  const { ingredient } = props;

  return (
    <Text>{ ingredient.text }</Text>
  )
}

export default IngredientsInputList;