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
import GlobeIcon from "../../../../../assets/Globe.svg";
import LockIcon from "../../../../../assets/Lock.svg";
import PasswordIcon from "../../../../../assets/Password.svg";
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
      "heading": "Netflix",
      "filter": "Login",
      "desc": "netflix.com",
      "imgUri": require("../../../../../assets/Image1.png"),
      "website": "www.netflix.com"
    }
  ]


const PasswordsMain = () => {

  const navigation = useNavigation();
  const value = useState(new Animated.Value(0))[0];
  const [modal, setModal] = useState(false);

  const modalHandler=(text)=>{
    console.log("Text" + text);
      setModal(true);
      Animated.timing(value, {
        toValue:180,
        duration:1500,
        useNativeDriver:false
      }).start()
  }

  const modalHandler1=(text)=>{
    console.log("Text" + text);
    setModal(false);
      Animated.timing(value, {
        toValue:0,
        duration:1500,
        useNativeDriver:false
      }).start()
  }


  return (
    <View style={styles.screen}>
      <View style={styles.viewContainer}>
        <View style={styles.view}>
            <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.goBack()}>
                <BackIcon/>
            </TouchableOpacity>
            <Text style={styles.heading}>Passwords</Text>
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
                style={styles.box}>
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
                            <Text style={styles.boxText2}>{item.filter}</Text>
                          </View>
                        </View>
                        <Text style={styles.boxText1} numberOfLines={1}>{item.desc}</Text>
                      </View>
                    </View>
                  </View>
                  {(modal===false) ? <TouchableOpacity activeOpacity={0.8} onPress={()=>{
                    modalHandler(item?.heading)
                  }}>
                    <ArrowDownIcon1/>
                  </TouchableOpacity>
                  :
                  <TouchableOpacity activeOpacity={0.8} onPress={()=>{
                    modalHandler1(item?.heading)
                  }}>
                    <ArrowUpIcon/>
                  </TouchableOpacity>
                  }
                </View>
                <Animated.View style={[styles.view4, {height:value, display: modal===false ? "none" : "flex"}]}>
                  {(modal) && 
                  <>
                  <View style={styles.view5}>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                      <GlobeIcon/>
                      <Text style={[styles.boxText2, {fontSize:FontSizes.large, marginLeft:20}]}>{item?.website}</Text>
                    </View>
                    <ForwardIcon/>
                  </View>
                  <View style={[styles.view5, {marginTop:20}]}>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                      <LockIcon/>
                      <Text style={[styles.boxText2, {fontSize:FontSizes.large, marginLeft:20}]}>********************</Text>
                    </View>
                    <PasswordIcon/>
                  </View>
                  <View style={styles.view6}>
                    <View style={styles.view7}>
                      <InfoIcon/>
                      <Text style={styles.infoText}>See Details</Text>
                    </View>
                    <View style={styles.view7}>
                      <ShareIcon/>
                      <Text style={styles.infoText}>Share</Text>
                    </View>
                  </View>
                  </>
                  }
                </Animated.View>
              </View>
            </>
            )}
            />
          </ScrollView>
        </View>
        <TouchableOpacity 
        activeOpacity={0.8}
        onPress={()=>{
          navigation.navigate("PasswordsEdit", {"new": true})
        }}
        style={styles.primaryButton}>
          <PlusIcon/>
        </TouchableOpacity>
    </View>
  );
};

export default PasswordsMain;
