import React from 'react';
import { Button, View, Text } from 'react-native';
class RegisterScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Register Screen </Text>
          <Button
            title="Go to OTP Verification Screen"
             
          />
        </View>
      );
    }
}

export default RegisterScreen;


  