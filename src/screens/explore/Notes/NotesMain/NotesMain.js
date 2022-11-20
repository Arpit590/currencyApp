import React from 'react';
import {View, Text, TextInput, ScrollView, TouchableOpacity, Image, Dimensions, FlatList, Animated, Modal} from 'react-native';
import { FontSizes, ThemeColors } from '../../../../theme/globalStyles';
import styles from './styles';
import SearchIcon from "../../../../assets/Search.svg";
import AudioIcon from "../../../../assets/Audio.svg"
import ArrowRightIcon from '../../../../assets/ArrowRight.svg';
import BackIcon from "../../../../assets/Back.svg"; 
import PlusIcon from "../../../../assets/PlusNew.svg";

import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const {width} = Dimensions.get("window");


const NotesMain = () => {

  const navigation = useNavigation();


  return (
    <View style={styles.screen}>
      <View style={styles.viewContainer}>
        <View style={styles.view}>
            <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.goBack()}>
                <BackIcon/>
            </TouchableOpacity>
            <Text style={styles.heading}>Notes</Text>
            <View></View>
        </View>
        <View style={styles.search}>
          <TextInput 
          placeholder='Search'
          placeholderTextColor={ThemeColors.textSecondary}
          keyboardType="default"
          style={styles.searchInput}
          />
          <SearchIcon/>
        </View>
      </View>
      <View style={styles.view1}>
          <ScrollView showsVerticalScrollIndicator={false} style={{alignSelf:"center", width:width, marginBottom:100}}>
            <View
            style={styles.container}>
                <TouchableOpacity
                activeOpacity={0.8}
                onPress={()=>navigation.navigate("NotesEdit", {"save": false})}
                style={styles.notes}>
                    <Text style={styles.notesHeading}>Note Taking</Text>
                    <Text style={styles.notesDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam nunc sed laoreet adipiscing viverra morbi. Rhoncus fames convallis enim egestas penatibus. </Text>
                </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <TouchableOpacity 
        activeOpacity={0.8}
        onPress={()=>{
            navigation.navigate("NotesEdit", {"save": true})
        }}
        style={styles.primaryButton}>
          <PlusIcon/>
        </TouchableOpacity>
    </View>
  );
};

export default NotesMain;
