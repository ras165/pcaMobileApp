import React from 'react';
import { Button, View, Text } from 'react-native';
class LoginScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Login Screen with multiple options to go to different Screens </Text>
          <Button
            title="Go to Register Screen"
            onPress={() => this.props.navigation.navigate('Register')}
          />
          <Text>  *****  </Text>
          <Button
            title="Go to Email Register Screen"
            onPress={() => this.props.navigation.navigate('EmailRegister')}
          />

          <Text>  *****  </Text>
          <Button
            title="Go to Forgot Password Screen"
            onPress={() => this.props.navigation.navigate('ForgotPassword')}
          />

           <Text>  *****  </Text>
          <Button
            title="Successful Login....Go to main page"
            onPress={() => this.props.navigation.navigate('Home')}
          />



        </View>
      );
    }
}

export default LoginScreen;


  