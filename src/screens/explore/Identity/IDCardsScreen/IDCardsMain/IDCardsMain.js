import React from 'react';
import {View, Text, TextInput, ScrollView, TouchableOpacity, Image, Dimensions, FlatList, Animated, Modal} from 'react-native';
import { FontSizes, ThemeColors } from '../../../../../theme/globalStyles';
import styles from './styles';
import SearchIcon from "../../../../../assets/Search.svg";
import AadharIcon from "../../../../../assets/Aadhar.svg"
import PanIcon from "../../../../../assets/Pan.svg"
import ArrowRightIcon from '../../../../../assets/ArrowRight.svg';
import BackIcon from "../../../../../assets/Back.svg"; 
import PlusIcon from "../../../../../assets/PlusNew.svg";

import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const {width} = Dimensions.get("window");


const IDCardsMain = () => {

  const navigation = useNavigation();


  return (
    <View style={styles.screen}>
      <View style={styles.viewContainer}>
        <View style={styles.view}>
            <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.goBack()}>
                <BackIcon/>
            </TouchableOpacity>
            <Text style={styles.heading}>ID Card</Text>
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
                    <AadharIcon/>
                </View>
                <View style={{}}>
                    <Text style={styles.contentText}>Aadhar Card</Text>
                    <Text style={[styles.contentText, {color:"#94928C", fontSize:FontSizes.normal, marginTop:3}]}>4582842390</Text>
                </View>
              </View>
              <TouchableOpacity activeOpacity={0.8} onPress={()=>{navigation.navigate("IDCardsEdit")}} style={{alignSelf:"center"}}>
                <ArrowRightIcon/>
              </TouchableOpacity>
            </View>
            <View
            style={styles.container}>
              <View style={styles.content}>
                <View style={styles.logo}>
                    <PanIcon/>
                </View>
                <View style={{}}>
                    <Text style={styles.contentText}>Pan Card</Text>
                    <Text style={[styles.contentText, {color:"#94928C", fontSize:FontSizes.normal, marginTop:3}]}>3908320343</Text>
                </View>
              </View>
              <TouchableOpacity activeOpacity={0.8} onPress={()=>{navigation.navigate("IDCardsEdit")}} style={{alignSelf:"center"}}>
                <ArrowRightIcon/>
              </TouchableOpacity>
            </View>
            <View
            style={styles.container}>
              <View style={styles.content}>
                <View style={styles.logo}>
                    <PanIcon/>
                </View>
                <View style={{}}>
                    <Text style={styles.contentText}>Pan Card</Text>
                    <Text style={[styles.contentText, {color:"#94928C", fontSize:FontSizes.normal, marginTop:3}]}>3908320343</Text>
                </View>
              </View>
              <TouchableOpacity activeOpacity={0.8} onPress={()=>{navigation.navigate("IDCardsEdit")}} style={{alignSelf:"center"}}>
                <ArrowRightIcon/>
              </TouchableOpacity>
            </View>
            <View
            style={styles.container}>
              <View style={styles.content}>
                <View style={styles.logo}>
                    <AadharIcon/>
                </View>
                <View style={{}}>
                    <Text style={styles.contentText}>Aadhar Card</Text>
                    <Text style={[styles.contentText, {color:"#94928C", fontSize:FontSizes.normal, marginTop:3}]}>4582842390</Text>
                </View>
              </View>
              <TouchableOpacity activeOpacity={0.8} onPress={()=>{navigation.navigate("IDCardsEdit")}} style={{alignSelf:"center"}}>
                <ArrowRightIcon/>
              </TouchableOpacity>
            </View>
            <View
            style={styles.container}>
              <View style={styles.content}>
                <View style={styles.logo}>
                    <AadharIcon/>
                </View>
                <View style={{}}>
                    <Text style={styles.contentText}>Aadhar Card</Text>
                    <Text style={[styles.contentText, {color:"#94928C", fontSize:FontSizes.normal, marginTop:3}]}>4582842390</Text>
                </View>
              </View>
              <TouchableOpacity activeOpacity={0.8} onPress={()=>{navigation.navigate("IDCardsEdit", {"save": false})}} style={{alignSelf:"center"}}>
                <ArrowRightIcon/>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <TouchableOpacity 
        activeOpacity={0.8}
        onPress={()=>{
          navigation.navigate("IDCardsEdit", {"new" : true})
        }}
        style={styles.primaryButton}>
          <PlusIcon/>
        </TouchableOpacity>
    </View>
  );
};

export default IDCardsMain;
