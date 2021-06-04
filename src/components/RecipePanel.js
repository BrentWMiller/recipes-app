import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import DraggablePanel from 'react-native-draggable-panel';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch } from 'react-redux';
import { setModalVisibility } from '~store/recipes';
import TYPOGRAPHY from '~styles/typography';
import RecipeForm from './RecipeForm';

const screen = Dimensions.get("screen");

function EditRecipe(props) {
  const dispatch = useDispatch();
  const panel = props.panel;

  return (
    <DraggablePanel
      visible={ panel.visible ? panel.visible : false }
      borderRadius={ 25 }
      initialHeight={ screen.height }
      hideOnPressOutside = { true }
      expandable={ true }
      onDismiss={() => dispatch(setModalVisibility(false))}
    >
      <KeyboardAwareScrollView extraHeight={ 40 }>
        <View style={{ padding: 32 }}>
          <Text style={[TYPOGRAPHY.heading]}>{ panel.title }</Text>

          <RecipeForm />
        </View>
      </KeyboardAwareScrollView>
    </DraggablePanel>
  );
}

export default EditRecipe;