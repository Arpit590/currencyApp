import React from 'react';
import {View, Text, TextInput, ScrollView, TouchableOpacity, Image, Dimensions, FlatList, Animated, Modal} from 'react-native';
import { FontSizes, ThemeColors } from '../../../../../theme/globalStyles';
import styles from './styles';
import SearchIcon from "../../../../../assets/Search.svg";
import DLIcon from "../../../../../assets/DL.svg"
import ArrowRightIcon from '../../../../../assets/ArrowRight.svg';
import BackIcon from "../../../../../assets/Back.svg"; 
import PlusIcon from "../../../../../assets/PlusNew.svg";

import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const {width} = Dimensions.get("window");


const DrivingLicenseMain = () => {

  const navigation = useNavigation();


  return (
    <View style={styles.screen}>
      <View style={styles.viewContainer}>
        <View style={styles.view}>
            <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.goBack()}>
                <BackIcon/>
            </TouchableOpacity>
            <Text style={styles.heading}>Driving License</Text>
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
              <View style={styles.content}>
                <View style={styles.logo}>
                    <DLIcon/>
                </View>
                <View style={{}}>
                    <Text style={styles.contentText}>Satrujit Behera</Text>
                    <Text style={[styles.contentText, {color:"#94928C", fontSize:FontSizes.normal, marginTop:3}]}>4582842390</Text>
                </View>
              </View>
              <TouchableOpacity activeOpacity={0.8} onPress={()=>{navigation.navigate("DrivingLicenseEdit", {"save" : false})}} style={{alignSelf:"center"}}>
                <ArrowRightIcon/>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <TouchableOpacity 
        activeOpacity={0.8}
        onPress={()=>{
          navigation.navigate("DrivingLicenseEdit", {"new" : true})
        }}
        style={styles.primaryButton}>
          <PlusIcon/>
        </TouchableOpacity>
    </View>
  );
};

export default DrivingLicenseMain;
