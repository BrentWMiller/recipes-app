import React from 'react';
import { View, Text } from 'react-native';
import { useState } from 'react/cjs/react.development';
import AppButton from './AppButton';
import EmojiPicker from './EmojiPicker';
import InputWithLabel from './InputWithLabel';
import RecipeBlock from './RecipeBlock';

function RecipeForm(props) {
  const [name, setName] = useState('');
  const [emoji, setEmoji] = useState([]);
  const [time, setTime] = useState(0);
  const [ingredients, setIngredients] = useState([]);

  return (
    <View>
      <View style={{ marginBottom: 20 }}>
        <RecipeBlock recipe={{name, time, ingredients: ingredients.length, emoji}}/>
      </View>

      <InputWithLabel
        style={{marginBottom: 8}}
        label="Name"
        onChangeText={(text) => setName(text)}
        autoFocus={false}
        autoCorrect={true}
        returnKeyType="next"
      />
      <EmojiPicker title="Select an emoji" string={ name ? name : '' } pickedEmoji={(emoji) => setEmoji(emoji)}/>

      <AppButton title="Save recipe" type="dark" style={{ marginTop: 40 }} onPress={() => console.log('save')} />
    </View>
  );
}

export default RecipeForm;