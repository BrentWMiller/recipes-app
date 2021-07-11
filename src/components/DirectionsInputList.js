import React, { useRef, useState } from 'react';
import { View, Text, Button, Pressable, StyleSheet, TextInput } from 'react-native';
import APP from '~styles/app';
import Minus from "~svgs/minus.svg";
import Grip from "~svgs/grip.svg";
import COLORS from '~styles/colors';
import FONTS from '~styles/fonts';
import NumberedCircle from './NumberedCircle';

function DirectionsInputList(props) {
  const { title } = props;
  const [directions, setDirections] = useState([{
    id: new Date().getTime(),
    value: '',
  }]);

  const updateDirections = (directions) => {
    props.updatedDirections(directions);
  };

  const addDirection = () => {
    setDirections([...directions, {
      id: new Date().getTime(),
      value: '',
    }]);
    updateDirections(directions);
  };

  const removeDirection = (id) => {
    const filteredDirections = directions.filter(direction => direction.id !== id);
    setDirections(filteredDirections)
    updateDirections(filteredDirections);
  }

  return (
    <View>
      <Text style={[APP.inputLabel]}>{ title }</Text>

      {directions.map((direction, index) => {
        return (
          <DirectionInput
            index={ index }
            key={ direction.id }
            direction={ direction }
            remove={(id) => removeDirection(id)}
            updateAllDirections={() => updateDirections(directions)}
          />
        )
      })}

      <Button
        title="+ Add direction"
        onPress={() => addDirection()}
      ></Button>
    </View>
  );
}

const DirectionInput = (props) => {
  const { direction, index } = props;
  const [value, setValue] = useState(direction.value);
  const [isFocused, setIsFocused] = useState(false);

  const saveDirection = (text, type) => {
    setValue(text);
    direction.value = text;

    props.updateAllDirections();
  };

  return (
    <View style={{position: 'relative', flexDirection: 'row', marginBottom: 8}}>
      <TextInput
        value={ value }
        placeholder="Stir the mixture until smooth then leave set for 10 mins"
        style={[APP.input, isFocused && APP.inputFocused, styles.input]}
        multiline={true}
        numberOfLines={2}
        textAlignVertical={true}
        autoCapitalize="none"
        onChangeText={(text) => saveDirection(text, 'value')}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
      />

      <View style={styles.number}>
        <NumberedCircle count={index + 1}></NumberedCircle>
      </View>

      <Pressable
        style={[styles.inputButton, {right: 5}]}
        onPress={() => console.log('move')}
      >
        <Grip width="20" height="9" color={COLORS.gray[400]}/>
      </Pressable>

      <Pressable
        style={[styles.inputButton, {left: 5}]}
        onPress={() => props.remove(direction.id)}
      >
        <Minus width="20" height="3" color={COLORS.gray[400]}/>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  number: {
    position: 'absolute',
    top: 12,
    left: 10
  },
  input: {
    paddingHorizontal: 50,
    width: '100%'
  },
  inputButton: {
    position: 'absolute',
    top: 2,
    height: 50,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default DirectionsInputList;