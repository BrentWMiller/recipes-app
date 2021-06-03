import React from 'react';
import { View, Text, Dimensions, KeyboardAvoidingView } from 'react-native';
import DraggablePanel from 'react-native-draggable-panel';
import { ScrollView } from 'react-native-gesture-handler';
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
      <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'flex-start'}}>
        <KeyboardAvoidingView behavior="padding">
          <View style={{ padding: 32 }}>
            <Text style={[TYPOGRAPHY.heading]}>{ panel.title }</Text>

            <RecipeForm />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </DraggablePanel>
  );
}

export default EditRecipe;