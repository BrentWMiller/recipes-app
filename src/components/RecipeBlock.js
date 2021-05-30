import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import COLORS from '~styles/colors';
import TYPOGRAPHY from '~styles/typography';
import TimeFormatted from './TimeFormatted';

function RecipeBlock(props) {
  const { recipe, first } = props;

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
      <Text style={[TYPOGRAPHY.subheading, {marginBottom: 8}]}>{ recipe.name }</Text>

      <TimeFormatted time={recipe.time} style={[TYPOGRAPHY.body, {color: COLORS.gray[500]}]} />
      <Text style={[TYPOGRAPHY.body, {color: COLORS.gray[500]}]}>{ recipe.ingredients } ingredients</Text>
    </View>
  );
}

export default RecipeBlock;