import {
    StyleSheet,
  } from 'react-native';
  import colors from '../../constants/Colors';

  const universalstyles = StyleSheet.create({
    // All the style content goes here, I've only included one 'class'
    container: {
        paddingVertical: 30,
        paddingHorizontal: 25,
        // borderWidth: 2,
        // borderColor: "red",
        flex: 1 ,
        alignItems: "stretch",
    },
    title: {
        fontWeight: "900",
        fontSize: 30,
        lineHeight: 52,
    },
    btn: {
      backgroundColor: colors.red,
      color: colors.white,
      paddingHorizontal: 40,
      paddingVertical: 15,
      borderRadius: 60,
      fontSize: 14,
      textTransform: "uppercase",
    },
    link: {
      color: "black",
      fontSize: 14,
      textDecorationLine: "underline",
    }
  });

  module.exports = universalstyles;