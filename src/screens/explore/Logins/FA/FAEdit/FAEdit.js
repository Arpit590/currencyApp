import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import styles from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import BackIcon from "../../../../../assets/Back.svg"; 
import ArrowDownIcon from "../../../../../assets/ArrowDown.svg";
import EyeInActiveIcon from "../../../../../assets/EyeInActive.svg";
import DatePicker from 'react-native-date-picker';
import PrimaryButton from "../../../../../Atoms/PrimaryButton";
import FAIcon from "../../../../../assets/FA.svg";
import CalendarIcon from "../../../../../assets/Line.svg";
import CircleIcon from "../../../../../assets/Circle.svg";
import { FontSizes } from '../../../../../theme';


const FAEdit = () => {

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
        <Text style={styles.heading}>{route?.params?.new ? "2FA" : "Uphold"}</Text>
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
            <Text style={styles.formText}>2FA Secret</Text>
            <View style={styles.input}>
              <TextInput
              placeholder='2FA Secret'
              placeholderTextColor="#BBBAB3"
              style={styles.inputText}
              />
              {(route?.params?.new===true || route?.params?.save===true) && 
              <TouchableOpacity activeOpacity={0.8}>
                <FAIcon/>
              </TouchableOpacity>
              }
            </View>
        </View>
        <View style={styles.formContent}>
            <Text style={styles.formText}>Tags</Text>
            <View style={styles.input}>
              <TextInput
              placeholder='Tags'
              placeholderTextColor="#BBBAB3"
              style={styles.inputText}
              />
            </View>
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
        title={route?.params?.save===true ? "Save 2FA" : route?.params?.new ? "Add 2FA" : "Edit 2FA"}
        buttonHandler={()=>{
            if(route?.params?.save===false){
                navigation.navigate("FAEdit", {"save": true})
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

export default FAEdit
