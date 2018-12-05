import React from 'react';
import { Button, ScrollView, View, Text } from 'react-native';
import { NavigationActions, DrawerActions } from 'react-navigation';

class Sidebar extends React.Component {

  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer())
  }


    render() {
      return (
        <View>
        <ScrollView>
          <View>
            <View >
              <Text  >
                Something
              </Text>
            </View>
            <View >
              <Text  >
               otherThing
              </Text>
            </View>
            <View  >
              <Text onPress={this.navigateToScreen('Login')}>
              Logout
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
      );
    }
}

export default Sidebar;


  