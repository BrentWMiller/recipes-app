import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import RecipeForm from '~components/RecipeForm';
import APP from '~styles/app';
import COLORS from '~styles/colors';
import TYPOGRAPHY from '~styles/typography';

function AddRecipeScreen({ navigation }) {

  return (
    <KeyboardAwareScrollView extraHeight={ 100 } style={APP.container}>
      <SafeAreaView>
        <Text style={[TYPOGRAPHY.heading]}>Add recipe</Text>
        <Text style={[TYPOGRAPHY.body, { marginTop: 8, color: COLORS.gray[600] }]}>Create a brand new favorite or add a classic recipe.</Text>
        <RecipeForm navigation={navigation} />
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}

export default AddRecipeScreen;