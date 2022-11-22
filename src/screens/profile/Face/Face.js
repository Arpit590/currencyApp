import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import styles from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import BackIcon from "../../../assets/Back.svg"; 
import LockIcon from "../../../assets/PasswordIcon.svg";
import CheckIcon from "../../../assets/CheckIcon.svg";
import PrimaryButton from "../../../Atoms/PrimaryButton";
import { FontSizes } from '../../../theme';


const Face = () => {

    const navigation = useNavigation();
    const [select, setSelect] = useState("English");
    const route = useRoute();

  return (
    <View style={styles.screen}>
      <View style={styles.view}>
        <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.goBack()}>
            <BackIcon/>
        </TouchableOpacity>
        <Text style={styles.heading}>Add Face</Text>
        <View></View>
      </View>
      <View style={styles.face}></View>
      <View style={{marginHorizontal:20, position:"absolute", bottom:"2%", width: "80%", alignSelf:"center"}}>
        <Text style={styles.text}>Look at Camera to register face</Text>
        <PrimaryButton
        title={"Add Face"}
        buttonHandler={()=>{
            navigation.goBack()
        }}
        />
      </View>
    </View>
  )
}

export default Face
