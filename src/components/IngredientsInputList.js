import React, { useState } from 'react';
import { View, Text, Button, Pressable, StyleSheet } from 'react-native';
import APP from '~styles/app';
import InputWithLabel from './InputWithLabel';
import Minus from "~svgs/minus.svg";
import COLORS from '~styles/colors';

function IngredientsInputList(props) {
  const { title } = props;
  const [ingredients, setIngredients] = useState([{
    id: new Date().getTime(),
    text: ''
  }]);

  const updateIngredients = (ingredients) => {
    props.updatedIngredients(ingredients);
  };

  const addIngredient = () => {
    setIngredients([...ingredients, {
      id: new Date().getTime(),
      text: ''
    }]);
    updateIngredients(ingredients);
  };

  const removeIngredient = (id) => {
    const filteredIngredients = ingredients.filter(ingredient => ingredient.id !== id);
    setIngredients(filteredIngredients)
    updateIngredients(filteredIngredients);
  }

  return (
    <View>
      <Text style={[APP.inputLabel]}>{ title }</Text>

      {ingredients.map((ingredient, index) => {
       return (
         <View key={ingredient.id} style={{flexDirection: 'row'}}>
          <InputWithLabel
            style={{ flexGrow: 1 }}
            onSubmitEditing={() => addIngredient()}
          />
          <Pressable
            style={[styles.inputButton]}
            onPress={() => removeIngredient(ingredient.id)}
          >
            <Minus width="20" height="3" color={COLORS.black}/>
          </Pressable>
        </View>
       );
      })}

      <Button
        title="+ Add ingredient"
        onPress={() => addIngredient()}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  inputButton: {
    height: 50,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default IngredientsInputList;