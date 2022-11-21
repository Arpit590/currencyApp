import React from 'react';
import {View, Text, TextInput, ScrollView, TouchableOpacity, Image, Dimensions, FlatList, Animated, Modal} from 'react-native';
import { FontSizes, ThemeColors } from '../../../../../theme/globalStyles';
import styles from './styles';
import SearchIcon from "../../../../../assets/Search.svg";
import RefreshIcon from "../../../../../assets/RefreshIcon1.svg";
import CopyIcon from "../../../../../assets/Copy.svg";
import ArrowDownIcon1 from "../../../../../assets/ArrowDown2.svg";
import ArrowRightIcon from '../../../../../assets/ArrowRight.svg';
import BackIcon from "../../../../../assets/Back.svg"; 
import PlusIcon from "../../../../../assets/PlusNew.svg";
import EyeActiveIcon from "../../../../../assets/EyeActiveIcon.svg";
import InfoIcon from "../../../../../assets/Info.svg";
import ShareIcon from "../../../../../assets/Share.svg";
import ForwardIcon from "../../../../../assets/Forward.svg";
import ArrowUpIcon from "../../../../../assets/ArrowUp.svg";

import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const {width} = Dimensions.get("window");

export const listData = [
    {
      "id": "m1",
      "heading": "22420",
      "filter": "Personal",
      "desc": "Uphold",
      "imgUri": require("../../../../../assets/Uphold.png"),
    }
  ]


const FAMain = () => {

  const navigation = useNavigation();


  return (
    <View style={styles.screen}>
      <View style={styles.viewContainer}>
        <View style={styles.view}>
            <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.goBack()}>
                <BackIcon/>
            </TouchableOpacity>
            <Text style={styles.heading}>2FAs</Text>
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
          <FlatList
            data={listData}
            showsVerticalScrollIndicator={false}
            renderItem={({item})=>(
              <>
              <View>
                <View
                key={item.id}
                style={[styles.box]}>
                  <View style={styles.boxContainer}>
                    <Image
                    source={item.imgUri}
                    style={styles.boxImage}
                    />
                    <View style={styles.boxTextContainer}>
                      <View style={{}}>
                        <View style={{flexDirection:"row", alignItems:"center"}}>
                          <Text style={styles.boxText} numberOfLines={1}>{item.heading}</Text>
                          <View style={styles.view3}>
                            <Text style={styles.boxText2}>
                                {item.filter}
                            </Text>
                            </View>
                        </View>
                        <Text style={styles.boxText1} numberOfLines={1}>{item.desc}</Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity activeOpacity={0.8} onPress={()=>{
                    navigation.navigate("FAEdit", {"save":false})
                  }}>
                    <ArrowRightIcon/>
                  </TouchableOpacity>
                </View>
              </View>
            </>
            )}
            />
          </ScrollView>
        </View>
        <TouchableOpacity 
        activeOpacity={0.8}
        onPress={()=>{
          navigation.navigate("FAEdit", {"new": true})
        }}
        style={styles.primaryButton}>
          <PlusIcon/>
        </TouchableOpacity>
    </View>
  );
};

export default FAMain;
