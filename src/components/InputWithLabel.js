import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import COLORS from '~styles/colors';
import FONTS from '~styles/fonts';

function InputWithLabel(props) {
  const label = props.label;
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <View style={[props.style]}>
      <Text style={styles.label}>{ label }</Text>
      <TextInput
        style={styles.input}
        keyboardType={props.keyboardType ?? 'default'}
        contextMenuHidden={props.contextMenuHidden ?? false}
        blurOnSubmit={props.disableReturn !== true}
        ref={props.ref}
        onSubmitEditing={props.onSubmitEditing}
        returnKeyType={props.returnKeyType ?? 'default'}
        textContentType={props.textContentType}
        enablesReturnKeyAutomatically={props.enablesReturnKeyAutomatically}
        autoCompleteType={props.autoCompleteType}
        autoFocus={props.autoFocus}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        autoFocus={props.autoFocus}
        value={props.value}
        secureTextEntry={props.secureTextEntry}
        autoCorrect={props.autoCorrect}
        autoCapitalize={props.autoCapitalize}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    marginBottom: 8,
    fontSize: 16,
    fontFamily: FONTS.semibold600,
    color: COLORS.gray[600]
  },
  input: {
    height: 50,
    paddingHorizontal: 15,
    fontSize: 16,
    borderRadius: 5,
    fontFamily: FONTS.medium500,
    color: COLORS.gray[500],
    backgroundColor: COLORS.gray[100],
  }
})

export default InputWithLabel;