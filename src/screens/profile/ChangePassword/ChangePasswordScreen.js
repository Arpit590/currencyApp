import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import styles from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import BackIcon from "../../../assets/Back.svg"; 
import EyeActiveIcon from "../../../assets/EyeActiveIcon.svg";
import EyeInActiveIcon from "../../../assets/EyeInActive.svg";
import DatePicker from 'react-native-date-picker';
import PrimaryButton from "../../../Atoms/PrimaryButton";
import { FontSizes } from '../../../theme';


const ChangePasswordScreen = () => {

    const navigation = useNavigation();
    const [showPass, setShowPass] = useState(false);
    const [showPass1, setShowPass1] = useState(false);
    const [open, setOpen] = useState(false);
    const route = useRoute();

  return (
    <View style={styles.screen}>
      <View style={styles.view}>
        <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.goBack()}>
            <BackIcon/>
        </TouchableOpacity>
        <Text style={styles.heading}>Change Master Password</Text>
        <View></View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.view1}>
        {(open===false) ?
        <View style={styles.formContent}>
            <Text style={styles.formText}>Old Master Password</Text>
            <View style={styles.input}>
              <TextInput
              placeholder='Old Master Password'
              placeholderTextColor="#BBBAB3"
              editable={false}
              style={styles.inputText}
              />
            </View>
        </View>
        :
        <>
        <View style={styles.formContent}>
            <Text style={styles.formText}>New Master Password</Text>
            <View style={styles.input}>
              <TextInput
              placeholder='New Master Password'
              placeholderTextColor="#BBBAB3"
              secureTextEntry={showPass ? false : true}
              style={styles.inputText}
              />
              <TouchableOpacity activeOpacity={0.8} onPress={()=>setShowPass(!showPass)}>
                {(showPass) ?
                <EyeInActiveIcon/>
                :
                <EyeActiveIcon/>
                }
              </TouchableOpacity>
            </View>
        </View>
        <View style={styles.formContent}>
            <Text style={styles.formText}>Confirm Master Password</Text>
            <View style={styles.input}>
              <TextInput
              placeholder='Confirm Master Password'
              placeholderTextColor="#BBBAB3"
              secureTextEntry={showPass1 ? false : true}
              style={styles.inputText}
              />
              <TouchableOpacity activeOpacity={0.8} onPress={()=>setShowPass1(!showPass1)}>
                {(showPass1) ?
                <EyeInActiveIcon/>
                :
                <EyeActiveIcon/>
                }
              </TouchableOpacity>
            </View>
        </View>
        </>}
      </ScrollView>
      <View style={{marginHorizontal:20}}>
        <PrimaryButton
        title={open===true ? "Change" : "Continue"}
        buttonHandler={()=>{
            if(open===false){
                navigation.navigate("ChangePasswordScreen");
                setOpen(true)
            }else{
                navigation.goBack()
            }
        }}
        />
      </View>
    </View>
  )
}

export default ChangePasswordScreen
