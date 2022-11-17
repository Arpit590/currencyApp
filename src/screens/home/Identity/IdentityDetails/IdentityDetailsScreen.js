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


const IdentityDetailsScreen = () => {

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
        <Text style={styles.heading}>ID Card</Text>
        <View></View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.view1}>
        <View style={styles.formContent}>
            <Text style={styles.formText}>Nickname</Text>
            <View style={styles.input}>
              <TextInput
              placeholder='Nickname'
              placeholderTextColor="#BBBAB3"
              style={styles.inputText}
              />
            </View>
        </View>
        <View style={styles.formContent}>
            <Text style={styles.formText}>ID Number</Text>
            <View style={styles.input}>
              <TextInput
              placeholder='ID Number'
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
            <Text style={styles.formText}>Name on ID</Text>
            <View style={styles.input}>
              <TextInput
              placeholder='Name on ID'
              placeholderTextColor="#BBBAB3"
              style={styles.inputText}
              />
            </View>
        </View>
        <View style={styles.formContent}>
            <Text style={styles.formText}>Expiry Date</Text>
            <View style={styles.input}>
              <Text style={[styles.inputText, {paddingVertical:10}]}>{new Date(expiryDate).getDate()}/{new Date(expiryDate).getMonth() + 1}/{new Date(expiryDate).getFullYear()}</Text>
              <TouchableOpacity activeOpacity={0.8} onPress={()=>setOpen(true)}>
                <CalendarIcon/>
              </TouchableOpacity>
            </View>
            <DatePicker
              modal
              open={open}
              date={expiryDate}
              mode="date"
              onConfirm={(date) => {
                  setOpen(false)
                  setExpiryDate(date);
                  console.log("Hesy" + expiryDate)
              }}
              onCancel={() => {
                  setOpen(false)
              }}
              />
        </View>
        <View style={styles.formContent}>
            <Text style={styles.formText}>ID Country</Text>
            <View style={styles.input}>
              <Text style={[styles.inputText, {paddingVertical:10}]}>{country ? country : "Please Select Country"}</Text>
              <TouchableOpacity activeOpacity={0.8} onPress={()=>setOpenDropDown(!openDropDown)}>
                <ArrowDownIcon/>
              </TouchableOpacity>
            </View>
            {(openDropDown) && <View style={styles.dropDown}>
              <TouchableOpacity activeOpacity={0.8}
              onPress={()=>{
                setOpenDropDown(false)
                setCountry("India");
              }}
              style={styles.dropDownContent}>
                <Text style={styles.dropDownText}>India</Text>
              </TouchableOpacity>
            </View>}
        </View>
        <View style={styles.formContent}>
            <Text style={styles.formText}>Profile</Text>
            <View style={styles.input}>
              <TextInput
              placeholder='Profile'
              placeholderTextColor="#BBBAB3"
              style={styles.inputText}
              />
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
        title="Add New Details"
        buttonHandler={()=>{}}
        />
      </View>
    </View>
  )
}

export default IdentityDetailsScreen
