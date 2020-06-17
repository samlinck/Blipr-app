import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Image } from 'react-native';
import * as React from 'react';
import colors from '../constants/Colors';
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
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}
    tabBarOptions= {{
      style: { 
        height: 80,
        backgroundColor: "black",
      }
    }} >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        style={styles.container}
        options={{
          tabBarIcon: ({ focused }) => ( 
            focused ? <Image
            source={require('../assets/images/home-red.png')}
            style={styles.icon}
          />
          :
          <Image
          source={require('../assets/images/home.png')}
          style={styles.icon}
          />
          ),
          tabBarLabel: () =>  <TabBarIcon tabBarOptions={{ showLabel: false }} />,
          
        }}
      />

      <BottomTab.Screen
        name="Alert"
        component={AlertScreen}
        options={{
          showLabel: false,
          tabBarIcon: ({ focused }) => ( 
            focused ? <Image
            source={require('../assets/images/alert-red.png')}
            style={styles.icon}
          />
          :
          <Image
          source={require('../assets/images/alert.png')}
          style={styles.icon}
          />
          ),
          tabBarLabel: () =>  <TabBarIcon tabBarOptions={{ showLabel: false }} />
        }}
      />

      <BottomTab.Screen
        name="Scan"
        component={ScanScreen}
        options={{
          showLabel: false,
          tabBarIcon: ({ focused }) => ( 
            focused ? <Image
            source={require('../assets/images/scan-red.png')}
            style={styles.iconBig}
          />
          :
          <Image
          source={require('../assets/images/scan.png')}
          style={styles.iconBig}
          />
          ),
          tabBarLabel: () =>  <TabBarIcon tabBarOptions={{ showLabel: false }} />
        }}
      />

      <BottomTab.Screen
        name="Blip"
        component={BlipScreen}
        options={{
          showLabel: false,
          tabBarIcon: ({ focused }) => ( 
            focused ? <Image
            source={require('../assets/images/blips-red.png')}
            style={styles.icon}
          />
          :
          <Image
          source={require('../assets/images/blips.png')}
          style={styles.icon}
          />
          ),
          tabBarLabel: () =>  <TabBarIcon tabBarOptions={{ showLabel: false }} />
        }}
      />

      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          showLabel: false,
          tabBarIcon: ({ focused }) => ( 
            focused ? <Image
            source={require('../assets/images/profile-red.png')}
            style={styles.icon}
          />
          :
          <Image
          source={require('../assets/images/profile.png')}
          style={styles.icon}
          />
          ),
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

const styles = StyleSheet.create({
  icon: {
    height: 25,
    width: 25,
    padding: 5,
    resizeMode: "contain"
  },
  iconBig: {
    height: 35,
    width: 35,
  },
})
