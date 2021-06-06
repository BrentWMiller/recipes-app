import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { saveRecipe } from '~store/recipes';
import AppButton from './AppButton';
import EmojiPicker from './EmojiPicker';
import IngredientsInputList from './IngredientsInputList';
import InputWithLabel from './InputWithLabel';

function RecipeForm(props) {
  const dispatch = useDispatch();
  const uid = useSelector(state => state.userReducer.user.uid);

  const { navigation } = props;

  const [name, setName] = useState('');
  const [emoji, setEmoji] = useState('');
  const [time, setTime] = useState(0);
  const [servings, setServings] = useState(1);
  const [ingredients, setIngredients] = useState([]);

  const submit = async () => {
    try {
      await dispatch(saveRecipe({
        name,
        emoji,
        time,
        servings,
        ingredients,
      }, uid))

      navigation.navigate('Home');
    } catch (error) {
     alert(error);
    }
  }

  return (
    <View>
      <InputWithLabel
        style={{marginBottom: 8}}
        label="Name"
        placeholder="Give your recipe a name"
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

      <View style={{flexDirection: 'row', marginBottom: 8}}>
        <InputWithLabel
          style={{width: '50%', marginRight: 4}}
          label="Time"
          placeholder="1hr 15mins"
          onChangeText={(text) => setTime(text)}
          autoFocus={false}
          autoCorrect={false}
        />

        <InputWithLabel
          style={{width: '50%', marginLeft: 4}}
          label="Servings"
          placeholder="2-4"
          onChangeText={(text) => setServings(text)}
          autoFocus={false}
          autoCorrect={false}
        />
      </View>

      <IngredientsInputList
        title="Ingredients"
        updatedIngredients={(ingredients) => setIngredients(ingredients)}
      />
      <AppButton title="Save recipe" type="dark" style={{ marginTop: 40 }} onPress={() => submit()} />
    </View>
  );
}

export default RecipeForm;