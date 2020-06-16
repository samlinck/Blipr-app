import {
    StyleSheet,
  } from 'react-native';

  const universalstyles = StyleSheet.create({
    // All the style content goes here, I've only included one 'class'
    container: {
        paddingVertical: 50,
        paddingHorizontal: 10,
        // backgroundColor: "red",
        borderWidth: 2,
        borderColor: "red",
        flex: 1 ,
        alignItems: "stretch",
        // justifyContent: "space-between"
    },
    title: {
        fontWeight: "900",
        fontSize: 36,
        color: "black",
    }
  });

  module.exports = universalstyles;