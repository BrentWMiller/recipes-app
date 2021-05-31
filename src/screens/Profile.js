import React from 'react';
import { Button, SafeAreaView, ScrollView, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { firebase } from '~utils/firebase';

function ProfileScreen({navigation}) {
  const user = useSelector(state => state.userReducer.user);

  return (
    <SafeAreaView>
      <ScrollView>
        <Text>{ user.email }</Text>
        <Text>{ user.name }</Text>
        <Button onPress={() => firebase.auth().signOut()} title="Sign out"></Button>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ProfileScreen;