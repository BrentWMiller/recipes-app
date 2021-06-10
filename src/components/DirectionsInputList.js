import React, { useRef, useState } from 'react';
import { View, Text, Button, Pressable, StyleSheet, TextInput } from 'react-native';
import APP from '~styles/app';
import Minus from "~svgs/minus.svg";
import Grip from "~svgs/grip.svg";
import COLORS from '~styles/colors';

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
            key={ direction.id }
            direction={ direction }
            remove={(id) => removeDirection(id)}
            add={() => addDirection()}
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
  const { direction } = props;
  const [value, setValue] = useState(direction.value);

  const saveDirection = (text, type) => {
    setValue(text);
    direction.value = text;

    props.updateAllDirections();
  };

  return (
    <View style={{position: 'relative', flexDirection: 'row', marginBottom: 8}}>
      <TextInput
        value={ value }
        placeholder="Stir the mixture until smooth"
        style={[APP.input, styles.input]}
        multiline={true}
        numberOfLines={2}
        textAlignVertical={true}
        autoCapitalize="none"
        onChangeText={(text) => saveDirection(text, 'value')}
        onSubmitEditing={() => props.add()}
      />

      <Pressable
        style={[styles.inputButton, {right: 5}]}
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
  input: {
    flexGrow: 1,
    paddingHorizontal: 50,
  },
  inputButton: {
    position: 'absolute',
    top: 0,
    height: 50,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default DirectionsInputList;