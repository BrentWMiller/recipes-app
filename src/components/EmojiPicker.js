import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react/cjs/react.development';
import { convertToEmojis } from '~helpers/emojis';
import COLORS from '~styles/colors';
import FONTS from '~styles/fonts';
import Plus from "~svgs/plus.svg";

function EmojiPicker(props) {
  const { title, string } = props;
  const [selected, setSelected] = useState(null);
  const stringToEmojis = convertToEmojis(string, 4);

  return (
    <View>
      <Text style={ styles.label }>{ title }</Text>
      <View style={{ flexDirection: 'row' }}>
        {stringToEmojis.map((emoji, index) => 
          <Pressable
            key={ index }
            style={[ styles.emojiWrapper, { backgroundColor: selected === emoji ? COLORS.gray[100] : COLORS.white }]}
            onPress={() => setSelected(emoji)}
          >
            <Text style={{ fontSize: 35 }}>{ emoji }</Text>
          </Pressable>
        )}
        <Pressable
          style={[ styles.emojiWrapper]}
        >
          <Plus width="20" height="20" color={COLORS.black}/>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    marginBottom: 8,
    fontSize: 16,
    fontFamily: FONTS.semibold600,
    color: COLORS.gray[800]
  },
  emojiWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    marginRight: 7,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: COLORS.gray[100],
    backgroundColor: COLORS.white
  }
})

export default EmojiPicker;