import React from 'react';
import { View } from 'react-native';
import { useState } from 'react/cjs/react.development';
import AppButton from './AppButton';
import EmojiPicker from './EmojiPicker';
import IngredientsInputList from './IngredientsInputList';
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
        <RecipeBlock
          recipe={{
            name,
            time,
            ingredients: ingredients.length + 1,
            emoji
          }}
        />
      </View>

      <InputWithLabel
        style={{marginBottom: 8}}
        label="Name"
        onChangeText={(text) => setName(text)}
        autoFocus={false}
        autoCorrect={true}
      />
      
      <View style={{marginBottom: 24}}>
        <EmojiPicker
          title="Select an emoji"
          string={ name ? name : '' }
          pickedEmoji={(emoji) => setEmoji(emoji)}
        />
      </View>

      <InputWithLabel
        style={{marginBottom: 8}}
        label="Time (minutes)"
        keyboardType="number-pad"
        onChangeText={(text) => setTime(text)}
        autoFocus={false}
        autoCorrect={false}
      />

      <IngredientsInputList
        title="Ingredients"
        updatedIngredients={(ingredients) => setIngredients(ingredients)}
      />
      <AppButton title="Save recipe" type="dark" style={{ marginTop: 40 }} onPress={() => console.log('save')} />
    </View>
  );
}

export default RecipeForm;