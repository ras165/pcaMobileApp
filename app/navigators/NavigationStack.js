import { createStackNavigator, DrawerActions , createDrawerNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import SplashScreen from './screens/Splash';
import LoginScreen from './screens/Login';
import RegisterScreen from './screens/Register';
import EmailRegisterScreen from './screens/EmailRegister';
import ForgotPasswordScreen from './screens/ForgotPassword';
import SettingsScreen from './screens/Settings';
import HomeScreen from './screens/Home';
import ChatScreen from './screens/Chat';
import ChatNextScreen from './screens/ChatNext';
import HealthAccessScreen from './screens/HealthAccess';
import Sidebar from './screens/Sidebar';
import { ViewPagerAndroid } from 'react-native-gesture-handler';
import { TouchableOpacity, View } from 'react-native';



const ChatStack = createStackNavigator(
    {
        Chat: {
            screen: ChatScreen
             
        },
        ChatNext: {
            screen: ChatNextScreen
        },
});

const MainTabStack =  createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                header: null, 
            }
        },
        ChatTab: {
            screen: ChatStack,
            navigationOptions: {
                header: null, 
            }
        },
        HealthAccessTab: {
            screen: HealthAccessScreen,
            navigationOptions: {
                header: null, 
            }
        },
        MoreScreen: {
            screen: View,
            navigationOptions: ({navigation}) => ({
                title: '>>> ',
                headerTintColor: 'white',
                tabBarOnPress: ({ navigation }) => {
                        navigation.openDrawer();     
                }
            })
        }
        
    });

    
const DrawerScreen = createDrawerNavigator(
    {
        MainStack: {
            screen: MainTabStack,
        }
    },
        {
            headerMode: 'none',
            drawerWidth: 100,
            drawerPosition: 'right',
            drawerBackgroundColor: 'blue',
            contentComponent: Sidebar,
            initialRouteName: 'MainStack',
            unmountInactiveRoutes: true
          }
    
);
 
const LoginStack = createStackNavigator(
    {
        Splash: {
            screen: SplashScreen,
            navigationOptions: {
            header: null, 
            },
            animationType: 'none'
        },
        Login: {
            screen: LoginScreen,
            navigationOptions: {
            header: null, 
            }
        },
        Register: {
            screen: RegisterScreen,
            navigationOptions: {
            header: null, 
            }
        },
        EmailRegister: {
            screen: EmailRegisterScreen,
            navigationOptions: {
            header: null, 
            }
        },
        ForgotPassword: {
            screen: ForgotPasswordScreen,
            navigationOptions: {
            header: null, 
            }
        },
        MainPage: {
            screen:  DrawerScreen   
        }
    }
);

export default createAppContainer(LoginStack);
 