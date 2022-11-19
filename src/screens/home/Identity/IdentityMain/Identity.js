import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import styles from './styles';
import CloseIcon from "../../../../assets/Close.svg";
import { useNavigation } from '@react-navigation/native';
import AddIcon from "../../../../assets/Add.svg";
import IdentityIcon from '../../../../assets/Id.svg';
import TaxIcon from "../../../../assets/Tax.svg";
import DLIcon from "../../../../assets/DL.svg";
import PassportIcon from "../../../../assets/Passport.svg";
import MemberIcon from "../../../../assets/Member.svg";
import TourIcon from "../../../../assets/Tour.svg";

const Identity = () => {

    const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <View style={styles.view}>
        <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.goBack()}>
            <CloseIcon/>
        </TouchableOpacity>
        <Text style={styles.heading}>Identity</Text>
        <View></View>
      </View>
      <View style={styles.view1}>
        <View style={styles.modal}>
            <View style={styles.modalContent}>
                <View style={styles.logo}>
                    <IdentityIcon/>
                </View>
                <Text style={styles.text}>ID Cards</Text>
            </View>
            <TouchableOpacity 
            onPress={()=>navigation.navigate("Identity Details")}
            activeOpacity={0.8}>
                <AddIcon/>
            </TouchableOpacity>
        </View>
        <View style={styles.modal}>
            <View style={styles.modalContent}>
                <View style={styles.logo}>
                    <TaxIcon/>
                </View>
                <Text style={styles.text}>Tax</Text>
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
                    <PassportIcon/>
                </View>
                <Text style={styles.text}>Passport</Text>
            </View>
            <TouchableOpacity 
            onPress={()=>navigation.navigate("Passport")}
            activeOpacity={0.8}>
                <AddIcon/>
            </TouchableOpacity>
        </View>
        <View style={styles.modal}>
            <View style={styles.modalContent}>
                <View style={styles.logo}>
                    <DLIcon/>
                </View>
                <Text style={styles.text}>Driving License</Text>
            </View>
            <TouchableOpacity
            onPress={()=>navigation.navigate("DL")}
            activeOpacity={0.8}>
                <AddIcon/>
            </TouchableOpacity>
        </View>
        <View style={styles.modal}>
            <View style={styles.modalContent}>
                <View style={styles.logo}>
                    <TourIcon/>
                </View>
                <Text style={styles.text}>Tour Visa</Text>
            </View>
            <TouchableOpacity
            onPress={()=>navigation.navigate("Tour")}
            activeOpacity={0.8}>
                <AddIcon/>
            </TouchableOpacity>
        </View>
        <View style={styles.modal}>
            <View style={styles.modalContent}>
                <View style={styles.logo}>
                    <MemberIcon/>
                </View>
                <Text style={styles.text}>Membership</Text>
            </View>
            <TouchableOpacity
            onPress={()=>navigation.navigate("Membership")}
            activeOpacity={0.8}>
                <AddIcon/>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Identity
