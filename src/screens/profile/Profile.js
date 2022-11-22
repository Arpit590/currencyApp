import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import { FontSizes, ThemeColors } from '../../theme/globalStyles';
import styles from './styles';
import UserIcon from "../../assets/UserIcon1.svg";
import ArrowRightIcon from "../../assets/ArrowRightIcon1.svg";
import GoogleIcon from "../../assets/GoogleIcon.svg";
import MacbookIcon from "../../assets/Compass.svg";
import PINIcon from "../../assets/PIN.svg";
import PasswordIcon from "../../assets/PasswordIcon.svg";
import FaceIcon from "../../assets/Face.svg";
import LanguageIcon from "../../assets/Language.svg";
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <View style={styles.view}>
        <Text style={styles.heading}>Profile</Text>
        <View style={styles.view2}>
          <View style={styles.container}>
            <View style={styles.container1}>
              <Text style={styles.container1Text}>Username</Text>
              <Text style={[styles.container1Text, {color:ThemeColors.textPrimary, fontSize:FontSizes.large}]}>Satrujit Behera</Text>
            </View>
            <TouchableOpacity 
            style={styles.button}
            activeOpacity={0.8}>
              <Text style={[styles.container1Text, {color:"white"}]}>FREE USER</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.user}>
            <UserIcon/>
          </View>
        </View>
        <View style={styles.container2}>
          <Text style={[styles.container1Text, {color:ThemeColors.textPrimary, maxWidth:300}]}>Upgrade Your account to Premium to enjoy additional features</Text>
          <TouchableOpacity activeOpacity={0.8}>
            <ArrowRightIcon/>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:50}}>
      <View style={styles.view3}>
        <Text style={styles.view3Heading}>Active Devices</Text>
        <View style={styles.view4}>
          <View style={styles.icon}>
            <GoogleIcon/>
            <Text style={[styles.container1Text, {marginTop:4, marginBottom:2, color:ThemeColors.textPrimary}]}>Google Chrome</Text>
            <Text style={[styles.container1Text, { color:ThemeColors.textPrimary}]}>(Linux)</Text>
          </View>
          <View style={styles.icon}>
            <GoogleIcon/>
            <Text style={[styles.container1Text, {marginTop:4, marginBottom:2, color:ThemeColors.textPrimary}]}>App</Text>
            <Text style={[styles.container1Text, { color:ThemeColors.textPrimary}]}>(Android)</Text>
          </View>
          <View style={styles.icon}>
            <MacbookIcon/>
            <Text style={[styles.container1Text, {marginTop:4, marginBottom:2, color:ThemeColors.textPrimary}]}>Safari</Text>
            <Text style={[styles.container1Text, { color:ThemeColors.textPrimary}]}>(Macbook Pro)</Text>
          </View>
        </View>
      </View>
      <View style={[styles.view3, {marginTop:-20}]}>
        <Text style={styles.view3Heading}>Additional Settings</Text>
        <View style={styles.view5}>
          <TouchableOpacity activeOpacity={0.8}
          onPress={()=>navigation.navigate("ChangePasswordScreen")}
          style={styles.view6}>
            <View style={styles.content}>
                <View style={styles.logo}>
                  <PasswordIcon/>
                </View>
                <View style={{}}>
                    <Text style={styles.contentText}>Change Master Password</Text>
                </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={()=>navigation.navigate("Face")}
          activeOpacity={0.8} style={styles.view6}>
            <View style={styles.content}>
                <View style={styles.logo}>
                  <FaceIcon/>
                </View>
                <View style={{}}>
                    <Text style={styles.contentText}>Unlock with Face ID</Text>
                </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>navigation.navigate("AddPIN")}
          activeOpacity={0.8} style={styles.view6}>
            <View style={styles.content}>
                <View style={styles.logo}>
                  <LanguageIcon/>
                </View>
                <View style={{}}>
                    <Text style={styles.contentText}>Unlock with PIN</Text>
                </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={()=>navigation.navigate("Language")}
          activeOpacity={0.8} style={styles.view6}>
            <View style={styles.content}>
                <View style={styles.logo}>
                  <PINIcon/>
                </View>
                <View style={{}}>
                    <Text style={styles.contentText}>Language</Text>
                </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
