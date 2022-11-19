import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import FingerPrintIcon from '../../../assets/FingerPrintIcon.svg';
import PrimaryButton from '../../../Atoms/PrimaryButton';
import SecondaryButton from '../../../Atoms/SecondaryButton';
import {useState} from 'react';
import ModalView from '../../../Atoms/ModalView';
import {useNavigation} from '@react-navigation/native';

const ReadyScreen = () => {
  const navigation = useNavigation();

  const homeHandler = () => {
    navigation.navigate("Navigation");
  };

  return (
    <View style={styles.screen}>
      <View style={styles.view}>
        <FingerPrintIcon />
        <View style={styles.container}>
          <Text style={styles.text}>Your vault is ready...</Text>
          <Text style={styles.text1}>
            Store the info that feeds your online life.
          </Text>
        </View>
      </View>
      <View style={styles.view2}>
        <PrimaryButton
          title="Go to Home"
          buttonHandler={homeHandler}
        />
      </View>
    </View>
  );
};

export default ReadyScreen;
