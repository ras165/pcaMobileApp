import React from 'react';
import { Button, View, Text } from 'react-native';
class SplashScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>First Screen </Text>
          <Button
            title="Go to Login Screen"
            onPress={() => this.props.navigation.navigate('Login')}
           
          />
        </View>
      );
    }
}

export default SplashScreen;


  