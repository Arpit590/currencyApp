import { ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import styles from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import BackIcon from "../../../../../assets/Back.svg"; 
import ArrowDownIcon from "../../../../../assets/ArrowDown.svg";
import EyeInActiveIcon from "../../../../../assets/EyeInActive.svg";
import DatePicker from 'react-native-date-picker';
import PrimaryButton from "../../../../../Atoms/PrimaryButton";
import CalendarIcon from "../../../../../assets/Line.svg";
import { FontFamily, ThemeColors } from '../../../../../theme';


const PasswordsEdit = () => {

    const navigation = useNavigation();
    const route = useRoute();
    const [enable, setEnable] = useState(false);

  return (
    <View style={styles.screen}>
      <View style={styles.view}>
        <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.goBack()}>
            <BackIcon/>
        </TouchableOpacity>
        <Text style={styles.heading}>{route?.params?.new===true ? "Password" : "Netflix"}</Text>
        <View></View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.view1}>
        <View style={[styles.formContent, {flexDirection:"row", alignItems:"center", justifyContent:"space-between"}]}>
            <Text style={[styles.formText, {color:ThemeColors.textPrimary, fontFamily:FontFamily.secondaryRegular, marginBottom:0}]}>Enable Synced Password</Text>
            <Switch
                id="EnableSync"
                trackColor={{ false: "#DBD9D1", true: "#FFD700" }}
                thumbColor={"#DBD9D1"}
                ios_backgroundColor="#DBD9D1"
                onValueChange={() => {
                  setEnable(!enable);
                }}
                value={enable}
              />
        </View>
        <View style={styles.formContent}>
            <Text style={styles.formText}>Website Name</Text>
            <View style={styles.input}>
              <TextInput
              placeholder='Website Name'
              placeholderTextColor="#BBBAB3"
              style={styles.inputText}
              />
            </View>
        </View>
        <View style={styles.formContent}>
            <Text style={styles.formText}>Category</Text>
            <View style={styles.input}>
              <TextInput
              placeholder='Category'
              placeholderTextColor="#BBBAB3"
              style={styles.inputText}
              />
            </View>
        </View>
        <View style={styles.formContent}>
            <Text style={styles.formText}>Website Link</Text>
            <View style={styles.input}>
              <TextInput
              placeholder='Website Link'
              placeholderTextColor="#BBBAB3"
              style={styles.inputText}
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
        <View style={styles.formContent}>
            <Text style={styles.formText}>Password</Text>
            <View style={styles.input}>
              <TextInput
              placeholder='Password'
              placeholderTextColor="#BBBAB3"
              style={styles.inputText}
              />
            </View>
            <View style={{alignSelf:"flex-start", marginTop:10}}>
            <PrimaryButton
            title="Generate Password"
            buttonHandler={()=>{navigation.navigate("GeneratePassword")}}
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
        title={route?.params?.save===true ? "Save Details" : route?.params?.new===true ? "Add Details" : "Edit Details"}
        buttonHandler={()=>{
            if(route?.params?.save===false || route?.params?.save===undefined){
                navigation.navigate("PasswordsEdit", {"save": true})
            }else{
                navigation.goBack()
            }
        }}
        />
      </View>
    </View>
  )
}

export default PasswordsEdit
