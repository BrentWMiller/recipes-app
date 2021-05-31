import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import APP from '~styles/app';
import TYPOGRAPHY from '~styles/typography';

function LoginForm(props) {
  return (
    <SafeAreaView>
      <View style={[APP.container]}>
        <Text style={[TYPOGRAPHY.heading]}>Login</Text>
      </View>
    </SafeAreaView>
  );
}

export default LoginForm;