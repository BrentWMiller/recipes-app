import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import COLORS from '~styles/colors';
import FONTS from '~styles/fonts';

function UserAvatar(props) {
  const { onPress, initials } = props;

  return (
    <Pressable onPress={onPress} style={styles.wrapper}>
      <Text style={styles.initials}>{ initials.substring(0,2) }</Text>
    </Pressable>
  );
}

styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    backgroundColor: COLORS.black,
    borderRadius: 15,
  },
  initials: {
    fontSize: 16,
    fontFamily: FONTS.medium500,
    textTransform: 'uppercase',
    color: COLORS.white
  }
});

export default UserAvatar;