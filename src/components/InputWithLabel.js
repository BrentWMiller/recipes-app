import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import APP from '~styles/app';
import COLORS from '~styles/colors';
import FONTS from '~styles/fonts';

function InputWithLabel(props) {
  const label = props.label;
  const description = props.description;
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <View style={[props.style]}>
      <Text style={[APP.inputLabel, {display: label ? 'flex' : 'none'}]}>{ label }</Text>
      <TextInput
        style={APP.input}
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
      <Text style={[styles.description, {marginTop: description ? 8: 0}]}>{ description }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  description: {
    fontSize: 14,
    color: COLORS.gray[500]
  }
})

export default InputWithLabel;