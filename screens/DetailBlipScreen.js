import * as React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, Image } from 'react-native';
import TextCustom from '../components/TextCustom';
import { Video } from 'expo-av';
import { MaterialIcons, Octicons } from '@expo/vector-icons';
import universalstyles from '../assets/style/Style';
import colors from '../constants/Colors';

export default class DetailBlipScreen extends React.Component {

      constructor(props){
        super(props);
        this.state = {
            mute: false,
            shouldPlay: false,
        };
      }

      handlePlayAndPause = () => {  
        this.setState((prevState) => ({
           shouldPlay: !prevState.shouldPlay  
        }));
      }

      handleVolume = () => {
        this.setState(prevState => ({
          mute: !prevState.mute,  
        }));
      }

    render () {
        const { width } = Dimensions.get('window');
        return (
            <View>
              <View style={styles.textContainer}>
                <View style={styles.row}>
              <TextCustom style={universalstyles.title}>John Mayer<Text style={styles.red}>.</Text></TextCustom>
              <Image
                source={require('../assets/images/favo-red.png')}
                style={styles.image}
                 />
              </View>
              <TextCustom>10/06/2020</TextCustom>
              </View>

                <Video
                    source={require('../assets/videos/blip.mp4')}
                    shouldPlay={this.state.shouldPlay}
                    resizeMode="cover"
                    style={{ width, height: 300 }}
                    isMuted={this.state.mute}
                />

                <View style={styles.controlBar}>
                    <MaterialIcons 
                    name={this.state.mute ? "volume-mute" : "volume-up"}
                    size={45} 
                    color="red" 
                    onPress={this.handleVolume} 
                    />
                    <MaterialIcons 
                    name={this.state.shouldPlay ? "pause" : "play-arrow"} 
                    size={45} 
                    color="red" 
                    onPress={this.handlePlayAndPause} 
                    />
                </View>
                <View style={[styles.textContainer, styles.row]}>
                  <TextCustom style={{fontSize: 18}}>Wauw {"\n"}<Text style={{fontSize: 14}}>Fantastisch moment!</Text></TextCustom>
                  <Image
                source={require('../assets/images/ene-red.png')}
                style={styles.image}
                 />
                </View>
                <View style={[styles.textContainer, styles.row]}>
                  <View style={styles.row2}>
                    <Image
                    source={require('../assets/images/heart-red.png')}
                    style={styles.image}
                    />
                    <TextCustom style={{fontSize: 18, marginLeft: 10}}>124</TextCustom>
                  </View>
                  <View style={styles.row2}>
                  <Image
                    source={require('../assets/images/share.png')}
                    style={[styles.image, styles.image2]}
                    />
                     <Image
                    source={require('../assets/images/down.png')}
                    style={[styles.image, styles.image2]}
                    />
                  </View>
                 
                </View>
                <TextCustom style={universalstyles.btnBlack}>Edit</TextCustom>
            </View>

        )
    }
};

const styles = StyleSheet.create({
    text: {
        fontSize: 60,
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
    controlBar: {
        position: 'absolute',
        bottom: 310,
        left: 0,
        right: 0,
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgba(0, 0, 0, 0)",
    },
    textContainer: {
      paddingVertical: 20,
      paddingHorizontal: 25,
    },
    red: {
      color: colors.red,
  },
  image: {
    height: 30,
    width: 30,
    marginTop: 10,
    resizeMode: "contain"
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  row2: {
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center"
  },
  image2: {
    marginLeft: 15,
  }
}); 