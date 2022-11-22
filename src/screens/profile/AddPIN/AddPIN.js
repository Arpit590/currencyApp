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


const AddPIN = () => {

    const navigation = useNavigation();
    const [showPass, setShowPass] = useState(false);
    const [showPass1, setShowPass1] = useState(false);
    const route = useRoute();

  return (
    <View style={styles.screen}>
      <View style={styles.view}>
        <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.goBack()}>
            <BackIcon/>
        </TouchableOpacity>
        <Text style={styles.heading}>Add PIN</Text>
        <View></View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.view1}>
        <View style={styles.formContent}>
            <Text style={styles.formText}>Enter PIN</Text>
            <View style={styles.input}>
              <TextInput
              placeholder='Enter PIN'
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
            <Text style={styles.formText}>Confirm PIN</Text>
            <View style={styles.input}>
              <TextInput
              placeholder='Confirm PIN'
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
      </ScrollView>
      <View style={{marginHorizontal:20}}>
        <PrimaryButton
        title={"Add"}
        buttonHandler={()=>{
            navigation.goBack()
        }}
        />
      </View>
    </View>
  )
}

export default AddPIN
