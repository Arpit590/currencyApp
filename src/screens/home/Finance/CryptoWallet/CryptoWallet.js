import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import BackIcon from "../../../../assets/Back.svg"; 
import ArrowDownIcon from "../../../../assets/ArrowDown.svg";
import EyeInActiveIcon from "../../../../assets/EyeInActive.svg";
import DatePicker from 'react-native-date-picker';
import PrimaryButton from "../../../../Atoms/PrimaryButton";
import CalendarIcon from "../../../../assets/Line.svg";


const CryptoWallet = () => {

    const navigation = useNavigation();
    const [showPass, setShowPass] = useState(false);
    const [openDropDown, setOpenDropDown] = useState(false);
    const [country, setCountry] = useState("");
    const [open, setOpen] = useState(false);
    const [expiryDate, setExpiryDate]= useState(new Date());

  return (
    <View style={styles.screen}>
      <View style={styles.view}>
        <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.goBack()}>
            <BackIcon/>
        </TouchableOpacity>
        <Text style={styles.heading}>Crypto Wallet</Text>
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
            <Text style={styles.formText}>Wallet Address</Text>
            <View style={styles.input}>
              <TextInput
              placeholder='Wallet Address'
              placeholderTextColor="#BBBAB3"
              style={styles.inputText}
              />
            </View>
        </View>
        <View style={styles.formContent}>
            <Text style={styles.formText}>Wallet Public Key</Text>
            <View style={styles.input}>
              <TextInput
              placeholder='Wallet Public Key'
              placeholderTextColor="#BBBAB3"
              secureTextEntry={showPass ? false : true}
              style={styles.inputText}
              />
              <TouchableOpacity activeOpacity={0.8} onPress={()=>setShowPass(!showPass)}>
                {(showPass) ?
                <EyeInActiveIcon/>
                :
                <ArrowDownIcon/>
                }
              </TouchableOpacity>
            </View>
        </View>
        <View style={styles.formContent}>
            <Text style={styles.formText}>Seed Phrase</Text>
            <View style={styles.seedPhrase}>
                <TouchableOpacity activeOpacity={0.8} style={styles.seedBox}>
                    <Text style={styles.seedText1}>1</Text>
                    <Text style={styles.seedText}>bring</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.seedBox}>
                    <Text style={styles.seedText1}>1</Text>
                    <Text style={styles.seedText}>bring</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.seedBox}>
                    <Text style={styles.seedText1}>1</Text>
                    <Text style={styles.seedText}>bring</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.seedBox}>
                    <Text style={styles.seedText1}>1</Text>
                    <Text style={styles.seedText}>bring</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.seedBox}>
                    <Text style={styles.seedText1}>1</Text>
                    <Text style={styles.seedText}>bring</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.seedBox}>
                    <Text style={styles.seedText1}>1</Text>
                    <Text style={styles.seedText}>bring</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.seedBox}>
                    <Text style={styles.seedText1}>1</Text>
                    <Text style={styles.seedText}>bring</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.seedBox}>
                    <Text style={styles.seedText1}>1</Text>
                    <Text style={styles.seedText}>bring</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.seedBox}>
                    <Text style={styles.seedText1}>1</Text>
                    <Text style={styles.seedText}>bring</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.seedBox}>
                    <Text style={styles.seedText1}>1</Text>
                    <Text style={styles.seedText}>bring</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.seedBox}>
                    <Text style={styles.seedText1}>1</Text>
                    <Text style={styles.seedText}>bring</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.seedBox}>
                    <Text style={styles.seedText1}>1</Text>
                    <Text style={styles.seedText}>bring</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.formContent}>
            <Text style={styles.formText}>Additional Information</Text>
            <View style={[styles.input, {height: 200, flex:1, width:"100%", alignItems:"flex-start"}]}>
              <TextInput
              placeholder='Additional Information to kept in this scenario'
              placeholderTextColor="#BBBAB3"
              style={[styles.inputText, {flex:1, paddingVertical:10, height:200, alignSelf:"flex-start"}]}
              multiline={true}
              />
            </View>
        </View>
      </ScrollView>
      <View style={{marginHorizontal:20}}>
        <PrimaryButton
        title="Add Wallet Details"
        buttonHandler={()=>{}}
        />
      </View>
    </View>
  )
}

export default CryptoWallet
