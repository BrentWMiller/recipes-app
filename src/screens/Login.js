import React from 'react';
import { View, Text, SafeAreaView, ScrollView, KeyboardAvoidingView } from "react-native";
import AppLink from '~components/AppLink';
import DismissKeyboard from '~components/DismissKeyboard';
import LoginForm from '~components/LoginForm';
import APP from '~styles/app';
import TYPOGRAPHY from '~styles/typography';

function LoginScreen(props) {
  const navigation = props.navigation;

  return (
    <DismissKeyboard>
      <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
        <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
          <KeyboardAvoidingView behavior="padding" enabled>
            <View style={[APP.container]}>
              <Text style={[TYPOGRAPHY.heading]}>Sign in</Text>

              <LoginForm />

              <AppLink
                title="I need to create an account."
                style={{ marginTop: 20 }}
                onPress={() => navigation.navigate('Create')}
              />
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </SafeAreaView>
    </DismissKeyboard>
  );
}

export default LoginScreen;