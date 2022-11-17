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
import { ThemeColors } from '../../../../theme';


const Lender = () => {

    const navigation = useNavigation();
    const [showPass, setShowPass] = useState(false);
    const [openDropDown, setOpenDropDown] = useState(false);
    const [country, setCountry] = useState("");
    const [open, setOpen] = useState(false);
    const [lenderDate, setLenderDate]= useState(new Date());

  return (
    <View style={styles.screen}>
      <View style={styles.view}>
        <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.goBack()}>
            <BackIcon/>
        </TouchableOpacity>
        <Text style={styles.heading}>Lender</Text>
        <View></View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.view1}>
        <View style={styles.formContent}>
            <Text style={styles.formText}>Name</Text>
            <View style={styles.input}>
              <Text style={[styles.inputText, {paddingVertical:10}]}>{country ? country : "Choose whom to Lend"}</Text>
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
            <Text style={styles.formText}>Date of Lender</Text>
            <View style={styles.input}>
              <Text style={[styles.inputText, {paddingVertical:10}]}>{new Date(lenderDate).getDate()}/{new Date(lenderDate).getMonth() + 1}/{new Date(lenderDate).getFullYear()}</Text>
              <TouchableOpacity activeOpacity={0.8} onPress={()=>setOpen(true)}>
                <CalendarIcon/>
              </TouchableOpacity>
            </View>
            <DatePicker
              modal
              open={open}
              date={lenderDate}
              mode="date"
              onConfirm={(date) => {
                  setOpen(false)
                  setLenderDate(date);
                  console.log("Hesy" + lenderDate)
              }}
              onCancel={() => {
                  setOpen(false)
              }}
              />
        </View>
        <View style={styles.formContent}>
            <Text style={styles.formText}>Amount</Text>
            <View style={styles.input}>
              <TextInput
              placeholder='Amount'
              placeholderTextColor="#BBBAB3"
              style={styles.inputText}
              />
              <Text style={[styles.formText, {color:ThemeColors.textPrimary, fontSize:14, marginBottom:0}]}>₹</Text>
            </View>
        </View>
        <View style={styles.formContent}>
            <Text style={styles.formText}>Mode of Payment</Text>
            <View style={styles.input}>
              <TextInput
              placeholder='Mode of Payment'
              placeholderTextColor="#BBBAB3"
              style={styles.inputText}
              />
            </View>
        </View>
        <View style={styles.formContent}>
            <Text style={styles.formText}>Loan To</Text>
            <View style={styles.input}>
              <TextInput
              placeholder='Loan To'
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
        title="Add a Record"
        buttonHandler={()=>{}}
        />
      </View>
    </View>
  )
}

export default Lender
