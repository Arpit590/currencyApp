import {Text, View, TextInput, TouchableOpacity, Modal} from 'react-native';
import React from 'react';
import styles from './styles';
import {FontFamily, FontSizes, ThemeColors} from '../../../theme';
import PrimaryButton from '../../../Atoms/PrimaryButton';
import SecondaryButton from '../../../Atoms/SecondaryButton';
import {useState} from 'react';
import ModalView from '../../../Atoms/ModalView';
import LockIcon from '../../../assets/Lock.svg';
import ResetIcon from '../../../assets/Reset.svg';
import SupportIcon from '../../../assets/Support.svg';
import {useNavigation} from '@react-navigation/native';

const CreatePin = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModal1, setOpenModal1] = useState(false);
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const pinHandler = () => {
    navigation.navigate('Ready');
  };

  return (
    <View style={styles.screen}>
      <View style={styles.view}>
        <Text style={styles.heading}>Create Pin</Text>
        <View style={styles.box}>
          <View style={styles.view1}>
            <Text style={styles.text}>Master Password</Text>
            <TextInput
              placeholder="Master Password"
              placeholderTextColor="#BBBAB3"
              secureTextEntry={true}
              style={styles.input}
              value={password}
              onChangeText={text => setPassword(text)}
            />
          </View>
          <View style={styles.view1}>
            <Text style={styles.text}>Confirm Master Password</Text>
            <TextInput
              placeholder="Confirm Master Password"
              placeholderTextColor="#BBBAB3"
              secureTextEntry={true}
              style={styles.input}
              value={confirmPassword}
              onChangeText={text => setConfirmPassword(text)}
            />
          </View>
        </View>
      </View>
      <View style={styles.view2}>
        <PrimaryButton title="Continue" buttonHandler={pinHandler} />
        <TouchableOpacity
          onPress={() => setOpenModal(true)}
          activeOpacity={0.8}>
          <Text style={styles.help}>Need Help ?</Text>
        </TouchableOpacity>
      </View>
      <ModalView openModal={openModal} onClose={() => setOpenModal(false)}>
        <View style={styles.modal}>
          <Text style={[styles.help, {color: '#BBBAB3', textAlign: 'left'}]}>
            Need Help ?
          </Text>
          <View style={{marginTop: 30}}>
            <TouchableOpacity
              onPress={() => {
                setOpenModal(false);
              }}
              activeOpacity={0.8}
              style={styles.container}>
              <LockIcon />
              <Text style={styles.containerText}>Forgot Master Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setOpenModal(false);
              }}
              activeOpacity={0.8}
              style={styles.container}>
              <SupportIcon />
              <Text style={styles.containerText}>Support</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setOpenModal(false);
              }}
              activeOpacity={0.8}
              style={styles.container}>
              <ResetIcon />
              <Text style={[styles.containerText, {marginLeft: 15}]}>
                Reset
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ModalView>
      <ModalView openModal={openModal1} onClose={() => setOpenModal1(false)}>
        <View style={styles.modal}>
          <View style={{marginTop: 20}}></View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setOpenModal1(false)}
            style={styles.cancel}>
            <Text style={styles.headingText}>Use Password</Text>
          </TouchableOpacity>
        </View>
      </ModalView>
    </View>
  );
};

export default CreatePin;
