import React from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react/cjs/react.development';
import { convertToEmojis, foodEmojis } from '~helpers/emojis';
import COLORS from '~styles/colors';
import FONTS from '~styles/fonts';
import Plus from "~svgs/plus.svg";

function EmojiPicker(props) {
  const { title, string } = props;
  const [selected, setSelected] = useState(null);
  const [showFullPicker, setShowFullPicker] = useState(false);
  const stringToEmojis = convertToEmojis(string, 4);

  return (
    <View>
      <Text style={ styles.label }>{ title } { selected }</Text>
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
          onPress={() => setShowFullPicker(!showFullPicker)}
        >
          <Plus width="20" height="20" color={COLORS.black}/>
        </Pressable>
      </View>

      <SafeAreaView>
        <ScrollView style={[styles.picker, {display: showFullPicker ? 'flex': 'none'}]}>
          <View style={[styles.pickerContainer]}>
            {foodEmojis.map((emoji, index) => 
              <Pressable
                key={ index }
                style={[ styles.emojiWrapperSmall, { backgroundColor: selected === emoji.emoji ? COLORS.gray[300] : COLORS.white }]}
                onPress={() => setSelected(emoji.emoji)}
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
  },
  emojiWrapperSmall: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 42,
    height: 42,
    margin: 2.25,
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
    backgroundColor: COLORS.gray[100]
  }
})

export default EmojiPicker;