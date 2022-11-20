import { ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import styles from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import BackIcon from "../../../../../assets/Back.svg"; 
import ArrowDownIcon from "../../../../../assets/ArrowDown.svg";
import RefreshIcon from "../../../../../assets/Refresh.svg";
import DatePicker from 'react-native-date-picker';
import PrimaryButton from "../../../../../Atoms/PrimaryButton";
import CalendarIcon from "../../../../../assets/Line.svg";
import { FontFamily, ThemeColors } from '../../../../../theme';


const GeneratePassword = () => {

    const navigation = useNavigation();
    const route = useRoute();
    const [letters, setLetters] = useState(false);
    const [symbols, setSymbols] = useState(false);
    const [characters, setCharacters] = useState(false);
    const [digits, setDigits] = useState(false);

  return (
    <View style={styles.screen}>
      <View style={styles.view}>
        <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.goBack()}>
            <BackIcon/>
        </TouchableOpacity>
        <Text style={styles.heading}>{"Generator"}</Text>
        <View></View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.view1}>
        <View style={styles.formContent}>
            <Text style={styles.formText}>Password Name</Text>
            <View style={styles.input}>
              <TextInput
              placeholder='Password Name'
              placeholderTextColor="#BBBAB3"
              style={styles.inputText}
              />
              <TouchableOpacity activeOpacity={0.8}>
                <RefreshIcon/>
              </TouchableOpacity>
            </View>
        </View>
        <View style={[styles.formContent, {flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginTop:20}]}>
            <Text style={[styles.formText, {color:ThemeColors.textPrimary, fontFamily:FontFamily.secondaryRegular, marginBottom:0}]}>Digits</Text>
            <Switch
                id="Digits"
                trackColor={{ false: "#DBD9D1", true: "#FFD700" }}
                thumbColor={"#DBD9D1"}
                ios_backgroundColor="#DBD9D1"
                onValueChange={() => {
                  setDigits(!digits);
                }}
                value={digits}
              />
        </View>
        <View style={[styles.formContent, {flexDirection:"row", alignItems:"center", justifyContent:"space-between"}]}>
            <Text style={[styles.formText, {color:ThemeColors.textPrimary, fontFamily:FontFamily.secondaryRegular, marginBottom:0}]}>Letters</Text>
            <Switch
                id="Letters"
                trackColor={{ false: "#DBD9D1", true: "#FFD700" }}
                thumbColor={"#DBD9D1"}
                ios_backgroundColor="#DBD9D1"
                onValueChange={() => {
                  setLetters(!letters);
                }}
                value={letters}
              />
        </View>
        <View style={[styles.formContent, {flexDirection:"row", alignItems:"center", justifyContent:"space-between"}]}>
            <Text style={[styles.formText, {color:ThemeColors.textPrimary, fontFamily:FontFamily.secondaryRegular, marginBottom:0}]}>Symbols</Text>
            <Switch
                id="Symbols"
                trackColor={{ false: "#DBD9D1", true: "#FFD700" }}
                thumbColor={"#DBD9D1"}
                ios_backgroundColor="#DBD9D1"
                onValueChange={() => {
                  setSymbols(!symbols);
                }}
                value={symbols}
              />
        </View>
        <View style={[styles.formContent, {flexDirection:"row", alignItems:"center", justifyContent:"space-between"}]}>
            <Text style={[styles.formText, {color:ThemeColors.textPrimary, fontFamily:FontFamily.secondaryRegular, marginBottom:0}]}>Characters</Text>
            <Switch
                id="Characters"
                trackColor={{ false: "#DBD9D1", true: "#FFD700" }}
                thumbColor={"#DBD9D1"}
                ios_backgroundColor="#DBD9D1"
                onValueChange={() => {
                  setCharacters(!characters);
                }}
                value={characters}
              />
        </View>
      </ScrollView>
      <View style={{marginHorizontal:20}}>
        <PrimaryButton
        title="Use This Password"
        buttonHandler={()=>{
            navigation.goBack()
        }}
        />
      </View>
    </View>
  )
}

export default GeneratePassword
