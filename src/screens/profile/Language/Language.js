import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import styles from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import BackIcon from "../../../assets/Back.svg"; 
import LockIcon from "../../../assets/PasswordIcon.svg";
import CheckIcon from "../../../assets/CheckIcon.svg";
import PrimaryButton from "../../../Atoms/PrimaryButton";
import { FontSizes } from '../../../theme';


const Language = () => {

    const navigation = useNavigation();
    const [select, setSelect] = useState("English");
    const route = useRoute();

  return (
    <View style={styles.screen}>
      <View style={styles.view}>
        <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.goBack()}>
            <BackIcon/>
        </TouchableOpacity>
        <Text style={styles.heading}>Language</Text>
        <View></View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.view1}>
        <TouchableOpacity activeOpacity={0.8} onPress={()=>{setSelect("English")}}
        style={styles.container}>
            <View style={styles.content}>
                <View style={styles.logo}>
                    <LockIcon/>
                </View>
                <View style={{}}>
                    <Text style={styles.contentText}>English</Text>
                    <Text style={[styles.contentText, {color:"#94928C", fontSize:FontSizes.normal, marginTop:3}]}>English</Text>
                </View>
            </View>
            {(select==="English") && <CheckIcon/>}
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} onPress={()=>{setSelect("Hindi")}}
        style={styles.container}>
            <View style={styles.content}>
                <View style={styles.logo}>
                    <LockIcon/>
                </View>
                <View style={{}}>
                    <Text style={styles.contentText}>Hindi</Text>
                    <Text style={[styles.contentText, {color:"#94928C", fontSize:FontSizes.normal, marginTop:3}]}>हिन्दी</Text>
                </View>
            </View>
            {(select==="Hindi") && <CheckIcon/>}
        </TouchableOpacity>
      </ScrollView>
      <View style={{marginHorizontal:20}}>
        <PrimaryButton
        title={"Change"}
        buttonHandler={()=>{
            navigation.goBack()
        }}
        />
      </View>
    </View>
  )
}

export default Language
