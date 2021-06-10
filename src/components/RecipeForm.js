import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { saveRecipe } from '~store/recipes';
import AppButton from './AppButton';
import DirectionsInputList from './DirectionsInputList';
import EmojiPicker from './EmojiPicker';
import IngredientsInputList from './IngredientsInputList';
import InputWithLabel from './InputWithLabel';

function RecipeForm(props) {
  const dispatch = useDispatch();
  const uid = useSelector(state => state.userReducer.user.uid);

  const { navigation } = props;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [emoji, setEmoji] = useState('');
  const [time, setTime] = useState(0);
  const [servings, setServings] = useState(1);
  const [ingredients, setIngredients] = useState([]);
  const [directions, setDirections] = useState([]);

  const submit = async () => {
    try {
      await dispatch(saveRecipe({
        title,
        description,
        emoji,
        time,
        servings,
        ingredients,
        directions
      }, uid))

      navigation.navigate('Home');
    } catch (error) {
     alert(error);
    }
  }

  return (
    <View style={{ marginVertical: 24}}>
      <InputWithLabel
        style={{marginBottom: 8}}
        label="Title"
        placeholder="Give your recipe a title"
        onChangeText={(text) => setTitle(text)}
        autoFocus={false}
        autoCorrect={true}
      />

      <InputWithLabel
        style={{marginBottom: 8}}
        label="Description"
        placeholder="Briefly describe your recipe"
        onChangeText={(text) => setDescription(text)}
        multiline={true}
        numberOfLines={2}
        textAlignVertical={true}
        autoFocus={false}
        autoCorrect={true}
      />
      
      <View style={{marginBottom: 24}}>
        <EmojiPicker
          title="Select an emoji"
          string={ title ? title : '' }
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

      <DirectionsInputList
        title="Directions"
        updatedDirections={(directions) => setDirections(directions)}
      />

      <AppButton title="Save recipe" type="dark" style={{ marginTop: 40 }} onPress={() => submit()} />
    </View>
  );
}

export default RecipeForm;