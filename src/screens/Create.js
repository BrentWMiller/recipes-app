import React from 'react';
import { View, Text, SafeAreaView } from "react-native";
import AppLink from '~components/AppLink';
import CreateForm from '~components/CreateForm';
import DismissKeyboard from '~components/DismissKeyboard';
import APP from '~styles/app';
import TYPOGRAPHY from '~styles/typography';

function CreateScreen(props) {
  const navigation = props.navigation;

  return (
    <DismissKeyboard>
      <SafeAreaView>
        <View style={[APP.container]}>
          <Text style={[TYPOGRAPHY.heading]}>Create an account</Text>

          <CreateForm />

          <AppLink
            title="I already have an account."
            style={{ marginTop: 20 }}
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </SafeAreaView>
    </DismissKeyboard>
  );
}

export default CreateScreen;