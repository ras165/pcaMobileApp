import React from 'react';
import { Button, View, Text } from 'react-native';
class HomeScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen </Text>
          <Button
            title="Welcome"
             
          />
        </View>
      );
    }
}

export default HomeScreen;


  