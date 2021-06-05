import React, { useRef, useState } from 'react';
import { View, Text, Button, Pressable, StyleSheet, TextInput } from 'react-native';
import APP from '~styles/app';
import InputWithLabel from './InputWithLabel';
import Minus from "~svgs/minus.svg";
import COLORS from '~styles/colors';

function IngredientsInputList(props) {
  const { title } = props;
  const [ingredients, setIngredients] = useState([{
    id: new Date().getTime(),
    quantity: '',
    name: '',
  }]);

  const updateIngredients = (ingredients) => {
    props.updatedIngredients(ingredients);
  };

  const addIngredient = () => {
    setIngredients([...ingredients, {
      id: new Date().getTime(),
      quantity: '',
      name: '',
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
  const nameRef = useRef();
  const [quantity, setQuantity] = useState(ingredient.quantity);
  const [name, setName] = useState(ingredient.name);

  return (
    <View style={{position: 'relative', flexDirection: 'row', marginBottom: 8}}>
      <TextInput
        value={ quantity }
        placeholder="Quantity"
        style={[APP.input, styles.input, styles.qty, { marginRight: 8}]}
        blurOnSubmit={false}
        returnKeyType="next"
        autoCapitalize="none"
        onChangeText={(text) => setQuantity(text)}
        onSubmitEditing={() => nameRef.current.focus()}
      />
      <TextInput
        ref={nameRef}
        value={ name }
        placeholder="Label"
        style={[APP.input, styles.input, styles.name]}
        autoCapitalize="none"
        onChangeText={(text) => setName(text)}
        onSubmitEditing={() => props.add()}
      />

      <Pressable
        style={[styles.inputButton]}
        onPress={() => props.remove(ingredient.id)}
      >
        <Minus width="20" height="3" color={COLORS.black}/>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    flexGrow: 1,
  },
  qty: {
    width: 115,
    flexGrow: 0
  },
  inputButton: {
    position: 'absolute',
    top: 0,
    right: 10,
    height: 50,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default IngredientsInputList;