import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import COLORS from '~styles/colors';
import FONTS from '~styles/fonts';
import Dots from "~svgs/dots.svg";
import GradientShape from './GradientShape';

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
      width: ((screen.width / 1.25) - (16 * 2)),
      height: screen.width / 1.5,
      backgroundColor: COLORS.black
    },
    image: {
      width: '100%',
      height: '100%',
    },
    dots: {
      position: 'absolute',
      top: -8,
      transform: [
        {rotate: '180deg'}
      ]
    },
    description: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      padding: 25,
    }
  })
  
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {
          category.image
          ? <Image style={styles.image} source={category.image} />
          : <>
              
              <GradientShape size={200} radius={100} rotation={65}/>
              <Dots style={styles.dots} width="375" height="140" color={COLORS.gray[900]}/>
            </>
        }

        <LinearGradient
          colors={category.image ? ['transparent', 'rgba(0,0,0,0.55)'] : ['transparent', 'transparent']}
          style={styles.description}
        >
          <Text style={[{color: COLORS.white, fontSize: 22, fontFamily: FONTS.bold700, marginBottom: 8}]}>{ category.title }</Text>
          <Text style={[{color: COLORS.gray[200], fontSize: 16}]}>{ category.recipesCount } Recipes</Text>
        </LinearGradient>
      </View>
    </View>
  );
}

export default CategoryBlock;