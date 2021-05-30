import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import COLORS from '~styles/colors';
import TYPOGRAPHY from '~styles/typography';

function RecipeBlock(props) {
  const { recipe, first } = props;
  const timeToString = '';

  const styles = StyleSheet.create({
    wrapper: {
      overflow: 'hidden',
      marginTop: first ? 0 : 16,
      padding: 25,
      borderWidth: 1,
      borderColor: COLORS.gray[200],
      borderRadius: 25,
      backgroundColor: COLORS.white
    }
  });

  return (
    <View style={styles.wrapper}>
      <Text style={[TYPOGRAPHY.subheading]}>{ recipe.name }</Text>
      <Text>{ recipe.time }</Text>
      <Text>{ recipe.ingredients }</Text>
    </View>
  );
}

export default RecipeBlock;