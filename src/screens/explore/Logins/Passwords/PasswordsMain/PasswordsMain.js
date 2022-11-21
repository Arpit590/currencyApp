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
        toValue:300,
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
                style={[styles.box,!modal ? {} : {borderWidth:1, borderColor:"#DBD9D1", marginHorizontal:20, borderRadius:10}]}>
                  <View style={styles.boxContainer}>
                    <Image
                    source={item.imgUri}
                    style={styles.boxImage}
                    />
                    <View style={styles.boxTextContainer}>
                      <View style={{}}>
                        <View style={{flexDirection:"row", alignItems:"center"}}>
                          <Text style={styles.boxText} numberOfLines={1}>{item.heading}</Text>
                          <RefreshIcon/>
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
                <Animated.View style={[styles.view4, {height:value, display: modal===false ? "none" : "flex", borderWidth:1, borderColor:"#DBD9D1", marginHorizontal:20, borderRadius:10, alignSelf:"center", width:"90%"}]}>
                  {(modal) && 
                  <>
                  <View style={[styles.view5, {marginHorizontal:20}]}>
                    <View style={styles.container1}>
                      <View style={styles.container3}>
                        <View style={styles.container2}>
                          <Text style={styles.container2Text}>Netflix</Text>
                          <RefreshIcon/>
                        </View>
                        <Text style={[styles.container2Text, {color:"#BBBAB3", fontSize:FontSizes.tiny}]}>Entertainment</Text>
                      </View>
                      <View style={styles.container2}>
                        <Text style={[styles.container3Text]}>Updated last <Text style={{color:ThemeColors.textPrimary}}>4 days</Text> ago</Text>
                        <EyeActiveIcon/>
                      </View>
                    </View>
                    <View style={styles.container4}>
                      <View style={styles.container5}>
                        <Text style={styles.container5Heading}>UserName</Text>
                        <View style={styles.container6}>
                          <Text style={styles.container6Heading}>sb1930013</Text>
                          <TouchableOpacity activeOpacity={0.8}>
                            <CopyIcon/>
                          </TouchableOpacity>
                        </View>
                      </View>
                      <View style={styles.container5}>
                        <Text style={styles.container5Heading}>Password</Text>
                        <View style={styles.container6}>
                          <Text style={styles.container6Heading}>asjajsajk29237812</Text>
                          <TouchableOpacity activeOpacity={0.8}>
                            <CopyIcon/>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                    <View style={styles.container7}>
                      <TouchableOpacity activeOpacity={0.8} style={styles.button}>
                        <Text style={styles.buttonText}>Go to Website</Text>
                      </TouchableOpacity>
                      <TouchableOpacity 
                       onPress={()=>{
                        navigation.navigate("PasswordsEdit", {"save": false})
                      }}
                      activeOpacity={0.8} style={[styles.button, {backgroundColor:"white", borderWidth:2, borderColor:ThemeColors.textPrimary}]}>
                        <Text style={styles.buttonText}>Edit Details</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={[styles.view6, {marginHorizontal:20}]}>
                        <Text style={[styles.buttonText, {color:"#BBBAB3", fontSize:FontSizes.smallX}]}>Additional Information</Text>
                        <Text style={[styles.buttonText, {color:ThemeColors.textPrimary, fontSize:FontSizes.smallXX, marginTop:7}]}>Additional Information to kept in this scenario</Text>
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
