import React from 'react';
import { Button, SafeAreaView, ScrollView, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '~store/user';

function ProfileScreen({navigation}) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.userReducer.user);

  const logout = async() => {
    try {
      await dispatch(signOut());
    } catch (error) {
      alert(error);
    }
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Text>{ user.email }</Text>
        <Text>{ user.name }</Text>
        <Button onPress={() => logout()} title="Sign out"></Button>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ProfileScreen;