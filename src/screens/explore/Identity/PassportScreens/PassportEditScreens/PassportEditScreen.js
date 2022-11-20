import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import styles from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import BackIcon from "../../../../../assets/Back.svg"; 
import ArrowDownIcon from "../../../../../assets/ArrowDown.svg";
import EyeInActiveIcon from "../../../../../assets/EyeInActive.svg";
import DatePicker from 'react-native-date-picker';
import PrimaryButton from "../../../../../Atoms/PrimaryButton";
import CalendarIcon from "../../../../../assets/Line.svg";
import CameraIcon from "../../../../../assets/Camera.svg";


const PassportEditScreen = () => {

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
    const route = useRoute();

  return (
    <View style={styles.screen}>
      <View style={styles.view}>
        <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.goBack()}>
            <BackIcon/>
        </TouchableOpacity>
        <Text style={styles.heading}>{route?.params?.new ? "Passport" : "Satrujit Behera"}</Text>
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
            source={require("../../../../../assets/PassportImage.png")}
            style={styles.image}
            />
        </View>
        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
            <Text style={[styles.buttonText]}>Scan Again</Text>
        </TouchableOpacity>
        </>
        }
        <View style={styles.formContent}>
            <Text style={styles.formText}>Country Code</Text>
            <View style={styles.input}>
              <Text style={[styles.inputText, {paddingVertical:10}]}>{country ? country : "Please Select Country Code"}</Text>
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
            <Text style={styles.formText}>Passport Number</Text>
            <View style={styles.input}>
              <TextInput
              placeholder='Passport Number'
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
            <Text style={styles.formText}>Nationality</Text>
            <View style={styles.input}>
              <Text style={[styles.inputText, {paddingVertical:10}]}>{nationality ? nationality : "Please Select Nationality"}</Text>
              <TouchableOpacity activeOpacity={0.8} onPress={()=>setOpenDropDown2(!openDropDown2)}>
                <ArrowDownIcon/>
              </TouchableOpacity>
            </View>
            {(openDropDown2) && <View style={styles.dropDown}>
              <TouchableOpacity activeOpacity={0.8}
              onPress={()=>{
                setOpenDropDown2(false)
                setNationality("Indian");
              }}
              style={styles.dropDownContent}>
                <Text style={styles.dropDownText}>Indian</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8}
              onPress={()=>{
                setOpenDropDown2(false)
                setNationality("Female");
              }}
              style={styles.dropDownContent}>
                <Text style={styles.dropDownText}>Mexican</Text>
              </TouchableOpacity>
            </View>}
        </View>
        <View style={styles.formContent}>
            <Text style={styles.formText}>Sex</Text>
            <View style={styles.input}>
              <Text style={[styles.inputText, {paddingVertical:10}]}>{gender ? gender : "Please Select Sex"}</Text>
              <TouchableOpacity activeOpacity={0.8} onPress={()=>setOpenDropDown1(!openDropDown1)}>
                <ArrowDownIcon/>
              </TouchableOpacity>
            </View>
            {(openDropDown1) && <View style={styles.dropDown}>
              <TouchableOpacity activeOpacity={0.8}
              onPress={()=>{
                setOpenDropDown1(false)
                setGender("Male");
              }}
              style={styles.dropDownContent}>
                <Text style={styles.dropDownText}>Male</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8}
              onPress={()=>{
                setOpenDropDown1(false)
                setGender("Female");
              }}
              style={styles.dropDownContent}>
                <Text style={styles.dropDownText}>Female</Text>
              </TouchableOpacity>
            </View>}
        </View>
        <View style={styles.formContent}>
            <Text style={styles.formText}>Date of Birth</Text>
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
      </ScrollView>
      <View style={{marginHorizontal:20}}>
        <PrimaryButton
        title={route?.params?.save===true ? "Save Details" : route?.params?.new ? "Add New Details" : "Edit Details"}
        buttonHandler={()=>{
            if(route?.params?.save===false){
                navigation.navigate("PassportEditScreen", {"save": true})
            }else{
                navigation.goBack()
            }
        }}
        />
      </View>
    </View>
  )
}

export default PassportEditScreen
