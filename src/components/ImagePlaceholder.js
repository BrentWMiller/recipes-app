import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import COLORS from '~styles/colors';
import FONTS from '~styles/fonts';

function ImagePlaceholder(props) {
  let { title, image, count, size, bgStyle, textStyle, style } = props;

  // Set defaults
  count = count ? count : 2;
  size = size ? size : 50;
  bgStyle = bgStyle ? [bgStyle] : {backgroundColor: COLORS.black};
  textStyle = textStyle ? [textStyle] : {color: COLORS.white};

  const styles = StyleSheet.create({
    wrapper: {
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
      width: size,
      height: size,
      borderRadius: 15,
    },
    title: {
      fontSize: 16,
      fontFamily: FONTS.medium500,
      textTransform: 'uppercase',
      textAlign: 'center',
    },
    image: {
      width: size,
      height: size
    }
  });

  title = count === 'emoji' ? title : title.substring(0, count);

  return (
    <View style={[style, styles.wrapper, bgStyle]}>
      {
        image
        ? <Image style={styles.image} source={image} />
        : <Text style={[styles.title, textStyle]}>{ title }</Text>
      }
    </View>
  );
}

export default ImagePlaceholder;