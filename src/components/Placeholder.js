import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import COLORS from '~styles/colors';
import FONTS from '~styles/fonts';

function Placeholder(props) {
  let { title, count, size, bgColor, textColor, style } = props;

  // Set defaults
  count = count ? count : 2;
  size = size ? size : 50;
  bgColor = bgColor ? bgColor : COLORS.black;
  textColor = textColor ? textColor : COLORS.white;

  const styles = StyleSheet.create({
    wrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      width: size,
      height: size,
      backgroundColor: bgColor,
      borderRadius: 15,
    },
    title: {
      fontSize: 16,
      fontFamily: FONTS.medium500,
      textTransform: 'uppercase',
      textAlign: 'center',
      color: textColor
    }
  });


  return (
    <View style={[style, styles.wrapper]}>
      <Text style={styles.title}>{ title.substring(0, count) }</Text>
    </View>
  );
}

export default Placeholder;