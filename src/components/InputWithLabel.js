import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import APP from '~styles/app';
import COLORS from '~styles/colors';

function InputWithLabel(props) {
  const label = props.label;
  const description = props.description;
  const [isFocused, setIsFocused] = React.useState(false);

  let height = 50;
  let paddingVertical = 0;

  if (props.multiline && props.numberOfLines) {
    height = 50 * props.numberOfLines / 1.425;
    paddingVertical = 15;
  }

  return (
    <View style={[props.style]}>
      <Text style={[APP.inputLabel, {display: label ? 'flex' : 'none'}]}>{ label }</Text>
      <TextInput
        style={[APP.input, { height, paddingVertical }]}
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
        multiline={props.multiline}
        numberOfLines={props.numberOfLines}
        textAlignVertical={props.textAlignVertical}
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