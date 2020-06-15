import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import AlertScreen from '../screens/AlertScreen';
import ScanScreen from '../screens/ScanScreen';
import BlipScreen from '../screens/BlipScreen';
import ProfileScreen from '../screens/ProfileScreen';


const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon  focused={focused} name="md-home" />,
          tabBarLabel: () =>  <TabBarIcon tabBarOptions={{ showLabel: false }} />
        }}
      />

      <BottomTab.Screen
        name="Alert"
        component={AlertScreen}
        options={{
          showLabel: false,
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-alert" />,
          tabBarLabel: () =>  <TabBarIcon tabBarOptions={{ showLabel: false }} />
        }}
      />

      <BottomTab.Screen
        name="Scan"
        component={ScanScreen}
        options={{
          showLabel: false,
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-camera" />,
          tabBarLabel: () =>  <TabBarIcon tabBarOptions={{ showLabel: false }} />
        }}
      />

      <BottomTab.Screen
        name="Blip"
        component={BlipScreen}
        options={{
          showLabel: false,
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-save" />,
          tabBarLabel: () =>  <TabBarIcon tabBarOptions={{ showLabel: false }} />
        }}
      />

      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          showLabel: false,
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-people" />,
          tabBarLabel: () =>  <TabBarIcon tabBarOptions={{ showLabel: false }} />
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Alert':
      return 'Your Alerts';
    case 'Scan':
      return 'Scan your QR code';
    case 'Blip':
      return 'Your Blips';
    case 'Profile':
      return 'Your Profile';
  }
}
