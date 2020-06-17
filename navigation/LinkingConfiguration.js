import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    Root: {
      path: 'app',
      screens: {
        Home: 'home',
        Alert: 'alert',
        Scan: 'scan',
        Blip: 'blip',
        Profile: 'profile'
      },
    },
  },
};
