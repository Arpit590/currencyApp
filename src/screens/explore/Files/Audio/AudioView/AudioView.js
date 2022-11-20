import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import styles from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import BackIcon from "../../../../../assets/Back.svg"; 
import ShareIcon from "../../../../../assets/Share.svg";
import PlayIcon from "../../../../../assets/Play.svg";
import PauseIcon from "../../../../../assets/Pause.svg";


const AudioView = () => {

    const navigation = useNavigation();
    const [play, setPlay] = useState(false);
    const route = useRoute();

  return (
    <>
        <View style={styles.screen}>
        <View style={styles.view}>
            <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.goBack()}>
                <BackIcon/>
            </TouchableOpacity>
            <Text style={styles.heading}>adjadahh.mp3</Text>
            <View></View>
        </View>
        <View style={{marginHorizontal:20}}>
            <View style={styles.audioContainer}>
                <View style={styles.audio}>
                    <Image
                    source={require("../../../../../assets/Audio.png")}
                    style={styles.audioImage}
                    />
                </View>
                <TouchableOpacity 
                style={styles.play}
                onPress={()=>setPlay(!play)}
                activeOpacity={0.8}>
                    {(play) ?
                    <PlayIcon/>
                    :
                    <PauseIcon/>
                    }
                </TouchableOpacity>
            </View>
        </View>
        </View>
        <View style={styles.shareContainer}>
        <TouchableOpacity 
        style={styles.share}
        activeOpacity={0.8}>
            
            <ShareIcon/>
        </TouchableOpacity>
        <Text style={styles.shareText}>Share</Text>
    </View>
    </>
  )
}

export default AudioView
