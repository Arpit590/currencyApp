import React from 'react';
import {View, Text, TextInput, ScrollView, TouchableOpacity, Image, Dimensions, FlatList, Animated} from 'react-native';
import { FontSizes, ThemeColors } from '../../theme/globalStyles';
import styles from './styles';
import SearchIcon from "../../assets/Search.svg";
import ArrowDownIcon from "../../assets/ArrowDown.svg";
import ArrowDownIcon1 from "../../assets/ArrowDown2.svg";
import GlobeIcon from "../../assets/Globe.svg";
import LockIcon from "../../assets/Lock.svg";
import PasswordIcon from "../../assets/Password.svg";
import InfoIcon from "../../assets/Info.svg";
import ShareIcon from "../../assets/Share.svg";
import ForwardIcon from "../../assets/Forward.svg";
import { useState } from 'react';

const {width} = Dimensions.get("window");

export const listData = [
  {
    "id": "m1",
    "heading": "Netflix",
    "filter": "Login",
    "desc": "netflix.com",
    "imgUri": require("../../assets/Image1.png")
  },
  {
    "id": "m2",
    "heading": "IDFC Credit Card",
    "filter": "Payment",
    "desc": "4484 **** **** ****",
    "imgUri": require("../../assets/Image2.png")
  },
  {
    "id": "m3",
    "heading": "Amazon",
    "filter": "Logins",
    "desc": "amazon.com",
    "imgUri": require("../../assets/Image3.png")
  },
  {
    "id": "m4",
    "heading": "List of Candidates of companhy",
    "filter": "Files",
    "desc": "It is unkonwn to all of the superfiles if called not",
    "imgUri": require("../../assets/Image4.png")
  },
  {
    "id": "m5",
    "heading": "UI design",
    "filter": "Bookmark",
    "desc": "Google Chrome",
    "imgUri": require("../../assets/Image5.png")
  },
  {
    "id": "m6",
    "heading": "Indian Bank",
    "filter": "Payment",
    "desc": "indianbank.in",
    "imgUri": require("../../assets/Image6.png")
  },
  {
    "id": "m7",
    "heading": "Amazon",
    "filter": "Logins",
    "desc": "amazon.com",
    "imgUri": require("../../assets/Image3.png")
  },
  {
    "id": "m8",
    "heading": "List of Candidates of companhy",
    "filter": "Files",
    "desc": "It is unkonwn to all of the superfiles if called not",
    "imgUri": require("../../assets/Image4.png")
  },
  {
    "id": "m9",
    "heading": "UI design",
    "filter": "Bookmark",
    "desc": "Google Chrome",
    "imgUri": require("../../assets/Image5.png")
  },
  {
    "id": "m10",
    "heading": "UI design",
    "filter": "Bookmark",
    "desc": "Google Chrome",
    "imgUri": require("../../assets/Image5.png")
  },
]

const HomeScreen = () => {

  const value = useState(new Animated.Value(0))[0];
  const [modal, setModal] = useState(false);

  const modalHandler=(text)=>{
    console.log("Text" + text)
    if(text==="Netflix"){
      setModal(true);
      Animated.timing(value, {
        toValue:20,
        duration:1000,
        useNativeDriver:false
      }).start()
    }
  }

  return (
    <View style={styles.screen}>
      <View style={styles.view}>
        <View style={styles.search}>
          <TextInput 
          placeholder='Search'
          placeholderTextColor={ThemeColors.textSecondary}
          keyboardType="default"
          style={styles.searchInput}
          />
          <SearchIcon/>
        </View>
        <View style={styles.view1}>
          <Text style={styles.headingText}>Recent Activities</Text>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.view2}>
            <TouchableOpacity activeOpacity={0.8} style={styles.option}>
              <Text style={styles.optionText}>Login</Text>
              <ArrowDownIcon/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.option}>
              <Text style={styles.optionText}>Identity</Text>
              <ArrowDownIcon/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.option}>
              <Text style={styles.optionText}>Finance</Text>
              <ArrowDownIcon/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.option}>
              <Text style={styles.optionText}>Login</Text>
              <ArrowDownIcon/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.option}>
              <Text style={styles.optionText}>Login</Text>
              <ArrowDownIcon/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.option}>
              <Text style={styles.optionText}>Login</Text>
              <ArrowDownIcon/>
            </TouchableOpacity>
          </ScrollView>
          <ScrollView showsVerticalScrollIndicator={false} style={{alignSelf:"center", width:width, marginBottom:300}}>
            <FlatList
            data={listData}
            showsVerticalScrollIndicator={false}
            renderItem={({item})=>(
              <>
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
                <TouchableOpacity activeOpacity={0.8} onPress={()=>{
                  modalHandler(item?.heading)
                }}>
                  <ArrowDownIcon1/>
                </TouchableOpacity>
              </View>
              {/* {(modal) && <Animated.View style={[styles.view4, {height:400}]}>
                <View style={styles.view5}>
                  <View style={{flexDirection:"row", alignItems:"center"}}>
                    <GlobeIcon/>
                    <Text style={[styles.boxText2, {fontSize:FontSizes.large, marginLeft:20}]}>www.netflix.com</Text>
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
              </Animated.View>} */}
            </>
            )}
            />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
