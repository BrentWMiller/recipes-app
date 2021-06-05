import React from 'react';
import { View, Text} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import RecipeForm from '~components/RecipeForm';
import TYPOGRAPHY from '~styles/typography';

function EditRecipeScreen(props) {
  const { navigation } = props;

  return (
    <KeyboardAwareScrollView extraHeight={ 40 }>
      <View style={{ padding: 32 }}>
        <Text style={[TYPOGRAPHY.heading]}>Add a Recipe</Text>

        <RecipeForm />
      </View>
    </KeyboardAwareScrollView>
  );
}

export default EditRecipeScreen;