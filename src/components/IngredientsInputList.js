import React, { useRef, useState } from 'react';
import { View, Text, Button, Pressable, StyleSheet, TextInput } from 'react-native';
import APP from '~styles/app';
import Minus from "~svgs/minus.svg";
import Grip from "~svgs/grip.svg";
import COLORS from '~styles/colors';

function IngredientsInputList(props) {
  const { title } = props;
  const [ingredients, setIngredients] = useState([{
    id: new Date().getTime(),
    value: '',
  }]);

  const updateIngredients = (ingredients) => {
    props.updatedIngredients(ingredients);
  };

  const addIngredient = () => {
    setIngredients([...ingredients, {
      id: new Date().getTime(),
      value: '',
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
          <IngredientInput
            key={ ingredient.id }
            ingredient={ ingredient }
            remove={(id) => removeIngredient(id)}
            add={() => addIngredient()}
            updateAllIngredients={() => updateIngredients(ingredients)}
          />
        )
      })}

      <Button
        title="+ Add ingredient"
        onPress={() => addIngredient()}
      ></Button>
    </View>
  );
}

const IngredientInput = (props) => {
  const { ingredient } = props;
  const [value, setValue] = useState(ingredient.value);
  const [isFocused, setIsFocused] = useState(false);

  const saveIngredient = (text, type) => {
    setValue(text);
    ingredient.value = text;

    props.updateAllIngredients();
  };

  return (
    <View style={{position: 'relative', flexDirection: 'row', marginBottom: 8}}>
      <TextInput
        value={ value }
        placeholder="1 cup of sugar"
        style={[APP.input, isFocused && APP.inputFocused, styles.input]}
        autoCapitalize="none"
        onChangeText={(text) => saveIngredient(text, 'value')}
        onSubmitEditing={() => props.add()}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
      />

      <Pressable
        style={[styles.inputButton, {right: 5}]}
      >
        <Grip width="20" height="9" color={COLORS.gray[400]}/>
      </Pressable>

      <Pressable
        style={[styles.inputButton, {left: 5}]}
        onPress={() => props.remove(ingredient.id)}
      >
        <Minus width="20" height="3" color={COLORS.gray[400]}/>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    flexGrow: 1,
    paddingHorizontal: 50
  },
  inputButton: {
    position: 'absolute',
    top: 2,
    height: 50,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default IngredientsInputList;