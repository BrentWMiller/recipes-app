import React from 'react';
import { View, Text } from 'react-native';
import { useState } from 'react/cjs/react.development';
import AppButton from './AppButton';
import EmojiPicker from './EmojiPicker';
import InputWithLabel from './InputWithLabel';

function RecipeForm(props) {
  const [name, setName] = useState('');
  const [time, setTime] = useState(0);

  return (
    <View>
      <InputWithLabel
        style={{marginBottom: 8}}
        label="Name"
        onChangeText={(text) => setName(text)}
        autoFocus={false}
        autoCorrect={true}
        returnKeyType="next"
      />
      <EmojiPicker title="Select an emoji" string={ name ? name : '' }/>

      <AppButton title="Save recipe" type="dark" onPress={() => console.log('save')} />
    </View>
  );
}

export default RecipeForm;