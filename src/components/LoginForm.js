import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useState } from 'react/cjs/react.development';
import { signInWithEmailAndPassword } from '~store/user';
import AppButton from './AppButton';
import InputWithLabel from './InputWithLabel';

function LoginForm(props) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = async() => {
    try {
      await dispatch(signInWithEmailAndPassword(email, password));
    } catch (error) {
      alert(error);
    }
  }
  
  return (
    <View>
      <View style={{marginTop: 20}}>
        <InputWithLabel
          style={{marginBottom: 8}}
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
          onSubmitEditing={() => submit()}
        />
      </View>

      <View style={{marginTop: 20}}>
        <AppButton title="Sign in" type="dark" onPress={() => submit()}></AppButton>
      </View>
    </View>
  );
}

export default LoginForm;