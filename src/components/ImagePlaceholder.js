import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import COLORS from '~styles/colors';
import FONTS from '~styles/fonts';

function ImagePlaceholder(props) {
  let { title, image, count, size, bgColor, textColor, style } = props;

  // Set defaults
  count = count ? count : 2;
  size = size ? size : 50;
  bgColor = bgColor ? bgColor : COLORS.black;
  textColor = textColor ? textColor : COLORS.white;

  const styles = StyleSheet.create({
    wrapper: {
      overflow: 'hidden',
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
    },
    image: {
      width: size,
      height: size
    }
  });


  return (
    <View style={[style, styles.wrapper]}>
      {
        image
        ? <Image style={styles.image} source={image} />
        : <Text style={styles.title}>{ title.substring(0, count) }</Text>
      }
    </View>
  );
}

export default ImagePlaceholder;