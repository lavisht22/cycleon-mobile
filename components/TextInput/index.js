import React from 'react';
import { TextInput, View } from 'react-native';

export default function CustomTextInput(props) {
  return (
    <View
      style={{ flex: 1, borderBottomWidth: 2, borderBottomColor: '#FF512F' }}
    >
      <TextInput
        {...props}
        placeholderTextColor="#C0C0C0"
        selectionColor="#FF512F"
        underlineColorAndroid="transparent"
      />
    </View>
  );
}
