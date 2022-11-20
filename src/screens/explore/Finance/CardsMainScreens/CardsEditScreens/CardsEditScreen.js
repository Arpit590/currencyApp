import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import styles from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import BackIcon from "../../../../../assets/Back.svg"; 
import ArrowDownIcon from "../../../../../assets/ArrowDown.svg";
import EyeInActiveIcon from "../../../../../assets/EyeInActive.svg";
import DatePicker from 'react-native-date-picker';
import PrimaryButton from "../../../../../Atoms/PrimaryButton";
import CalendarIcon from "../../../../../assets/Line.svg";
import CircleIcon from "../../../../../assets/Circle.svg";
import { FontSizes } from '../../../../../theme';


const CardsEditScreen = () => {

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
        <Text style={styles.heading}>Card</Text>
        <View></View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.view1}>
        <View style={styles.formContent}>
            <View style={styles.card}>
                <Text style={styles.cardText}>IDFC Credit Card</Text>
                <Text style={[styles.cardText, {fontSize:FontSizes.largeXXX, marginTop:40}]}>4844 2463 2676 3752</Text>
                <View style={styles.card1}>
                    <View style={styles.cardContainer}>
                        <Text style={styles.cardContainerText}>Card Holder name</Text>
                        <Text style={styles.cardContainerText1}>Daniel Austin</Text>
                    </View>
                    <View style={styles.cardContainer}>
                        <Text style={styles.cardContainerText}>Expiry date</Text>
                        <Text style={styles.cardContainerText1}>02/30</Text>
                    </View>
                    <CircleIcon/>
                </View>
            </View>
        </View>
        <View style={styles.formContent}>
            <Text style={styles.formText}>Card Name</Text>
            <View style={styles.input}>
              <TextInput
              placeholder='Card Name'
              placeholderTextColor="#BBBAB3"
              style={styles.inputText}
              />
            </View>
        </View>
        <View style={styles.formContent}>
            <Text style={styles.formText}>Card Number</Text>
            <View style={styles.input}>
              <TextInput
              placeholder='Card Number'
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
            <Text style={styles.formText}>Card Holder Name</Text>
            <View style={styles.input}>
              <TextInput
              placeholder='Card Holder Name'
              placeholderTextColor="#BBBAB3"
              style={styles.inputText}
              />
            </View>
        </View>
        <View style={styles.container}>
            <View style={[styles.formContent, {flex:0.7, marginRight:10}]}>
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
            <View style={[styles.formContent, {flex:0.3}]}>
                <Text style={styles.formText}>CVV</Text>
                <View style={styles.input}>
                <TextInput
                placeholder='CVV'
                placeholderTextColor="#BBBAB3"
                style={styles.inputText}
                />
                </View>
            </View>
        </View>
        <View style={styles.formContent}>
            <Text style={styles.formText}>PIN</Text>
            <View style={styles.input}>
              <TextInput
              placeholder='PIN'
              placeholderTextColor="#BBBAB3"
              style={styles.inputText}
              />
            </View>
        </View>
      </ScrollView>
      <View style={{marginHorizontal:20}}>
        <PrimaryButton
        title={route?.params?.save===true ? "Save Details" : "Edit Details"}
        buttonHandler={()=>{
            if(route?.params?.save===false || route?.params?.save===undefined){
                navigation.navigate("CardsEditScreen", {"save": true})
            }else{
                navigation.goBack()
            }
        }}
        />
      </View>
    </View>
  )
}

export default CardsEditScreen
