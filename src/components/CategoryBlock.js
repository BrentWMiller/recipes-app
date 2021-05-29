import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { BlurView } from 'expo-blur';
import COLORS from '~styles/colors';
import FONTS from '~styles/fonts';

const screen = Dimensions.get("screen");

function CategoryBlock(props) {
  const { category, first, last } = props;

  const styles = StyleSheet.create({
    container: {
      paddingLeft: first ? 16 : 8,
      paddingRight: last ? 16 : 8
    },
    wrapper: {
      overflow: 'hidden',
      position: 'relative',
      borderRadius: 25,
    },
    image: {
      width: ((screen.width / 1.25) - (16 * 2)),
      height: screen.width,
    },
    description: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      padding: 32,
    }
  })
  
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image
          style={styles.image}
          source={category.image}
        />

        <View style={styles.description}>
          <Text style={[{color: COLORS.white, fontSize: 22, fontFamily: FONTS.semibold600, marginBottom: 16}]}>{ category.title }</Text>
          <Text style={[{color: COLORS.gray[300], fontSize: 16}]}>{ category.recipesCount } Recipes</Text>
        </View>
      </View>
    </View>
  );
}

export default CategoryBlock;