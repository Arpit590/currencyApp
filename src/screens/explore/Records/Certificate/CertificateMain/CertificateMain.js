import React from 'react';
import {View, Text, TextInput, ScrollView, TouchableOpacity, Image, Dimensions, FlatList, Animated, Modal} from 'react-native';
import { FontSizes, ThemeColors } from '../../../../../theme/globalStyles';
import styles from './styles';
import SearchIcon from "../../../../../assets/Search.svg";
import CertificateIcon from "../../../../../assets/Certificate.svg"
import InvoiceIcon from "../../../../../assets/Invoice.svg"
import ArrowRightIcon from '../../../../../assets/ArrowRight.svg';
import BackIcon from "../../../../../assets/Back.svg"; 
import PlusIcon from "../../../../../assets/PlusNew.svg";

import { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

const {width} = Dimensions.get("window");


const CertificateMain = () => {

  const navigation = useNavigation();
  const route = useRoute();


  return (
    <View style={styles.screen}>
      <View style={styles.viewContainer}>
        <View style={styles.view}>
            <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.goBack()}>
                <BackIcon/>
            </TouchableOpacity>
            <Text style={styles.heading}>{route?.params?.certificate===true ? "Certificate" : "Invoice"}</Text>
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
                    {(route?.params?.certificate===true) ?
                    <CertificateIcon/>
                    :
                    <InvoiceIcon/>
                    }
                </View>
                {(route?.params?.certificate===true)
                ?
                <View style={{}}>
                    <Text style={styles.contentText}>12th Certificate</Text>
                </View>
                :
                <View style={{}}>
                    <Text style={styles.contentText}>Satrujit Behera</Text>
                    <Text style={[styles.contentText, {color:"#94928C", fontSize:FontSizes.normal, marginTop:3}]}>12/03/2022</Text>
                </View>
                }
              </View>
              <TouchableOpacity activeOpacity={0.8} onPress={()=>{
                if(route?.params?.certificate===true){
                    navigation.navigate("CertificateEdit", {"save": false, "certificate": true})
                }else{
                    navigation.navigate("CertificateEdit", {"save": false, "certificate": false})
                }
                }} style={{alignSelf:"center"}}>
                <ArrowRightIcon/>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <TouchableOpacity 
        activeOpacity={0.8}
        onPress={()=>{
            if(route?.params?.certificate===true){
                navigation.navigate("CertificateEdit", {"new": true, "certificate": true})
            }else{
                navigation.navigate("CertificateEdit", {"new": true, "certificate": false})
            }
        }}
        style={styles.primaryButton}>
          <PlusIcon/>
        </TouchableOpacity>
    </View>
  );
};

export default CertificateMain;
