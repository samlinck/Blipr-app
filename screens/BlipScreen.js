import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import TextCustom from '../components/TextCustom';
import universalstyles from '../assets/style/Style';
import colors from '../constants/Colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


export default function BlipScreen() {

    const navigation = useNavigation();

    const Blip = () => {
        return navigation.navigate('DetailBlipScreen')
    }

    return (
       <View style={universalstyles.container}>
           <TextCustom style={universalstyles.title}>Your Blips<Text style={styles.dot}>.</Text></TextCustom>
           <View style= {styles.blips}>
            <View style= {styles.sort}>
                <TextCustom style= {styles.line}>Sort by</TextCustom>
                <View style= {styles.group}> 
                <Image
            source={require('../assets/images/emo.png')}
            style={styles.emoji}
          />
            <Image
            source={require('../assets/images/hap.png')}
            style={styles.emoji}
          />
            <Image
            source={require('../assets/images/rel.png')}
            style={styles.emoji}
          />
            <Image
            source={require('../assets/images/spe.png')}
            style={styles.emoji}
          />
          </View>
             <Image
            source={require('../assets/images/favo.png')}
            style={styles.emoji}
          />
            </View>
          <View style={styles.showsContainer}>
            <View style={styles.imgContainer}>
              <ImageBackground 
              source={require('../assets/images/blip-1.png')}
              style={styles.image}>
                <TextCustom style={[styles.text, styles.textBlack]}>Favoriete nummer</TextCustom>
              </ImageBackground>
            </View>
            <View style={styles.imgContainer}>
              <ImageBackground 
              source={require('../assets/images/blip-2.png')}
              style={styles.image}>
                <TextCustom style={[styles.text, styles.textBlack]}>One kiss</TextCustom>
              </ImageBackground>
            </View>
            <View style={styles.imgContainer}>
              <ImageBackground 
              source={require('../assets/images/blip-3.png')}
              style={styles.image}>
                <TextCustom style={[styles.text, styles.textBlack]}>Dansen</TextCustom>
              </ImageBackground>
            </View>
            <View style={styles.imgContainer}>
              <ImageBackground 
              source={require('../assets/images/blip-4.png')}
              style={styles.image}>
                  <TouchableWithoutFeedback
                  onPress={Blip}>
                <TextCustom style={[styles.text, styles.textBlack]}>Wauw</TextCustom>
                </TouchableWithoutFeedback>
              </ImageBackground>
            </View>
          </View>
        </View>
       </View>
    );
};

const styles = StyleSheet.create({
    dot: {
        color: colors.red,
      },
      showsContainer: {
        flexDirection: "row",
        width: '100%',
        // borderColor: "black",
        // borderWidth: 2,
        justifyContent: "space-between",
        flexWrap: 'wrap',
       },
       imgContainer: {
          width: '50%',
          paddingHorizontal: 10,
          marginVertical: 25,
       },
       image: {
        resizeMode: "contain",
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
        height: 100,
        // borderColor: "blue",
        // borderWidth: 2,
      },
      text: {
        color: colors.white,
        paddingHorizontal: 5,
        textAlign: "center",
      },
      textBlack: {
        color: "black",
      },
      emoji: {
          width: 25,
          height:25,
          marginHorizontal: 2,
      },
      sort: {
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 10,

      },
      group: {
          flexDirection: "row"
      },
      line: {
          textDecorationLine: 'underline',
          fontSize: 16
      }
});