import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import COLORS from '~styles/colors';
import FONTS from '~styles/fonts';
import TYPOGRAPHY from '~styles/typography';

function Tag(props) {
  const { label } = props;

  return (
    <View style={styles.tag}>
      <Text style={styles.label}>{ label }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tag: {
    paddingHorizontal: 12,
    borderRadius: 15,
    backgroundColor: COLORS.black
  },
  label: {
    ...TYPOGRAPHY.body,
    fontFamily: FONTS.medium500,
    color: COLORS.white,
  }
})

export default Tag;