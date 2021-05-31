import React from 'react';
import { Keyboard,  TouchableWithoutFeedback } from 'react-native';

function DismissKeyboard({ children }) {
  const dismiss = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={() => dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
}

export default DismissKeyboard;