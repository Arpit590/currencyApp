import React from 'react';
import {View, Text, TextInput, ScrollView, TouchableOpacity, Image, Dimensions, FlatList, Animated, Modal} from 'react-native';
import { FontSizes, ThemeColors } from '../../../../../theme/globalStyles';
import styles from './styles';
import SearchIcon from "../../../../../assets/Search.svg";
import ArrowDownIcon from "../../../../../assets/ArrowDown.svg";
import ArrowDownIcon1 from "../../../../../assets/ArrowDown2.svg";
import ArrowRightIcon from '../../../../../assets/ArrowRight.svg';
import BackIcon from "../../../../../assets/Back.svg"; 
import PlusIcon from "../../../../../assets/PlusNew.svg";

import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const {width} = Dimensions.get("window");


const CardsMainScreen = () => {

  const navigation = useNavigation();


  return (
    <View style={styles.screen}>
      <View style={styles.viewContainer}>
        <View style={styles.view}>
            <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.goBack()}>
                <BackIcon/>
            </TouchableOpacity>
            <Text style={styles.heading}>Cards</Text>
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
                <Image
                source={require("../../../../../assets/CardImg.png")}
                />
                <View style={{}}>
                    <Text style={styles.contentText}>IDFC Credit Card</Text>
                    <Text style={[styles.contentText, {color:"#94928C", fontSize:FontSizes.normal, marginTop:3, maxWidth:50}]} numberOfLines={1}>499945322</Text>
                </View>
              </View>
              <TouchableOpacity activeOpacity={0.8} onPress={()=>{navigation.navigate("CardsEditScreen")}} style={{alignSelf:"center"}}>
                <ArrowRightIcon/>
              </TouchableOpacity>
            </View>
            <View
            style={styles.container}>
              <View style={styles.content}>
                <Image
                source={require("../../../../../assets/CardImg.png")}
                />
                <View style={{}}>
                    <Text style={styles.contentText}>IDFC Credit Card</Text>
                    <Text style={[styles.contentText, {color:"#94928C", fontSize:FontSizes.normal, marginTop:3, maxWidth:50}]} numberOfLines={1}>499945322</Text>
                </View>
              </View>
              <TouchableOpacity activeOpacity={0.8} onPress={()=>{navigation.navigate("CardsEditScreen")}} style={{alignSelf:"center"}}>
                <ArrowRightIcon/>
              </TouchableOpacity>
            </View>
            <View
            style={styles.container}>
              <View style={styles.content}>
                <Image
                source={require("../../../../../assets/CardImg.png")}
                />
                <View style={{}}>
                    <Text style={styles.contentText}>IDFC Credit Card</Text>
                    <Text style={[styles.contentText, {color:"#94928C", fontSize:FontSizes.normal, marginTop:3, maxWidth:50}]} numberOfLines={1}>499945322</Text>
                </View>
              </View>
              <TouchableOpacity activeOpacity={0.8} onPress={()=>{navigation.navigate("CardsEditScreen")}} style={{alignSelf:"center"}}>
                <ArrowRightIcon/>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <TouchableOpacity 
        activeOpacity={0.8}
        onPress={()=>{
          navigation.navigate("CardsEditScreen", {"save": true})
        }}
        style={styles.primaryButton}>
          <PlusIcon/>
        </TouchableOpacity>
    </View>
  );
};

export default CardsMainScreen;
