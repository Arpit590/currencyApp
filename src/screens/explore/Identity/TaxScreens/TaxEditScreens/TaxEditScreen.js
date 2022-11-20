import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
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


const TaxEditScreen = () => {

    const navigation = useNavigation();
    const route = useRoute();
    const [showPass, setShowPass] = useState(false);

  return (
    <View style={styles.screen}>
      <View style={styles.view}>
        <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.goBack()}>
            <BackIcon/>
        </TouchableOpacity>
        <Text style={styles.heading}>{route?.params?.new ? "TAX" :"Satrujit Behera"}</Text>
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
            <Text style={styles.formText}>Tax Number</Text>
            <View style={styles.input}>
              <TextInput
              placeholder='Tax Number'
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
      </ScrollView>
      <View style={{marginHorizontal:20}}>
        <PrimaryButton
        title={route?.params?.save===true ? "Save Details" : route?.params?.new ? "Add New" : "Edit Details"}
        buttonHandler={()=>{
            if(route?.params?.save===false){
                navigation.navigate("TaxEditScreen", {"save": true})
            }else{
                navigation.goBack()
            }
        }}
        />
      </View>
    </View>
  )
}

export default TaxEditScreen
