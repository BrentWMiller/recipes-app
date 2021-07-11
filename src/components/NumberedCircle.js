import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import COLORS from '~styles/colors';
import FONTS from '~styles/fonts';

function NumberedCircle(props) {
  const { count } = props;

  return (
    <View style={styles.number}>
      <Text style={styles.numberText}>{ count }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  number: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    backgroundColor: COLORS.gray[800],
    borderRadius: 30
  },
  numberText: {
    fontSize: 16,
    fontFamily: FONTS.medium500,
    color: COLORS.white,
  },
})

export default NumberedCircle;