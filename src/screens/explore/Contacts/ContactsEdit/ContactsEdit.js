import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import styles from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import BackIcon from "../../../../assets/Back.svg"; 
import UserIcon from "../../../../assets/User.svg"
import PrimaryButton from "../../../../Atoms/PrimaryButton";
import { FontSizes } from '../../../../theme';


const ContactsEdit = () => {

    const navigation = useNavigation();
    const route = useRoute();

  return (
    <View style={styles.screen}>
      <View style={styles.view}>
        <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.goBack()}>
            <BackIcon/>
        </TouchableOpacity>
        <Text style={styles.heading}>{route?.params?.new ? "Contact" : "Satrujit"}</Text>
        <View></View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.view1}>
        <View style={styles.formContent}>
            <TouchableOpacity activeOpacity={0.8} style={styles.contact}>
                <UserIcon/>
            </TouchableOpacity>
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
            <Text style={styles.formText}>Contact Number</Text>
            <View style={styles.input}>
              <TextInput
              placeholder='Contact Number'
              keyboardType='decimal-pad'
              placeholderTextColor="#BBBAB3"
              style={styles.inputText}
              />
            </View>
        </View>
        <View style={styles.formContent}>
            <Text style={styles.formText}>Additional Number</Text>
            <View style={styles.input}>
              <TextInput
              placeholder='Additional Number'
              keyboardType='decimal-pad'
              placeholderTextColor="#BBBAB3"
              style={styles.inputText}
              />
            </View>
        </View>
        <View style={styles.formContent}>
            <Text style={styles.formText}>Email ID</Text>
            <View style={styles.input}>
              <TextInput
              placeholder='Email ID'
              placeholderTextColor="#BBBAB3"
              style={styles.inputText}
              />
            </View>
        </View>
        <View style={styles.formContent}>
            <Text style={styles.formText}>Address</Text>
            <View style={[styles.input, {height:200}]}>
              <TextInput
              placeholder='Address'
              placeholderTextColor="#BBBAB3"
              multiline={true}
              style={styles.inputText}
              />
            </View>
        </View>
      </ScrollView>
      <View style={{marginHorizontal:20}}>
        <PrimaryButton
        title={route?.params?.save===true ? "Save Details" : route?.params?.new ? "Add New" : "Edit Details"}
        buttonHandler={()=>{
            if(route?.params?.save===false){
                navigation.navigate("ContactEdit", {"save": true})
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

export default ContactsEdit
