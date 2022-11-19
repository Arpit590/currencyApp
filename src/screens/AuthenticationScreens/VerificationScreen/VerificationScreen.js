import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import styles from './styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import PrimaryButton from '../../../Atoms/PrimaryButton';
import ModalView from '../../../Atoms/ModalView';
import LockIcon from '../../../assets/Lock.svg';
import ResetIcon from '../../../assets/Reset.svg';
import SupportIcon from '../../../assets/Support.svg';

const VerificationScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [otp1, setOtp1] = useState('');
  const [otp2, setOtp2] = useState('');
  const [otp3, setOtp3] = useState('');
  const [otp4, setOtp4] = useState('');
  const [otp5, setOtp5] = useState('');
  const [otp6, setOtp6] = useState('');
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);
  const inputRef5 = useRef(null);
  const inputRef6 = useRef(null);
  const [openModal, setOpenModal] = useState(false);

  const verificationHandler = () => {
    console.log(`${otp1}${otp2}${otp3}${otp4}${otp5}${otp6}`);
    navigation.navigate('Seed', {email: route?.params?.email});
  };

  return (
    <View style={styles.screen}>
      <View style={styles.view}>
        <Text style={styles.heading}>Verification</Text>
        <Text style={styles.text}>
          An email with a verification link and code has been sent to{' '}
          {route?.params?.email}
        </Text>
        <View style={styles.view1}>
          <Text style={styles.text1}>Verification Code</Text>
          <View style={styles.otpBox}>
            <TextInput
              style={styles.otp}
              maxLength={1}
              value={otp1}
              ref={inputRef1}
              keyboardType="decimal-pad"
              onChangeText={text => {
                setOtp1(text);
                if (otp1 === '') {
                  inputRef2.current.focus();
                } else {
                  inputRef1.current.focus();
                }
              }}
            />
            <TextInput
              style={styles.otp}
              maxLength={1}
              value={otp2}
              ref={inputRef2}
              keyboardType="decimal-pad"
              onChangeText={text => {
                setOtp2(text);
                if (otp2 === '') {
                  inputRef3.current.focus();
                } else {
                  inputRef2.current.focus();
                }
              }}
            />
            <TextInput
              style={styles.otp}
              maxLength={1}
              value={otp3}
              ref={inputRef3}
              autoFocus={otp2 !== '' ? true : false}
              keyboardType="decimal-pad"
              onChangeText={text => {
                setOtp3(text);
                if (otp3 === '') {
                  inputRef4.current.focus();
                } else {
                  inputRef3.current.focus();
                }
              }}
            />
            <TextInput
              style={styles.otp}
              maxLength={1}
              value={otp4}
              ref={inputRef4}
              autoFocus={otp3 !== '' ? true : false}
              keyboardType="decimal-pad"
              onChangeText={text => {
                setOtp4(text);
                if (otp4 === '') {
                  inputRef5.current.focus();
                } else {
                  inputRef4.current.focus();
                }
              }}
            />
            <TextInput
              style={styles.otp}
              maxLength={1}
              value={otp5}
              ref={inputRef5}
              autoFocus={otp4 !== '' ? true : false}
              keyboardType="decimal-pad"
              onChangeText={text => {
                setOtp5(text);
                if (otp5 === '') {
                  inputRef6.current.focus();
                } else {
                  inputRef5.current.focus();
                }
              }}
            />
            <TextInput
              style={styles.otp}
              maxLength={1}
              value={otp6}
              ref={inputRef6}
              autoFocus={otp5 !== '' ? true : false}
              keyboardType="decimal-pad"
              onChangeText={text => setOtp6(text)}
            />
          </View>
          <TouchableOpacity activeOpacity={0.8} style={styles.resend}>
            <Text style={styles.resendText}>Resend Code</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.view2}>
        <PrimaryButton title="Verify" buttonHandler={verificationHandler} />
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
    </View>
  );
};

export default VerificationScreen;
