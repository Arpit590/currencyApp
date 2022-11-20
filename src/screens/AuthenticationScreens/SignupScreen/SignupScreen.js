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

const SignupScreen = () => {
  const [login, setLogin] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openModal1, setOpenModal1] = useState(false);
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const loginHandler = () => {
    setLogin(true);
  };

  const signupHandler = () => {
    setLogin(false);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.view}>
        <Text style={styles.heading}>
          {login ? 'Welcome Back !' : 'Let’s get started !'}
        </Text>
        <View style={styles.box}>
          <View style={styles.view1}>
            <Text style={styles.text}>Email Address</Text>
            <TextInput
              placeholder="Email Address"
              placeholderTextColor="#BBBAB3"
              keyboardType="email-address"
              style={styles.input}
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </View>
          {/* <View style={styles.view1}>
            <Text style={styles.text}>Master Password</Text>
            <TextInput
              placeholder="Master Password"
              placeholderTextColor="#BBBAB3"
              secureTextEntry={true}
              style={styles.input}
              value={password}
              onChangeText={text => setPassword(text)}
            />
            {!login && (
              <Text style={styles.info}>
                The only password you need to remember
              </Text>
            )}
          </View>
          {!login && (
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
          )} */}
        </View>
      </View>
      <View style={styles.view2}>
        <Text
          style={[
            styles.info,
            {fontSize: FontSizes.normal, maxWidth: 350, marginBottom: 20},
          ]}
          numberOfLines={2}>
          By using hushkey, you agree to its{' '}
          <Text
            style={{
              color: ThemeColors.textPrimary,
              fontFamily: FontFamily.secondaryBold,
            }}>
            terms of use.
          </Text>
        </Text>
        <PrimaryButton
          title={login ? 'Login' : 'Create My Account'}
          buttonHandler={() => {
            if (login) {
              setOpenModal1(true);
            } else {
              navigation.navigate('Verification', {email: email});
              setOpenModal1(false);
            }
          }}
        />
        <View style={{marginTop: 15}}>
          <SecondaryButton
            title={login ? 'Create My Account' : 'Login'}
            buttonHandler={login ? signupHandler : loginHandler}
          />
        </View>
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

export default SignupScreen;
