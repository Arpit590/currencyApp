import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import FingerPrintIcon from '../../../assets/AddFinger.svg';
import PrimaryButton from '../../../Atoms/PrimaryButton';
import SecondaryButton from '../../../Atoms/SecondaryButton';
import {useState} from 'react';
import ModalView from '../../../Atoms/ModalView';
import {useNavigation} from '@react-navigation/native';

const AddFingerPrint = () => {
  const navigation = useNavigation();

  const fingerPrintHandler = () => {
    navigation.navigate("CreatePin");
  };

  return (
    <View style={styles.screen}>
        <Text style={styles.text}>Add FingerPrint</Text>
      <View style={styles.view}>
        <FingerPrintIcon/>
        <Text style={styles.desc}>Touch the finger print sensor</Text>
      </View>
      <View style={styles.view2}>
        <PrimaryButton
          title="Add Pin"
          buttonHandler={fingerPrintHandler}
        />
      </View>
    </View>
  );
};

export default AddFingerPrint;
