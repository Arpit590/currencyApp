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
import { FontSizes } from '../../../../../theme';


const CertificateEdit = () => {

    const navigation = useNavigation();
    const [showPass, setShowPass] = useState(false);
    const [openDropDown, setOpenDropDown] = useState(false);
    const [country, setCountry] = useState("");
    const [open, setOpen] = useState(false);
    const [expiryDate, setExpiryDate]= useState(new Date());
    const route = useRoute();

  return (
    <View style={styles.screen}>
      <View style={styles.view}>
        <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.goBack()}>
            <BackIcon/>
        </TouchableOpacity>
        <Text style={styles.heading}>{route?.params?.new ? route?.params?.certificate===true ? "Certificate" : "Invoice" : route?.params?.certificate===true ? "12th Certificate" : "Invoice1"}</Text>
        <View></View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.view1}>
        <View style={styles.formContent}>
            <Text style={styles.formText}>Nick Name</Text>
            <View style={styles.input}>
              <TextInput
              placeholder='Nick Name'
              placeholderTextColor="#BBBAB3"
              style={styles.inputText}
              />
            </View>
        </View>
        <View style={styles.container}>
            <View style={[styles.formContent, {flex:1, marginRight:10}]}>
                <Text style={styles.formText}>Date</Text>
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
        </View>
        <View style={styles.formContent}>
            <Text style={styles.formText}>Place</Text>
            <View style={styles.input}>
              <TextInput
              placeholder='Place'
              placeholderTextColor="#BBBAB3"
              style={styles.inputText}
              />
            </View>
        </View>
        <View style={styles.formContent}>
            <Text style={styles.formText}>{route?.params?.certificate===true ? "Upload Certificate": "Upload Invoice"}</Text>
            {(route?.params?.new===true) ? 
            <View style={styles.formContent}>
                <View style={styles.cameraContainer}>
                    <TouchableOpacity activeOpacity={0.8} style={styles.camera}>
                        <CameraIcon/>
                    </TouchableOpacity>
                    <Text style={styles.cameraText}>{route?.params?.certificate===true ? "Click here to Upload Certificate": "Click here to Upload Invoice"}</Text>
                </View>
            </View>
            :
            <>
            <View style={[styles.formContent, {borderWidth:3, borderColor:"#DBD9D1", borderRadius:10, padding:20, alignItems:"center"}]}>
                <Image
                source={require("../../../../../assets/Certificate.png")}
                style={styles.image}
                />
            </View>
            <TouchableOpacity activeOpacity={0.8} style={styles.button}>
                <Text style={[styles.buttonText]}>Scan Again</Text>
            </TouchableOpacity>
            </>
            }
        </View>
      </ScrollView>
      <View style={{marginHorizontal:20}}>
        <PrimaryButton
        title={route?.params?.save===true ? "Save Details" : route?.params?.new ? "Add New Details" : "Edit Details"}
        buttonHandler={()=>{
            if(route?.params?.save===false){
                navigation.navigate("CertificateEdit", {"save": true})
            }else{
                navigation.goBack()
            }
        }}
        />
      </View>
      {console.log("save" + JSON.stringify(route?.params))}
    </View>
  )
}

export default CertificateEdit
