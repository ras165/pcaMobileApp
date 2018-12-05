import React from 'react';
import { Button, View, Text } from 'react-native';
class ChatScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Chat Screen Screen </Text>
          <Button
            title="Welcome"
            onPress={() => this.props.navigation.navigate('ChatNext')}
          />
        </View>
      );
    }
}

export default ChatScreen;


  