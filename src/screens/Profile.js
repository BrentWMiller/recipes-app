import React from 'react';
import { Button, SafeAreaView, ScrollView, Text } from 'react-native';
import { firebase } from '~utils/firebase';

const user = {
  name: 'Brent Miller',
  email: 'brentm@recipes.com'
}

function ProfileScreen({navigation}) {
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