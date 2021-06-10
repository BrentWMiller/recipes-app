import React from 'react';
import { SafeAreaView, View} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import RecipeForm from '~components/RecipeForm';
import APP from '~styles/app';

function AddRecipeScreen({ navigation }) {

  return (
    <KeyboardAwareScrollView extraHeight={ 100 }>
      <SafeAreaView style={APP.containerWider}>
        <RecipeForm navigation={navigation} />
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}

export default AddRecipeScreen;