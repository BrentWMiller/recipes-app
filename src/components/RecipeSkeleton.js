import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import COLORS from '~styles/colors';

function RecipeSkeleton(props) {
  return (
    <View style={styles.block}></View>
  );
}

const styles = StyleSheet.create({
  block: {
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    height: 75,
    marginTop: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.gray[100],
    borderRadius: 25,
    backgroundColor: COLORS.gray[100]
  }
})

export default RecipeSkeleton;