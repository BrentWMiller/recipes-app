import React from "react";
import { SafeAreaView, Text, Pressable } from "react-native";
import BUTTONS from "~styles/buttons";
import TYPOGRAPHY from "~styles/typography";

const TestScreen = () => {

  return (
    <SafeAreaView>
      <Pressable>
        <Text style={[BUTTONS.default]}>Button Example</Text>
      </Pressable>
      <Pressable>
        <Text style={[BUTTONS.dark]}>Button Example</Text>
      </Pressable>
      <Pressable>
        <Text style={[BUTTONS.light]}>Button Example</Text>
      </Pressable>

      <Text style={[TYPOGRAPHY.heading]}>Heading</Text>
      <Text style={[TYPOGRAPHY.subheading]}>Subheading</Text>
      <Text style={[TYPOGRAPHY.body]}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias sint consectetur esse aut magnam iste earum id excepturi. Qui sequi labore, nisi rerum dolores explicabo.</Text>
    </SafeAreaView>
  );
}

export default TestScreen;