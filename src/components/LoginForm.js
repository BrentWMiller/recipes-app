import React, { useRef } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useState } from 'react/cjs/react.development';
import APP from '~styles/app';
import TYPOGRAPHY from '~styles/typography';
import InputWithLabel from './InputWithLabel';

function LoginForm(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    console.log(email, password);
  }
  
  return (
    <SafeAreaView>
      <View style={[APP.container]}>
        <Text style={[TYPOGRAPHY.heading]}>Sign in</Text>

        <View style={{marginTop: 20}}>
          <InputWithLabel
            style={{marginBottom: 16}}
            label="Email"
            onChangeText={(text) => setEmail(text)}
            autoCompleteType="email"
            autoFocus={true}
            autoCorrect={false}
            returnKeyType="next"
            keyboardType="email-address"
          />
          <InputWithLabel
            label="Password"
            onChangeText={(text) => setPassword(text)}
            autoCompleteType="password"
            autoCorrect={false}
            secureTextEntry={true}
            onSubmitEditing={() => login()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default LoginForm;