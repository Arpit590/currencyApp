import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import styles from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import BackIcon from "../../../../assets/Back.svg"; 
import CheckIcon from "../../../../assets/Correct.svg";
import AlignmentIcon from "../../../../assets/Alignment.svg";


const NotesEdit = () => {

    const navigation = useNavigation();
    const route = useRoute();

  return (
    <>
        <View style={styles.screen}>
        <View style={styles.view}>
            <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.goBack()}>
                <BackIcon/>
            </TouchableOpacity>
            <View style={styles.view1}> 
                <TouchableOpacity activeOpacity={0.8}>
                    <AlignmentIcon/>
                </TouchableOpacity>
                <TouchableOpacity
                style={{marginLeft:20}}
                activeOpacity={0.8}
                >
                    <CheckIcon/>
                </TouchableOpacity>
            </View>
        </View>
        <View style={{marginHorizontal:35}}>
            <TextInput
            placeholder='Title'
            placeholderTextColor="#DBD9D1"
            style={styles.input}
            />
            <TextInput
            placeholder='Note'
            placeholderTextColor="#DBD9D1"
            multiline={true}
            style={styles.input1}
            />
        </View>
        </View>
    </>
  )
}

export default NotesEdit
