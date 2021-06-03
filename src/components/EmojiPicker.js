import React from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react/cjs/react.development';
import { convertToEmojis, foodEmojis } from '~helpers/emojis';
import COLORS from '~styles/colors';
import FONTS from '~styles/fonts';
import Plus from "~svgs/plus.svg";
import Minus from "~svgs/minus.svg";
import APP from '~styles/app';

function EmojiPicker(props) {
  const { title, string } = props;
  const [selected, setSelected] = useState(null);
  const [showFullPicker, setShowFullPicker] = useState(false);
  const stringToEmojis = convertToEmojis(string, 4);

  const emojiSelected = (emoji) => {
    const value = selected === emoji ? null : emoji;
    setSelected(value);
    props.pickedEmoji(value);
  };

  return (
    <View>
      <Text style={[ APP.inputLabel ]}>{ title }</Text>
      <View style={{ flexDirection: 'row' }}>
        {stringToEmojis.map((emoji, index) => 
          <Pressable
            key={ index }
            style={[ styles.emojiWrapper, { backgroundColor: selected === emoji ? COLORS.gray[100] : COLORS.white }]}
            onPress={() => emojiSelected(emoji)}
          >
            <Text style={{ fontSize: 35 }}>{ emoji }</Text>
          </Pressable>
        )}
        <Pressable
          style={[ styles.emojiWrapper]}
          onPress={() => setShowFullPicker(!showFullPicker)}
        >
          <Plus width="20" height="20" color={COLORS.black} style={{display: showFullPicker ? 'none': 'full'}}/>
          <Minus width="20" height="3" color={COLORS.black} style={{display: showFullPicker ? 'full': 'none'}}/>
        </Pressable>
      </View>

      <SafeAreaView>
        <ScrollView style={[styles.picker, {display: showFullPicker ? 'flex': 'none'}]}>
          <View style={[styles.pickerContainer]}>
            {foodEmojis.map((emoji, index) => 
              <Pressable
                key={ index }
                style={[ styles.emojiWrapperSmall, { backgroundColor: selected === emoji.emoji ? COLORS.gray[300] : COLORS.white }]}
                onPress={() => emojiSelected(emoji.emoji)}
              >
                <Text style={{ fontSize: 20 }}>{ emoji.emoji }</Text>
              </Pressable>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
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
  },
  emojiWrapperSmall: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    margin: 3,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.gray[100],
    backgroundColor: COLORS.white
  },
  picker: {
    height: 225,
    marginTop: 20,
    borderRadius: 5,
  },
  pickerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingVertical: 3,
    backgroundColor: COLORS.gray[100]
  }
})

export default EmojiPicker;