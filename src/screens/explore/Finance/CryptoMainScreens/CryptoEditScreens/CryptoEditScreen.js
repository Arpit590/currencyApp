import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import styles from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import BackIcon from "../../../../../assets/Back.svg"; 
import ArrowDownIcon from "../../../../../assets/ArrowDown.svg";
import EyeInActiveIcon from "../../../../../assets/EyeInActive.svg";
import DatePicker from 'react-native-date-picker';
import PrimaryButton from "../../../../../Atoms/PrimaryButton";
import CalendarIcon from "../../../../../assets/Line.svg";


const CryptoEditScreen = () => {

    const navigation = useNavigation();
    const route = useRoute();

  return (
    <View style={styles.screen}>
      <View style={styles.view}>
        <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.goBack()}>
            <BackIcon/>
        </TouchableOpacity>
        <Text style={styles.heading}>Indian Bank</Text>
        <View></View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.view1}>
        <View style={styles.formContent}>
            <Text style={styles.formText}>Wallet Name</Text>
            <View style={styles.input}>
              <TextInput
              placeholder='Wallet Name'
              placeholderTextColor="#BBBAB3"
              style={styles.inputText}
              />
            </View>
        </View>
        <View style={styles.formContent}>
            <Text style={styles.formText}>Account Holder Name</Text>
            <View style={styles.input}>
              <TextInput
              placeholder='Account Holder Name'
              placeholderTextColor="#BBBAB3"
              style={styles.inputText}
              />
            </View>
        </View>
        <View style={styles.formContent}>
            <Text style={styles.formText}>Account Number</Text>
            <View style={styles.input}>
              <TextInput
              placeholder='Account Number'
              placeholderTextColor="#BBBAB3"
              style={styles.inputText}
              />
            </View>
        </View>
        <View style={styles.formContent}>
            <Text style={styles.formText}>IFSC Code</Text>
            <View style={styles.input}>
              <TextInput
              placeholder='IFSC Code'
              placeholderTextColor="#BBBAB3"
              style={styles.inputText}
              />
            </View>
        </View>
        <View style={styles.formContent}>
            <Text style={styles.formText}>Swift Code</Text>
            <View style={styles.input}>
              <TextInput
              placeholder='Swift Code'
              placeholderTextColor="#BBBAB3"
              style={styles.inputText}
              />
            </View>
        </View>
        <View style={styles.formContent}>
            <Text style={styles.formText}>Branch Address</Text>
            <View style={[styles.input, {height: 200, flex:1, width:"100%", alignItems:"flex-start"}]}>
              <TextInput
              placeholder='Enter Branch Address'
              placeholderTextColor="#BBBAB3"
              style={[styles.inputText, {flex:1, paddingVertical:10, height:200, alignSelf:"flex-start"}]}
              multiline={true}
              />
            </View>
        </View>
        <View style={styles.formContent}>
            <Text style={styles.formText}>User Name</Text>
            <View style={styles.input}>
              <TextInput
              placeholder='User Name'
              placeholderTextColor="#BBBAB3"
              style={styles.inputText}
              />
            </View>
        </View>
      </ScrollView>
      <View style={{marginHorizontal:20}}>
        <PrimaryButton
        title={route?.params?.save===true ? "Save Details" : "Edit Details"}
        buttonHandler={()=>{
            if(route?.params?.save===false || route?.params?.save===undefined){
                navigation.navigate("CryptoEditScreen", {"save": true})
            }else{
                navigation.goBack()
            }
        }}
        />
      </View>
    </View>
  )
}

export default CryptoEditScreen
