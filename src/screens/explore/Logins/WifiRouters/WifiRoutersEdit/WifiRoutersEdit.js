import { ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import styles from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import BackIcon from "../../../../../assets/Back.svg"; 
import ArrowUpIcon from "../../../../../assets/ArrowUpIcon.svg";
import EyeInActiveIcon from "../../../../../assets/EyeInActive.svg";
import EyeActiveIcon from "../../../../../assets/EyeActiveIcon.svg";
import DatePicker from 'react-native-date-picker';
import PrimaryButton from "../../../../../Atoms/PrimaryButton";
import ArrowDownIcon from "../../../../../assets/ArrowDownIcon.svg";
import { FontFamily, ThemeColors } from '../../../../../theme';


const WifiRoutersEdit = () => {

    const navigation = useNavigation();
    const route = useRoute();
    const [showPass, setShowPass] = useState(false);
    const [showPass1, setShowPass1] = useState(false);
    const [open, setOpen] = useState(false);

  return (
    <View style={styles.screen}>
      <View style={styles.view}>
        <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.goBack()}>
            <BackIcon/>
        </TouchableOpacity>
        <Text style={styles.heading}>{route?.params?.new===true ? "Wifi Routers" : "Home Wifi"}</Text>
        <View></View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.view1}>
        <View style={styles.formContent}>
            <Text style={styles.formText}>Router Name</Text>
            <View style={styles.input}>
              <TextInput
              placeholder='Router Name'
              placeholderTextColor="#BBBAB3"
              style={styles.inputText}
              />
            </View>
        </View>
        <View style={styles.formContent}>
            <Text style={styles.formText}>Network Name (SSID)</Text>
            <View style={styles.input}>
              <TextInput
              placeholder='Network Name (SSID)'
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
        {(route?.params?.save===true || route?.params?.new===true) && 
            <View style={{alignSelf:"flex-start", marginBottom:10}}>
                <PrimaryButton
                title="Generate Password"
                buttonHandler={()=>{navigation.navigate("GeneratePassword")}}
                />
            </View>}
        <View style={styles.formContent}>
            <View style={styles.view2}>
                <Text style={styles.viewText}>Advance Set Up</Text>
                <TouchableOpacity
                onPress={()=>setOpen(!open)}
                activeOpacity={0.8}>
                    {(!open) ?
                    <ArrowDownIcon/>
                    :
                    <ArrowUpIcon/>}
                </TouchableOpacity>
            </View>
        </View>
        {(open) &&
        <>
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
                secureTextEntry={showPass1 ? false : true}
                style={styles.inputText}
                />
                <TouchableOpacity activeOpacity={0.8} onPress={()=>setShowPass1(!showPass1)}>
                    {(showPass1) ?
                    <EyeInActiveIcon/>
                    :
                    <EyeActiveIcon/>
                    }
                </TouchableOpacity>
                </View>
            </View>
            {(route?.params?.save===true || route?.params?.new===true) && 
            <View style={{alignSelf:"flex-start", marginBottom:10}}>
                <PrimaryButton
                title="Generate Password"
                buttonHandler={()=>{navigation.navigate("GeneratePassword")}}
                />
            </View>}
            <View style={styles.formContent}>
                <Text style={styles.formText}>Router IP Address</Text>
                <View style={styles.input}>
                <TextInput
                placeholder='Router IP Address'
                placeholderTextColor="#BBBAB3"
                style={styles.inputText}
                />
                </View>
            </View>
        </>
        }
      </ScrollView>
      <View style={{marginHorizontal:20}}>
        <PrimaryButton
        title={route?.params?.save===true ? "Save Details" : route?.params?.new===true ? "Add Details" : "Edit Details"}
        buttonHandler={()=>{
            if(route?.params?.save===false){
                navigation.navigate("WifiRoutersEdit", {"save": true})
            }else{
                navigation.goBack()
            }
        }}
        />
      </View>
    </View>
  )
}

export default WifiRoutersEdit
