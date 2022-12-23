import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../HomeScreen/HomeScreen';
import Profile from '../Profile';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TrackOrder from '../TrackOrder';

const Tab = createMaterialBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator initialRouteName="HomeScreen">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <Icon name="home" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="TrackOrder"
        component={TrackOrder}
        options={{
          tabBarIcon: () => <Icon name="history" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <Icon name="perm_identity" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
