import React from 'react';
import { View} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import RecipeForm from '~components/RecipeForm';
import APP from '~styles/app';

function AddRecipeScreen({ navigation }) {

  return (
    <KeyboardAwareScrollView extraHeight={ 40 }>
      <View style={APP.containerWider}>
        <RecipeForm navigation={navigation} />
      </View>
    </KeyboardAwareScrollView>
  );
}

export default AddRecipeScreen;