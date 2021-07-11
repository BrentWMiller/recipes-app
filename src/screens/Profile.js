import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AppButton from '~components/AppButton';
import { signOut } from '~store/user';
import APP from '~styles/app';
import TYPOGRAPHY from '~styles/typography';

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
      <ScrollView style={[APP.container]}>
        <View style={{marginBottom: 40}}>
          <Text style={[TYPOGRAPHY.heading]}>{ user.name }</Text>
          <Text style={[TYPOGRAPHY.body]}>{ user.email }</Text>
        </View>

        <AppButton onPress={() => logout()} title="Sign out" type="dark"></AppButton>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ProfileScreen;