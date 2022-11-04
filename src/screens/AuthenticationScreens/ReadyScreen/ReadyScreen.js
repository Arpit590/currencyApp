import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import FingerPrintIcon from '../../../assets/FingerPrintIcon.svg';
import PrimaryButton from '../../../Atoms/PrimaryButton';
import SecondaryButton from '../../../Atoms/SecondaryButton';
import {useState} from 'react';
import ModalView from '../../../Atoms/ModalView';

const ReadyScreen = () => {
  const [openModal, setOpenModal] = useState(false);

  const fingerPrintHandler = () => {
    setOpenModal(true);
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
          title="Add your Fingerprint"
          buttonHandler={fingerPrintHandler}
        />
        <Text style={{marginBottom: 0}}></Text>
        <SecondaryButton title="Skip for now" buttonHandler={() => {}} />
      </View>
      <ModalView openModal={openModal} onClose={() => setOpenModal(false)}>
        <View style={styles.modal}>
          <Text style={styles.heading}>Confirm FingerPrint</Text>
          <View style={{marginTop: 20}}></View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setOpenModal(false)}
            style={styles.cancel}>
            <Text style={styles.heading}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </ModalView>
    </View>
  );
};

export default ReadyScreen;
