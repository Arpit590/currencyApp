import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import styles from './styles';
import CloseIcon from "../../../../assets/Close.svg";
import { useNavigation } from '@react-navigation/native';
import AddIcon from "../../../../assets/Add.svg";
import WRIcon from "../../../../assets/WR.svg";
import FAIcon from "../../../../assets/2FA.svg";
import PasswordsIcon from "../../../../assets/Passwords.svg";

const LoginsMain = () => {

    const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <View style={styles.view}>
        <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.goBack()}>
            <CloseIcon/>
        </TouchableOpacity>
        <Text style={styles.heading}>Logins</Text>
        <View></View>
      </View>
      <View style={styles.view1}>
        <View style={styles.modal}>
            <View style={styles.modalContent}>
                <View style={styles.logo}>
                    <PasswordsIcon/>
                </View>
                <Text style={styles.text}>Passwords</Text>
            </View>
            <TouchableOpacity 
            onPress={()=>navigation.navigate("PasswordsEdit", {"new": true})}
            activeOpacity={0.8}>
                <AddIcon/>
            </TouchableOpacity>
        </View>
        <View style={styles.modal}>
            <View style={styles.modalContent}>
                <View style={styles.logo}>
                    <FAIcon/>
                </View>
                <Text style={styles.text}>2 FAs</Text>
            </View>
            <TouchableOpacity
            onPress={()=>navigation.navigate("Tax")}
            activeOpacity={0.8}>
                <AddIcon/>
            </TouchableOpacity>
        </View>
        <View style={styles.modal}>
            <View style={styles.modalContent}>
                <View style={styles.logo}>
                    <WRIcon/>
                </View>
                <Text style={styles.text}>Wifi Routers</Text>
            </View>
            <TouchableOpacity 
            onPress={()=>navigation.navigate("Passport")}
            activeOpacity={0.8}>
                <AddIcon/>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default LoginsMain
