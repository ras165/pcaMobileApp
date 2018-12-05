import React from 'react';
import { Button, View, Text } from 'react-native';
class ForgotPassword extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Forgot Password Screen </Text>
          <Button
            title="Go to Login Again"
            onPress={() => this.props.navigation.navigate('Login')}
          />
        </View>
      );
    }
}

export default ForgotPassword;


  