import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import styles from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import BackIcon from "../../../../assets/Back.svg"; 
import BookMarkIcon from "../../../../assets/BookMark.svg"
import PrimaryButton from "../../../../Atoms/PrimaryButton";
import { FontSizes } from '../../../../theme';


const BookMarksEdit = () => {

    const navigation = useNavigation();
    const route = useRoute();

  return (
    <View style={styles.screen}>
      <View style={styles.view}>
        <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.goBack()}>
            <BackIcon/>
        </TouchableOpacity>
        <Text style={styles.heading}>{route?.params?.new ? "BookMark" : "Netflix"}</Text>
        <View></View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.view1}>
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
            <Text style={styles.formText}>Website Link</Text>
            <View style={styles.input}>
              <TextInput
              placeholder='Website Link'
              placeholderTextColor="#BBBAB3"
              style={styles.inputText}
              />
              <TouchableOpacity activeOpacity={0.8}>
                <BookMarkIcon/>
              </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
      <View style={{marginHorizontal:20}}>
        <PrimaryButton
        title={route?.params?.save===true ? "Save Details" : route?.params?.new ? "Add New Details" : "Edit Details"}
        buttonHandler={()=>{
            if(route?.params?.save===false){
                navigation.navigate("BookMarksEdit", {"save": true})
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

export default BookMarksEdit
