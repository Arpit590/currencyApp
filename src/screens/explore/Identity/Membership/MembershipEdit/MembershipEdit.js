import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import styles from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import BackIcon from "../../../../../assets/Back.svg"; 
import ArrowDownIcon from "../../../../../assets/ArrowDown.svg";
import EyeInActiveIcon from "../../../../../assets/EyeInActive.svg";
import EyeActiveIcon from "../../../../../assets/EyeActiveIcon.svg";
import DatePicker from 'react-native-date-picker';
import PrimaryButton from "../../../../../Atoms/PrimaryButton";
import CalendarIcon from "../../../../../assets/Line.svg";
import CameraIcon from "../../../../../assets/Camera.svg";


const MembershipEdit = () => {

    const navigation = useNavigation();
    const [showPass, setShowPass] = useState(false);
    const [openDropDown, setOpenDropDown] = useState(false);
    const [country, setCountry] = useState("");
    const [openDropDown2, setOpenDropDown2] = useState(false);
    const [nationality, setNationality]= useState("");
    const [openCamera, setOpenCamera] = useState(false);
    const [gender, setGender] = useState("");
    const [openDropDown1, setOpenDropDown1] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [issueDate, setIssueDate]= useState(new Date());
    const [expiryDate, setExpiryDate] = useState(new Date());
    const [open,setOpen] = useState(false);
    const route = useRoute();

  return (
    <View style={styles.screen}>
      <View style={styles.view}>
        <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.goBack()}>
            <BackIcon/>
        </TouchableOpacity>
        <Text style={styles.heading}>{route?.params?.new ? "Membership" : "Satrujit Behera"}</Text>
        <View></View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.view1}>
        {(route?.params?.new===true) ? 
        <View style={styles.formContent}>
            <Text style={styles.formText}>Scan Passport</Text>
            <View style={styles.cameraContainer}>
                <TouchableOpacity activeOpacity={0.8} style={styles.camera}>
                    <CameraIcon/>
                </TouchableOpacity>
                <Text style={styles.cameraText}>Click here to scan ID card</Text>
            </View>
        </View>
        :
        <>
        <View style={[styles.formContent, {borderWidth:3, borderColor:"#DBD9D1", borderRadius:10, padding:20, alignItems:"center"}]}>
            <Image
            source={require("../../../../../assets/MembershipImage.png")}
            style={styles.image}
            />
        </View>
        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
            <Text style={[styles.buttonText]}>Scan Again</Text>
        </TouchableOpacity>
        </>
        }
                <View style={styles.formContent}>
            <Text style={styles.formText}>Nick name</Text>
            <View style={styles.input}>
              <TextInput
              placeholder='Nick name'
              placeholderTextColor="#BBBAB3"
              style={styles.inputText}
              />
            </View>
        </View>
        <View style={styles.formContent}>
            <Text style={styles.formText}>Member ID</Text>
            <View style={styles.input}>
              <TextInput
              placeholder='Member ID'
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
      </ScrollView>
      <View style={{marginHorizontal:20}}>
        <PrimaryButton
        title={route?.params?.save===true ? "Save Details" : route?.params?.new ? "Add New Details" : "Edit Details"}
        buttonHandler={()=>{
            if(route?.params?.save===false){
                navigation.navigate("MembershipEdit", {"save": true})
            }else{
                navigation.goBack()
            }
        }}
        />
      </View>
    </View>
  )
}

export default MembershipEdit
