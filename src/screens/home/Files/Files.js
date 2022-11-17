import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import styles from './styles';
import CloseIcon from "../../../assets/Close.svg";
import { useNavigation } from '@react-navigation/native';
import AddIcon from "../../../assets/Add.svg";
import IdentityIcon from '../../../assets/Id.svg';
import TaxIcon from "../../../assets/Tax.svg";
import DLIcon from "../../../assets/DL.svg";
import DocumentIcon from "../../../assets/Document.svg";
import AudioIcon from "../../../assets/Audio.svg";
import ImageIcon from "../../../assets/ImageIcon.svg";

const Files = () => {

    const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <View style={styles.view}>
        <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.goBack()}>
            <CloseIcon/>
        </TouchableOpacity>
        <Text style={styles.heading}>Files</Text>
        <View></View>
      </View>
      <View style={styles.view1}>
        <View style={styles.modal}>
            <View style={styles.modalContent}>
                <View style={styles.logo}>
                    <AudioIcon/>
                </View>
                <Text style={styles.text}>Audio</Text>
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
                    <ImageIcon/>
                </View>
                <Text style={styles.text}>Image</Text>
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
                    <DocumentIcon/>
                </View>
                <Text style={styles.text}>Document</Text>
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

export default Files
