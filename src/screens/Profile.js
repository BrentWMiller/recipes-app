import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';

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
      </ScrollView>
    </SafeAreaView>
  );
}

export default ProfileScreen;