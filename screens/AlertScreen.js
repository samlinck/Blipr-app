import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import TextCustom from '../components/TextCustom';
import universalstyles from '../assets/style/Style';
import colors from '../constants/Colors';

export default function AlertScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* <OptionButton
        icon="md-school"
        label="First time using the app? Follow the tutorial!"
      />

      <OptionButton
        icon="md-alert"
        label="Your Blips are ready"
      />

      <OptionButton
        icon="md-alert"
        label="Event starting soon"
        isLastOption
      /> */}
       <TextCustom style={ universalstyles.title }>
            Notifications
            <Text style={styles.red}>.</Text>
          </TextCustom>
      <View style={styles.alert}>
      <Image
            source={require('../assets/images/guy.png')}
            style={styles.icon}
          />
          <View style={styles.text}>
            <TextCustom style={styles.red}>Concert tonight! The show of Zwangere Guy will start at {"\n"} 20:00 at Ancienne Belgique. </TextCustom>
            <TextCustom>Today - 12:30</TextCustom>
          </View>
      </View>
      <View style={styles.alert}>
      <Image
            source={require('../assets/images/sue.png')}
            style={styles.icon}
          />
          <View style={styles.text}>
            <TextCustom>The recordings of Selah Sue {"\n"} are now online. Watch your {"\n"} own Blips  and discover what {"\n"} others have Blipped.  </TextCustom>
            <TextCustom>Yesterday - 09:30</TextCustom>
          </View>
      </View>
      <View style={styles.alert}>
      <Image
            source={require('../assets/images/sue.png')}
            style={styles.icon}
          />
          <View style={styles.text}>
            <TextCustom>The show is over! Your Blips {"\n"} will be online soon. We hope {"\n"} you had an amazing {"\n"} experience! </TextCustom>
            <TextCustom>12/06/2020 - 22:30</TextCustom>
          </View>
      </View>
    </ScrollView>
  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    paddingVertical: 30,
    paddingHorizontal: 25,
  },
  contentContainer: {
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
    marginRight: 40,
  },
  alert: {
    flexDirection: "row",
    flex: 1,
    borderBottomWidth: 2,
    paddingVertical: 25,
    alignItems: "center"
  },
  icon: {
    height: 60,
    width: 60,
    marginRight: 15,
  },
  red: {
    color: colors.red
  }
});
