import React from "react";
import { Pressable, SafeAreaView, Text } from "react-native";
import BUTTONS from "~styles/buttons";

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Home Screen</Text>
      <Pressable onPress={() => navigation.navigate('Test')}>
        <Text style={[BUTTONS.dark]}>Go to test screen</Text>
      </Pressable>
    </SafeAreaView>
  );
}

export default HomeScreen;