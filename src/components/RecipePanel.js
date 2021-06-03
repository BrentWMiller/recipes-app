import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import DraggablePanel from 'react-native-draggable-panel';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react/cjs/react.development';
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
      <View style={{ padding: 32 }}>
        <Text style={[TYPOGRAPHY.heading]}>{ panel.title }</Text>

        <RecipeForm />
      </View>
    </DraggablePanel>
  );
}

export default EditRecipe;