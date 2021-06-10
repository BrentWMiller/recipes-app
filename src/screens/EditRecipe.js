import React from 'react';
import { View} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import RecipeForm from '~components/RecipeForm';
import APP from '~styles/app';

function EditRecipeScreen({ navigation }) {

  return (
    <KeyboardAwareScrollView extraHeight={ 100 }>
      <View style={APP.containerWider}>
        <RecipeForm navigation={navigation} />
      </View>
    </KeyboardAwareScrollView>
  );
}

export default EditRecipeScreen;