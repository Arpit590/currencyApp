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
import CameraIcon from "../../../../assets/Camera.svg";


const MedicalReports = () => {

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
    const [bdate, setBDate]= useState(new Date());

  return (
    <View style={styles.screen}>
      <View style={styles.view}>
        <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.goBack()}>
            <BackIcon/>
        </TouchableOpacity>
        <Text style={styles.heading}>Medical Report</Text>
        <View></View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.view1}>
        <View style={styles.formContent}>
            <Text style={styles.formText}>Name</Text>
            <View style={styles.input}>
              <TextInput
              placeholder='Name'
              placeholderTextColor="#BBBAB3"
              style={styles.inputText}
              />
            </View>
        </View>
        <View style={styles.formContent}>
            <Text style={styles.formText}>Date</Text>
            <View style={styles.input}>
              <Text style={[styles.inputText, {paddingVertical:10}]}>{new Date(bdate).getDate()}/{new Date(bdate).getMonth() + 1}/{new Date(bdate).getFullYear()}</Text>
              <TouchableOpacity activeOpacity={0.8} onPress={()=>setOpen1(true)}>
                <CalendarIcon/>
              </TouchableOpacity>
            </View>
            <DatePicker
              modal
              open={open1}
              date={bdate}
              mode="date"
              onConfirm={(date) => {
                  setOpen1(false)
                  setBDate(date);
                  console.log("Hesy" + bdate)
              }}
              onCancel={() => {
                  setOpen1(false)
              }}
              />
        </View>
        <View style={styles.formContent}>
            <Text style={styles.formText}>Scan Medical Report</Text>
            <View style={styles.cameraContainer}>
                <TouchableOpacity activeOpacity={0.8} style={styles.camera}>
                    <CameraIcon/>
                </TouchableOpacity>
                <Text style={styles.cameraText}>Click here to scan Medical Report</Text>
            </View>
        </View>
      </ScrollView>
      <View style={{marginHorizontal:20}}>
        <PrimaryButton
        title="Add New"
        buttonHandler={()=>{}}
        />
      </View>
    </View>
  )
}

export default MedicalReports
