import React from "react";
import { SafeAreaView, Text } from "react-native";
import { useState } from "react/cjs/react.development";
import AppButton from "~components/AppButton";
import TYPOGRAPHY from "~styles/typography";

const TestScreen = () => {
  return (
    <SafeAreaView>
      <AppButton title="Button Example" />
      <AppButton title="Button Example" type="dark"/>
      <AppButton title="Button Example" type="light" />

      <Text style={[TYPOGRAPHY.heading]}>Heading</Text>
      <Text style={[TYPOGRAPHY.subheading]}>Subheading</Text>
      <Text style={[TYPOGRAPHY.body]}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias sint consectetur esse aut magnam iste earum id excepturi. Qui sequi labore, nisi rerum dolores explicabo.</Text>
    </SafeAreaView>
  );
}

export default TestScreen;