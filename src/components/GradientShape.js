import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';
import COLORS from '~styles/colors';

const randomGradient = (obj) => {
  const keys = Object.keys(obj);
  return obj[keys[ keys.length * Math.random() << 0]];
};

function GradientShape(props) {
  let { size, colors, radius, rotation } = props;
  let randomColorPalette = randomGradient(COLORS.gradients);

  colors = colors ? colors : randomColorPalette;

  styles = StyleSheet.create({
    gradient: {
      position: 'absolute',
      top: -size / 4,
      right: -size / 4,
      width: size,
      height: size,
      borderRadius: radius ? radius : (size / 2),
      transform: [
        {rotate: rotation ? `${rotation}deg` : '0deg'}
      ]
    },
  })

  return (
    <LinearGradient style={styles.gradient} colors={colors} />
  );
}

export default GradientShape;