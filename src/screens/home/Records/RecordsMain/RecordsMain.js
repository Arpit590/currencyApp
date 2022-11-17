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

const RecordsMain = () => {

    const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <View style={styles.view}>
        <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.goBack()}>
            <CloseIcon/>
        </TouchableOpacity>
        <Text style={styles.heading}>Records</Text>
        <View></View>
      </View>
      <View style={styles.view1}>
        <View style={styles.modal}>
            <View style={styles.modalContent}>
                <View style={styles.logo}>
                    <IdentityIcon/>
                </View>
                <Text style={styles.text}>Medical Reports</Text>
            </View>
            <TouchableOpacity 
            onPress={()=>navigation.navigate("Medical Reports")}
            activeOpacity={0.8}>
                <AddIcon/>
            </TouchableOpacity>
        </View>
        <View style={styles.modal}>
            <View style={styles.modalContent}>
                <View style={styles.logo}>
                    <TaxIcon/>
                </View>
                <Text style={styles.text}>Insurance</Text>
            </View>
            <TouchableOpacity
            onPress={()=>navigation.navigate("Insurance")}
            activeOpacity={0.8}>
                <AddIcon/>
            </TouchableOpacity>
        </View>
        <View style={styles.modal}>
            <View style={styles.modalContent}>
                <View style={styles.logo}>
                    <PassportIcon/>
                </View>
                <Text style={styles.text}>Certificate</Text>
            </View>
            <TouchableOpacity 
            onPress={()=>navigation.navigate("Certificate")}
            activeOpacity={0.8}>
                <AddIcon/>
            </TouchableOpacity>
        </View>
        <View style={styles.modal}>
            <View style={styles.modalContent}>
                <View style={styles.logo}>
                    <DLIcon/>
                </View>
                <Text style={styles.text}>Invoice</Text>
            </View>
            <TouchableOpacity
            onPress={()=>navigation.navigate("Invoice")}
            activeOpacity={0.8}>
                <AddIcon/>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default RecordsMain
